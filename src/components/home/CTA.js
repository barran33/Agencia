import CircleLoader from "react-spinners/CircleLoader";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CTA() {
  const [formData, setFormData]=useState({
    email:''
})

const{
    email
}=formData

const onChange=e=>{
    setFormData({...formData, [e.target.name]: e.target.value})
}

const [loading, setLoading]=useState(false)

const navigate = useNavigate()

const onSubmit=(e)=>{
    e.preventDefault()

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const formData = new FormData()
    formData.append('email', email)
    formData.append('tag', 1)
    formData.append('list', 2)

    const fetchData = async () => {
        setLoading(true);
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacts/opt-in`,
        formData,
        config)

        if(res.status === 200){
            setTimeout(()=>{
                navigate('/ebook/training')
            },1000)
            
        }else{
            alert('Error sending message')
        }
    }
    fetchData()

    
}
    return (
      <div className="bg-gray-50">
        <div className="mx-auto  max-w-full py-12 lg:flex lg:items-center lg:justify-between lg:py-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-cyan-400">Start your free trial today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
            <form onSubmit={e=>onSubmit(e)} className="mt-12 sm:flex sm:w-full sm:max-w-lg">
                <div className="min-w-0 flex-1">
                  <label htmlFor="hero-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="hero-email"
                    type="email"
                    required
                    onChange={e=>onChange(e)}
                    value={email}
                    name="email"
                    className="block w-full rounded-md border border-gray-300 px-5 py-3 text-base text-gray-900 placeholder-gray-600 shadow-sm focus:border-cyan-600 focus:ring-cyan-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                            {
                                loading ?
                                <div
                                    className="block w-full rounded-md border border-transparent bg-cyan-400 px-5 py-3 text-base font-medium text-white shadow hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 sm:px-10"
                                >
                                    <CircleLoader loading={loading} size={25} color="#ffffff"/>
                                </div>
                                :
                                <button
                                    type="submit"
                                    className="block w-full rounded-md border border-transparent bg-cyan-400 px-5 py-3 text-base font-medium text-white shadow hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 sm:px-10"
                                >
                                    Download Ebook
                                </button>
                            }
                        </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }

  