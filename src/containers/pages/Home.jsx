import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import Footer from "components/navigation/Footer"
import Header from "components/home/Header"
import Incentives from "components/home/Icentives"
import UseCases from "components/home/UseCases"
import Features from "components/home/Features"
import CTA  from "components/home/CTA"

import BlogList from "components/home/BlogList"
import { useEffect } from "react"
import TechStack from "components/home/TechStack"

function Home(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Navbar/>
            <div data-scroll-section className="pt-28">
            <div className="mx-auto max-w-1700 px-4 sm:px-6 lg:px-8">
            {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
            <div className="mx-auto max-w-1700">
                {/* Content goes here */}
                
            
            
                <Header/>
                <Incentives/>
                <UseCases/>
                <Features/>
                <CTA/>
                <TechStack/>
                
            </div>
            </div>
            
                
            </div>
            <div>     
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6903011312899073"
                    crossorigin="anonymous"></script>
            </div>
                <meta name="google-adsense-account" content="ca-pub-6903011312899073"></meta>      
             <Footer/>
           
        </Layout>
    )

    
}
export default Home 