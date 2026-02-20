import CircleLoader from "react-spinners/CircleLoader";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Función auxiliar para obtener la cookie CSRF
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 120, damping: 14 }
    }
};

export default function CTA() {
    const [formData, setFormData] = useState({ email: '' });
    const { email } = formData;
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        const csrftoken = getCookie('csrftoken');
        axios.defaults.headers.common['X-CSRFToken'] = csrftoken;

        const config = { headers: { 'X-CSRFToken': csrftoken } };
        const requestFormData = new FormData();
        requestFormData.append('email', email);
        requestFormData.append('tag', 1); 
        requestFormData.append('list', 2);

        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacts/opt-in`, requestFormData, config);
                if (res.status === 200 || res.status === 201) {
                    setTimeout(() => { navigate('/thank-you') }, 1000);
                }
            } catch (error) {
                console.error("Error:", error);
                alert('Connection error. Please try again.');
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }

    return (
        <div className="bg-black border-t border-gray-900">
            <motion.div
                className="mx-auto max-w-7xl py-16 px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                {/* Texto Persuasivo - Enfocado en Innovación y Acción */}
                <motion.div className="max-w-xl" variants={itemVariants}>
                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                        Ready to automate your <span className="text-cyan-400">Clinical Future?</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Join the most efficient practices in the region. Experience a seamless transition to a digital-first ecosystem designed for high-performance healthcare.
                    </p>
                </motion.div>

                {/* Formulario Estilizado */}
                <motion.div className="mt-10 lg:mt-0 lg:ml-8" variants={itemVariants}>
                    <form onSubmit={onSubmit} className="sm:flex">
                        <label htmlFor="email-address" className="sr-only">Email address</label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={onChange}
                            className="w-full rounded-md border border-gray-800 bg-gray-900/50 px-5 py-3 text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all sm:max-w-xs"
                            placeholder="Enter your work email"
                        />
                        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                            {loading ? (
                                <div className="flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-500 px-5 py-3 shadow-lg shadow-cyan-500/20">
                                    <CircleLoader loading={loading} size={25} color="#000000" />
                                </div>
                            ) : (
                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-400 px-5 py-3 text-base font-bold text-black hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black transition-all"
                                >
                                    Get Early Access
                                </button>
                            )}
                        </div>
                    </form>
                    <p className="mt-3 text-xs text-gray-500">
                        Zero friction. No hidden costs. Just high-end engineering.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}