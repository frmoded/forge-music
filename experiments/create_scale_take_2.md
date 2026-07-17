---
type: action
inputs: [tonic]
---

# Description

Return the major scale that starts at a given note. Give it a tonic
note name like C, G, or F# and it returns the note names of one
ascending octave of that major scale, tonic to tonic inclusive —
e.g. C gives [C, D, E, F, G, A, B, C]. Note names use music21
spelling (flats written with `-`, e.g. Bb's scale starts at B-).

## Inputs

- tonic — tonic note name string (A, B, C, ...; sharps/flats like F# or Bb allowed)

# Recipe

Let scale_notes = {{a list of the name attribute of each pitch in music21.scale.MajorScale(tonic).pitches, where tonic is a string variable holding a note name; keep all eight pitches}}.
Return scale_notes.
