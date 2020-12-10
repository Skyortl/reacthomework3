import React, { Component } from "react";

class ChangeColorInput extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.color);
        this.state = {inputValue: this.props.color};
      }
    render() {
    const onInputChange = (event) => {
        if(event.target.value >= 0 && event.target.value <= 255)
        {
            this.setState({inputValue: event.target.value});
            this.props.changeColor(event.target.value);
        }
    };
    return (
      <div>
        <input style={{width:"70px"}} className="form-control" type="number" onChange={onInputChange} value={this.state.inputValue}/>
      </div>
    );
  }
}

export default ChangeColorInput;
