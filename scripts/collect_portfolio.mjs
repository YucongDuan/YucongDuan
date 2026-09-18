import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const root=path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const config=read('research/PORTFOLIO_REFRESH_CONFIG.json');
const previous=read('research/REPOSITORY_INVENTORY_2026-09-16.json');
const legacy=read('REPOSITORY_DIRECTORY.json');
const seeds=[...previous.repositories,...config.additional_repositories].sort((a,b)=>a.name.localeCompare(b.name));
assert.equal(seeds.length,config.repository_count);
assert.equal(new Set(seeds.map(r=>String(r.id))).size,seeds.length);
const old=new Map(legacy.repositories.map(r=>[r.name,r]));
const feature=new Map(config.features.map(f=>[f.name,f]));
const categories=previous.categories.map(c=>({...c,featured:c.featured.slice()}));
const byCategory=new Map(categories.map(c=>[c.id,c]));
const headers={Accept:'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28'};
if(process.env.GH_TOKEN)headers.Authorization='Bearer '+process.env.GH_TOKEN;
async function api(endpoint){
 const url='https://api.github.com/repos/YucongDuan/'+endpoint;
 for(let attempt=0;attempt<3;attempt++){
  const response=await fetch(url,{headers,signal:AbortSignal.timeout(45000)});
  if(response.ok)return response.json();
  if((response.status===429||response.status>=500)&&attempt<2){await new Promise(resolve=>setTimeout(resolve,2000*(attempt+1)));continue;}
  throw Error('GitHub HTTP '+response.status+' for '+endpoint);
 }
}
const results=new Array(seeds.length);
let cursor=0,done=0;
async function inspect(){
 for(;;){
  const i=cursor++;if(i>=seeds.length)return;
  const seed=seeds[i],repo=encodeURIComponent(seed.name);
  const metadata=await api(repo);
  assert.equal(String(metadata.id),String(seed.id),seed.name+' identity');
  assert.equal(metadata.private,false);
  const branch=metadata.default_branch;
  const tree=await api(repo+'/git/trees/'+encodeURIComponent(branch)+'?recursive=1');
  assert.equal(tree.truncated,false,seed.name+' complete tree required');
  const files=tree.tree.filter(f=>f.type==='blob').map(f=>f.path).sort((a,b)=>a.length-b.length||a.localeCompare(b));
  const source=files.filter(p=>/\.(py|js|mjs|cjs|ts|tsx|jsx|html?|css|go|rs|c|cc|cpp|h|hpp|java|sh|rb|php|jl|r)$/i.test(p));
  const archives=files.filter(p=>p.split('/').length<=2&&/\.(zip|tar|tgz|gz|7z)$/i.test(p));
  const readme=files.find(p=>/^README\.md$/i.test(p))||files.find(p=>/(^|\/)readme[^/]*\.(md|txt|rst)$/i.test(p));
  assert.ok(readme,seed.name+' needs an instruction entry');
  const workflow=files.filter(p=>/^\.github\/workflows\/[^/]+\.ya?ml$/.test(p));
  const prior=old.get(seed.name),f=feature.get(seed.name),category=byCategory.get(seed.category);
  assert.ok(category);
  if(f){assert.ok(files.includes(f.entry),seed.name+' featured entry');assert.ok(files.includes('GETTING_STARTED.md'),seed.name+' practical guide');}
  const description=f?.en||metadata.description||prior?.public_description||prior?.description||('Published research materials for '+seed.name+'. Read the project instructions for scope.');
  results[i]={id:String(metadata.id),name:metadata.name,url:metadata.html_url,description,description_zh:f?.zh||prior?.description_zh||null,description_source:f?'curated-from-project-instructions':metadata.description?'github-public-description':prior?'retained-directory-summary':'repository-title',
   category:category.id,category_en:category.en,category_zh:category.zh,default_branch:branch,language:metadata.language,license:metadata.license?.spdx_id||null,
   license_path:files.find(p=>/(^|\/)licen[cs]e(?:\.[^/]*)?$/i.test(p))||null,
   format:source.length?'source':archives.length?'archive':'documents',file_count:files.length,code_and_web_file_count:source.length,archives,readme_path:readme,
   guides:[readme,...files.filter(p=>p!==readme&&/(^|\/)(GETTING_STARTED|QUICKSTART|INSTALL|USAGE|REPRODUCIBILITY|ARCHITECTURE|README|CONTRIBUTING)/i.test(p))].slice(0,8),
   workflows:workflow,test_file_count:files.filter(p=>/(^|\/)(tests?\/|test[_-]|[^/]+[._-]test\.)/i.test(p)).length,topics:metadata.topics||[],
   tree_sha:tree.sha,tree_truncated:false,checked_on:config.checked_on,pushed_at:metadata.pushed_at,
   detail_path:'projects/'+metadata.id+'.md',featured:!!f,related:(prior?.related||[]).filter(r=>seeds.some(x=>x.name===r.name)).slice(0,3)};
  done++;if(done%50===0||done===seeds.length)console.log('Inspected '+done+'/'+seeds.length+' repositories');
 }
}
await Promise.all(Array.from({length:5},inspect));
for(const c of categories){c.count=results.filter(r=>r.category===c.id).length;const featuredInCategory=config.features.filter(f=>results.some(r=>r.name===f.name&&r.category===c.id)).map(f=>f.name);c.featured=[...new Set([...featuredInCategory,...c.featured])];}
const format_counts=Object.fromEntries(['source','archive','documents'].map(k=>[k,results.filter(r=>r.format===k).length]));
const verification=[];
for(const f of config.features){
 if(!f.workflow){verification.push({name:f.name,commit:f.commit,workflow:null});continue;}
 const run=await api(encodeURIComponent(f.name)+'/actions/runs/'+f.workflow.id);
 assert.equal(run.head_sha,f.commit,f.name+' workflow revision');
 assert.equal(run.conclusion,'success',f.name+' workflow result');
 verification.push({name:f.name,commit:f.commit,workflow:{id:run.id,name:run.name,status:run.status,conclusion:run.conclusion,url:run.html_url,created_at:run.created_at,updated_at:run.updated_at}});
}
const snapshot={schema_version:2,checked_on:config.checked_on,owner:'YucongDuan',repository_count:results.length,profile_language_count:13,format_counts,categories,
 scope:'Public repository identities, metadata and complete Git file trees inspected. Distribution labels describe files; execution results have independent revisions and dates.',repositories:results};
fs.writeFileSync(path.join(root,'research/PORTFOLIO_SNAPSHOT.json'),JSON.stringify(snapshot,null,2)+'\n');
fs.writeFileSync(path.join(root,'research/FEATURED_VERIFICATION.json'),JSON.stringify({checked_on:config.checked_on,projects:verification},null,2)+'\n');
console.log(JSON.stringify({repositories:results.length,formats:format_counts,featured_workflows:verification.filter(r=>r.workflow).length}));
