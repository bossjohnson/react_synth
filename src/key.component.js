import React from 'react';

class Key extends React.Component {
  constructor(props) {
    super(props)

    this.style = {
      border: '1px solid black'
    }

    if (this.props.pitch.name.indexOf('#') > -1) {
      this.style.backgroundColor = 'black'
      this.style.color = 'white'
    }

    if (this.props.black) {
      console.log(this);
    }

  }

  play() {
    console.log(this.props);

    let osc = new OscillatorNode(this.props.audioCtx, {
      frequency: this.props.pitch.frequency
    })

    osc.connect(this.props.audioCtx.destination)
    osc.start()
  }

	render() {
		return (
			<tr onClick={() => {this.play()}} style={this.style}>
				<td>{this.props.pitch.name}</td>
				<td>{this.props.pitch.frequency}</td>
			</tr>
		)
	}
}

export default Key
