# Portfolio inventory and maintenance

The current [snapshot](research/PORTFOLIO_SNAPSHOT.json) records 489 distinct public repository identities, current metadata and complete Git file trees, checked 2026-09-18.

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

本轮清单核对489个公开仓库的身份、元数据与完整文件树，每个项目提供独立详情页。文件形式、测试文件数量与实际运行证据分别记录。目录由已提交的快照生成，可以复现并检查链接。

SolutionForge的原始完整源码导入因工作环境断开而待补齐。该项目按当前公开文件如实标为文档，未声称已发布可运行源码。
