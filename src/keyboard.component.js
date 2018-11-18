import React from 'react';

import Key from './key.component'

import pitches from './pitches'

var audioCtx = new (window.AudioContext || window.webkitAudioContext)(); // define audio context

var keys = pitches.map(pitch => <Key key={pitch.name} pitch={pitch} audioCtx={audioCtx}/>)

class Keyboard extends React.Component {
	render() {
		return (
			<table>

        <thead>
          <tr>
            <td>Pitch</td>
            <td>Frequency</td>
          </tr>
        </thead>

        <tbody>
          {keys}
        </tbody>

			</table>
		)
	}
}

export default Keyboard
