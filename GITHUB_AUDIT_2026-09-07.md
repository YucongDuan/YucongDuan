# GitHub portfolio audit — 7 September 2026

Verified at **2026-09-07 09:35 UTC** using the selected GitHub connector. Six search pages returned 100 + 100 + 100 + 100 + 80 + 0 public repositories, followed by one repository-metadata GET for each of the 480 unique repository IDs. No request failed or was rate limited. This was a read-only audit.

The public portfolio remains **480 repositories**. Names match the 480-repository baseline captured at 04:07 UTC: no newly added or removed repository. The latest four are still the MINEX / Continuity Ark suite created on 7 September. Profile `main` was verified at `8e102b3fb9e5d6ad1175725abe02882bfb1a104f`.

| Observed field | Fresh result | Interpretation |
|---|---:|---|
| Public repositories | 480 | All use `main`; none is a fork, archived or disabled |
| Aggregate visible stars | 1,318 | Dated attention measure; not a quality or adoption score |
| Aggregate downstream forks | 2 | Distinct from the count of repositories that are themselves forks |
| Public descriptions | 456 / 480 | 24 descriptions are absent from GitHub metadata |
| Repositories with topics | 7 / 480 | A substantial discoverability gap |
| Repositories with a homepage URL | 1 / 480 | Most sidebars lack a direct link to the public research Ports or appropriate project interface |
| Issues enabled | 480 / 480 | Current aggregate open issues and pull requests: 0 |
| Discussions enabled | 0 / 480 | A support/forum entry has not been enabled in the observed repositories |
| README language files in the profile | 13 | File existence does not establish complete translation parity |
| Profile English README | 102,145 bytes; 571 lines | The first runnable evidence appears after institutional logos, frontier-model context and a 12-category table |

