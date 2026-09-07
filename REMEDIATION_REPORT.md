# DIKWP 源码分发与可复现性工程报告

生成时间：2026-09-07T09:58:56.292119+00:00。本报告由实际发布回执、测试回执和交付清单生成。

**3 个重点项目已有公开提交；3 个项目记录了 140 项通过的实际检查。批量队列公开提交 32/441。**

## 已公开项目与验证

| 项目 | 精确公开提交 | CI | 实际本地检查 |
| --- | --- | --- | ---: |
| VerityWeave | [acb576c6e255](https://github.com/YucongDuan/DIKWP-VERITYWEAVE-v2.0.0/commit/acb576c6e2559f1ad792fa93e5cb8364aaad1f64) | [success](https://github.com/YucongDuan/DIKWP-VERITYWEAVE-v2.0.0/actions/runs/34084362258) | 116 |
| PACT | [966c5dfd11ea](https://github.com/YucongDuan/DIKWP-PACT-v0.1.0/commit/966c5dfd11ea1a372331072a34d406494a37153b) | [success](https://github.com/YucongDuan/DIKWP-PACT-v0.1.0/actions/runs/34084517968) | 13 |
| MESH² | [c7a6947b66f5](https://github.com/YucongDuan/DIKWP-MESH-/commit/c7a6947b66f5227141d92905cf23e6c4b0a8e50e) | [success](https://github.com/YucongDuan/DIKWP-MESH-/actions/runs/34084402083) | 11 |

VerityWeave 已将部分声明性“不变量”改为运行时输出校验：从原输入重新计算，逐动作检查人工门控、可逆性、有效期与程序保障；伪造输出或导出不能仅靠复制通过标志获得通过。缺少必要申诉／纠错渠道时返回不执行的等待项。四份离线 HTML 与 Python 路径已同步。

PACT 已展开源代码、测试与示例，保留原归档及许可证，并加入复现入口和 CI。MESH² 已展开源码并补齐干净环境揭示的 SciPy 漏依赖；分析、看板、路径与层级反例可按固定依赖重新生成。

统一回执：`receipts/postpublication-integration.json`，时间 2026-09-07T05:01:14.216090+00:00，状态 `PASS`。测试数来自实际执行回执；VerityWeave 的 Node 检查不等于完整浏览器渲染或设备兼容性测试。有限状态模型和本地样例均不构成对任意现实系统的普遍证明。

| 项目 | 回执源码文件数 | 回执源码 SHA-256 | 执行状态 |
| --- | ---: | --- | --- |
| VerityWeave | 113 | `e3866a60ec81337c6d675cb77da03aff7872080d9261c59119060d615e6f5667` | PASS |
| PACT | 88 | `1779a3243d1cbe119ed0e8446364f6594683719e408efb9c1dedc92444ef3402` | PASS |
| MESH² | 67 | `97749c474fafa0c72abd2f1bc5d061eae28a2926a43645c7db4185ac794d089f` | PASS |

以上是回执所标识的字节版本。源码文件数不是功能数；测试通过也不是认证。后续提交若改变代码，须对应新的运行回执。

## 全量范围与当前批量状态

仓库归属清单覆盖 480 个不重复条目：441 个批量仓库 + 3 个重点仓库 + 36 个其余快照。与完整目录一致：True；分组不重复：True。 最终交付清单记录：元数据条目：480；含原始归档的仓库：478；含源码视图的仓库：479；空仓库：1；有载荷排除的仓库：0；排除文件：0。源码/归档覆盖不等于离线运行验证。

初次根目录审计时间：2026-09-07T04:21:25.511182+00:00。

| 初次目录分类 | 数量 |
| --- | ---: |
| `docs_or_unknown` | 11 |
| `source_visible` | 17 |
| `supplementary_zip_with_source` | 8 |
| `unverified` | 1 |
| `zip_only_root` | 443 |

目录名、`language=null` 或根目录出现 ZIP 不能直接证明代码安全性或可复现性。VerityWeave 原已有源码，重点问题是运行时验证；PACT 和 MESH² 属于原 ZIP-only 队列。本轮其余批量条目的当前逐库回执分布如下，公开数量另行统计为 **32/441**：

| 逐库整理回执状态 | 数量 |
| --- | ---: |
| `PREPARED_DOCUMENTATION_ONLY` | 3 |
| `PREPARED_SOURCE_UNTESTED` | 438 |

这些计数直接读取各仓库最新磁盘回执，可能在批量处理期间变化；不以单次进度日志代替最终交付清单。`BLOCKED_*`、`INCOMPLETE_*`、凭据待审或未准备项目不能计为已完成源码整改。路径兼容映射、Git 元数据隔离、工作流隔离等变化须在各自来源回执中保留，不应隐藏。

## 其余固定版本快照

`snapshot-rest/summary.json` 记录 36 个条目，状态计数为 `{"SNAPSHOT_DOCUMENTS_UNTESTED": 10, "EMPTY_REPOSITORY_VERIFIED": 1, "SNAPSHOT_SOURCE_UNTESTED": 24, "SNAPSHOT_SOURCE_UNTESTED_PORTABLE_MEMBER_VIEW": 1}`。保留的原始 ZIP 总字节数：74606389。快照哈希校验状态 `PASS`；核对 35 个原 ZIP 与 4662 个文件哈希。

`YucongDuan/DIKWP` 已通过 GitHub 仓库及分支接口核实为公开空仓库；没有分支或源码提交，所以不伪造源码包。MNEMOGENESIS84 上游误将 README 正文作为约 930 字节的目录名；完整原 ZIP、每个成员的原字节和原路径都保留，另以内容哈希命名建立可逆兼容视图，再用未放宽限制的工具展开唯一源码包及示例 capsule。上游错误路径本身未被这项离线恢复修改。

## 字节、目录、运行三种不同结论

1. **字节覆盖**：实际保存了原始归档或文件，并记录哈希；不表示全部解压成功。
2. **目录可用**：已形成可浏览源码视图，保留原始来源、许可证和必要排除标记；不表示依赖完整或测试通过。
3. **运行验证**：特定版本在记录的环境中执行了明确测试和产物复现；不能转移到其他仓库或未来版本。

交付清单中的 `excluded_payload_repositories`／`excluded_files` 等标志必须保留。若因实际凭据、特殊文件或未解决结构问题排除载荷，应只提供相应元数据说明，不能用“全量打包”掩盖排除项。`NOT_RUN` 不是失败，也不是通过；它表示没有执行证据。

## 离线使用与平台边界

首先打开 `catalog/index.html` 查找项目；重点项目复现说明见 `integration/START_HERE.zh-CN.md`。

```bash
python integration/reproduce.py --base projects --output integration/receipts/local.json
```

VerityWeave 和 PACT 的 Python 核心使用标准库，VerityWeave 的 JavaScript 检查需要 Node。MESH² Linux x86_64 / CPython 3.12 依赖已在干净环境中用 `--no-index` 离线安装并运行，轮包目录当前包含 22 个文件。Windows CPython 3.12 轮包回执标为 `DOWNLOADED_ONLY_NOT_RUNTIME_TESTED`，共 23 个轮包；依赖闭包完成：True，Windows 实际执行：False。不能把下载成功写成 Windows 已运行通过。

这些证据只覆盖相应项目与平台，不能推出全部仓库均能在不联网单机直接运行。Python、Node、任意模型权重、数据库、浏览器组件、外部 API 和所有项目的依赖没有因为保存源码而自动齐备。最终包中若包含独立站点源码，它也有自己的构建依赖和部署说明。

## 不变量与外部效果的边界

`PASS` 表示当前输入和输出通过明确本地谓词；`FAIL` 表示拒绝不合格结果并保留诊断；`NOT_VERIFIED` 表示实际授权、外部执行、真实申诉渠道或现实结果缺少观测证据。调用方声称存在的渠道与系统要求建立的渠道分开记录。静态自评规范不是认证，四项外部控制保持 `proposal_only`，不会因本地测试通过而变为现实执行保证。

## 直接来源与可复用入口

- [VerityWeave: exact public revision](https://github.com/YucongDuan/DIKWP-VERITYWEAVE-v2.0.0/tree/acb576c6e2559f1ad792fa93e5cb8364aaad1f64) · [CI run](https://github.com/YucongDuan/DIKWP-VERITYWEAVE-v2.0.0/actions/runs/34084362258)
- [PACT: exact public revision](https://github.com/YucongDuan/DIKWP-PACT-v0.1.0/tree/966c5dfd11ea1a372331072a34d406494a37153b) · [CI run](https://github.com/YucongDuan/DIKWP-PACT-v0.1.0/actions/runs/34084517968)
- [MESH²: exact public revision](https://github.com/YucongDuan/DIKWP-MESH-/tree/c7a6947b66f5227141d92905cf23e6c4b0a8e50e) · [CI run](https://github.com/YucongDuan/DIKWP-MESH-/actions/runs/34084402083)
- [GitHub portfolio](https://github.com/YucongDuan?tab=repositories)
- [Public DIKWP empty-repository metadata](https://api.github.com/repos/YucongDuan/DIKWP) · [branches](https://api.github.com/repos/YucongDuan/DIKWP/branches)
- [Source and reproduction catalog](catalog/README.md) · [machine-readable catalog](catalog/CATALOG.json)
- [Engineering status](ENGINEERING_STATUS.md) · [Chinese report](REMEDIATION_REPORT.md) · [English report](REMEDIATION_REPORT_EN.md)

本报告仅反映所引用回执及明确时间点。生成器 `profile/refresh_engineering_reports.py` 在最终交付清单和发布回执更新后重新运行；不能手改数字替代证据更新。
