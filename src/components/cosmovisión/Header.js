import { Link } from "react-router-dom"
import { Typewriter } from "react-simple-typewriter"
 
 function Header(){
    return(
        <main>
        <div className="relative ">
        <div className="mx-auto max-w-full xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12">
            <div>
              <div>
                <h1 className="text-5xl font-bold text-cyan-400 tracking-tight pb-18 sm:text-6xl">
                Co§moVisión
                </h1>
                <p className="mt-12 text-2xl leading-8 text-gray-300 ">
                  Cietífica, Espiritual, y Universal de Nuestra Empresa...
                </p>
                
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-black blur-lg lg:top-[calc(100%-45rem)] sm:top-[calc(100%-40rem)]">
              <img src="https://i.ibb.co/rfTsMsvT/cosmic39.jpg" className='w-full h-full object-cover'/>
            </div>
            </div>
          </div>
        </div>
      </main>
    )
 }
 export default Header