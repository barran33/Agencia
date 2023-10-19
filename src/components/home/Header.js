import { Link } from "react-router-dom"
import { Typewriter } from "react-simple-typewriter"

 
 function Header(){
    return(
        <main>
        <div className="relative ">
        <div className="mx-auto max-w-full xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12">
            <div>
              <div>
                <h1 className="text-4xl mt-12 font-bold tracking-tight pb-18 sm:text-center sm:text-6xl">
                Co§mic <span> </span>
                   <div className="inline-flex" style={{ color: 'cyan', fontWeight: 'bold' }}>
                      <Typewriter
                            words={[ 'Imagination!']}
                            loop={0}
                            cursor
                            cursorStyle=''
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            //onLoopDone={handleDone}
                            //onType={handleType}
                      />
                   </div>
                  
                </h1>
               
                  <ul className='flex gap-8 items-center justify-center pt-19 '>
                    <li className='inline-flex border-b-2 border-transparent hover:border-cyan-400 transition duration-300 ease-in-out'>
                        <Link to='/category/programacion' className="mt-6 text-2xl font-medium leading-8 text-gray-900 sm:text-center">
                            Programación
                        </Link>
                    </li>                   
                    <li className='inline-flex border-b-2 border-transparent hover:border-cyan-400 transition duration-300 ease-in-out'>
                        <Link to='/category/ciencia_espiritual' className="mt-6 text-2xl font-medium leading-8 text-gray-900 sm:text-center">
                           Ciencia&Espiritualidad
                        </Link> 
                    </li>
                  </ul>
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden bg-white blur-lg sm:top-[calc(100%-30rem)]">
              </div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white blur-lg lg:top-[calc(100%-45rem)] sm:top-[calc(100%-40rem)]">
              <img src="https://thumbs.dreamstime.com/z/s%C3%ADmbolo-de-la-alquimia-y-de-la-geometr%C3%ADa-sagrada-en-el-fondo-azul-de-la-acuarela-76843935.jpg" className='w-full h-full object-cover'/>
              
            </div>

            <div>     
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6903011312899073"
                    crossorigin="anonymous"></script>
            </div>
                <meta name="google-adsense-account" content="ca-pub-6903011312899073"></meta>
                
          </div>         
        </div>
      </main>
    )
 }
 export default Header
