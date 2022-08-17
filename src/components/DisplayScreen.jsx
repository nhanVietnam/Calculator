import "./displayscreen.css";

const DisplayScreen = (props) => {
    const {result,expression} = props;
    return ( 
        <div className="calculator__screen">
            <p className="calculator__screen--top">{expression}</p>
            <p className="calculator__screen--bottom">{result}</p>
        </div>
     );
}
 
export default DisplayScreen;