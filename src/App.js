import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"
import store from './store';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Provider } from 'react-redux';
import Animated from "Animated";



function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title> Co§mIc | Software Agency</title>
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
      <Provider store={store}>
        <Router>

            <Animated/>
        </Router>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
       
