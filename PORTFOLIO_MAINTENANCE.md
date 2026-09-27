# Portfolio inventory and maintenance

The current [snapshot](research/PORTFOLIO_SNAPSHOT.json) records 491 distinct public repository identities, published metadata and Git file-tree records. Portfolio navigation updated 2026-09-27.

## Interpreting the records

- Source and web files: recognized code or HTML/CSS extensions are present in the inspected tree.
- Downloadable archive: a named archive is present near the root without visible source or web files.
- Documentation and research: introductions, documents or other research materials.
- Test-file counts describe files. A completed workflow run supplies independent execution evidence at a particular revision.
- License metadata is a navigation aid. Follow each project and component license.
- Summaries use current metadata, existing editorial summaries, or curated descriptions grounded in featured project instructions. Category assignments retain the established research taxonomy.

## Reproduce the pages

Node.js 22; no package installation is required. The offline build is deterministic from committed inputs.

~~~bash
node scripts/build_portfolio.mjs --write
node scripts/build_portfolio.mjs --check
node scripts/validate_portfolio.mjs
~~~

The refresh workflow collects public metadata and file trees, generates pages, validates them and publishes with a normal fast-forward Git commit. It has no scheduled trigger. The separate consistency workflow uses committed inputs and read-only repository permission.

Snapshots retain the inspected revision; later edits do not silently change recorded evidence. [Historical catalog before this refresh](https://github.com/YucongDuan/YucongDuan/blob/e00529da57576fce7b02b5814e3a62012a48556c/catalog/CATALOG.json).

## 中文说明

当前清单覆盖491个公开仓库，每个项目提供独立详情页并保留其文件核对日期。本轮核对完整仓库名单，新增两个图书实验室；既有项目的文件树记录保持原核对日期。文件形式、测试文件数量与实际运行证据分别记录。目录由已提交的快照生成，可以复现并检查链接。

SolutionForge的原始完整源码导入因工作环境断开而待补齐。该项目按当前公开文件如实标为文档，未声称已发布可运行源码。
