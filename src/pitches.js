// fn = f0 * (a)^n
// where
// f0 = the frequency of one fixed note which must be defined. A common choice is setting the A above middle C (A4) at f0 = 440 Hz.
// n = the number of half steps away from the fixed note you are. If you are at a higher note, n is positive. If you are on a lower note, n is negative.
// fn = the frequency of the note n half steps away.
// a = (2)1/12 = the twelth root of 2 = the number which when multiplied by itself 12 times equals 2 = 1.059463094359...

const names = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
  numberOfOctaves = 8

class Pitch {
  constructor(name, octave) {
    this.name = name + octave

    const a = Math.pow(2, (1/12))
    let n = distanceFromA4(name, octave)

    this.frequency = 440 * Math.pow(a, n)
  }
}

function distanceFromA4(name, octave) {
  let nameIndex = names.indexOf(name) - names.indexOf('A')

  let octaveDiff = octave - 4

  return nameIndex + octaveDiff * 12
}


let pitches = []

for (let octave = 0; octave <= numberOfOctaves; octave++) {

  pitches = pitches.concat(names.map(name => {
    return new Pitch(name, octave)
  }))

}

export default pitches
