# Choose a transparent-economy tool / 透明经济项目选择

| Your question / 你的问题 | Project / 项目 | Inspectable output / 可检查输出 |
|---|---|---|
| Is a route worth a small test? / 某条路径值得小规模尝试吗？ | [ClearPath](https://github.com/YucongDuan/DIKWP-CLEARPATH-TRANSPARENT-ECONOMY) | Demand, saturation and scenario-based route assessment / 需求、饱和度与多情景路径分析 |
| What do the evidence and resource limits support? / 证据和资源约束支持什么？ | [LucidEcon v2](https://github.com/YucongDuan/DIKWP-LUCIDECON-OS) | Bounded opportunity tests, replay and exact contribution accounting / 有范围的机会测试、重放和精确贡献核算 |
| How can a small batch of committed tasks be coordinated? / 如何协调一小批已有承诺的任务？ | [DemandProof](https://github.com/YucongDuan/DIKWP-DEMANDPROOF-COMMONS) | Shared capacity, signed statements, reservations, acceptance and observed payment records / 共享产能、签名声明、预留、验收和到账观察记录 |

These are related research tools, not a single integrated production service. Their input schemas differ; a link does not establish runtime interoperability. All shipped examples are synthetic. Route assessments do not score a person's worth. No tool creates real demand, verifies bank balances or executes payments.

三个项目互为研究入口，尚非已集成的生产服务；输入格式不同，交叉链接不代表接口已互通。示例均为合成数据。路径分析不评价人的价值，也不产生真实需求、核验银行余额或执行支付。

[Full research directory / 全量研究目录](https://github.com/YucongDuan/YucongDuan/blob/main/REPOSITORY_DIRECTORY.md)

## Reproduce the release

| Project | What to try | Verification |
|---|---|---|
| [ClearPath Transparent Economy 1.0.0](https://github.com/YucongDuan/DIKWP-CLEARPATH-TRANSPARENT-ECONOMY) | Check funded demand, saturation and competing opportunity scenarios. | 30 local tests · [CI passed](https://github.com/YucongDuan/DIKWP-CLEARPATH-TRANSPARENT-ECONOMY/actions/runs/34179548742) |
| [DemandProof Commons 1.0.0](https://github.com/YucongDuan/DIKWP-DEMANDPROOF-COMMONS) | Plan shared capacity and inspect signed task, acceptance and payment-observation records. | 64 local tests · [CI passed](https://github.com/YucongDuan/DIKWP-DEMANDPROOF-COMMONS/actions/runs/34179666791) |
| [LucidEcon OS 2.0.0](https://github.com/YucongDuan/DIKWP-LUCIDECON-OS) | Test evidence-scoped opportunities, replay receipts and account for contribution pools. | 88 local tests · [CI passed](https://github.com/YucongDuan/DIKWP-LUCIDECON-OS/actions/runs/34179827902) |

[Commit-level publication evidence](GITHUB_PUBLICATION_2026-09-08.md). The original delivery archives preserve reports, browser applications and packaged runtimes. GitHub source archives include the publication documentation.
