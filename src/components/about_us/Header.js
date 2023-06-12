import { Link } from "react-router-dom"
import { Typewriter } from "react-simple-typewriter"
 
 function Header(){
    return(
        <main>
        <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-full xl:mx-12 xl:pt-40 xl:pb-40 lg:pt-40 lg:pb-48 pt-24 pb-12">
            <div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight pb-6 sm:text-3xl">
                En Cosmic Imagination, somos una empresa de software con una visión audaz y trascendental. Nos apasiona la exploración y la integración del conocimiento científico y espiritual para contribuir al bienestar del cosmos en general.
                </h1>
                <p className="mt-6 text-xl leading-9 text-gray-900 max-w-3xl ">
                
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
 }
 export default Header