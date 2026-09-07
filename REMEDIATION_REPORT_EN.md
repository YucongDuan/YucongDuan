# DIKWP source distribution and reproducibility engineering report

Generated: 2026-09-07T09:58:56.292119+00:00. This report is rendered from publication, execution and delivery receipts.

**3 priority projects have recorded public commits; 3 projects have 140 passed checks from executed suites. Bulk-queue publication: 32/441.**

## Published projects and executed evidence

| Project | Exact published commit | CI | Executed local checks |
| --- | --- | --- | ---: |
| VerityWeave | [acb576c6e255](https://github.com/YucongDuan/DIKWP-VERITYWEAVE-v2.0.0/commit/acb576c6e2559f1ad792fa93e5cb8364aaad1f64) | [success](https://github.com/YucongDuan/DIKWP-VERITYWEAVE-v2.0.0/actions/runs/34084362258) | 116 |
| PACT | [966c5dfd11ea](https://github.com/YucongDuan/DIKWP-PACT-v0.1.0/commit/966c5dfd11ea1a372331072a34d406494a37153b) | [success](https://github.com/YucongDuan/DIKWP-PACT-v0.1.0/actions/runs/34084517968) | 13 |
| MESH² | [c7a6947b66f5](https://github.com/YucongDuan/DIKWP-MESH-/commit/c7a6947b66f5227141d92905cf23e6c4b0a8e50e) | [success](https://github.com/YucongDuan/DIKWP-MESH-/actions/runs/34084402083) | 11 |

VerityWeave now checks runtime output against the original input, including per-action human gates, reversibility, expiry and procedural safeguards. A copied PASS marker does not make a tampered result valid. Missing appeal/correction channels produce a non-executing hold. Python and the four offline HTML copies were updated together.

PACT exposes source, tests and examples while preserving the original archive and licenses, with a reproduction entry and CI. MESH² exposes its source and fixes the SciPy dependency missing from the prior clean installation; analysis, dashboards, routing and negative hierarchy fixtures are regenerated against the pinned dependency set.

Unified receipt: `receipts/postpublication-integration.json`, dated 2026-09-07T05:01:14.216090+00:00, status `PASS`. Counts come from actual suite execution. VerityWeave's JavaScript checks run in Node; they are not a complete browser rendering or device-compatibility test. Bounded models and local fixtures do not establish universal claims about arbitrary real systems.

| Project | Source files in receipt | Source SHA-256 in receipt | Run status |
| --- | ---: | --- | --- |
| VerityWeave | 113 | `e3866a60ec81337c6d675cb77da03aff7872080d9261c59119060d615e6f5667` | PASS |
| PACT | 88 | `1779a3243d1cbe119ed0e8446364f6594683719e408efb9c1dedc92444ef3402` | PASS |
| MESH² | 67 | `97749c474fafa0c72abd2f1bc5d061eae28a2926a43645c7db4185ac794d089f` | PASS |

These are identified byte snapshots. File counts are not feature counts; test success is not certification. Subsequent code changes need corresponding new execution evidence.

## Portfolio scope and current bulk state

The repository assignment accounts for 480 unique records: 441 bulk repositories + 3 priority repositories + 36 remaining snapshots. Inventory match: True; disjoint groups: True. Final delivery manifest records: metadata entries：480; repositories with retained original archives：478; repositories with included source views：479; empty repositories：1; repositories with excluded payloads：0; excluded files：0. Source/archive coverage is distinct from offline runtime verification.

Initial root audit: 2026-09-07T04:21:25.511182+00:00.

| Initial root classification | Count |
| --- | ---: |
| `docs_or_unknown` | 11 |
| `source_visible` | 17 |
| `supplementary_zip_with_source` | 8 |
| `unverified` | 1 |
| `zip_only_root` | 443 |

Directory names, missing language statistics and ZIP presence are not software-quality or reproducibility proofs. VerityWeave already had visible source; its principal issue was runtime validation. PACT and MESH² belonged to the original ZIP-only queue. Current individual preparation receipts for the remaining queue are shown below; recorded bulk publication is separately **32/441**.

| Individual preparation state | Count |
| --- | ---: |
| `PREPARED_DOCUMENTATION_ONLY` | 3 |
| `PREPARED_SOURCE_UNTESTED` | 438 |

Counts are read from individual receipts and may change while preparation runs. A partial progress log is not used as the final delivery manifest. Blocked, incomplete, credential-review and unprepared entries are not counted as completed source remediation. Portable path mappings, Git-metadata exclusions and inert workflow placement remain explicit in provenance records.

## Remaining pinned snapshots

`snapshot-rest/summary.json` records 36 entries with counts `{"SNAPSHOT_DOCUMENTS_UNTESTED": 10, "EMPTY_REPOSITORY_VERIFIED": 1, "SNAPSHOT_SOURCE_UNTESTED": 24, "SNAPSHOT_SOURCE_UNTESTED_PORTABLE_MEMBER_VIEW": 1}`. Retained original ZIP bytes: 74606389. Snapshot hash verification: `PASS`, checking 35 original archives and 4662 payload hashes.

`YucongDuan/DIKWP` was checked through repository and branch APIs and is a public empty repository; there is no branch or source commit to archive. MNEMOGENESIS84 accidentally embeds a roughly 930-byte README paragraph in its upstream directory name. The original ZIP, member bytes and original paths are retained; content-addressed filenames provide a reversible portable view, and the unique nested source archive and demo capsule were checked with unchanged extraction limits. This recovery does not claim that the upstream malformed path was repaired.

## Distinguish bytes, layout and execution

1. **Byte coverage:** original archives or files are actually retained with hashes; successful extraction is a separate question.
2. **Browsable layout:** a source view exists with provenance, licenses and explicit exclusions; dependencies and execution may still be unverified.
3. **Execution evidence:** a particular revision ran specified suites and artifact reproduction in a recorded environment; the result cannot be assigned to other repositories or later revisions.

Preserve manifest exclusion flags such as `excluded_payload_repositories` and `excluded_files`. Credentials, special files or unresolved archive structures may require metadata-only coverage; a phrase such as “complete portfolio” must not conceal an excluded payload. `NOT_RUN` means no execution evidence, not a failure and not a pass.

## Offline entry and platform limits

Open `catalog/index.html` to locate projects. Read `integration/START_HERE.md` before reproducing the three priority systems:

```bash
python integration/reproduce.py --base projects --output integration/receipts/local.json
```

VerityWeave and PACT core Python suites use the standard library; VerityWeave JavaScript checks require Node. MESH² dependencies were installed with `--no-index` and exercised in a clean Linux x86_64 / CPython 3.12 environment; the Linux wheel directory contains 22 wheels. Windows CPython 3.12 evidence is `DOWNLOADED_ONLY_NOT_RUNTIME_TESTED`: 23 wheels, dependency closure complete `True`, Windows runtime execution `False`. Downloaded wheels are not a passed Windows execution test.

These results cover the named projects and environments. Saving all source bytes does not supply every Python/Node runtime, dependency, model weight, database, browser component or external API used by all repositories. A standalone site source copy has its own build and deployment requirements.

## Invariants and real-world limits

`PASS` means explicit local predicates passed on the current input/output; `FAIL` rejects invalid output with diagnostics; `NOT_VERIFIED` applies to actual authority, external execution, operational appeal channels and real-world outcomes without direct evidence. A caller's declared channel is distinct from a channel the system recommends establishing. Static self-assessment is not certification. Four external controls remain `proposal_only`; passing local tests does not establish real-world enforcement.

## Direct sources and reusable entry points

- [VerityWeave: exact public revision](https://github.com/YucongDuan/DIKWP-VERITYWEAVE-v2.0.0/tree/acb576c6e2559f1ad792fa93e5cb8364aaad1f64) · [CI run](https://github.com/YucongDuan/DIKWP-VERITYWEAVE-v2.0.0/actions/runs/34084362258)
- [PACT: exact public revision](https://github.com/YucongDuan/DIKWP-PACT-v0.1.0/tree/966c5dfd11ea1a372331072a34d406494a37153b) · [CI run](https://github.com/YucongDuan/DIKWP-PACT-v0.1.0/actions/runs/34084517968)
- [MESH²: exact public revision](https://github.com/YucongDuan/DIKWP-MESH-/tree/c7a6947b66f5227141d92905cf23e6c4b0a8e50e) · [CI run](https://github.com/YucongDuan/DIKWP-MESH-/actions/runs/34084402083)
- [GitHub portfolio](https://github.com/YucongDuan?tab=repositories)
- [Public DIKWP empty-repository metadata](https://api.github.com/repos/YucongDuan/DIKWP) · [branches](https://api.github.com/repos/YucongDuan/DIKWP/branches)
- [Source and reproduction catalog](catalog/README.md) · [machine-readable catalog](catalog/CATALOG.json)
- [Engineering status](ENGINEERING_STATUS.md) · [Chinese report](REMEDIATION_REPORT.md) · [English report](REMEDIATION_REPORT_EN.md)

The report describes the cited receipts at stated times. Re-run `profile/refresh_engineering_reports.py` after final delivery and publication receipts change; editing displayed counts is not an evidence update.
