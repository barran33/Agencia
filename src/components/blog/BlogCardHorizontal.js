import moment from "moment"
import { useEffect } from "react"
import { Link } from "react-router-dom"


function BlogCardHorizontal({data, index}){


    return(
        <li 
        >
            <Link to={`/blog/${data.slug}`}
                onMouseEnter={()=>{
                    const img = document.getElementById(index)
                    img.classList.add('object-fill')
                    const title = document.getElementById(`title`+data.id)
                    title.classList.add('text-cyan-500')
                    
                    
                }} 
                onMouseLeave={()=>{
                    const img = document.getElementById(index)
                    img.classList.remove('object-fill')
                    const title = document.getElementById(`title`+data.id)
                    title.classList.remove('text-cyan-500')
                }}
            className=" block relative block hover:shadow-3xl  rounded-lg transition duration-300 ease-in-out">
                <div className="flex items-center  my-10 ">
                  <div className="lg:flex min-w-0 lg:flex-1 items-center">
                    <div className="flex-shrink-0">
                      <img id={index} className="h-60 w-90  object-cover rounded-lg" src={data.thumbnail} alt="" />
                    </div>
                    <div className="min-w-0 flex-1 px-8  ">
                    <p id={`title`+data.id} className=" lg:mt-0 lg:absolute lg:top-4 leading-10 text-3xl pb-4 font-semibold transition duration-300 ease-in-out">{data.title.length > 80 ? data.title.slice(0,79):data.title}</p>
                    <div className="lg:absolute lg:top-28">

                        <span className=" hover:text-cyan-500  mx-1 font-medium text-black text-sm "><Link to={`/category/${data.category.slug}`}>{data.category.name}</Link></span> <span className="text-gray-300">&middot;</span> 
                        <span className="mt-2 ml-2 mr-1 font-medium text-black text-sm">{moment(data.published).format('LL')}</span> <span className="text-gray-300">&middot;</span>
                        <span className="mt-2 mx-2 font-medium text-black text-sm">{data.time_read} min read</span> 
                        <p className="mt-4 text-lg font-regular text-black leading-8">{data.description.length > 300 ? data.description.slice(0,149):data.description}</p>
                    </div>
                  </div>
                </div>
                </div>
              </Link>
            </li>
          )
      }
      export default BlogCardHorizontal
      