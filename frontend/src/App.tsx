import DashBoard from "./pages/dashboard"
import { Signup } from "./pages/signup";
import { Signin } from "./pages/signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(){
   return(
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<h1>kuch bata bhai </h1>}/>
       <Route path="/signup" element={<Signup/>}/>
       <Route path="/signin" element={<Signin/>}/>
       <Route path="/dashboard" element={<DashBoard/>}/>
     </Routes>
   </BrowserRouter>
   );

}
export default App