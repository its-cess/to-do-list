import React from "react"

export default function List(props) {
    const [isCompleted, setIsCompleted] = React.useState(false)
    
    function toggleIsCompleted() {
        setIsCompleted(prevIsCompleted => !prevIsCompleted)
    }

    return (
        <div 
            className="done-box"
            onClick={toggleIsCompleted}>
                {
                    isCompleted ? 
                    <i className="far fa-check-square check-square"></i> 
                    : 
                    <i className="far fa-square empty-square"></i>
                }
            <li className={isCompleted ? "done" : ""}>
                {props.value}
            </li>
        </div>
    )
}