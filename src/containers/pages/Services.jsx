import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import Footer from "components/navigation/Footer"
import Header from "components/services/Header"
import ServicesList from "components/services/ServicesList"
import coding_img from 'assets/img/services/code.png' 
import { useEffect } from "react"
import { Helmet } from "react-helmet-async"

const posts_software = [
  {
      title: 'Desarrollo Web',
      img: 'https://bafybeibec2v5zu5a75qvm4z3q7g3llfno3jjvihcvs7l53d6ogbxd3yrb4.ipfs.w3s.link/progra.png',
      href: '/servicios/desarrollo_web',
      category: { name: 'Programaciòn', href: '#' },
      description:
        '¡Da vida a tus ideas con el servicio profesional y peronalizado de desarrollo web  que tenemos en Co§mic Imagination! ',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      
      readingTime: '11 min',
      author: {
        name: 'Daniela Metz',
        href: '#',
        
      },
    },
    {
      title: 'Ciber Seguridad',
      img: 'https://bafybeidmsk3satfw5ehwtsvosaa7kjypq4gaid3qc4t5suf267xmmzi7ku.ipfs.w3s.link/codificacion.png',
      href: '/servicios/security',
      category: { name: 'Ciber Security', href: '#' },
      description:
        '¡Protege tu empresa de amenazas cibernéticas con los servicios de seguridad informatica de Co§mic Imagination!',
      date: 'Jun 01, 2023',
      datetime: '2020-03-10',
      imageUrl:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '4 min',
      author: {
        name: 'Brenna Goyette',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Marketing',
      img: 'https://bafybeicrvnzqkhakdhkqf4blekpxmbl22hu2gpttsvpo2tmzb34eicumku.ipfs.w3s.link/marketing-online.png',
      href: '/servicios/marketing',
      category: { name: 'Marketing', href: '#' },
      description:
      '¡Impulsa tu marca al éxito con los servicios de marketing de vanguardia de Co§mic Imagination.!',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '6 min',
      author: {
        name: 'Roel Aufderehar',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ]

  
function Services(){
      useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
             <Helmet>
                <title>Co§mic|Services</title>
                <meta name="description" content="Agencia de Software , Ciencia y Espiritualidad. Creamos paginas web y desarrollamos aplicaciones unicas con esencia y autenticidad" />
                <meta name="keywords" content='Agencia de software, desarrollo de WebApps' />
                <meta name="robots" content='all' />
                <link rel="canonical" href="https://www.cosmic-imagination.com/" />
                <meta name="author" content='Cosmic_Imagination' />
                <meta name="publisher" content='Cosmic_Imagination' />
                {/* Social Media Tags */}
                <meta property="og:title" content='Co§mIc | Software Agency' />
                <meta property="og:description" content='Agencia de Software , Ciencia y Espiritualidad. Creamos paginas web y desarrollamos aplicaciones unicas con esencia y autenticidad' />
                <meta property="og:url" content="https://www.cosmic-imagination.com/" />
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
            <div className="mx-auto max-w-1700 px-4 sm:px-6 lg:px-8">
              {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
              <div className="mx-auto max-w-1700">
                {/* Content goes here */}
                <Header/> 
                <div className="py-12 bg-black">

                </div>
                <ServicesList posts={posts_software} section_title={'Software and Product Development'}/> 
                
                </div>
                </div>               
            </div>      
             <Footer/>
           
        </Layout>
    )

    
}
export default Services