Sources: [public repository directory](https://github.com/YucongDuan?tab=repositories), [profile repository metadata](https://api.github.com/repos/YucongDuan/YucongDuan), [current profile revision](https://github.com/YucongDuan/YucongDuan/commit/8e102b3fb9e5d6ad1175725abe02882bfb1a104f). The archived audit records retain the exact API responses and machine-readable summary. The follower count was not freshly queried and should retain its earlier observation date.

## Highest-priority homepage changes

1. **Put a usable first visit above the long evidence history.** Lead with a short English purpose statement and three paths: run a verified project, inspect research evidence, contribute or collaborate. Bring the three reproduced projects and engineering status above the GPT-6 context and institutional gallery. Keep the detailed citations, books, patents and historical suites in linked sections or expandable historical material.
2. **Replace the empty foundations entry.** The first representative foundations link currently points to [YucongDuan/DIKWP](https://github.com/YucongDuan/DIKWP). GitHub reports `size: 0`, and its contents endpoint explicitly returns `This repository is empty`. Use the DIKWP public Port or a verified nonempty source entry for a new visitor. The adjacent Cognitive State Equation Lab currently presents a ZIP plus README/LICENSE at its root; label it as an archive package if it remains in the first path.
3. **Use an explicit current-status document.** Separate 480 public repositories, source-expanded repositories, reproduced projects and pending source-publication work. These are different counts. Keep a dated status link near the portfolio number so unfinished publication work cannot be mistaken for 480 tested systems.
4. **Reconcile the Release with the current homepage.** The latest visible [impact-2026.08 release](https://github.com/YucongDuan/YucongDuan/releases/tag/impact-2026.08) was last updated on **26 August 2026** and still promotes a **seven-language** website. It has **zero release assets**. The main repository already has 13 README languages and a 480-repository map. A current README status page can document the new state now; do not claim the Release is updated or contains the offline archive unless that action is actually completed.
5. **Make discoverability work concrete.** Prepare accurate short descriptions for the 24 missing sidebars, a consistent small set of topics by actual project scope, and relevant public Port/homepage links. Only 7 topic-bearing repositories and 1 homepage URL are presently observable. These changes are recommendations, not completed metadata mutations.
6. **Make collaboration actionable.** Link an issue route or a short contribution guide with bounded tasks: reproduce a named command, report a failing case, improve a named translation, review a specific citation or prepare an adapter. Current issues are enabled but there is no active issue inventory visible in repository metadata. Zero issues is not evidence that support is unnecessary.

## Reproducibility evidence reconfirmed

All three observed workflows are `completed` / `success` at the exact revisions already used by the engineering report:

| Project | Exact published revision | Direct check |
|---|---|---|
| VerityWeave v2 | `acb576c6e2559f1ad792fa93e5cb8364aaad1f64` | [CI run](https://github.com/YucongDuan/DIKWP-VERITYWEAVE-v2.0.0/actions/runs/34084362258) |
| PACT | `966c5dfd11ea1a372331072a34d406494a37153b` | [CI run](https://github.com/YucongDuan/DIKWP-PACT-v0.1.0/actions/runs/34084517968) |
| MESH² | `c7a6947b66f5227141d92905cf23e6c4b0a8e50e` | [CI run](https://github.com/YucongDuan/DIKWP-MESH-/actions/runs/34084402083) |

This confirms those three workflow outcomes. It does not independently establish broader scientific claims, production effectiveness, externally enforced controls or test coverage for all 480 repositories. The new profile citation additions already distinguish independent policy writing, cross-domain bibliographic citation and source-team work; retain those distinctions when shortening the homepage.

## License and source metadata

GitHub detects Apache-2.0 in 428 repositories, MIT in 8, AGPL-3.0 in 7, GPL-3.0 in 6, BSL-1.0 in 2 and CC0-1.0 in 2. It returns `NOASSERTION` in 13 and no license object in 14. These are detection results, not a legal conclusion.

Three of the four newest source-visible repositories return `NOASSERTION`: MINEX Capability Fabric, AGI Continuity Ark and HUMAN CONTINUITY ARK SHENGZHOU 28. Their current LICENSE files are 625 / 748 / 625-byte Apache-2.0 notices with an external license link, rather than the full license text. MINEX FABRIC includes an 11,358-byte LICENSE and is recognized as Apache-2.0. This concrete file-format difference is worth reviewing while preserving the authors' declared license choice; this audit neither relicenses a repository nor decides license validity.

Direct file evidence: [MINEX Capability Fabric LICENSE](https://github.com/YucongDuan/DIKWP-MINEX-Capability-Fabric-OS/blob/main/LICENSE), [AGI Continuity Ark LICENSE](https://github.com/YucongDuan/DIKWP-AGI-Continuity-Ark-OS/blob/main/LICENSE), [SHENGZHOU LICENSE](https://github.com/YucongDuan/DIKWP-HUMAN-CONTINUITY-ARK-SHENGZHOU-28.0.0/blob/main/LICENSE). Exact response bodies and hashes are retained in the audit evidence.

The 14 repositories without detected licenses and all 13 `NOASSERTION` repositories are listed individually in the archived audit summary. A missing GitHub license object can coexist with licensing inside a ZIP or an unrecognized root file. Do not describe those repositories as unlicensed without inspecting their actual distribution.

GitHub currently reports primary language Python for 22 repositories, HTML for 21, and no primary language for 437. `language: null` is **not** evidence of ZIP-only distribution. Ongoing source publication and GitHub's asynchronous language analysis also make this a changing observation. Use the source-import receipts and explicit root audit for source-visibility counts.

## 中文摘要

此次逐一核验了 480 个公开仓库，仓库名单没有新增或减少，累计可见 Star 为 1,318。主要优化机会已经从“增加数量”转向“让访问者找到可用入口”：把三个已复现项目前置、替换空仓库入口、将长篇证据与历史材料分层展示，并单列当前工程状态。24 个仓库缺少 GitHub 简介，仅 7 个有 Topics、1 个有主页链接；这些是可进一步改善的发现能力缺口。现有 Release 仍写七语且没有附件，不能将它描述为已经更新到当前十三语版本或已包含离线包。
