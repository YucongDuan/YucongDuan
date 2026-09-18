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
function controlled(text,block,anchor){
 const section='<!-- PORTFOLIO-START -->\n'+block.trim()+'\n<!-- PORTFOLIO-END -->';
 if(text.includes('<!-- PORTFOLIO-START -->'))return text.replace(/<!-- PORTFOLIO-START -->[\s\S]*?<!-- PORTFOLIO-END -->/,section);
 if(anchor&&text.includes(anchor))return text.replace(anchor,section+'\n\n'+anchor);
 const end=text.indexOf('\n\n');return text.slice(0,end)+'\n\n'+section+text.slice(end);
}
for(const locale of locales){
 const p=locale?'README.'+locale+'.md':'README.md',zh=locale==='zh-CN',suffix=zh?'.zh-CN':'';
 let text=read(p).replace(/\b487\b/g,String(s.repository_count)).replaceAll('16 September 2026','18 September 2026').replaceAll('2026 年 9 月 16 日','2026 年 9 月 18 日').replaceAll('2026年9月16日','2026年9月18日').replaceAll('2026-09-16','2026-09-18');
 if(!locale||zh){
  text=text.replace(/## Build with the portfolio[\s\S]*?(?=## Choose your route)/,'').replace(/## 从代表系统进入 \d+ 项开放研究[\s\S]*?(?=## 为不同读者准备的入口)/,'');
  text=text.replace('[Run a first experiment](START_HERE.md)','[Find a project](PROJECT_FINDER.md)').replace('[体验开放系统](START_HERE.zh-CN.md)','[选择适合你的项目](PROJECT_FINDER.zh-CN.md)');
  const selected=[features[0],features[1],features[2],features[4],features[5],features[8]];
  const block=['## '+(zh?'从可体验、可比较的成果进入研究':'Start with a result you can inspect'),'',
   zh?'| 代表项目 | 可以探索什么 |':'| Project | What you can explore |','|---|---|',
   ...selected.map(f=>'| [**'+f.title+'**]('+byName.get(f.name).detail_path+') | '+f[zh?'zh':'en']+' |'),'',
   '['+(zh?'比较11个项目的操作路线':'Compare all 11 guided starting points')+'](PROJECT_FINDER'+suffix+'.md) · ['+(zh?'离线搜索、源码与下载':'Offline search, source and downloads')+'](catalog/README'+suffix+'.md)','',
   zh?'每个项目都有独立详情页，提供用途、交付形式、许可元数据、说明文件和验证入口。以压缩包分发的项目直接链接到具名交付包。':'Every project has a detail page with its purpose, distribution format, license metadata, instructions and verification links. Archive releases link directly to their named delivery packages.'
  ].join('\n');
  text=controlled(text,block,zh?'## 原创研究正在连接国际标准、产业技术与学术前沿':'## A research programme with a growing international footprint');
 }else{
  text=controlled(text,'**'+s.repository_count+' · 12 · 13** · '+s.checked_on+'\n\n['+labels[locale]+'](PROJECT_FINDER.md) · [English directory](REPOSITORY_DIRECTORY.md) · [中文目录](REPOSITORY_DIRECTORY.zh-CN.md)');
 }
 outputs[p]=text.trimEnd()+'\n';
}
for(const zh of [false,true]){
 const suffix=zh?'.zh-CN':'';
 const start='START_HERE'+suffix+'.md';
 outputs[start]=controlled(read(start),zh?'## 先选择要完成的任务\n\n[11个项目的操作路线](PROJECT_FINDER.zh-CN.md) · [489个项目详情](REPOSITORY_DIRECTORY.zh-CN.md) · [离线搜索与下载](catalog/README.zh-CN.md)\n\n教学与课程从OpenStudio进入；意图和权限实验从PACT进入；语义路径比较从MESH²进入。每个操作导读均链接实际入口文件。':'## Choose the task you want to complete\n\n[11 practical project routes](PROJECT_FINDER.md) · [489 project details](REPOSITORY_DIRECTORY.md) · [Offline search and downloads](catalog/README.md)\n\nStart with OpenStudio for teaching, PACT for purpose and permission experiments, or MESH² for semantic-route comparisons. Each walkthrough links the actual entry files.').trimEnd()+'\n';
 const collaborate='COLLABORATE'+suffix+'.md';
 outputs[collaborate]=controlled(read(collaborate),zh?'## 用一页书面材料定义试点\n\n| 需要明确什么 | 建议内容 |\n|---|---|\n| 研究问题 | 选择一个项目，说明要解决的具体问题。 |\n| 输入与范围 | 数据来源、使用权限、样本边界和源码版本。 |\n| 交付物 | 可检查的实验、最小反例、课程单元或技术报告。 |\n| 验收方式 | 比较基线、预期结果和失败条件。 |\n| 书面推进 | 责任人、时间点、许可与后续审阅安排。 |\n\n[选择项目](PROJECT_FINDER.zh-CN.md) · [产业研究联系](INDUSTRY_CONNECTIONS.zh-CN.md)':'## Define a pilot in one written page\n\n| Define | Suggested content |\n|---|---|\n| Research question | Choose one project and the concrete question to address. |\n| Inputs and scope | Data sources, permission to use them, sample scope and source revision. |\n| Deliverable | An inspectable experiment, minimal counterexample, lesson or technical report. |\n| Acceptance | Comparison baseline, expected output and failure conditions. |\n| Written next step | Responsible people, dates, license and review arrangements. |\n\n[Choose a project](PROJECT_FINDER.md) · [Industry research connections](INDUSTRY_CONNECTIONS.md)').trimEnd()+'\n';
}
const verification=JSON.parse(read('research/FEATURED_VERIFICATION.json'));
outputs['PROFILE_REFRESH_2026-09-18.md']=['# Portfolio refresh · 18 September 2026','',
 'This refresh covers 13 profile languages, 489 project detail pages, 12 bilingual research-area directories, an offline searchable explorer and practical guides committed to 11 featured repositories.',
 '本轮更新包含13语种主页导航、489个项目详情、12个领域的中英文目录、离线项目搜索页，以及直接提交到11个代表仓库的操作导读。','',
 '| Repository | Published guide commit | Workflow on that commit |','|---|---|---|',
 ...verification.projects.map(r=>'| ['+r.name+'](https://github.com/YucongDuan/'+r.name+') | ['+r.commit.slice(0,7)+'](https://github.com/YucongDuan/'+r.name+'/commit/'+r.commit+') | '+(r.workflow?'['+r.workflow.name+': '+r.workflow.conclusion+']('+r.workflow.url+')':'No workflow in the inspected tree / 已检查文件树未见工作流')+' |'),'',
 'Nine existing workflows succeeded on those exact documentation commits. The other two projects distribute archives; this refresh adds entry instructions without claiming a new execution result.',
 '九个已有工作流的项目，本次文档提交均运行通过；另两个项目通过压缩包分发，本次补充使用入口，未据此声称新增运行验证。','',
 '[Current status](CURRENT_STATUS.md) · [Full directory](REPOSITORY_DIRECTORY.md) · [Offline search guide](catalog/README.md) · [Method](PORTFOLIO_MAINTENANCE.md) · [Workflow records](research/FEATURED_VERIFICATION.json)','',
 'The profile checks validate generated content, repository and category counts, all 13 language routes and local links. File-tree records retain the inspected revision.',
 '主页自动校验检查生成内容、仓库与分类数量、13语种导航及站内文件链接；文件树记录保留实际检查的版本。','',
 'SolutionForge currently contains its project introduction. Import of the original complete source package remains pending after the working environment disconnected.',
 'SolutionForge目前包含项目介绍；原始完整源码包导入因工作环境断开而待补齐。',''].join('\n');
outputs['CITATION.cff']='cff-version: 1.2.0\nmessage: "For individual studies or software, cite the corresponding repository and publication. This citation identifies the portfolio directory."\ntitle: "DIKWP Open Research Portfolio"\ntype: dataset\nauthors:\n  - family-names: Duan\n    given-names: Yucong\nversion: "2026.09.18"\ndate-released: 2026-09-18\nurl: "https://github.com/YucongDuan/YucongDuan"\n';
const write=process.argv.includes('--write'),changes=[];
for(const [name,content] of Object.entries(outputs)){
 const p=path.join(root,name);
 if(!fs.existsSync(p)||fs.readFileSync(p,'utf8')!==content){
  changes.push(name);
  if(write){fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,content);}
 }
}
console.log(JSON.stringify({generated_files:Object.keys(outputs).length,changed_files:changes.length,mode:write?'write':'check'}));
if(!write&&changes.length){console.error(changes.join('\n'));process.exitCode=1;}
