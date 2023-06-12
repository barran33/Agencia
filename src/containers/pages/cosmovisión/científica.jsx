import Definition from "components/cosmovisión/científica/Definition"
import Header from "components/cosmovisión/científica/Header"
import ImgGrid from "components/cosmovisión/científica/ImgGrid"
import Solution from "components/cosmovisión/científica/Solution"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"

function Científica(){
    return(
        <div>
            <Layout>
               < Navbar/>
               <div className="pt-28">
               <div className="mx-auto max-w-1700 px-4 sm:px-6 lg:px-8"> 
                    {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                    <div className="mx-auto max-w-1700">
                        {/* Content goes here */}
               
                <Header/>
                <Definition/>
                <Solution/>
                <ImgGrid/>
                <div className="">
                        <div className="mx-auto max-w-1700 py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            <span className="block">Ready to dive in?</span>
                            <span className="block text-cyan-500">Start your free trial today.</span>
                            </h2>
                            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                            <div className="inline-flex rounded-md shadow">
                                <a
                                href="#"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-cyan-500 px-5 py-3 text-base font-medium text-white hover:bg-cyan-600"
                                >
                                Get started
                                </a>
                            </div>
                            <div className="ml-3 inline-flex rounded-md shadow">
                                <a
                                href="#"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-cyan-600 hover:bg-cyan-50"
                                >
                                Learn more
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </Layout>
           
        </div>
    )
}
export default Científica