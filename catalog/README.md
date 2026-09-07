# DIKWP source and reproduction catalog

[Open the offline catalog](index.html) · [中文说明](README.zh-CN.md) · [Structured records](CATALOG.json)

This snapshot indexes **480 repositories**. It records **0 repositories with included local files**, **35 published updates**, and **3 projects with successful executed test suites (140 checks)**. These groups overlap. Generated: 2026-09-07T09:51:41.468540+00:00.

Open `index.html` directly in a browser. No web server, account, network connection, package installation or external assets are needed for this catalog. Search by repository name, original description or primary programming language. Filter by source visibility, source preparation, publication, documents-only inspection, incomplete inspection, recorded tests or local availability. GitHub links require connectivity when followed.

## Read the evidence correctly

- **Public source visible**: source markers existed in the initial root audit, or a subsequent source publication commit is recorded. Directory names do not establish quality.
- **Source prepared locally**: archive source was prepared, or a priority source tree is included. Preparation does not mean its code was executed.
- **Source update published**: a receipt includes the repository, an explicitly published status and a consistent 40-character commit. A documents-only publication remains labelled documents-only.
- **Documents only**: inspected archives were classified as documentation-only. The initial `docs_or_unknown` root classification remains uncertain and is not silently promoted to this category.
- **Tests run with recorded results**: all configured suites in the supplied local run receipt passed with nonzero counts and no skipped tests. This covers only the recorded version and suites. Browser checks performed in Node are not full browser-rendering tests.
- **Tests not run**: no execution evidence is available in this work. Archived reports, test filenames, passing status constants and successful source publication are not used as substitute test results.
- **Local files included**: a project directory actually exists under the bundle root at generation time. A complete repository index is not a complete source bundle.
- **Public empty repository verified**: the connected GitHub repository and branch checks found no branch or source commit. An empty repository has a metadata entry, not an invented source ZIP.

Open each repository's evidence panel for its initial exact revision, preparation state, published commit, CI link when provided, local entry and test receipt. The three configured priority projects are VerityWeave, PACT and MESH²; bulk source migrations are not assigned their test results.

## Rebuild after source or publication changes

The builder uses Python's standard library and does not execute project code or request network resources:

```bash
python catalog/build_catalog.py --source-root . --bundle-root .
```

`--source-root` contains `portfolio_inventory.json`, `root_inventory.json`, optional `bulk/repositories/*/manifest.json`, `snapshot-rest/repositories/*/SNAPSHOT.json`, recursive `publication/**/*.json` receipts and test receipts. `--bundle-root` is the actual delivered directory. Output is always `BUNDLE/catalog/`; local links are relative to that layout. For a staged package, set the two roots separately. Only actual eligible source directories below `BUNDLE/projects`, `BUNDLE/repos`, `BUNDLE/bulk/repositories/NAME/publish` or the verified `snapshot-rest/repositories/NAME` source views receive local links. Blocked snapshots and credential-review cases do not receive local source/archive links.

By default, test evidence is read from `receipts/final-integration.json` and `receipts/postpublication-integration.json` when present. Supply `--test-receipt RELATIVE_PATH` one or more times to select other unified harness receipts. The latest dated receipt wins per project. Publication receipts must use `repository`, `status` beginning with `PUBLISHED`, `commit` and an optional matching `commit_url`. Nested bulk receipts are supported. The builder does not infer current remote state beyond those receipts.

Rebuild at the final bundle location so its local-file count and relative links describe what is actually delivered. Rebuilding updates the counts; editing displayed counts by hand does not update evidence.
