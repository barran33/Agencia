import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import Footer from "components/navigation/Footer"
import { useEffect } from "react"
import Header from "components/Careers/Header"
import Testimonial from "components/Careers/Testimonial"
import Features from "components/Careers/Features"
import PositionsList from "components/Careers/PositionList"
import { Helmet } from "react-helmet-async"
import TechStack from "components/Careers/TechStack"

function Careers(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Helmet>
                <title>Epecialistas</title>
                <meta name="description" content="Agencia de Software , Ciencia y Espiritualidad. Creamos paginas web y desarrollamos aplicaciones unicas con esencia y autenticidad" />
                <meta name="keywords" content='Agencia de software, desarrollo de WebApps' />
                <meta name="robots" content='all' />
                <link rel="canonical" href="https://www.CosmicImagination.com/" />
                <meta name="author" content='Cosmic_Imagination' />
                <meta name="publisher" content='Cosmic_Imagination' />
                {/* Social Media Tags */}
                <meta property="og:title" content='Co§mIc | Software Agency' />
                <meta property="og:description" content='Agencia de Software , Ciencia y Espiritualidad. Creamos paginas web y desarrollamos aplicaciones unicas con esencia y autenticidad' />
                <meta property="og:url" content="https://www.CosmicImagination.com/" />
                <meta property="og:image" content='https://thumbs.dreamstime.com/z/s%C3%ADmbolo-de-la-alquimia-y-de-la-geometr%C3%ADa-sagrada-en-el-fondo-azul-de-la-acuarela-76843935.jpg' />

                <meta name="twitter:title" content='Co§mIc | Software Agenc' />
                <meta
                    name="twitter:description"
                    content='Agencia de Software , Ciencia y Espiritualidad. Creamos paginas web y desarrollamos aplicaciones unicas con esencia y autenticidad'/>
                
                <meta name="twitter:image" content='https://thumbs.dreamstime.com/z/s%C3%ADmbolo-de-la-alquimia-y-de-la-geometr%C3%ADa-sagrada-en-el-fondo-azul-de-la-acuarela-76843935.jpg' />
                <meta name="twitter:card" content="summary_large_image" />
            
            </Helmet>
            <Navbar/>
            <div className="pt-28">
                 <Header/>
                 <Testimonial/>
                 <div className="">
                 <div className="">
       </div>            
       <TechStack/>
    </div>
            </div>   
            
            <PositionsList/>  
             <Footer/>
           
        </Layout>
    )

    
}
export default Careers