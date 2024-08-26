import { Component } from "react";

export default class Placar extends Component {
    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        return (
            <div className="cont">
                <div className="name">{this.props.nome || ""}</div>
                <div className="box">
                    <p id={this.props.id} className="pont">0</p>
                </div>
                <div className="buttons">
                    <button className="btnPont" type="button" onClick={ () => { addPont(this.props.id) } }>+</button>
                    <button className="btnPont" type="button" onClick={ () => { removePont(this.props.id) } }>-</button>
                </div>
            </div>
        )
    }
}


function addPont (id) {
    const pont = document.getElementById(id);
    if (pont !== null) {
        pont.innerText = parseInt(pont.textContent) + 1;
    }
}

function removePont (id) {
    const pont = document.getElementById(id);
    if (pont !== null) {
        pont.innerText = parseInt(pont.textContent) - 1;
    }
}