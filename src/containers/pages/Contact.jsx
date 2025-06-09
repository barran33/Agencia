// src/components/Contact.jsx
import React, { useState } from 'react';
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import Footer from "components/navigation/Footer";
import { Helmet } from "react-helmet-async";
import { Switch } from '@headlessui/react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { Link } from "react-router-dom";
import axios from "axios";
import CircleLoader from "react-spinners/CircleLoader";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
    budget: '',
    acceptedTerms: false,
  });
  const [loading, setLoading] = useState(false);

  const config = {
    headers: { 'Content-Type': 'application/json' },
  };

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const fetchData = async () => {
    console.log('🚀 Enviando datos al backend...', formData);
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/contacts/`,
        formData,
        config
      );
      console.log('✅ Respuesta del servidor:', res);
      alert('¡Mensaje enviado correctamente!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        phone: '',
        budget: '',
        acceptedTerms: false,
      });
    } catch (err) {
      console.error('❌ Error al enviar mensaje:', err);
      alert('Ocurrió un error al enviar. Revisa la consola.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.acceptedTerms) {
      return alert('Debes aceptar los términos y condiciones.');
    }
    fetchData();
  };

  return (
    <Layout>
       <Helmet>
                <title>Contacto</title>
                <meta name="description" content="Agencia de Software , Ciencia y Espiritualidad. Creamos paginas web y desarrollamos aplicaciones unicas con esencia y autenticidad" />
                <meta name="keywords" content='Agencia de software, desarrollo de WebApps' />
                <meta name="robots" content='all' />
                <link rel="canonical" href="https://www.CosmicImagination.com/" />
                <meta name="author" content='Cosmic_Imagination' />
                <meta name="publisher" content='Cosmic_Imagination' />
                {/* Social Media Tags */}
                <meta property="og:title" content='Co§mIc | Software Agency' />
                <meta property="og:description" content='Agencia de Software , Ciencia y Espiritualidad. Creamos paginas web y desarrollamos aplicaciones unicas con esencia y autenticidad' />
                <meta property="og:url" content="https://www.CosmicImagination.com/" />
                <meta property="og:image" content='https://thumbs.dreamstime.com/z/s%C3%ADmbolo-de-la-alquimia-y-de-la-geometr%C3%ADa-sagrada-en-el-fondo-azul-de-la-acuarela-76843935.jpg' />

                <meta name="twitter:title" content='Co§mIc | Software Agenc' />
                <meta
                    name="twitter:description"
                    content='Agencia de Software , Ciencia y Espiritualidad. Creamos paginas web y desarrollamos aplicaciones unicas con esencia y autenticidad'/>
                
                <meta name="twitter:image" content='https://thumbs.dreamstime.com/z/s%C3%ADmbolo-de-la-alquimia-y-de-la-geometr%C3%ADa-sagrada-en-el-fondo-azul-de-la-acuarela-76843935.jpg' />
                <meta name="twitter:card" content="summary_large_image" />
            
            </Helmet>
      <Navbar />
      <div className="pt-28">
            <div className="relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-white" />
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Contactanos</h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
            ¡Bienvenido al Área de Contacto de Co§mic Imagination! Si estás buscando un socio de confianza para llevar tus ideas al universo digital, has llegado al lugar correcto. Estamos aquí para escuchar tus necesidades y transformarlas en soluciones de software cósmicas. ¡Déjanos ser tu guía en esta aventura tecnológica!
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>20301 Grecia</p>
                  <p>Alajuela, Costa Rica</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">+1 (555) 123-4567</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">jorge369b@cosmic-imagination.com</span>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-base text-gray-500">
              Looking for careers?{' '}
              <a href="#" className="font-medium text-gray-700 underline">
                View all job openings
              </a>
              .
            </p>
          </div>
        </div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="mx-auto max-w-lg lg:max-w-none">
     
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
