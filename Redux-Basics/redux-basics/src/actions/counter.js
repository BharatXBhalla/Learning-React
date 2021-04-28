const increment = ()=>{
    return {
        type : 'INCREMENT'
    }
}

const decrement = () =>{
    return {
        type : 'DECREMENT'
    }
}
let counterActions={
    increment,
    decrement
}

export default counterActions;