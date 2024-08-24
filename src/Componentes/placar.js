import { Component } from "react";

export default class Placar extends Component {
    constructor () {
        super();
    }

    render() {
        return (
            <div className="cont">
                <div className="box">
                    <p id="pont" className="pont">0</p>
                </div>
                <div className="buttons">
                    <button className="btnPont" type="button" onClick={addPont}>+</button>
                    <button className="btnPont" type="button" onClick={removePont}>-</button>
                </div>
            </div>
        )
    }
}


const addPont = () => {
    const pont = document.getElementById('pont');
    if (pont !== null) {
    pont.innerText = parseInt(pont.textContent)+1;
    }
}

const removePont = () => {
    const pont = document.getElementById('pont');
    if (pont !== null) {
        pont.innerText = parseInt(pont.textContent)-1;
    }
}