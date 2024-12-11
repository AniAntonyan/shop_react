import { Header } from "./components/Header";
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { ContactPage } from "./pages/Contact";
import { NotFoundPage } from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";


export function App(){
  return(
    <div className="App">
    <Header/>

    <Routes>
     <Route path="/" element={<HomePage/>}/>
     <Route path="/about" element={<AboutPage/>}/>
     <Route path="/contact" element={<ContactPage/>}/>
     <Route path="/*" element={<NotFoundPage/>}/>

    </Routes>
    
    </div>
  )
}