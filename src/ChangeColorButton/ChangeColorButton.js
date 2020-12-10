import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ChangeColorButton = (props) => {
    const {text, color, changeColorFunction} = props;
    const onButtonClick = () => {
        changeColorFunction(color);
    }
    return (
        <div>
            <button className="btn btn-warning m-1" type="button" color={color} onClick={onButtonClick}>{text}</button>
        </div>
    );
}

export default ChangeColorButton;
