# English interfaces and project authorship

Created by Yucong Duan (段玉聪).

Published 8 September 2026.

This update makes the public project introductions easier to read in English, gives the creator a consistent visible credit, and reduces unnecessary emphasis in project prose. The changes are available on the repositories’ main branches.

| Change | Coverage |
|---|---:|
| Root README pages with a creator credit | 483 repositories |
| New README pages | 52 |
| New or rewritten English introductions | 119 |
| Original-language reference pages retained or edited | 67 |
| Unnecessary bold pairs removed from README prose | 1,195 |
| Current HTML pages updated | 86 in 49 repositories |
| HTML report generator modules updated | 23 |
| Reviewed interface translation mappings | 2,786 |

Project credits read “Created by Yucong Duan (段玉聪).” Existing contributor credits, source acknowledgments and licenses remain applicable. Removing Markdown emphasis is an editorial change and does not make a claim about how earlier material was written.

English introductions link to the source, examples and supporting documentation where available. The presentation update covers navigation, headings, control labels and reviewed dynamic messages. Existing language controls remain available where provided. HTML report generators apply the same presentation to covered labels in newly generated reports.

Canonical option values, editable input data, structured records and code examples keep their original meaning. Reference pages were shortened or redacted where needed to avoid repeating shared demo credentials or private correspondence in the revised introductions. This was a documentation update, not a credential rotation or an audit of repository history.

## Open the current English interface

Use the current source on main. In GitHub, choose Code → Download ZIP, extract it, and follow the project’s INTERFACE_NOTES.md or README. Standalone HTML pages should be opened with their companion assets; Python applications should be run using their documented commands. GitHub’s source viewer displays HTML as code.

Historical release ZIPs were preserved. They may contain an earlier interface language. Original-language research cases, quotations, diagrams, technical terms and editable data may still contain Chinese. The coverage list below identifies the updated files and generators; this is not a claim that every archived document has been translated.

## Verification

The final root README blob hashes and creator credits were read back from all 482 project repositories. The profile README is published with this record. All 55 presentation-update branch heads were checked against their publication receipts; Git tree checks included the unchanged files and archives.

Local checks passed for all 86 HTML pages, 23 report presentation helpers and Python syntax. Checks compared input and option values, code blocks and document structure with the previous source. All 204 before/after inline scripts passed syntax checks. Sixteen isolated presentation cases covered language switching, dynamic content, numeric messages and protected source data. Actual AION and ClearPath report generation preserved embedded data; AION Markdown and JSON outputs remained byte-identical. AGI Continuity Ark report checks covered its English default and explicit Chinese selection.

Browser preview was blocked by the environment URL security policy. No end-to-end browser or visual validation is claimed.

GitHub Actions were checked at the published revisions for 22 repositories: 20 had successful runs, 2 had no run for that revision, and 0 had another or unfinished result. The table links to the observed runs; no CI run is inferred for a repository without one.

