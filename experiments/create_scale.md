---
type: action
---

# Description

Builds the major scale starting on a given tonic. Give it a note
name like C, G, or F# and it returns the note names of one ascending
octave of that major scale, ending back on the tonic — e.g. C gives
[C, D, E, F, G, A, B, C].

## Inputs

- note — tonic note name (A, B, C, ..., sharps/flats like F# or Bb allowed)

# Recipe

Let sc = the music21 major scale whose tonic is note.
Return the list of note names of one ascending octave of sc, from the tonic up to and including the tonic an octave above.
