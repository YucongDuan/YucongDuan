import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
const root=path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const s=JSON.parse(read('research/PORTFOLIO_SNAPSHOT.json')),rs=s.repositories;
assert.equal(rs.length,s.repository_count);
assert.equal(new Set(rs.map(r=>r.id)).size,rs.length);
assert.equal(new Set(rs.map(r=>r.name)).size,rs.length);
assert.equal(s.categories.reduce((n,c)=>n+c.count,0),rs.length);
for(const c of s.categories)assert.equal(rs.filter(r=>r.category===c.id).length,c.count);
for(const [format,count] of Object.entries(s.format_counts))assert.equal(rs.filter(r=>r.format===format).length,count);
for(const r of rs){assert.equal(r.tree_truncated,false);assert.ok(fs.existsSync(path.join(root,r.detail_path)));assert.ok(r.readme_path);}
const locales=['','zh-CN','es','fr','ar','ja','hi','it','de','el','ko','cs','vi'];
for(const locale of locales){const p=locale?'README.'+locale+'.md':'README.md',t=read(p);assert.ok(t.includes(String(rs.length)),p+' count');assert.ok(t.includes('PROJECT_FINDER'),p+' project route');}
const paths=[];
function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){if(e.name==='.git'||e.name==='archive')continue;const p=path.join(dir,e.name);if(e.isDirectory())walk(p);else if(e.name.endsWith('.md'))paths.push(p);}}
walk(root);
const broken=[];
for(const p of paths){
 const rel=path.relative(root,p);
 if(!(rel.startsWith('projects/')||rel.startsWith('directory/')||/^(README|PROJECT_FINDER|CURRENT_STATUS\.|START_HERE|COLLABORATE|PROFILE_REFRESH_2026-09-18|PORTFOLIO_MAINTENANCE)/.test(rel)||rel.startsWith('catalog/README')))continue;
 const t=fs.readFileSync(p,'utf8');
 for(const match of t.matchAll(/\]\(([^\s)]+)\)/g)){
  const href=match[1];if(/^(?:[a-z]+:|#|\/\/)/i.test(href))continue;
  const target=decodeURIComponent(href.split(/[?#]/)[0]);
  if(target&&!fs.existsSync(path.resolve(path.dirname(p),target)))broken.push(rel+' -> '+href);
 }
}
assert.deepEqual(broken,[]);
const html=read('catalog/index.html');
const data=JSON.parse(html.match(/<script type="application\/json" id="inventory">([\s\S]*?)<\/script>/)[1]);
assert.deepEqual(data.repositories.map(r=>r.name),rs.map(r=>r.name));
for(const match of html.matchAll(/<script>([\s\S]*?)<\/script>/g))new vm.Script(match[1]);
const verification=JSON.parse(read('research/FEATURED_VERIFICATION.json'));
assert.equal(verification.projects.filter(r=>r.workflow?.conclusion==='success').length,9);
assert.equal(verification.projects.length,11);
console.log(JSON.stringify({repositories:rs.length,categories:s.categories.length,languages:locales.length,markdown_files:paths.length,broken_local_links:broken.length,search_records:data.repositories.length,verified_project_workflows:9}));
