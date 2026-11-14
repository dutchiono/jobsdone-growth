#!/usr/bin/env node
/**
 * Local-only portfolio inventory. Requires GitHub CLI (gh auth login).
 * Run: node scripts/audit-github.mjs
 * Outputs: .audit/private-repository-inventory.json and .audit/public-repository-inventory.csv
 * Never commit .audit: it may contain private repository names, paths and descriptions.
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const outDir = '.audit'; mkdirSync(outDir,{recursive:true});
function gh(...args){return execFileSync('gh',args,{encoding:'utf8',maxBuffer:50*1024*1024,stdio:['ignore','pipe','pipe']});}
function json(...args){return JSON.parse(gh(...args));}
function csv(v){return '"'+String(v??'').replaceAll('"','""')+'"';}
const pages=json('api','--paginate','--slurp','/user/repos?per_page=100&affiliation=owner,collaborator,organization_member');
const repos=pages.flat().filter(x=>!x.disabled);
const byName=new Map(repos.map(r=>[r.full_name,r]));
const all=[];
for(const r of byName.values()){
  const item={
    repository:r.full_name,
    private:r.private,
    fork:r.fork,
    archived:r.archived,
    default_branch:r.default_branch,
    updated_at:r.updated_at,
    pushed_at:r.pushed_at,
    size_kib:r.size,
    homepage:r.homepage||'',
    language:r.language||'',
    description:r.description||'',
    license:r.license?.spdx_id||'',
    has_issues:r.has_issues,
    source_review:'pending',
    build_review:'pending',
    deployment_review:'pending',
    provenance_review:'pending',
    disposition:'needs-investigation'
  };
  try{
    gh('api',`repos/${r.full_name}/readme`,'-H','Accept: application/vnd.github.raw+json');
    item.readme_status='found';
  } catch {item.readme_status='missing-or-inaccessible';}
  all.push(item);
}
all.sort((a,b)=>a.repository.localeCompare(b.repository));
writeFileSync(join(outDir,'private-repository-inventory.json'),JSON.stringify({generated_at:new Date().toISOString(),count:all.length,repositories:all},null,2));
const publicRows=all.filter(x=>!x.private);
const keys=['repository','fork','archived','default_branch','updated_at','pushed_at','size_kib','homepage','language','description','license','readme_status','source_review','build_review','deployment_review','provenance_review','disposition'];
writeFileSync(join(outDir,'public-repository-inventory.csv'),[keys.map(csv).join(','),...publicRows.map(x=>keys.map(k=>csv(x[k])).join(','))].join('\n')+'\n');
process.stdout.write(`Scanned ${all.length} accessible repos; ${publicRows.length} public, ${all.length-publicRows.length} private. Reports written only under ${outDir}.\n`);
