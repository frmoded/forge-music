---
type: action
---

# Description

F Shuffle — a 12-bar shuffle blues in F, one chorus. Medium tempo
(around 104 BPM to the dotted quarter, 12/8 shuffle feel). The piano
comps the standard 12-bar harmonic frame; a walking double bass
outlines each chord — root, third, fifth, then a chromatic approach
into the next bar — and the shuffle kit sits underneath: kick on
beats 1 and 3, snare answering on 2 and 4, hi-hat marking every beat.

The classic head-nodding shuffle backbone, resolved in F major.

## Inputs

(none)

# Recipe

Let harmony = Call [[form]] with key_name="F", mode_name="major", tempo_bpm=104.
Let bass = Call [[walking_bass_line]] with harmony=harmony, style="swing".
Let drums = Call [[drums_shuffle]].
Return Call [[voices_list]] with sections=[harmony, bass, drums].

# Python

```python
def compute(context):
    # form / walking_bass_line / drums_shuffle are library notes in
    # forge.music.lib; called directly instead of via context.compute.
    harmony = form(key_name="F", mode_name="major", tempo_bpm=104)
    bass = walking_bass_line(harmony, style="swing")
    drums = drums_shuffle()
    return voices(harmony, bass, drums)
```

# Dependencies

*Synced from Python. Edit the Python and regenerate, or run "Forge: Sync edges" to refresh.*

[[form]] [[walking_bass_line]] [[drums_shuffle]] [[voices_list]]
