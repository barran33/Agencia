import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import Footer from "components/navigation/Footer"
import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"

// Anatomical Tooth SVG Component - NO SE CAMBIA NADA
const ToothAnatomy = ({ id, diagnosis, onClick }) => {
    const isSelected = !!diagnosis;
    const getFillColor = () => {
        if (!isSelected) return "fill-zinc-800 stroke-zinc-600";
        if (diagnosis.includes("CAVITY")) return "fill-orange-500/60 stroke-orange-400";
        if (diagnosis.includes("EXTRACTION")) return "fill-red-600/60 stroke-red-500";
        return "fill-cyan-500/60 stroke-cyan-400";
    };

    return (
        <motion.div 
            onClick={onClick}
            whileHover={{ scale: 1.1, y: -5 }}
            className="cursor-pointer flex flex-col items-center group relative"
        >
            <span className={`text-[9px] font-mono mb-1 transition-colors ${isSelected ? 'text-cyan-400' : 'text-gray-600'}`}>
                {id}
            </span>
            <svg width="34" height="44" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path 
                    d="M12 2C10 2 6 3 5 7C4 11 6 13 7 15C8 17 8 22 10 22H14C16 22 16 17 17 15C18 13 20 11 19 7C18 3 14 2 12 2Z" 
                    className={`transition-all duration-500 ${getFillColor()}`}
                    strokeWidth="1.2"
                />
                {isSelected && (
                    <motion.path 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        d="M10 6L14 10M14 6L10 10" stroke="white" strokeWidth="1" strokeLinecap="round" 
                    />
                )}
            </svg>
            {isSelected && (
                <div className="absolute -bottom-1 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]" />
            )}
        </motion.div>
    );
};

