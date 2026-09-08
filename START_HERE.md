# Start here: DIKWP research and a first experiment

[Chinese guide](START_HERE.zh-CN.md) · [Profile](README.md) · [Research brief](RESEARCH_BRIEF.md) · [All repositories](REPOSITORY_DIRECTORY.md)

## Understand DIKWP

DIKWP stands for **Data, Information, Knowledge, Wisdom and Purpose**. Yucong Duan's research examines how these semantic resources can be represented, transformed and checked in a computational system.

The following is a working reading aid, using a fictional community workshop. A resource's role depends on the observer, context and task; these examples are not universal definitions.

| Resource | Example | Question to inspect |
|---|---|---|
| Data | Recorded requests and available hours | Where did the observations come from? |
| Information | Requests grouped by time and required equipment | Which interpretation produced this grouping? |
| Knowledge | A proposed relationship between staffing and capacity | What evidence supports it, and where might it fail? |
| Wisdom | A judgment about access, workload and acceptable trade-offs | Whose values and costs were considered? |
| Purpose | A revisable intention to meet a stated community need | Who may set or revise the intention, and under what authority? |

In [MESH²](https://github.com/YucongDuan/DIKWP-MESH-), all 25 ordered source/target resource-type pairs are primitive transformation classes. Contexts, observers and composed paths add further structure. A fixed D→I→K→W→P pipeline cannot express the entire network. Purpose can itself be challenged and revised.

Inspect the resulting semantic records, provenance, disagreements and residual uncertainty. These external records describe the implemented model; access to them does not imply access to a language model's complete internal reasoning.

## Run your first experiment

Choose **PACT** if you have Git and Python 3.10 or newer. Its reference runtime uses the Python standard library. The recorded reproduction used Python 3.12.

```bash
git clone https://github.com/YucongDuan/DIKWP-PACT-v0.1.0.git
cd DIKWP-PACT-v0.1.0
git checkout 966c5dfd11ea1a372331072a34d406494a37153b
python scripts/reproduce.py
```

The last command runs offline. It checks tests and 72 synthetic scenarios, regenerates four deterministic baselines, compares result hashes and metrics with the recorded snapshot, and writes a receipt under `.reproduction/`. A mismatch produces a nonzero exit code. Check the [reproduction guide](https://github.com/YucongDuan/DIKWP-PACT-v0.1.0/blob/main/docs/REPRODUCIBILITY.md) for details and the [linked CI run](https://github.com/YucongDuan/DIKWP-PACT-v0.1.0/actions/runs/34084517968) for the exact revision's recorded result.

The reference policy's score describes its accompanying synthetic fixtures. It does not measure a commercial language model or independently authenticate a real person's authorization.

**A useful next step:** write down one assumption in a scenario, propose a case outside that assumption, and submit the case with the command and observed output. [Contribution routes](COLLABORATE.md)

## Choose by the result you want to inspect

| Goal | Project | Start with | Verification record |
|---|---|---|---|
| Compare purpose and permission policies | [PACT](https://github.com/YucongDuan/DIKWP-PACT-v0.1.0) | The reproduction command above | [7 September engineering record](ENGINEERING_STATUS.md) |
| Explore competing semantic routes | [MESH²](https://github.com/YucongDuan/DIKWP-MESH-) | Install `requirements.lock`, then run `python scripts/reproduce.py` | [7 September engineering record](ENGINEERING_STATUS.md) |
| Inspect evidence and manipulation scenarios | [VerityWeave](https://github.com/YucongDuan/DIKWP-VERITYWEAVE-v2.0.0) | Its standalone HTML; `make verify` uses Python and Node.js | [7 September engineering record](ENGINEERING_STATUS.md) |
| Plan an artificial-consciousness study | [Consciousness Futures Studio](https://github.com/YucongDuan/DIKWP-Consciousness-Futures-Studio-V1) | Extract its named ZIP and open `index.html` | README inspected; runtime not rerun in this update |
| Inspect finite mathematical certificates | [CITM Forge](https://github.com/YucongDuan/Complete-Information-Theoretic-Mathematics-Problem-to-Certificate-Compiler) | Extract its named ZIP and follow the demo | README inspected; runtime not rerun in this update |
| Compare opportunity, capacity and contribution scenarios | [ClearPath / DemandProof / LucidEcon](TRANSPARENT_ECONOMY.md) | Select one schema and its synthetic example | [8 September release record](GITHUB_PUBLICATION_2026-09-08.md) |

Projects have different schemas and installation requirements. Read the chosen repository's current instructions before using another version.

## Read, cite and collaborate

For research history, start with the [research brief](RESEARCH_BRIEF.md), then the [evidence map](DIKWP_EVIDENCE_MAP.md) and [patent map](PATENT_PORTFOLIO_MAP.md). For artificial consciousness, distinguish functional indicators from evidence of subjective experience; for mathematics, distinguish a finite verified instance from an unrestricted theorem.

The [citation guide](CITING.md) separates papers, software versions and this directory. The [collaboration guide](COLLABORATE.md) provides small, reviewable starting tasks. Browse the [full directory](REPOSITORY_DIRECTORY.md) when you need a different domain.
