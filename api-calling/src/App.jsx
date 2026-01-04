import axios from 'axios'
import { useEffect, useState } from 'react';

 const App = () => {
  let [api,setApi] = useState([]);

useEffect(function() {
  const getApi = async () => {
const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  
  setApi(response.data);
  console.log("apicsdf ", api);
  }
  getApi();
},[]);

  useEffect(() => {
    console.log("Updated API:", api);
  }, [api]);


  
  return (
    <div>
      {api.map((e)=> {
        return (
          <div class="card">
            <h1>{e.name}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default App
