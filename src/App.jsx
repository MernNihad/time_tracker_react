import { useState } from "react";
import Profile from "./components/Profile";
import SmallProfile from "./components/SmallProfile";
import data from "./data.json";

function App() {

  const [values,setValues] = useState('daily')

  const callback =(event)=>{
    setValues(event)
  }

  return (
    <div className="App">
      <Profile callback={callback} />
      <div className="right-section"  >
        {
          data.map((item,index)=>{
            return(
              <SmallProfile values={values}  item={item} key={index} />
            )
          })
        }


      </div>
    </div>
  );
}

export default App;
