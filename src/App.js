import React from "react";
import List from "./components/List";

export default function App() {
  const [formData, setFormData] = React.useState(
    {
      addItem: ""
    }
  )
  
  function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  const [list, setList] = React.useState([])
  const newListItem = formData.addItem

  function addToList(event) {
    event.preventDefault()
    setList(prevList => {
      return [...prevList, newListItem]
    }, formData.addItem=""
    )
  }

  const listElements = list.map(item =>
    <List 
      value={item}
    />
    )

  return (
    <main className="container">
      <h1>To-Do:</h1>
        <form className="form-container">
          <input
            className="input-box"
            type="text"
            placeholder="Add Item"
            name="addItem"
            value={formData.addItem}
            onChange={handleChange}>
          </input>
          <button 
            className="submitButton"
            onClick={addToList}>Add To List
          </button>
        </form>
      
          <div className="list-container">
              <ul>
                {listElements}
              </ul>
          </div>
      
    </main>
    )
}

