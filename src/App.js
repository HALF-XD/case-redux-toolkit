import { useDispatch, useSelector } from 'react-redux'
import { add, addAsync, pus, del } from './store/modules/counter';

function App() {
  const dispatch = useDispatch()
  const { count, list } = useSelector(state => state.counter)
  return (
    <div>
      <span> 0---count: {count} </span>
      <button onClick={() => { dispatch(add()) }}> add </button>
      <button onClick={() => { dispatch(addAsync()) }}> addAsync </button>
      <ul>
        <li>
          <button onClick={() => { dispatch(pus()) }}> pus </button>
          <button onClick={() => { dispatch(del()) }}> del </button>
        </li>
        {list.map((item, i) => (<li key={i} onClick={() => { dispatch(del(i)) }}> {item} </li>))}
      </ul>
    </div>
  );
}

export default App;
