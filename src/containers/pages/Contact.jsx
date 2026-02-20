import React, { useState, useRef } from 'react';
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import Footer from "components/navigation/Footer";
import { Helmet } from "react-helmet-async";
import { Switch } from '@headlessui/react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import axios from "axios";
import CircleLoader from "react-spinners/CircleLoader";
import { motion, useInView } from 'framer-motion';

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
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/contacts/`,
        JSON.stringify(formData),
        config
      );
      alert('Message sent successfully!');
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
      alert('An error occurred while sending. Please check the console.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.acceptedTerms) {
      return alert('You must accept the terms and conditions.');
    }
    fetchData();
  };

  const contactInfoRef = useRef(null);
  const isContactInfoInView = useInView(contactInfoRef, {  amount: 0.3 });

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <Layout>
       <Helmet>
                <title>Contact Us | Cosmic Imagination</title>
                <meta name="description" content="Elite Software Agency specializing in Science, Engineering, and Digital Intelligence. We build high-performance web applications with authenticity." />
                <meta name="keywords" content='Software Agency, WebApp Development, Cybersecurity, Digital Intelligence' />
                <meta name="robots" content='all' />
                <link rel="canonical" href="https://www.CosmicImagination.com/" />
                <meta name="author" content='Cosmic_Imagination' />
                <meta name="publisher" content='Cosmic_Imagination' />
                
                {/* Social Media Tags */}
                <meta property="og:title" content='Co§mIc | Strategic Software Engineering' />
                <meta property="og:description" content='Where Engineering meets Intelligence. We transform complex ideas into cosmic software solutions.' />
                <meta property="og:url" content="https://www.CosmicImagination.com/" />
                <meta property="og:image" content='https://thumbs.dreamstime.com/z/s%C3%ADmbolo-de-la-alquimia-y-de-la-geometr%C3%ADa-sacrada-en-el-fondo-azul-de-la-acuarela-76843935.jpg' />
        </Helmet>
      <Navbar />
      <div className="pt-28">
            <div className="relative bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-black" />
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        
        {/* Left Column: Contact Info */}
        <div className="bg-black py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <motion.div 
            ref={contactInfoRef}
            variants={textContainerVariants}
            initial="hidden"
            animate={isContactInfoInView ? "visible" : "hidden"}
            className="mx-auto max-w-lg"
          >
            <motion.h2 variants={textVariants} className="text-2xl font-bold tracking-tight text-cyan-400 sm:text-3xl">Get in Touch</motion.h2>
            <motion.p variants={textVariants} className="mt-3 text-lg leading-6 text-gray-400 font-light">
              Welcome to the Cosmic Imagination Contact Area. If you are looking for a strategic partner to launch your ideas into the digital universe, you have arrived at the right place. We are here to listen to your needs and transform them into high-performance software solutions.
            </motion.p>
            <motion.dl variants={textContainerVariants} className="mt-8 text-base text-gray-400">
              <motion.div variants={textVariants}>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>20301 Grecia</p>
                  <p>Alajuela, Costa Rica</p>
                </dd>
              </motion.div>
              <motion.div variants={textVariants} className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon className="h-6 w-6 flex-shrink-0 text-cyan-400" aria-hidden="true" />
                  <span className="ml-3 font-mono text-sm">+506 88474150</span>
                </dd>
              </motion.div>
              <motion.div variants={textVariants} className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-cyan-400" aria-hidden="true" />
                  <span className="ml-3 font-mono text-sm">support@cosmic-imagination.com</span>
                </dd>
              </motion.div>
            </motion.dl>
            <motion.p variants={textVariants} className="mt-6 text-base text-gray-500 italic">
              Looking for careers?{' '}
              <a href="#" className="font-medium text-cyan-400 underline">
                View all job openings
              </a>
              .
            </motion.p>
          </motion.div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-black py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="mx-auto max-w-lg lg:max-w-none">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 bg-zinc-900/50 text-white"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 bg-zinc-900/50 text-white"
                  />
                   <input
                    type="number"
                    name="phone"
                    placeholder="Phone Number (e.g. 506 8888 8888)"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 bg-zinc-900/50 text-white"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 bg-zinc-900/50 text-white"
                  />
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 bg-zinc-900/50 text-white"
                  />
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 bg-zinc-900/50 text-gray-300"
                  >
                    <option value="">Select a Budget (Optional)</option>
                    <option value="0-$3000">$0 - $3,000</option>
                    <option value="$3000-$6000">$3,000 - $6,000</option>
                    <option value="$6000-$9000">$6,000 - $9,000</option>
                    <option value="$10000+">$10,000+</option>
                  </select>

                  <label className="flex items-center space-x-4">
                    <Switch
                      checked={formData.acceptedTerms}
                      onChange={checked => handleChange({ target: { name: 'acceptedTerms', type: 'checkbox', checked } })}
                      className={`${formData.acceptedTerms ? 'bg-cyan-500' : 'bg-zinc-700'} relative inline-flex h-[28px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out shadow-[0_0_10px_rgba(6,182,212,0.2)]`}
                    >
                      <span className="sr-only">Accept Terms</span>
                      <span
                        aria-hidden="true"
                        className={`${formData.acceptedTerms ? 'translate-x-8' : 'translate-x-0'} pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg transition duration-200 ease-in-out`}
                      />
                    </Switch>
                    <span className="text-xs text-gray-400">
                      I accept the <button type="button" className="text-cyan-400 underline hover:text-cyan-300">Terms & Conditions</button>
                    </span>
                  </label>

                  <div className="mt-4">
                    {loading ? (
                      <div className="flex justify-center">
                        <CircleLoader loading={loading} size={25} color="#22d3ee" />
                      </div>
                    ) : (
                      <button
                        type="submit"
                        className="w-full rounded-md bg-cyan-500 px-4 py-3 font-bold text-black shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:bg-cyan-400 transition-all duration-300 uppercase tracking-widest text-sm"
                      >
                        Send Mission Brief
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