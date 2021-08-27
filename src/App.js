import "../src/css/index.css"
import Nav from "../src/components/Nav"
import "../src/css/commonStyles.css"
import logo from "../src/images/logo.png"
import MenuPage from "./pages/menuPage"
import {useState,useEffect} from "react"
import LoadingScreen from "./pages/loadingScreen"
import Footer from "../src/components/footer"
import React from "react"

const App = () => {
const [isLoading,setIsLoading] = useState(true)

useEffect (() => {
  setIsLoading(false)
})

  return (
    <>
    {isLoading ? <LoadingScreen/> : [<Nav/>,<MenuPage/>,<Footer/>]}
    </>
  );
};

export default App;
