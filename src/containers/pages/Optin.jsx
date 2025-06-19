import { connect } from "react-redux";
import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import { ChevronRightIcon, StarIcon } from '@heroicons/react/20/solid'; // Agregado para consistencia en importaciones
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";

// Función auxiliar para obtener la cookie CSRF
// Es buena práctica tener esta función en un archivo de utilidades separado (ej. utils/csrf.js)
// si la usas en múltiples componentes.
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

function OptIn(){
    const [formData, setFormData] = useState({
        email: ''
    });

    const { email } = formData;

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); 
    const [success, setSuccess] = useState(false); 

    const navigate = useNavigate();

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (error) setError(null); o
    };

    // La función onSubmit ahora es `async`
    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null); 
        setSuccess(false); 

        // Validación básica en el frontend
        if (!email) {
            setError('Por favor, ingresa tu correo electrónico.');
            setLoading(false);
            return;
        }

        // --- LÓGICA CLAVE PARA CSRF ---
        
        const csrftoken = getCookie('csrftoken');
        if (csrftoken) {
            axios.defaults.headers.common['X-CSRFToken'] = csrftoken;
        } else {
            console.warn('CSRF token no encontrado. Asegúrate de que Django lo esté enviando y el frontend lo reciba.');
            setError('Error de seguridad: No se pudo obtener el token. Intenta recargar la página.');
            setLoading(false);
            return;
        }
             
        const config = {
            headers: {
               
            }
        };

        const requestFormData = new FormData(); 
        requestFormData.append('email', email);
        requestFormData.append('tag', '1'); 
        requestFormData.append('list', '2'); 

        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/contacts/opt-in`,
                requestFormData, 
                config
            );

            // Considera 200 OK y 201 Created como éxito
            if (res.status === 200 || res.status === 201) {
                setSuccess(true); 
                setFormData({ email: '' }); // Limpiar el campo del formulario

                setTimeout(() => {
                    navigate('/ebook'); 
                }, 1000);
            } else {
                // Si la API responde con un estado 2xx pero no es 200/201 (ej. 204 No Content, aunque raro para POST con cuerpo)
                setError(`Error inesperado con el código: ${res.status}`);
            }
        } catch (err) {
            // Manejo de errores de Axios (incluyendo el 403 Forbidden)
            if (err.response) {
                // El servidor respondió con un estado de error (4xx o 5xx)
                console.error("Error de respuesta del servidor:", err.response.data);
                console.error("Código de estado:", err.response.status);
                // Intenta mostrar el mensaje de error del backend si existe
                setError(err.response.data.detail || err.response.data.message || `Error del servidor: ${err.response.status}`);
            } else if (err.request) {
                // La solicitud fue hecha pero no se recibió respuesta (ej. problema de red)
                console.error("No se recibió respuesta del servidor:", err.request);
                setError('No se pudo conectar con el servidor. Por favor, revisa tu conexión.');
            } else {
                // Algo más causó el error al configurar la solicitud
                console.error("Error al configurar la solicitud:", err.message);
                setError('Ocurrió un error inesperado al enviar el formulario.');
            }
        } finally {
            setLoading(false); // Siempre desactiva el estado de carga
        }
    };

    return(
        <Layout>
            <Navbar/>
            
            <div className="pt-8">
                <div className="bg-black pb-8 sm:pb-12 lg:pb-12">
                    <div className="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-36">
                        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
                            <div>
                                <div className="mt-10">             
                                    <div className="mt-6 sm:max-w-xl">
                                        <h1 className="text-3xl font-bold tracking-tight text-cyan-400 sm:text-4xl">
                                            Free ebook about marketing and sales
                                        </h1>
                                        <p className="mt-6 text-xl text-gray-300">
                                            "Cosmic Imagination: Donde la creatividad se encuentra con la tecnología para dar vida a sus proyectos más Extraordinarios."
                                        </p>
                                    </div>
                                    <form onSubmit={onSubmit} className="mt-12 sm:flex sm:w-full sm:max-w-lg">
                                        <div className="min-w-0 flex-1">
                                            <label htmlFor="hero-email" className="sr-only">
                                                Email address
                                            </label>
                                            <input
                                                id="hero-email"
                                                type="email"
                                                required
                                                onChange={onChange}
                                                value={email}
                                                name="email"
                                                className="block w-full rounded-md border border-gray-300 px-5 py-3 text-base text-cyan-400 placeholder-cyan-600 shadow-sm focus:border-cyan-600 focus:ring-cyan-500"
                                                placeholder="Enter your email"
                                                disabled={loading} // Deshabilitar mientras carga
                                            />
                                        </div>
                                        <div className="mt-4 sm:mt-0 sm:ml-3">
                                            {loading ? (
                                                <div className="block w-full rounded-md border border-transparent bg-cyan-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 sm:px-10">
                                                    <CircleLoader loading={loading} size={25} color="#ffffff"/>
                                                </div>
                                            ) : (
                                                <button
                                                    type="submit"
                                                    className="block w-full rounded-md border border-transparent bg-cyan-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 sm:px-10"
                                                >
                                                    Download Ebook
                                                </button>
                                            )}
                                        </div>
                                    </form>
                                    {/* Mostrar mensajes de error o éxito */}
                                   
                                    {success && <p className="mt-4 text-green-600 text-sm">¡Suscripción exitosa! Redirigiendo...</p>}

                                    <div className="mt-6">
                                        <div className="inline-flex items-center divide-x divide-gray-300">
                                            <div className="flex flex-shrink-0 pr-5">
                                                <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                                                <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                                                <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                                                <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                                                <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                                            </div>
                                            <div className="min-w-0 flex-1 py-1 pl-5 text-sm text-gray-500 sm:py-3">
                                                <span className="font-medium text-gray-300">Rated 5 stars</span> by over{' '}
                                                <span className="font-medium text-cyan-400">500 beta users</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
                            <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                                <div className="relative -mr-40 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">
                                    <img
                                        className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                                        src="https://bafybeifo6yx4apsbgnie2pf32bx2pokahziwopvtuejsfathgndb5f4dv4.ipfs.w3s.link/cosmic.jpeg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </Layout>
    )
}

const mapStateToProps = state =>({

})
export default connect(mapStateToProps,{

})(OptIn)