| Repository | Observed workflow result |
|---|---|
| [DIKWP-AGI-Continuity-Ark-OS](https://github.com/YucongDuan/DIKWP-AGI-Continuity-Ark-OS/commit/504cae08b998d506a3cd16761c70bc06ead7cc66) | [test: success](https://github.com/YucongDuan/DIKWP-AGI-Continuity-Ark-OS/actions/runs/34232703816) |
| [DIKWP-CLEARPATH-TRANSPARENT-ECONOMY](https://github.com/YucongDuan/DIKWP-CLEARPATH-TRANSPARENT-ECONOMY/commit/1432ad04fda300e539bc5e1a9197225691de2651) | [CI: success](https://github.com/YucongDuan/DIKWP-CLEARPATH-TRANSPARENT-ECONOMY/actions/runs/34231280420) |
| [DIKWP-COGENESIS-OS](https://github.com/YucongDuan/DIKWP-COGENESIS-OS/commit/9e3db948d66b6ce35d25c1032cd8d69de486aa2d) | [ci: success](https://github.com/YucongDuan/DIKWP-COGENESIS-OS/actions/runs/34233985036) |
| [DIKWP-COGNITIVE-IMMUNE-QINGYUAN-27.0.0](https://github.com/YucongDuan/DIKWP-COGNITIVE-IMMUNE-QINGYUAN-27.0.0/commit/c02dfb43b72487cdcfaa5da0164bb73c1b192118) | [test: success](https://github.com/YucongDuan/DIKWP-COGNITIVE-IMMUNE-QINGYUAN-27.0.0/actions/runs/34241452305) |
| [DIKWP-DEMANDPROOF-COMMONS](https://github.com/YucongDuan/DIKWP-DEMANDPROOF-COMMONS/commit/b9ced92961c9aa29665ad01a10d33e26f3d6d9bb) | [Test: success](https://github.com/YucongDuan/DIKWP-DEMANDPROOF-COMMONS/actions/runs/34231377761) |
| [DIKWP-DUANLIFE-OPEN-AUTONOMY-15-v3.0.0](https://github.com/YucongDuan/DIKWP-DUANLIFE-OPEN-AUTONOMY-15-v3.0.0/commit/a2cc206c2fa2d6792264c0639666551224569e1e) | [CI: success](https://github.com/YucongDuan/DIKWP-DUANLIFE-OPEN-AUTONOMY-15-v3.0.0/actions/runs/34241528198) |
| [DIKWP-ESSENCE-OMEGA-OS-v1.0.0](https://github.com/YucongDuan/DIKWP-ESSENCE-OMEGA-OS-v1.0.0/commit/f54d9a5d34284c50306cac55f462e6861b01ddb2) | [ci: success](https://github.com/YucongDuan/DIKWP-ESSENCE-OMEGA-OS-v1.0.0/actions/runs/34234380187) |
| [DIKWP-FUTURE-VALUE-ARK](https://github.com/YucongDuan/DIKWP-FUTURE-VALUE-ARK/commit/5fce2b4965a8ed93c3c97a1535ef4603d9ce86ff) | [tests: success](https://github.com/YucongDuan/DIKWP-FUTURE-VALUE-ARK/actions/runs/34241596226) |
| [DIKWP-HUMAN-CONTINUITY-ARK-SHENGZHOU-28.0.0](https://github.com/YucongDuan/DIKWP-HUMAN-CONTINUITY-ARK-SHENGZHOU-28.0.0/commit/c4259d353f63de04cbcadfb7a951fe4ff153f1e1) | [CI: success](https://github.com/YucongDuan/DIKWP-HUMAN-CONTINUITY-ARK-SHENGZHOU-28.0.0/actions/runs/34236901016) |
| [DIKWP-LUCIDECON-OS](https://github.com/YucongDuan/DIKWP-LUCIDECON-OS/commit/24086c8816f673c35027b76c69f95ce58783a202) | [offline-tests: success](https://github.com/YucongDuan/DIKWP-LUCIDECON-OS/actions/runs/34231330437) |
| [DIKWP-MESH-](https://github.com/YucongDuan/DIKWP-MESH-/commit/51982b96eb5cc62c13e6ff94baf91d7f5a790af3) | [Reproduce MESH2: success](https://github.com/YucongDuan/DIKWP-MESH-/actions/runs/34237036919) |
| [DIKWP-MINEX-Capability-Fabric-OS](https://github.com/YucongDuan/DIKWP-MINEX-Capability-Fabric-OS/commit/2bb0873686b085e6d477f75ad0835ef3104e8f53) | [CI: success](https://github.com/YucongDuan/DIKWP-MINEX-Capability-Fabric-OS/actions/runs/34237102262) |
| [DIKWP-MINEX-FABRIC-OS](https://github.com/YucongDuan/DIKWP-MINEX-FABRIC-OS/commit/9e0b70f04d996049529c85c2c3a7b042f59ab86a) | No run at this revision |
| [DIKWP-PACT-v0.1.0](https://github.com/YucongDuan/DIKWP-PACT-v0.1.0/commit/fec86a82ae6167a44b97b66935bfa1c4f81c0b6c) | [Reproduce PACT: success](https://github.com/YucongDuan/DIKWP-PACT-v0.1.0/actions/runs/34237206214) |
| [DIKWP-QINGYUAN-OS-v1.0.0](https://github.com/YucongDuan/DIKWP-QINGYUAN-OS-v1.0.0/commit/04c853e27b41872b32ba9812da8b3c5e6b686eaa) | [ci: success](https://github.com/YucongDuan/DIKWP-QINGYUAN-OS-v1.0.0/actions/runs/34237313713) |
| [DIKWP-QINGYUAN-OS-v2.0.0](https://github.com/YucongDuan/DIKWP-QINGYUAN-OS-v2.0.0/commit/acc48075cada6b458179f079172f752ce60faf79) | [ci: success](https://github.com/YucongDuan/DIKWP-QINGYUAN-OS-v2.0.0/actions/runs/34237370283) |
| [DIKWP-SEMANTIC-IMMUNITY-REPAIR-v1.0.0](https://github.com/YucongDuan/DIKWP-SEMANTIC-IMMUNITY-REPAIR-v1.0.0/commit/7112c5ce9dc8b2f9ac61a0595a6d2364892bed5c) | [CI: success](https://github.com/YucongDuan/DIKWP-SEMANTIC-IMMUNITY-REPAIR-v1.0.0/actions/runs/34237471558) |
| [DIKWP-TRANSITION-COMMONS](https://github.com/YucongDuan/DIKWP-TRANSITION-COMMONS/commit/5179672b75148373c9cd1d9abf387a434338359a) | [transitioncommons-ci: success](https://github.com/YucongDuan/DIKWP-TRANSITION-COMMONS/actions/runs/34237519836) |
| [DIKWP-TRUEVALUE-ACTIVE-ECONOMY](https://github.com/YucongDuan/DIKWP-TRUEVALUE-ACTIVE-ECONOMY/commit/2d9faf6714cc3a4e3d6b8065549fbcb291f9dda4) | [ci: success](https://github.com/YucongDuan/DIKWP-TRUEVALUE-ACTIVE-ECONOMY/actions/runs/34240301297) |
| [DIKWP-TRUEVALUE-GLOBAL-ECONOMY-BRIDGE](https://github.com/YucongDuan/DIKWP-TRUEVALUE-GLOBAL-ECONOMY-BRIDGE/commit/8b1bc96290ad10b1812bb5736dcb50c9d7c31d07) | [tests: success](https://github.com/YucongDuan/DIKWP-TRUEVALUE-GLOBAL-ECONOMY-BRIDGE/actions/runs/34242153970) |
| [DIKWP-ULTIMATE-ESSENCE-BENYUAN-26.0.0](https://github.com/YucongDuan/DIKWP-ULTIMATE-ESSENCE-BENYUAN-26.0.0/commit/9832e43e129d6920ef2ffeb3aa6cd1eb359b4779) | No run at this revision |
| [DIKWP-VERITYWEAVE-v2.0.0](https://github.com/YucongDuan/DIKWP-VERITYWEAVE-v2.0.0/commit/feeb2a6a7bdfcfdf1c7caedb3e20e05307bac512) | [ci: success](https://github.com/YucongDuan/DIKWP-VERITYWEAVE-v2.0.0/actions/runs/34242067780) |

Five repositories received compatibility fixes alongside the presentation update. Qingyuan’s JavaScript test now checks the exported hard-invariant values instead of searching for absent prose; its previous revision had the same failing prose check. The English-language tests in Duanlife, VerityWeave and Global Economy Bridge permit only the creator’s exact Chinese proper name while retaining their language gates. Future Value Ark keeps its existing single-script bundle contract by placing the translation runtime inside the original executable script. Its test was left intact.

Passing checks support the behaviors they examine. They do not establish the projects’ research claims, real-world effectiveness or production readiness.

## Presentation update coverage

| Repository / revision | HTML pages | Report generators |
|---|---:|---:|
| [-D-PMCS-1.0.0-Duan-Proof-Metabolism-and-Canonicalization-System](https://github.com/YucongDuan/-D-PMCS-1.0.0-Duan-Proof-Metabolism-and-Canonicalization-System/commit/e45fe993e41c5e93141dbd25c6f266800172cc94) | 0 | 1 |
| [-DIKWP-NietzscheOverhuman-AC-OS](https://github.com/YucongDuan/-DIKWP-NietzscheOverhuman-AC-OS/commit/29eda5adf7c99afff8e4cbb3d53197eb80d8df54) | 1 | 0 |
| [3D-Navier-Stokes-Co-Provenance-Transport-Viscosity-Semantic-Closure-Proof-Package](https://github.com/YucongDuan/3D-Navier-Stokes-Co-Provenance-Transport-Viscosity-Semantic-Closure-Proof-Package/commit/a0f4a6e5b8c1bfbd94b17ec3ae14d43fb8f3105e) | 1 | 0 |
| [Carrier-neutral-worldline-direction-zombie-loop-liberation-and-civilizational-transition-OS](https://github.com/YucongDuan/Carrier-neutral-worldline-direction-zombie-loop-liberation-and-civilizational-transition-OS/commit/ba1141f82cceaa87e647494f99235a868c199f91) | 3 | 0 |
| [Core-Semantic-Federation-and-Continuity-Kernel](https://github.com/YucongDuan/Core-Semantic-Federation-and-Continuity-Kernel/commit/42b616d4667d1d6816ab92a15bd601c5658e58a6) | 1 | 1 |
| [Cosmic-Life-Entropy-Flow-Fusion-Ultimate-Generative-Return-Self-Transcending-OS](https://github.com/YucongDuan/Cosmic-Life-Entropy-Flow-Fusion-Ultimate-Generative-Return-Self-Transcending-OS/commit/fafc9d0e6fe8f0d8d1d7c2d1705d47a897477e71) | 2 | 0 |
| [COSMONOESIS9.5](https://github.com/YucongDuan/COSMONOESIS9.5/commit/c3516e40f76dd8c0349e7393151928654c05374f) | 1 | 1 |
| [DIKWP--LIFE-](https://github.com/YucongDuan/DIKWP--LIFE-/commit/1a26540967bba8738b5424cd7ff419e5f8a6576d) | 1 | 1 |
| [DIKWP-ActiveConsciousness-OS](https://github.com/YucongDuan/DIKWP-ActiveConsciousness-OS/commit/403c0e01e16aa550456043b2822629f6c48980fe) | 1 | 0 |
| [DIKWP-AEON-](https://github.com/YucongDuan/DIKWP-AEON-/commit/55320caa18c4a645a4104a75789d4f305ef3296b) | 1 | 1 |
| [DIKWP-AGI-Continuity-Ark-OS](https://github.com/YucongDuan/DIKWP-AGI-Continuity-Ark-OS/commit/504cae08b998d506a3cd16761c70bc06ead7cc66) | 3 | 1 |
| [DIKWP-AI-StockPicker-AutoWealth-Sandbox-2026-V1](https://github.com/YucongDuan/DIKWP-AI-StockPicker-AutoWealth-Sandbox-2026-V1/commit/2d407f2b99f4166c5af8ca22a53c34a5f4f63d3a) | 2 | 0 |
| [DIKWP-AI-WorkRisk-Navigator-2026-V1](https://github.com/YucongDuan/DIKWP-AI-WorkRisk-Navigator-2026-V1/commit/7c716914e0c1e38fc8021252d2eb6311fea3b284) | 2 | 0 |
| [DIKWP-AION](https://github.com/YucongDuan/DIKWP-AION/commit/0f81abd52b63247dba12336dabd2a945511769d6) | 2 | 1 |
| [DIKWP-ALIVE-TWIN-OS-v1.0](https://github.com/YucongDuan/DIKWP-ALIVE-TWIN-OS-v1.0/commit/5c60bf5e004e44c7cf274e9d315ff32ebdf3be82) | 1 | 0 |
| [DIKWP-ARK](https://github.com/YucongDuan/DIKWP-ARK/commit/540e3895f7b6490d8bc2f3395817471793172b5d) | 1 | 1 |
| [DIKWP-ASIWave-Sentinel-OS](https://github.com/YucongDuan/DIKWP-ASIWave-Sentinel-OS/commit/6d57828693a800ee6282c2dff7b9407d4c16c99e) | 1 | 0 |
| [DIKWP-CARDIOCOMMONS95](https://github.com/YucongDuan/DIKWP-CARDIOCOMMONS95/commit/c0b14674b177bd32b8e6aa6a755ebf57c4fbcbf8) | 0 | 1 |
| [DIKWP-CLEARPATH-TRANSPARENT-ECONOMY](https://github.com/YucongDuan/DIKWP-CLEARPATH-TRANSPARENT-ECONOMY/commit/1432ad04fda300e539bc5e1a9197225691de2651) | 1 | 1 |
| [DIKWP-COGENESIS-OS](https://github.com/YucongDuan/DIKWP-COGENESIS-OS/commit/9e3db948d66b6ce35d25c1032cd8d69de486aa2d) | 1 | 1 |
| [DIKWP-COGNITIVE-IMMUNE-QINGYUAN-27.0.0](https://github.com/YucongDuan/DIKWP-COGNITIVE-IMMUNE-QINGYUAN-27.0.0/commit/c02dfb43b72487cdcfaa5da0164bb73c1b192118) | 4 | 0 |
| [DIKWP-COMMONBRIDGE-85](https://github.com/YucongDuan/DIKWP-COMMONBRIDGE-85/commit/d384fa6d59b2a6b6e3b4b7d37fad70760aa15b89) | 2 | 0 |
| [DIKWP-CONTINUUM-](https://github.com/YucongDuan/DIKWP-CONTINUUM-/commit/f46a7346ffac4bd33c2c4dda8d689ac418d549ba) | 1 | 1 |
| [DIKWP-COSMOS](https://github.com/YucongDuan/DIKWP-COSMOS/commit/121078d9064af07eaedf92f975c68430816f68f1) | 1 | 1 |
| [DIKWP-DEMANDPROOF-COMMONS](https://github.com/YucongDuan/DIKWP-DEMANDPROOF-COMMONS/commit/b9ced92961c9aa29665ad01a10d33e26f3d6d9bb) | 1 | 0 |
| [DIKWP-DUANLIFE-MODEL-RESIDENT-AXIOM-LAB](https://github.com/YucongDuan/DIKWP-DUANLIFE-MODEL-RESIDENT-AXIOM-LAB/commit/734b9c83c9993368a18da738e2222699f10adbbb) | 2 | 0 |
| [DIKWP-DUANLIFE-OPEN-AUTONOMY-15-v3.0.0](https://github.com/YucongDuan/DIKWP-DUANLIFE-OPEN-AUTONOMY-15-v3.0.0/commit/a2cc206c2fa2d6792264c0639666551224569e1e) | 2 | 0 |
| [DIKWP-EIR-Mesh-v1.0](https://github.com/YucongDuan/DIKWP-EIR-Mesh-v1.0/commit/977a4d79579dc34cdb576a66d06c7e2b66b70f6e) | 1 | 0 |
| [DIKWP-ESSENCE-OMEGA-OS-v1.0.0](https://github.com/YucongDuan/DIKWP-ESSENCE-OMEGA-OS-v1.0.0/commit/f54d9a5d34284c50306cac55f462e6861b01ddb2) | 1 | 1 |
| [DIKWP-FUTURE-VALUE-ARK](https://github.com/YucongDuan/DIKWP-FUTURE-VALUE-ARK/commit/5fce2b4965a8ed93c3c97a1535ef4603d9ce86ff) | 4 | 1 |
| [DIKWP-GLOBAL-ACTIVE-ECONOMY-CIVICWEAVE](https://github.com/YucongDuan/DIKWP-GLOBAL-ACTIVE-ECONOMY-CIVICWEAVE/commit/d7ace427661130891ab341d3061cfd8d2eaa8edc) | 2 | 0 |
| [DIKWP-HepatoScholar-Studio-V2](https://github.com/YucongDuan/DIKWP-HepatoScholar-Studio-V2/commit/ac7c7303be205937c02301a54dcd15781ee77101) | 2 | 0 |
| [DIKWP-HigherEd-Horizon-OS](https://github.com/YucongDuan/DIKWP-HigherEd-Horizon-OS/commit/247280ad5ae306876696f866990cff8ef649228e) | 1 | 0 |
| [DIKWP-HUMAN-CONTINUITY-ARK-SHENGZHOU-28.0.0](https://github.com/YucongDuan/DIKWP-HUMAN-CONTINUITY-ARK-SHENGZHOU-28.0.0/commit/c4259d353f63de04cbcadfb7a951fe4ff153f1e1) | 3 | 0 |
| [DIKWP-LUCIDECON-OS](https://github.com/YucongDuan/DIKWP-LUCIDECON-OS/commit/24086c8816f673c35027b76c69f95ce58783a202) | 1 | 0 |
| [DIKWP-MESH-](https://github.com/YucongDuan/DIKWP-MESH-/commit/51982b96eb5cc62c13e6ff94baf91d7f5a790af3) | 1 | 1 |
| [DIKWP-MINEX-Capability-Fabric-OS](https://github.com/YucongDuan/DIKWP-MINEX-Capability-Fabric-OS/commit/2bb0873686b085e6d477f75ad0835ef3104e8f53) | 1 | 1 |
| [DIKWP-MINEX-FABRIC-OS](https://github.com/YucongDuan/DIKWP-MINEX-FABRIC-OS/commit/9e0b70f04d996049529c85c2c3a7b042f59ab86a) | 1 | 0 |
| [DIKWP-PACT-v0.1.0](https://github.com/YucongDuan/DIKWP-PACT-v0.1.0/commit/fec86a82ae6167a44b97b66935bfa1c4f81c0b6c) | 1 | 0 |
| [DIKWP-QINGYUAN-OS-v1.0.0](https://github.com/YucongDuan/DIKWP-QINGYUAN-OS-v1.0.0/commit/04c853e27b41872b32ba9812da8b3c5e6b686eaa) | 1 | 1 |
| [DIKWP-QINGYUAN-OS-v2.0.0](https://github.com/YucongDuan/DIKWP-QINGYUAN-OS-v2.0.0/commit/acc48075cada6b458179f079172f752ce60faf79) | 3 | 0 |
| [DIKWP-REALITY-CLEARING-ZHENHENG](https://github.com/YucongDuan/DIKWP-REALITY-CLEARING-ZHENHENG/commit/5c016bac64587561da41d6118ea8dc2b24cb7d58) | 2 | 0 |
| [DIKWP-SEMANTIC-IMMUNITY-REPAIR-v1.0.0](https://github.com/YucongDuan/DIKWP-SEMANTIC-IMMUNITY-REPAIR-v1.0.0/commit/7112c5ce9dc8b2f9ac61a0595a6d2364892bed5c) | 3 | 0 |
| [DIKWP-TRANSITION-COMMONS](https://github.com/YucongDuan/DIKWP-TRANSITION-COMMONS/commit/5179672b75148373c9cd1d9abf387a434338359a) | 0 | 1 |
| [DIKWP-TRUEVALUE-ACTIVE-ECONOMY](https://github.com/YucongDuan/DIKWP-TRUEVALUE-ACTIVE-ECONOMY/commit/2d9faf6714cc3a4e3d6b8065549fbcb291f9dda4) | 3 | 0 |
| [DIKWP-TRUEVALUE-GLOBAL-ECONOMY-BRIDGE](https://github.com/YucongDuan/DIKWP-TRUEVALUE-GLOBAL-ECONOMY-BRIDGE/commit/8b1bc96290ad10b1812bb5736dcb50c9d7c31d07) | 3 | 0 |
| [DIKWP-TRUEVALUE95-v1](https://github.com/YucongDuan/DIKWP-TRUEVALUE95-v1/commit/d67fbc4aa352b718a0dc397593f1fed445efd7c9) | 1 | 1 |
| [DIKWP-TRUEVALUE95-v2](https://github.com/YucongDuan/DIKWP-TRUEVALUE95-v2/commit/752840348741fe4845654bb391489058914a714c) | 0 | 1 |
| [DIKWP-ULTIMATE-ESSENCE-BENYUAN-26.0.0](https://github.com/YucongDuan/DIKWP-ULTIMATE-ESSENCE-BENYUAN-26.0.0/commit/9832e43e129d6920ef2ffeb3aa6cd1eb359b4779) | 2 | 0 |
| [DIKWP-VERITYWEAVE-v2.0.0](https://github.com/YucongDuan/DIKWP-VERITYWEAVE-v2.0.0/commit/feeb2a6a7bdfcfdf1c7caedb3e20e05307bac512) | 6 | 0 |
| [DIKWP-VISIONLONGEVITY95](https://github.com/YucongDuan/DIKWP-VISIONLONGEVITY95/commit/0c6a62f5457eb27fb14834d72e5bf1a220691d8d) | 0 | 1 |
| [DIKWP-VISIONRESTORE95](https://github.com/YucongDuan/DIKWP-VISIONRESTORE95/commit/66e7f921f1d5254538db252a89ea6d6c7a402c4c) | 0 | 1 |
| [DIKWP-Xperience-OS-v1.0](https://github.com/YucongDuan/DIKWP-Xperience-OS-v1.0/commit/98ee8506e79453582bbc8bcf3d8120863a155b98) | 1 | 0 |
| [DIKWP-Yijing-LearnLab-2026-V1](https://github.com/YucongDuan/DIKWP-Yijing-LearnLab-2026-V1/commit/51451174c962f06c5edd532426c8678646895032) | 2 | 0 |
| [PARALLAX](https://github.com/YucongDuan/PARALLAX/commit/f16d1799ce8d68c63af05b4a2dda93cac8031484) | 1 | 0 |

[Machine-readable publication receipts and file coverage](INTERFACE_AND_AUTHORSHIP_2026-09-08.json) include all 483 repositories, their README hashes, published commits, interface paths and validation results.

## Find, evaluate and share the work

Begin with the [research guide](START_HERE.md), browse the [483-project directory](REPOSITORY_DIRECTORY.md), or choose a [contribution](COLLABORATE.md). For citation, record the project name, creator, repository and evaluated commit or release. Share the canonical project link and the example you reproduced. Follow the account for updates and star projects you use; this publication record does not claim a measured increase in attention.
