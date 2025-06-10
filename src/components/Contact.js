import { useEffect, useState  } from "react"
import { Helmet } from 'react-helmet-async';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Switch } from '@headlessui/react'
import { Link } from "react-router-dom";
import axios from "axios";
import CircleLoader from "react-spinners/CircleLoader";

function Contact(){

    const [enabled, setEnabled] = useState(false)

    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        phone: '',
        budget: '',
    });

    const { 
    name,
    email,
    subject,
    message,
    phone,
    budget 
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if(enabled){
            setLoading(true);

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const formData = new FormData()
            formData.append('name', name)
            formData.append('email', email)
            formData.append('phone', phone)
            formData.append('subject', subject)
            formData.append('message', message)
            formData.append('budget', budget)

            const fetchData = async()=>{
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacts/`,formData, config)
                if(res.status === 200){
                    setLoading(false);
                    setFormData({
                        name:'',
                        email:'',
                        subject:'',
                        message:'',
                        phone:'',
                        budget:'',
                    })
                    alert('Message has been sent.')
                }else{
                    setLoading(false);
                    alert('Error sending message.')
                }
            }
            fetchData()

        }else{
            alert('You must accept the terms of service and conditions')
        }
    }

    return(
        <div className="w-full h-80 shadow-card rounded-lg p-12 overscroll-y-auto overflow-y-auto">
            <h1 className="font-bold text-4xl text-gray-900">Want to work with us?</h1>
            <p className="font-regular mt-4 text-2xl text-gray-700">Just tell us about your project, what are your goals, and let's start.</p>
             <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
                  {/* Campos del formulario: */}
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                    
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                  />
                   <input
                    type="number"
                    name="phone"
                    placeholder="51 999 123 456"
                    value={formData.phone}
                    onChange={handleChange}
                    aria-describedby="price-currency"
                    required
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                  />
                  <textarea
                    id="message"
                    type="text"
                    name="message"
                    rows={5}
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    defaultValue={''}
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                  />
                  <select
                    type="text"
                    name="budget"
                    placeholder="Subject"
                    value={formData.budget}
                    onChange={handleChange}
                    
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                  >
                    <option value="" className="text-gray-400">Select a Budget (Optional)</option>
                    <option value="0-$3000" className="text-gray-600">$0,$3000</option>
                    <option value="$3000-$6000" className="text-gray-600">$3000 - $6000</option>
                    <option value="$6000-$9000" className="text-gray-600">$6000 - $9,000</option>

                  </select>

                  {/* Repite inputs para email, phone, subject, message, budget... */}
                  <label className="flex items-center space-x-3">
                    <Switch
                      checked={formData.acceptedTerms}
                      onChange={checked => handleChange({ target: { name: 'acceptedTerms', type: 'checkbox', checked } })}
                      className={`${formData.acceptedTerms ? 'bg-cyan-400' : 'bg-cyan-100'} relative inline-flex h-[32px] w-[72px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out`}
                    >
                      <span className="sr-only">Acepta términos</span>
                      <span
                        aria-hidden="true"
                        className={`${formData.acceptedTerms ? 'translate-x-10' : 'translate-x-0'} pointer-events-none inline-block h-[28px] w-[28px] transform rounded-full bg-white shadow-lg transition duration-200 ease-in-out`}
                      />
                    </Switch>
                    <span className="text-gray-900">
                      Acepto términos y condiciones (<Link to="/terms" className="text-cyan-500 underline">ver</Link>)
                    </span>
                  </label>

                  <div className="mt-4">
                    {loading ? (
                      <div className="flex justify-center">
                        <CircleLoader loading={loading} size={25} color="#0EA5E9" />
                      </div>
                    ) : (
                      <button
                        type="submit" 
                        className="w-full rounded-md bg-cyan-400 px-4 py-3 font-medium text-white shadow-sm hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-700"
                      >
                        Send Message
                      </button>
                    )}
                  </div>
                </form>
        </div>
    )
}
export default Contact