

function ChildCom (props) {


    function handleFunc(name) {
        alert(name);
    }

    return (
        <div>
            <h1>Child Component</h1>
            <ul>
                {props.items.map(item => (
                    <li key={item.id}> 
                   <h3> Name: {item.name} - Age: {item.age} </h3>
                    <button onClick={() => props.deleteItem(item.id)}>Delete</button>
                    <button onClick={() => handleFunc(item.name)}>Change</button>
                    </li>
                ))}
            </ul>
        </div>
    );


}

export default ChildCom;