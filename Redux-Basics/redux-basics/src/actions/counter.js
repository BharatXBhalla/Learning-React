const increment = (steps=1)=>{
    return {
        type : 'INCREMENT',
        payload : steps
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