function DentalProduct() {
    useEffect(() => { window.scrollTo(0, 0) }, [])
    const [diagnoses, setDiagnoses] = useState({});
    const upperTeeth = [18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28];

    const handleToothClick = (id) => {
        if (diagnoses[id]) {
            const newDiagnoses = { ...diagnoses };
            delete newDiagnoses[id];
            setDiagnoses(newDiagnoses);
        } else {
            const clinicalIssues = [
                "DEEP CAVITY DETECTED (CAVITY)",
                "EXTRACTION REQUIRED (MILK TOOTH)",
                "ROOT CANAL TREATMENT RECOMMENDED",
                "IMPACTED THIRD MOLAR"
            ];
            const randomIssue = clinicalIssues[Math.floor(Math.random() * clinicalIssues.length)];
            setDiagnoses({ ...diagnoses, [id]: randomIssue });
        }
    };

    return (
        <Layout>
            <Helmet>
                <title>Dental Logic Pro | Digital Clinical Intelligence</title>
            </Helmet>
            <Navbar />
            
            <div className="bg-black pt-32 pb-20 min-h-screen text-white selection:bg-cyan-500/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <div className="lg:grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
                        {/* HERO TEXT */}
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-6">
                                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">Medical Grade v2.0</span>
                            </div>
                            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mt-2 mb-8 leading-[0.85] tracking-tighter italic">
                                Dental <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Logic Pro</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-lg mb-10">
                                Eradicate the chaos of paper archives. Our <span className="text-white font-bold">Anatomical Intelligence</span> digitizes patient health with surgical precision.
                            </p>
                            <Link to="/contact" className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-4 font-black text-black transition-all duration-200 bg-cyan-500 rounded-xl hover:bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                                START PARTNERSHIP
                            </Link>
                        </motion.div>

                        {/* INTERACTIVE ODONTOGRAM OPTIMIZED */}
                        <div className="relative group mt-16 lg:mt-0">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[2rem] sm:rounded-[3rem] blur opacity-10 group-hover:opacity-25 transition duration-1000"></div>
                            <div className="relative p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[3rem] bg-zinc-950 border border-white/10 backdrop-blur-3xl shadow-2xl">
                                <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                                    <h3 className="text-[10px] sm:text-xs font-mono text-cyan-400 uppercase tracking-[0.3em]">Upper Arch Mapping</h3>
                                    <span className="text-[9px] sm:text-[10px] text-gray-600 font-mono">FDI_STANDARD_ISO</span>
                                </div>
                                
                                {/* SCROLLABLE CONTAINER FOR SMALL DEVICES */}
                                <div className="overflow-x-auto pb-4 mb-8 custom-scrollbar">
                                    <div className="grid grid-cols-8 gap-y-8 gap-x-4 min-w-[600px] lg:min-w-full">
                                        {upperTeeth.map((id) => (
                                            <ToothAnatomy key={id} id={id} diagnosis={diagnoses[id]} onClick={() => handleToothClick(id)} />
                                        ))}
                                    </div>
                                </div>

                                {/* TERMINAL OUTPUT */}
                                <div className="bg-zinc-900/80 rounded-2xl p-4 sm:p-6 border border-white/5 font-mono">
                                    <div className="text-[10px] text-gray-500 mb-3 flex justify-between">
                                        <span>SYSTEM_LOG_OUTPUT:</span>
                                        <span className="text-cyan-500">ACTIVE_SCAN</span>
                                    </div>
                                    <div className="space-y-2 max-h-[120px] overflow-y-auto custom-scrollbar">
                                        {Object.entries(diagnoses).length > 0 ? (
                                            Object.entries(diagnoses).map(([id, issue]) => (
                                                <motion.p initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} key={id} className="text-[10px] sm:text-[11px]">
                                                    <span className="text-red-500 font-bold mr-2">[!]</span>
                                                    <span className="text-gray-300">TOOTH_{id}:</span> <span className="text-cyan-400">{issue}</span>
                                                </motion.p>
                                            ))
                                        ) : (
                                            <p className="text-[10px] sm:text-[11px] text-gray-600 italic animate-pulse">
                                                * SELECT A TOOTH TO SIMULATE CLINICAL SCAN...
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* REST OF THE PAGE (Patient Card & Features) */}
                    <div className="mt-32 sm:mt-40 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        {/* DIGITAL PATIENT CARD */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative group order-2 lg:order-1"
                        >
                            <div className="absolute -inset-4 bg-cyan-500/10 rounded-[3rem] blur-3xl group-hover:bg-cyan-500/20 transition-all duration-700"></div>
                            <div className="relative bg-zinc-950 border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 overflow-hidden shadow-2xl">
                                
                                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-10">
                                    <div className="flex items-center gap-5">
                                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-black font-black text-xl sm:text-2xl shadow-[0_0_25px_rgba(34,211,238,0.4)]">
                                            KB
                                        </div>
                                        <div>
                                            <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight italic">Kobe Bryant</h4>
                                            <p className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase">PATIENT_ID: CI-9920-X</p>
                                        </div>
                                    </div>
                                    <div className="px-3 py-1 bg-red-500/10 border border-red-500/30 rounded text-[9px] font-mono text-red-500 animate-pulse uppercase">
                                        High Priority
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
                                    <div className="p-4 bg-white/[0.03] rounded-2xl border border-white/5 group-hover:border-cyan-500/30 transition-colors">
                                        <p className="text-[9px] text-gray-500 uppercase font-mono mb-1">Blood Type</p>
                                        <p className="text-white font-bold text-base sm:text-lg">O+ Positive</p>
                                    </div>
                                    <div className="p-4 bg-white/[0.03] rounded-2xl border border-white/5 group-hover:border-red-500/30 transition-colors">
                                        <p className="text-[9px] text-gray-500 uppercase font-mono mb-1">Medical Alerts</p>
                                        <p className="text-red-400 font-bold italic text-base sm:text-lg">Penicillin Allergy</p>
                                    </div>
                                </div>

                                <div className="space-y-4 font-mono bg-black/40 p-5 sm:p-6 rounded-2xl border border-white/5">
                                    <div className="flex justify-between text-[10px]">
                                        <span className="text-gray-500 italic uppercase">Vault_Sync:</span>
                                        <span className="text-cyan-400 animate-pulse">88%_ENCRYPTED</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }} whileInView={{ width: "88%" }} 
                                            transition={{ duration: 2.5, ease: "easeOut" }}
                                            className="h-full bg-gradient-to-r from-cyan-600 via-cyan-400 to-blue-500 shadow-[0_0_15px_rgba(34,211,238,0.6)]" 
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="order-1 lg:order-2 px-2">
                            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-8 tracking-tighter italic leading-[0.9]">
                                Burn the <br/> 
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-300 underline decoration-zinc-800">Physical Folders.</span>
                            </h2>
                            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-10">
                                Paper records are slow and obsolete. **Dental Logic Pro** orchestrates clinical data into a <span className="text-white font-bold">zero-latency</span> digital vault.
                            </p>
                            
                            <div className="grid grid-cols-1 gap-6">
                                {[
                                    { t: "Military-Grade Encryption", d: "HIPAA standards and AES-256 protocol." },
                                    { t: "Instant Retrieval", d: "Access any X-Ray in under 200ms." },
                                    { t: "Treatment Timeline", d: "Interactive historical data mapping." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 group items-center p-3 rounded-2xl hover:bg-white/[0.02] transition-colors">
                                        <div className="flex-shrink-0 w-10 h-10 bg-zinc-900 border border-white/10 rounded-lg flex items-center justify-center text-cyan-400 font-mono text-sm italic group-hover:border-cyan-500/50">
                                            0{i+1}
                                        </div>
                                        <div>
                                            <h5 className="text-white font-bold text-base italic group-hover:text-cyan-400 transition-colors">{item.t}</h5>
                                            <p className="text-gray-500 text-xs sm:text-sm mt-0.5">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </Layout>
    )
}

export default DentalProduct;