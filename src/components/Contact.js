import { useEffect, useState } from "react"
import { Helmet } from 'react-helmet-async';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Switch } from '@headlessui/react'
import { Link } from "react-router-dom";
import axios from "axios";
import CircleLoader from "react-spinners/CircleLoader";

function Contact(){

    // 'enabled' ya no se usa directamente para la lógica de aceptación de términos
    // Se gestiona a través de 'formData.acceptedTerms'
    const [enabled, setEnabled] = useState(false) // Puedes eliminar esta línea si no la usas en otro lugar

    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        phone: '',
        budget: '',
        acceptedTerms: false, // <-- AÑADIDO: Inicializa el estado para el Switch de términos y condiciones
    });

    const {
        name,
        email,
        subject,
        message,
        phone,
        budget,
        acceptedTerms // <-- AÑADIDO: Desestructura 'acceptedTerms' para usarlo fácilmente
    } = formData;

    // RENOMBRADO: 'onChange' a 'handleChange' para que coincida con el uso en los inputs
    const handleChange = e => {
        const { name, value, type, checked } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value // Maneja correctamente los checkboxes
        }));
    };

    // TU FUNCIÓN 'onSubmit' ACTUAL: No se modifica su lógica interna
    const onSubmit = e => {
        e.preventDefault();

        // CAMBIO: Ahora usa 'acceptedTerms' del estado de formData
        if(acceptedTerms){ // Antes usaba 'enabled', que no se actualizaba con el Switch
            setLoading(true);

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            // RENOMBRADO: 'formData' a 'formDataToSend' para evitar conflicto de nombres
            const formDataToSend = new FormData()
            formDataToSend.append('name', name)
            formDataToSend.append('email', email)
            formDataToSend.append('phone', phone)
            formDataToSend.append('subject', subject)
            formDataToSend.append('message', message)
            formDataToSend.append('budget', budget)

            const fetchData = async()=>{
                try { // AÑADIDO: Bloque try-catch para manejar errores de la petición Axios
                    const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacts/`, formDataToSend, config)
                    if(res.status === 200){
                        setLoading(false);
                        setFormData({
                            name:'',
                            email:'',
                            subject:'',
                            message:'',
                            phone:'',
                            budget:'',
                            acceptedTerms: false, // <-- AÑADIDO: Reinicia también el estado de los términos
                        })
                        alert('Mensaje enviado correctamente...!!!')
                    }else{
                        setLoading(false);
                        alert('Error sending message.')
                    }
                } catch (error) {
                    setLoading(false);
                    console.error("Error al enviar mensaje:", error); // Para ver detalles del error en consola
                    alert('Error sending message. Please try again later.')
                }
            }
            fetchData()

        }else{
            alert('You must accept the terms of service and conditions')
        }
    }

    return(
        <div className="w-full h-80 shadow-card rounded-lg p-12 overscroll-y-auto overflow-y-auto">
            <h1 className="font-bold text-4xl text-cyan-400">Want to work with us?</h1>
            <p className="font-regular mt-4 text-2xl text-cyan-500">Just tell us about your project, what are your goals, and let's start.</p>
             {/* CAMBIO CLAVE AQUÍ: 'onSubmit={onSubmit}' en lugar de 'onSubmit={handleSubmit}' */}
             <form onSubmit={onSubmit} className="grid grid-cols-1 gap-y-6">
                  {/* Campos del formulario: */}
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={name} // Usar directamente 'name' desestructurado
                    onChange={handleChange} // Usar 'handleChange'
                    required
                    className="block w-full rounded-md border-cyan-500 py-3 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"

                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email} // Usar directamente 'email' desestructurado
                    onChange={handleChange} // Usar 'handleChange'
                    required
                    className="block w-full rounded-md border-cyan-500 py-3 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                  />
                   <input
                    type="number"
                    name="phone"
                    placeholder="51 999 123 456"
                    value={phone} // Usar directamente 'phone' desestructurado
                    onChange={handleChange} // Usar 'handleChange'
                    aria-describedby="price-currency"
                    required
                    className="block w-full rounded-md border-cyan-500 py-3 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={subject} // Usar directamente 'subject' desestructurado
                    onChange={handleChange} // Usar 'handleChange'
                    required
                    className="block w-full rounded-md border-cyan-500 py-3 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                  />
                  <textarea
                    id="message"
                    type="text" // 'textarea' no necesita un atributo 'type'
                    name="message"
                    rows={5}
                    placeholder="Message"
                    value={message} // Usar directamente 'message' desestructurado
                    onChange={handleChange} // Usar 'handleChange'
                    required
                    defaultValue={''} // Puedes eliminar esto si 'value' siempre es controlado por el estado
                    className="block w-full rounded-md border-cyan-500 py-3 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                  />
                  <select
                    // Removido type="text" y placeholder="Subject" porque no son atributos válidos para <select>
                    name="budget"
                    value={budget} // Usar directamente 'budget' desestructurado
                    onChange={handleChange} // Usar 'handleChange'

                    className="block w-full rounded-md border-cyan-500 py-3 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                  >
                    <option value="" className="text-gray-700">Select a Budget (Optional)</option>
                    <option value="0-$3000" className="text-gray-600">$0-$3000</option>
                    <option value="$3000-$6000" className="text-gray-600">$3000 - $6000</option>
                    <option value="$6000-$9000" className="text-gray-600">$6000 - $9,000</option>

                  </select>

                  <label className="flex items-center space-x-3">
                    <Switch
                      checked={acceptedTerms} // Usa 'acceptedTerms' directamente del estado de formData
                      onChange={checked => handleChange({ target: { name: 'acceptedTerms', type: 'checkbox', checked } })}
                      className={`${acceptedTerms ? 'bg-cyan-400' : 'bg-cyan-100'} relative inline-flex h-[32px] w-[72px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out`}
                    >
                      <span className="sr-only">Acepta términos</span>
                      <span
                        aria-hidden="true"
                        className={`${acceptedTerms ? 'translate-x-10' : 'translate-x-0'} pointer-events-none inline-block h-[28px] w-[28px] transform rounded-full bg-white shadow-lg transition duration-200 ease-in-out`}
                      />
                    </Switch>
                    <span className="text-cyan-500">
                      Acepto términos y condiciones (<button to="/terms" className="text-gray-300 underline">ver</button>)
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