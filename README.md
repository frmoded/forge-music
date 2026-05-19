# forge-music

[TAGLINE — one sentence, e.g., "A Forge vault for composing, analyzing, and capturing music."]

## What's inside

[BRIEF_DESCRIPTION — e.g., "Action snippets that compose and arrange music
via music21, plus data snippets holding canonical references (chord
progressions, scales, templates) and captured performances. Designed for
musicians using Forge inside Obsidian."]

## Install

The easiest path is via the Forge Obsidian plugin's UI:

1. In a Forge-enabled vault, click the Forge ribbon icon.
2. If the vault has no `forge.toml`: pick "Music" in the wizard.
3. If it does: pick "Add domain to this vault…" → select "music".

The plugin will fetch this vault from the registry and install it as a
subdirectory.

For programmatic install from a snippet:

```python
context.compute("install", "forge-music")
```

Don't have Forge installed in Obsidian yet? See
[forge-client-obsidian](https://github.com/frmoded/forge-client-obsidian).

## Status

[STATUS — e.g., "Active. First-class citizen of the Forge ecosystem. Used
to develop and validate music-domain authoring patterns."]

## Contributors

[CONTRIBUTOR_LIST]

## License

Apache License 2.0 — see [LICENSE](LICENSE) and [NOTICE](NOTICE) for details.

## Part of the Forge ecosystem

- Main project: https://github.com/frmoded/forge
- Other vaults:
  - https://github.com/frmoded/forge-core
  - https://github.com/frmoded/forge-moda
