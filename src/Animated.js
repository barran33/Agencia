import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"
import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";

import Services from "containers/pages/Services";
import About from "containers/pages/About";
import Specialist from "containers/pages/Specialist"
import Contact from "containers/pages/Contact";
import Blog from "containers/pages/Blog";
import Category from "containers/pages/Category";
import Search from 'containers/pages/Search';
import { AnimatePresence } from "framer-motion";
import PostDetail from "containers/pages/PostDetail";
import Optin from "containers/pages/Optin";
import OptinCTA from "containers/pages/OptinCTA";
import Universal from "containers/pages/cosmovisión/universal";
import Cientifica from "containers/pages/cosmovisión/científica";
import Espiritual from "containers/pages/cosmovisión/espiritual";
import CosmoVisión from "containers/pages/Cosmovisión";
import Security from "containers/pages/services/development/Security";
import DesarrolloWeb from "containers/pages/services/development/desarrollo_web";
import Marketing from "containers/pages/services/development/Marketing";
import ads from 'containers/pages/Ads/ads.txt'

function Animated(){
    const location = useLocation()
    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
            {/*Error Dsiplay*/}
            <Route path="*" element={<Error404/>}/>
            {/*Home Disply*/}
            <Route path="/" element={<Home/>}/>
            <Route path="/cosmovisión" element={<CosmoVisión/>}/> 
            <Route path="/cosmovisión/universal" element={<Universal/>}/> 
            <Route path="/cosmovisión/científica" element={<Cientifica/>}/> 
            <Route path="/cosmovisión/espiritual" element={<Espiritual/>}/> 
            <Route path="/servicios/" element={<Services/>}/> 
            <Route path="/servicios/marketing" element={<Marketing/>}/>
            <Route path="/servicios/security" element={<Security/>}/>  
            <Route path="/servicios/desarrollo_web" element={<DesarrolloWeb/>}/> 
            <Route path="/nosotros" element={<About/>}/> 
            <Route path="/especialistas" element={<Specialist/>}/> 
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/blog/:slug" element={<PostDetail/>}/>
            <Route path="/search/:term" element={<Search />} />
            <Route path="/category/:slug" element={<Category />} /> 
            <Route path="/contacto" element={<Contact/>}/>   
            <Route path="/ebook" element={<Optin/>}/> 
            <Route path="/ebook/training" element={<OptinCTA />} />
            <Route path="/ads.txt" element={<ads.txt/>}/> 
            
            </Routes>
        </AnimatePresence>

    )
}
export default Animated

