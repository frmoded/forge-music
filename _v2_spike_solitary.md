---
type: action
english_hash: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
---

# Description

A minimal solitary pattern — kick on beats 1 and 3 of a single bar. V2 spike
test. Renders as a drum-kit score with audio playback.

## Inputs

(none)

# Recipe

Let part = Call [[play_at_beats]] with instrument=[[kick]], beats=[1, 2, 3].
[[show_score]] part.
Return part.

# Python

```python
def compute(context):
  part = play_at_beats(instrument=kick(), beats=[1, 2, 3])
  show_score(part)
  return part

```
