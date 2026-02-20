
import axios from "axios"
import MainComponent from "./components/MainComponent"
import NavbarMeme from "./components/NavbarMeme"
import React, { useEffect } from "react"


function App() {
  const [starWarsData, setStarWarsData] = React.useState(null)
  console.log("rendered")
  async function fetchData() {
    const data =await axios.get('https://swapi.dev/api/people/1');
    setStarWarsData(data);
  }
  useEffect(()=>{
      fetchData();
  },[])
  
  return (

    <div className="" >

      <NavbarMeme/>
      <MainComponent/>
    </div>
  )
}

export default App