import React from "react";

export default function Header() {
    const [inputText, setInputText] = React.useState(
        {
            newItem: ""
        }
    )

    function handleChange(event) {
        const {name, value} = event.target
        setInputText(prevInputText => {
            return {
                ...prevInputText,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log("clicked")
        //click working, need to create list and conditionally render 
        //to App() when added.
    }

    return (
        <div>
            <h1>To-Do:</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className="input-box"
                    type="text"
                    placeholder="Add Item"
                    name="newItem"
                    value={inputText.newItem}
                    onChange={handleChange}
                >
                </input>
                <button className="add-btn"><i class="btn-icon fas fa-plus"></i></button>
            </form>
        </div>
    )
}