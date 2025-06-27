import { Outlet } from "react-router";
import { Navbar } from "./components/Layout/Navbar"

const  App = () => {
  return (
<>
    <div className="">
    <Navbar></Navbar>
    </div>
     
     <Outlet/>
     </>

  )
}

export default App;