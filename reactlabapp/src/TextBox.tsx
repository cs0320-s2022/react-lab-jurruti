import React from 'react';

function TextBox(props: {label: string, change: React.Dispatch<string>}) {
    return (
        <div className="TextBox">
            <header className="Horoscope">
                <p> {props.label}:
                <input type={"text"} onChange={
                    (e) => props.change(e.target.value)
                }/>
                </p>
            </header>
        </div>
    );
}

export default TextBox; 