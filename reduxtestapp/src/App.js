
import './App.css';
import {useDispatch, useSelector} from  "react-redux"
import { fetchdata } from './setupRedux/TestSlice';


function App() {
    const dispatch = useDispatch();
    const data = useSelector((state)=>state.test.data)
    console.log(data);
    function handleClick (){
       dispatch(fetchdata());
    } 
  return (
    <div className="App">
      <button onClick={handleClick}>fetch Data</button>
      {data && data.map((item)=>{
        return(
          <>
            <h1>{item.title}</h1>
          </>
        )
      })}
    </div>
  );
}

export default App;
