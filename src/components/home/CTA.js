
import CircleLoader from "react-spinners/CircleLoader";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Importa motion

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

// Define las variantes de animación fuera del componente CTA
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Retraso entre cada elemento hijo animado
            delayChildren: 0.1 // Retraso inicial antes de que los hijos empiecen
        }
    }
};

const itemVariants = {
    hidden: { y: 50, opacity: 0 }, // Empieza 50px abajo y transparente
    visible: {
        y: 0, // Se desliza a su posición original
        opacity: 1, // Se vuelve opaco
        transition: {
            type: "spring", // Animación tipo muelle
            stiffness: 120, // Rigidez del muelle
            damping: 14 // Amortiguación del muelle
        }
    }
};

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

const onSubmit=(e)=>{ // Hacemos esta función async para usar await
    e.preventDefault()

    const csrftoken = getCookie('csrftoken');
    axios.defaults.headers.common['X-CSRFToken'] = csrftoken;

    const config = {
        headers: {
            'X-CSRFToken': csrftoken,
        }
    }

    const requestFormData = new FormData()
    requestFormData.append('email', email)
    requestFormData.append('tag', 1)
    requestFormData.append('list', 2)

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacts/opt-in`,
            requestFormData,
            config)

            if(res.status === 200 || res.status === 201){
                setTimeout(()=>{
                    navigate('/ebook')
                },1000)
            } else {
                alert(`Error al enviar mensaje: Código ${res.status}`);
            }
        } catch (error) {
            console.error("Error al enviar el mensaje:", error);
            if (error.response) {
                alert(`Error: ${error.response.status} - ${error.response.data.detail || error.response.data.message || 'Error del servidor'}`);
            } else if (error.request) {
                alert('Error: No se pudo conectar con el servidor.');
            } else {
                alert('Error inesperado.');
            }
        } finally {
            setLoading(false);
        }
    }
    fetchData()
}
    return (
      <div className="bg-black">
        {/* Este es el contenedor principal de tu CTA, aplica aquí la animación de entrada */}
        <motion.div
            className="mx-auto max-w-full py-12 lg:flex lg:items-center lg:justify-between lg:py-16"
            initial="hidden"
            whileInView="visible" // Anima cuando el componente entra en la vista
            viewport={{ once: false, amount: 0.3 }} // Se anima cada vez que entra en vista
            variants={containerVariants} // Aplica las variantes del contenedor
        >
          {/* Título y subtítulos (como un bloque animado) */}
          <motion.h2 className="text-3xl font-bold tracking-tight text-cyan-400 sm:text-4xl" variants={itemVariants}>
            <span className="block">Ready to dive in?</span>
            <span className="block text-cyan-400">Start your free trial today.</span>
          </motion.h2>

          {/* Contenedor del formulario (como un bloque animado) */}
          <motion.div className="mt-8 flex lg:mt-0 lg:flex-shrink-0" variants={itemVariants}>
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
          </motion.div>
        </motion.div>
      </div>
    )
  }