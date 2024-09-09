import {Routes, Route} from "react-router-dom";
import ServicesPage from "./app/Pages/Services/ServicesPage";


function App() {

  return (
    <>
      <div className=" text-red-700">
    <Routes>
      <Route path="/" element={<ServicesPage />} />
    </Routes>
      
    </div>
    </>
  )
}

export default App
