import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleUppercaseSelected = () => {
        const textarea = document.getElementById('myBox');
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        if (start !== end) {
            const selectedText = text.substring(start, end);
            const uppercaseText = selectedText.toUpperCase();
            let newText = text.substring(0, start) + uppercaseText + text.substring(end);
            setText(newText);
            props.showAlert("Selected text converted to uppercase!", "success");
        } else {
            props.showAlert("No text selected!", "danger");
        }
    }

    const handleLowercaseSelected = () => {
        const textarea = document.getElementById('myBox');
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        if (start !== end) {
            const selectedText = text.substring(start, end);
            const lowercaseText = selectedText.toLowerCase();
            let newText = text.substring(0, start) + lowercaseText + text.substring(end);
            setText(newText);
            props.showAlert("Selected text converted to lowercase!", "success");
        } else {
            props.showAlert("No text selected!", "danger");
        }
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleDeleteSelected = () => {
        const textarea = document.getElementById('myBox');
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        if (start !== end) {
            let newText = text.substring(0, start) + text.substring(end);
            setText(newText);
            props.showAlert("Selected text deleted!", "success");
        } else {
            props.showAlert("No text selected!", "danger");
        }
    }

    const [text, setText] = useState('');

    return (
        <div className=" p-2">
            <h1 className="text-6xl font-mono mb-4 md:text-center lg:text-left">{props.heading}</h1>
            <div className="mb-3">
                <textarea
                    id="myBox"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    value={text}
                    onChange={handleOnChange}
                   
                    rows="8"
                ></textarea>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-2 text-black mb-2 text-sm font-medium">
                <button
                    // disabled={text.length === 0}
                    className="bg-indigo-400 hover:bg-indigo-500  py-2 px-4 rounded-md disabled:bg-gray-400  "
                    onClick={handleUpClick}
                >
                    Convert to Uppercase
                </button>
                <button
                    // disabled={text.length === 0}
                    className="bg-emerald-400 hover:bg-emerald-600  py-2 px-4 rounded-md disabled:bg-gray-400   "
                    onClick={handleUppercaseSelected}
                >
                    Selected Area to Uppercase
                </button>
                <button
                    // disabled={text.length === 0}
                    className="bg-sky-500 hover:bg-sky-600  py-2 px-4 rounded-md disabled:bg-gray-400   "
                    onClick={handleLoClick}
                >
                    Convert to Lowercase
                </button>
                <button
                    // disabled={text.length === 0}
                    className="bg-violet-400 hover:bg-violet-600  py-2 px-4 rounded-md disabled:bg-gray-400   "
                    onClick={handleLowercaseSelected}
                >
                    Selected Area to Lowercase
                </button>
                <button
                    // disabled={text.length === 0}
                    className="bg-green-400 hover:bg-green-600  py-2 px-4 rounded-md disabled:bg-gray-400   "
                    onClick={handleCopy}
                >
                    Copy Text
                </button>
                <button
                    // disabled={text.length === 0}
                    className="bg-yellow-400 hover:bg-yellow-600  py-2 px-4 rounded-md disabled:bg-gray-400  "
                    onClick={handleExtraSpaces}
                >
                    Remove Extra Spaces
                </button>
                <button
                    // disabled={text.length === 0}
                    className="bg-rose-400 hover:bg-rose-600  py-2 px-4 rounded-md disabled:bg-gray-400   "
                    onClick={handleDeleteSelected}
                >
                    Remove Selected Text
                </button>
                <button
                    // disabled={text.length === 0}
                    className="bg-red-400 hover:bg-red-600  py-2 px-4 rounded-md disabled:bg-gray-400   "
                    onClick={handleClearClick}
                >
                    Clear Text
                </button>
            </div>

            {/* Text Summary */}
            <div className="mt-6">
                <h2 className="text-xl font-semibold">Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>
            </div>

            {/* Text Preview */}
            <div className="mt-6">
                <h2 className="text-xl font-semibold">Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </div>
    );
}
