import React from "react";

export default function Main() {
const [inputText, setInputText] = React.useState(
        {
            newItem: "",
            isDone: true
        }
    )
function handleChange(event) {
    const {name, value} = event.target
    console.log(event.target)
    setInputText(prevInputText => {
        return {
            ...prevInputText,
            [name]: value
        }
    })
}

const [toDoItem, setToDoItem] = React.useState(
    JSON.parse(localStorage.getItem("toDoItem")) || [])
 
React.useEffect (() => {
    localStorage.setItem("toDoItem", JSON.stringify(toDoItem))}, [toDoItem])

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
    <div className="done-box">
        {inputText.isDone ? <i class="check-square far fa-check-square"></i>  
        : 
        <i class="empty-square far fa-square"></i> }
    </div> {item}
    </li>
)


return (
<main>
    <h1>To-Do:</h1>
    <div className="form-container">
        <form onSubmit={addItem}>
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