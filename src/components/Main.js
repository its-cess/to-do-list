import React from "react";

export default function Main() {
const [inputText, setInputText] = React.useState(
        {
            newItem: "",
            isDone: false
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

const [toDoItem, setToDoItem] = React.useState([])
    
const currentToDoItem = inputText.newItem


    function addItem(event) { 
       setToDoItem(prevToDoItem => {
           return [...prevToDoItem, currentToDoItem]
            }, inputText.newItem = ""
        )}
    
        const itemElements = toDoItem.map(item => 
            <li 
                value={inputText.newItem} 
                isDone={inputText.isDone}
            >
                {item}
            </li>)

    return (
        <main>
        <h1>To-Do:</h1>
        <div className="form-container">
            <form>
                <input
                    className="input-box"
                    type="text"
                    placeholder="Add Item"
                    name="newItem"
                    value={inputText.newItem}
                    onChange={handleChange}   
                >
                </input>
            </form> 
                <button 
                    type="submit"
                    className="submitButton"
                    onClick={addItem}
                >
                    Add To List
                </button>
        </div>  
        
         <div className="list-container">
            <ul>
                <li>{itemElements}</li>
            </ul>
         </div> 
    </main>                 
    )
}