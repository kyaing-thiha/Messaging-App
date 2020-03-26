import React, {useState} from "react";
import "./TextArea.css"

/**
 * @param {function} onClickEnter handler when the user click "Enter" on textbox
 */

const TextArea = (props) => {
    const [textInput, setTextInput] = useState("");
    
    const clickEnterHandler = (e) => {
        if (e.key === "Enter" && textInput.trim()!==""){
            props.onClickEnter(textInput);
            setTextInput("");
        }
    }

    return(
        <div className="text-area-container">
            <input
                type="text"
                className="text-area"
                value={textInput}
                onChange={e => setTextInput(e.target.value)} 
                onKeyUp={clickEnterHandler}
            />
        </div>
    )
}

export default TextArea