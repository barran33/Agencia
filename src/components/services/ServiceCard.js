import { Link } from "react-router-dom"

function ServiceCard({data, index}){
    return(
        <div 
        onMouseEnter={()=>{
            const title_element = document.getElementById(`learn`+index)
            title_element.classList.add('text-cyan-500')
            title_element.classList.remove('text-gray-600')
            
        }}
        onMouseLeave={()=>{
          const title_element = document.getElementById(`learn`+index)
          title_element.classList.remove('text-cyan-500')
          title_element.classList.add('text-gray-600')
          
      }}
        className="W-full relative p-6 h-96 lg:h-[180pm] bg-white shadow-xl hover:-translate-y-1 transition duration-300 ease-in-out">
            <div className="w-full">
                 <img src={data.img} className='w-10 h-10'/>
                <h2 className="text-xl font-semibold text-gray-900 pt-6">{data.title}</h2>
                <p className="text-lg font-regular text-gray-600 pt-3">{data.description.length > 180 ? data.description.slice(0,149):data.description}</p>
            </div>
            <div className="absolute bottom-0 left-0 p-6">
                <Link to={data.href} id={`learn`+index} className="items-end text-xl hover:text-cyan-500 font-semibold pt-6">Learn More</Link>

            </div>
        </div>
    )
}

export default ServiceCard