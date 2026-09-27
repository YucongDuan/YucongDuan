import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {renderPortfolio} from './render_portfolio.mjs';
import {renderExplorer} from './render_explorer.mjs';
const root=path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const s=JSON.parse(read('research/PORTFOLIO_SNAPSHOT.json')),config=JSON.parse(read('research/PORTFOLIO_REFRESH_CONFIG.json'));
const features=config.features,outputs=renderPortfolio(s,features),byName=new Map(s.repositories.map(r=>[r.name,r]));
outputs['catalog/index.html']=renderExplorer(s);
const locales=['','zh-CN','es','fr','ar','ja','hi','it','de','el','ko','cs','vi'];
const labels={es:'Elegir un proyecto',fr:'Choisir un projet',ar:'اختر مشروعًا',ja:'プロジェクトを選ぶ',hi:'परियोजना चुनें',it:'Scegli un progetto',de:'Ein Projekt auswählen',el:'Επιλέξτε έργο',ko:'프로젝트 선택',cs:'Vyberte projekt',vi:'Chọn dự án'};
const names=['NEPHROGENESIS-Lab','DIKWP-HepatoGenesis-Lab'];
const fresh=names.map(name=>features.find(f=>f.name===name));
function controlled(text,block){
 const section='<!-- PORTFOLIO-START -->\n'+block.trim()+'\n<!-- PORTFOLIO-END -->';
 if(text.includes('<!-- PORTFOLIO-START -->'))return text.replace(/<!-- PORTFOLIO-START -->[\s\S]*?<!-- PORTFOLIO-END -->/,section);
 const end=text.indexOf('\n\n');return text.slice(0,end)+'\n\n'+section+text.slice(end);
}
const enDate=new Date(s.checked_on+'T00:00:00Z').toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'});
const [year,month,day]=s.checked_on.split('-').map(Number);
const newLinks=fresh.map(f=>'['+f.title+']('+byName.get(f.name).detail_path+')').join(' · ');
for(const locale of locales){
 const p=locale?'README.'+locale+'.md':'README.md',zh=locale==='zh-CN',suffix=zh?'.zh-CN':'';
 let text=read(p).replace(/\b(?:487|489)\b/g,String(s.repository_count));
 text=text.replace(/Inventory checked \*\*[^*]+\*\*/,'Inventory checked **'+enDate+'**');
 text=text.replace(/2026 年 9 月 (?:16|18) 日/g,year+' 年 '+month+' 月 '+day+' 日').replace(/2026年9月(?:16|18)日/g,year+'年'+month+'月'+day+'日').replace(/2026-09-(?:16|18)/g,s.checked_on);
 let block;
 if(!locale||zh){
  const selected=[...fresh,features[0],features[1],features[4],features[8]];
  block=['## '+(zh?'从可体验、可比较的成果进入研究':'Start with a result you can inspect'),'',
   zh?'**新增两套图书科学实验室 · '+s.checked_on+'**：完整源码、英文手册、中文入口、版本下载与在线示例报告。':'**Two new book-science laboratories · '+s.checked_on+'**: complete source, English handbooks, Chinese entry guides, versioned downloads and online example reports.','',
   zh?'| 代表项目 | 可以探索什么 |':'| Project | What you can explore |','|---|---|',
   ...selected.map(f=>'| [**'+f.title+'**]('+byName.get(f.name).detail_path+') | '+f[zh?'zh':'en']+' |'),'',
   '['+(zh?'比较'+features.length+'个项目的操作路线':'Compare all '+features.length+' guided starting points')+'](PROJECT_FINDER'+suffix+'.md) · ['+(zh?'项目搜索、源码与下载':'Project search, source and downloads')+'](catalog/README'+suffix+'.md)','',
   zh?'每个项目都有独立详情页，提供用途、交付形式、许可、说明文件和验证入口。':'Every project has a detail page with its purpose, distribution format, license, instructions and verification links.'].join('\n');
 }else{
  block='**'+s.repository_count+' · '+s.categories.length+' · 13** · '+s.checked_on+'\n\n['+labels[locale]+'](PROJECT_FINDER.md) · [English directory](REPOSITORY_DIRECTORY.md) · [中文目录](REPOSITORY_DIRECTORY.zh-CN.md)\n\n'+newLinks;
 }
 outputs[p]=controlled(text,block).trimEnd()+'\n';
}
for(const zh of [false,true]){
 const suffix=zh?'.zh-CN':'';
 const start='START_HERE'+suffix+'.md';
 outputs[start]=controlled(read(start),zh?'## 先选择要完成的任务\n\n['+features.length+'个项目的操作路线](PROJECT_FINDER.zh-CN.md) · ['+s.repository_count+'个项目详情](REPOSITORY_DIRECTORY.zh-CN.md) · [项目搜索与下载](catalog/README.zh-CN.md)\n\n'+newLinks+'\n\n从图书实验室复现实验，从OpenStudio学习课程，从PACT检查意图与权限。':'## Choose the task you want to complete\n\n['+features.length+' practical project routes](PROJECT_FINDER.md) · ['+s.repository_count+' project details](REPOSITORY_DIRECTORY.md) · [Project search and downloads](catalog/README.md)\n\n'+newLinks+'\n\nStart with the organ-history labs for scientific experiments, OpenStudio for learning, or PACT for purpose and permission checks.').trimEnd()+'\n';
 outputs['CURRENT_STATUS'+suffix+'.md']=['# '+(zh?'开放研究版图：当前状态':'Current open research portfolio'),'','[English](CURRENT_STATUS.md) · [中文](CURRENT_STATUS.zh-CN.md) · [Profile](README'+suffix+'.md)','','**'+s.checked_on+' · '+s.repository_count+' repositories · '+s.categories.length+' research areas · 13 profile languages**','',newLinks,'',zh?'新增两个完整源码实验室，更新全部项目详情页、12类中英文目录、13语种主页入口、项目选择页和内置数据检索页。':'Two complete source laboratories are added. All project detail pages, 12 bilingual area directories, 13 profile-language routes, the project finder and embedded search catalog are updated.','',...Object.entries(s.format_counts).map(([k,v])=>'- '+k+': '+v),'',zh?'本轮核对完整公开仓库名单。原有项目的文件核对与测试记录保留原日期；新项目记录本次源文件树和提交级测试结果。':'The complete public repository list was checked for this refresh. Existing file inspections and test records retain their original dates; the new projects record their published source trees and commit-specific test results.','','[Publication record / 发布记录](PROFILE_REFRESH_2026-09-27.md) · [Directory](REPOSITORY_DIRECTORY'+suffix+'.md) · [Catalog](catalog/README'+suffix+'.md)','',zh?'SolutionForge原始完整源码导入仍按既有记录标为待完成。':'The earlier pending import of SolutionForge original source remains explicitly recorded.',''].join('\n');
}
const verification=JSON.parse(read('research/FEATURED_VERIFICATION.json'));
outputs['PROFILE_REFRESH_2026-09-27.md']=['# Book-science laboratories and portfolio refresh · 27 September 2026','',
 'Two complete source projects are added: NEPHROGENESIS-Lab and DIKWP-HepatoGenesis-Lab. The public portfolio now contains '+s.repository_count+' repositories.',
 '新增肾脏与肝脏图书科学实验室。现有公开仓库共'+s.repository_count+'个。','',
 'Updated pages: 13 profile language editions, '+s.repository_count+' project detail pages, 12 bilingual research-area directories, project finders, quick-start routes, current status and the searchable catalog. Historical reports remain historical.',
 'The complete public repository list was verified on '+s.checked_on+'. Earlier file-tree inspections retain their own dates; this refresh does not imply that every earlier project was re-executed.','',
 '| New repository | Source publication | Hosted workflow |','|---|---|---|',
 ...verification.projects.filter(r=>names.includes(r.name)).map(r=>'| ['+r.name+'](https://github.com/YucongDuan/'+r.name+') | ['+r.commit.slice(0,7)+'](https://github.com/YucongDuan/'+r.name+'/commit/'+r.commit+') | '+(r.workflow?'['+r.workflow.conclusion+']('+r.workflow.url+')':'See repository Actions for current result')+' |'),'',
 'Local publication checks: NEPHROGENESIS-Lab, 198 tests; HepatoGenesis Lab, 136 tests. Both rebuilt wheels passed their packaged entry checks. The original archive manifests were verified before publication edits.','',
 'Project pages serve precomputed example reports. Editable computations run through the documented local Python applications.','',
 '[Current status](CURRENT_STATUS.md) · [Full directory](REPOSITORY_DIRECTORY.md) · [Catalog](catalog/README.md) · [Inspection method](PORTFOLIO_MAINTENANCE.md) · [Workflow records](research/FEATURED_VERIFICATION.json)',''].join('\n');
outputs['CITATION.cff']='cff-version: 1.2.0\nmessage: "For individual studies or software, cite the corresponding repository and publication."\ntitle: "DIKWP Open Research Portfolio"\ntype: dataset\nauthors:\n  - family-names: Duan\n    given-names: Yucong\nversion: "'+s.checked_on.replaceAll('-','.')+'"\ndate-released: '+s.checked_on+'\nurl: "https://github.com/YucongDuan/YucongDuan"\n';
const write=process.argv.includes('--write'),changes=[];
for(const [name,content] of Object.entries(outputs)){
 const p=path.join(root,name);
 if(!fs.existsSync(p)||fs.readFileSync(p,'utf8')!==content){changes.push(name);if(write){fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,content);}}
}
console.log(JSON.stringify({generated_files:Object.keys(outputs).length,changed_files:changes.length,mode:write?'write':'check'}));
if(!write&&changes.length){console.error(changes.join('\n'));process.exitCode=1;}
