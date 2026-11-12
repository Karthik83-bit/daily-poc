import { useState } from "react";

interface TextAreaWithCounterProps {

}

export function TextAreaWithCounter(props: TextAreaWithCounterProps) {
    const [areaText, setareaText] = useState("");
    const count = areaText.length

    return (
        <div>
            <textarea
                value={areaText}
                onChange={(e) => {
                    if (e.target.value.length <= 300) {
                        setareaText(e.target.value)
                    }
                }}
                style={{
                    minWidth: "300px",
                    minHeight: "180px"
                }}
            />
            <div style={{ display: "flex", alignItems: "flex-end", width: "100%" }}>
                <p>{`${count}+/300`}</p>
            </div>
        </div>
    );
}
