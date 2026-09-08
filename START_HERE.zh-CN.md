# 从这里开始：理解 DIKWP，运行第一个实验

[English](START_HERE.md) · [主页](README.zh-CN.md) · [研究简介](RESEARCH_BRIEF.md) · [全部仓库](REPOSITORY_DIRECTORY.md)

## 如何理解 DIKWP

DIKWP 指**数据、信息、知识、智慧、意图（Purpose）**。段玉聪的研究关注这些语义资源如何在计算系统中表示、转换、检查与修订。

以下以虚构的社区工作坊为例帮助阅读。资源的角色取决于观察者、语境和任务，不应把示例固化为普遍定义。

| 资源 | 示例 | 值得追问的问题 |
|---|---|---|
| 数据 | 收集到的需求记录与可用工时 | 观察来自哪里？ |
| 信息 | 按时间与设备需求整理后的记录 | 哪种解释产生了这种分类？ |
| 知识 | 对人员配置与容量关系的假设 | 证据是什么，何时可能失效？ |
| 智慧 | 对机会公平、负荷与取舍的判断 | 考虑了谁的价值和成本？ |
| 意图 | 满足某项社区需求的可修订意向 | 谁可以设定或修订，权限如何获得？ |

[MESH²](https://github.com/YucongDuan/DIKWP-MESH-) 将 25 种有序资源类型转换作为基本算子，再通过语境、观察者和路径组合扩展其结构。固定的 D→I→K→W→P 流水线不能表达全部网络；意图本身也可以被质疑和修订。

实际可检查的是系统生成的语义记录、来源、冲突与残余不确定性。它们反映实现中的模型，并不意味着已经获得语言模型全部内部推理的访问权。

## 运行第一个实验

已安装 Git 和 Python 3.10 以上版本时，可以从 **PACT** 开始。其参考运行时只使用 Python 标准库，已有复现记录采用 Python 3.12。

```bash
git clone https://github.com/YucongDuan/DIKWP-PACT-v0.1.0.git
cd DIKWP-PACT-v0.1.0
git checkout 966c5dfd11ea1a372331072a34d406494a37153b
python scripts/reproduce.py
```

最后一条命令离线执行测试，检查 72 个合成情景、重新生成四种确定性基线，与已记录的结果哈希和指标进行比较，并在 `.reproduction/` 写入回执。不一致时返回非零退出码。[中文复现说明](https://github.com/YucongDuan/DIKWP-PACT-v0.1.0/blob/main/QUICKSTART_CN.md) · [该提交的 CI](https://github.com/YucongDuan/DIKWP-PACT-v0.1.0/actions/runs/34084517968)

参考策略的得分对应随附合成数据，不代表商用大模型测评，也不会独立证明现实中的人员授权。

运行后可以选一个情景，指出其中的假设，提出假设之外的反例，并提供命令与实际输出。这就是一项有价值的初次贡献。

## 按输出选择项目

| 想检查的结果 | 入口 | 获取与验证状态 |
|---|---|---|
| 意图、权限与策略基线 | [PACT](https://github.com/YucongDuan/DIKWP-PACT-v0.1.0) | 根目录源码；已有 [9 月 7 日工程记录](ENGINEERING_STATUS.md) |
| 语义路径、观察者差异与冲突 | [MESH²](https://github.com/YucongDuan/DIKWP-MESH-) | 按锁定依赖安装后运行复现脚本；已有工程记录 |
| 证据、语境和激励分析 | [VerityWeave](https://github.com/YucongDuan/DIKWP-VERITYWEAVE-v2.0.0) | 可打开独立 HTML；测试使用 Python 与 Node.js；已有工程记录 |
| 人工意识功能指标与情景 | [Consciousness Futures Studio](https://github.com/YucongDuan/DIKWP-Consciousness-Futures-Studio-V1) | 先解压指定 ZIP；本轮检查 README，未重新运行 |
| 有限数学证书与审计账本 | [CITM Forge](https://github.com/YucongDuan/Complete-Information-Theoretic-Mathematics-Problem-to-Certificate-Compiler) | 先解压指定 ZIP；本轮检查 README，未重新运行 |
| 机会、容量与贡献核算情景 | [透明经济三个项目](TRANSPARENT_ECONOMY.md) | 各自独立格式与示例；已有 [9 月 8 日发布记录](GITHUB_PUBLICATION_2026-09-08.md) |

## 阅读、引用和参与

从[研究简介](RESEARCH_BRIEF.md)进入[证据地图](DIKWP_EVIDENCE_MAP.md)与[专利组合](PATENT_PORTFOLIO_MAP.md)。解释人工意识实验时，区分功能指标与主观体验证据；解释数学实验时，区分有限实例与无界定理。

[引用指南](CITING.md)帮助区分论文、软件版本和目录；[合作入口](COLLABORATE.md)给出可以独立完成的小任务。需要其他应用方向时，请使用[完整目录](REPOSITORY_DIRECTORY.md)。
