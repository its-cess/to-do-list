import React from "react"

export default function List(props) {
    const [isCompleted, setIsCompleted] = React.useState(false)

    function toggleIsCompleted() {
        setIsCompleted(prevIsCompleted => !prevIsCompleted)
    }
    
    return (
        <div onClick={toggleIsCompleted}>
            <li 
                className={isCompleted ? "green" : ""}
            >
                {props.value}
            </li>
        </div>
    )
}