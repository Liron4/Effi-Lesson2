"use client";

function ExpenseItemTable (props) {
    
    
    
    return (
        <div>
        <img src={props.flag} 
        alt={props.name} 
        style = {{
            width: '200px',
            height: '200px',
            margin: '10px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            objectFit: 'cover' 

        }} />
        <div> {props.name} </div>
        </div>
    )
}

export default ExpenseItemTable;