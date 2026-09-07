# Contribute to the DIKWP portfolio

[Current status](CURRENT_STATUS.md) · [中文](#中文参与指南) · [Repository map](REPOSITORY_ECOSYSTEM_480.md)

Start with one research question and one repository. The catalog's related-project links indicate useful reading or comparison routes; they do not imply that two packages can already import or execute each other.

| Contribution | A useful first result |
|---|---|
| Reproduction | Exact repository commit, environment, command, output and one failing or passing example |
| Runtime behavior | A small counterexample or repair that exercises an observable behavior; show expected and actual results |
| Cross-project integration | Name both commits, the exchanged schema and the adapter; demonstrate one round trip and one rejected input |
| Citation or external use | Original publication or institutional source, DOI or stable link, authors, date and the precise cited or adopted idea |
| Translation and documentation | Identify the language, affected passage and proposed wording while preserving scientific identifiers and evidence scope |
| Repository discoverability | Propose a short description, relevant GitHub topics and a homepage that actually documents that project |

For a software change, use the target repository's own issue or pull-request channel when enabled. For a portfolio navigation or source correction, use [this profile repository's issues](https://github.com/YucongDuan/YucongDuan/issues). Include a minimal example that another reader can inspect. Check the target repository's license and contribution instructions before redistributing its materials.

## Reproduction starting points

| Project | Command from its checkout | Existing evidence |
|---|---|---|
| [VerityWeave](https://github.com/YucongDuan/DIKWP-VERITYWEAVE-v2.0.0) | `make verify` | [CI](https://github.com/YucongDuan/DIKWP-VERITYWEAVE-v2.0.0/actions/runs/34084362258) |
| [PACT](https://github.com/YucongDuan/DIKWP-PACT-v0.1.0) | `python scripts/reproduce.py` | [CI](https://github.com/YucongDuan/DIKWP-PACT-v0.1.0/actions/runs/34084517968) |
| [MESH²](https://github.com/YucongDuan/DIKWP-MESH-) | `python scripts/reproduce.py` | [CI](https://github.com/YucongDuan/DIKWP-MESH-/actions/runs/34084402083) |

Use each project's documented environment and pinned dependencies. The [engineering report](ENGINEERING_STATUS.md) links the exact commits and describes the tested scope.

For portfolio coordination, [DIKWP EIR Mesh](https://github.com/YucongDuan/DIKWP-EIR-Mesh-v1.0) is a research-ecology planning prototype with an atlas, evidence ledger, resource-request structure and maintainer roles. Its historical repository counts describe its own dated design; the [current status](CURRENT_STATUS.md) supplies today's inventory. The prototype does not establish an already staffed support service or funded partnership.

## 中文参与指南

请选择一个具体研究问题和一个仓库开始。最有帮助的贡献包括：可复现的反例、带输入输出的修复、明确两端版本和交换格式的项目适配器、可追溯的一手引用，以及保持证据含义一致的翻译。

提交软件问题时，写明提交版本、环境、命令、预期与实际结果。跨仓库关联是阅读与比较入口，不代表已经建立可运行依赖。引用或机构实践条目请给出原始来源及准确使用方式，便于区分引用、理论采用、技术实现和独立验证。

具体代码请进入目标仓库的 issue 或 PR；主页导航及材料纠错可进入本仓库 issue。参与者可以从小范围、可检查的工作开始，不需要先承担整个系统的维护。
