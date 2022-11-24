import "./style.css";

function ColorBox({ backgroundColor }){
    return (
        <div className="preview" style={{ backgroundColor }}></div>
    );
}

export default ColorBox;