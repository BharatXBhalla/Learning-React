
import {useSelector,useDispatch} from 'react-redux';
import counterActions from "./actions/counter";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
     <h1>Counter {counter}</h1>
     <button onClick={()=>dispatch(counterActions.increment(3))}>+</button>
     <button onClick={()=>dispatch(counterActions.decrement())}>-</button>
     <h2>isLogged {`${isLogged}`}</h2>
    </div>
  );
}

export default App;
