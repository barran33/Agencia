import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"
import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";

import Services from "containers/pages/Services";
import Compliance from "containers/pages/Compliance";
import Specialist from "containers/pages/Specialist"
import Contact from "containers/pages/Contact";
import Blog from "containers/pages/Blog";
import Category from "containers/pages/Category";
import Search from 'containers/pages/Search';
import { AnimatePresence } from "framer-motion";
import PostDetail from "containers/pages/PostDetail";
import Optin from "containers/pages/Optin";
import OptinCTA from "containers/pages/OptinCTA";

// CORRECCIÓN DE IMPORTS
import Mind from "containers/pages/cosmovisión/mind"; 
import Aura from "containers/pages/cosmovisión/aura";
import Dental from "containers/pages/cosmovisión/dental"; // Agregado el nombre del archivo
import CosmoVisión from "containers/pages/Cosmovisión"; // Asegúrate que el archivo se llame exactamente así (C mayúscula)

import Security from "containers/pages/services/development/Security";
// Agregamos /pages/ a la ruta
import SoftwareArchitecture from "containers/pages/services/development/SoftwareArchitecture";
import AIDataIntelligence from "containers/pages/services/development/AIDataIntelligence";


function Animated(){
    const location = useLocation()
    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
            {/*Error Display*/}
            <Route path="*" element={<Error404/>}/>
            
            {/*Home Display*/}
            <Route path="/" element={<Home/>}/>

            {/* RUTAS DE SOLUCIONES (SaaS MÉDICO) */}
            <Route path="/solutions" element={<CosmoVisión/>}/> 
            <Route path="/solutions/aura" element={<Aura/>}/>
            <Route path="/solutions/mindspace" element={<Mind/>}/> 
            <Route path="/solutions/dental" element={<Dental/>}/> 

            {/* SERVICIOS */}
            <Route path="/services" element={<Services/>}/> 
            <Route path="/services/ai-intelligence" element={<AIDataIntelligence/>}/>
            <Route path="/services/security" element={<Security/>}/>  
            <Route path="/services/software-architecture" element={<SoftwareArchitecture />}/>
            {/* RESTO DE LA WEB */}
            <Route path="/compliance" element={<Compliance/>}/> 
            <Route path="/specialist" element={<Specialist/>}/> 
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/blog/:slug" element={<PostDetail/>}/>
            <Route path="/search/:term" element={<Search />} />
            <Route path="/category/:slug" element={<Category />} /> 
            <Route path="/contact" element={<Contact/>}/>   
            <Route path="/ebook" element={<Optin/>}/> 
            
            </Routes>
        </AnimatePresence>
    )
}
export default Animated