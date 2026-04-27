/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Users, 
  FileText, 
  Trophy, 
  ShieldCheck, 
  BarChart3, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X,
  FileUp,
  BrainCircuit,
  GraduationCap,
  MonitorCheck,
  ChevronUp,
  PlayCircle,
  Activity,
  Sparkles,
  PieChart,
  BookOpen,
  Shield,
  Smartphone,
  BellOff,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white border-b border-slate-200 shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 p-2 rounded-lg shadow-indigo-200 shadow-lg">
            <GraduationCap className="text-white" size={24} />
          </div>
          <span className="font-display font-bold text-2xl tracking-tight text-indigo-900">EduAssess AI</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'Fitur', id: 'fitur' },
            { name: 'Teknologi AI', id: 'teknologi-ai' },
            { name: 'Monitoring', id: 'monitoring' },
            { name: 'Harga', id: 'harga' }
          ].map((item) => (
            <a key={item.name} href={`#${item.id}`} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              {item.name}
            </a>
          ))}
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/drive/folders/16mS8oca3XuHAz10fmPqX6T5hEc_1T3Pb?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            title="Temukan panduan lengkap & SOP penggunaan sistem kami di sini"
            className="text-indigo-600 px-4 py-2 rounded-full font-semibold text-sm hover:bg-indigo-50 transition-all flex items-center gap-2 border border-indigo-100"
          >
            <BookOpen size={18} />
            Guidebook
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(79, 70, 229, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/628568117553?text=Halo%20Tim%20EduAssess%20AI%2C%20saya%20tertarik%20untuk%20berkonsultasi%20mengenai%20solusi%20asesmen%20digital%20untuk%20sekolah%20kami.%20Mohon%20bantuan%20informasinya%20untuk%20langkah%20awal%20transformasi%20digital%20kami.%20Terima%20kasih."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-indigo-700 transition-all shadow-md shadow-indigo-100 flex items-center"
          >
            Konsultasi Gratis
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-800" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {[
                { name: 'Fitur', id: 'fitur' },
                { name: 'Teknologi AI', id: 'teknologi-ai' },
                { name: 'Monitoring', id: 'monitoring' },
                { name: 'Harga', id: 'harga' }
              ].map((item) => (
                <a 
                  key={item.name} 
                  href={`#${item.id}`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-slate-700"
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="https://drive.google.com/drive/folders/16mS8oca3XuHAz10fmPqX6T5hEc_1T3Pb?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg font-medium text-indigo-600"
              >
                Guidebook & SOP
              </a>
              <a 
                href="https://wa.me/628568117553"
                className="block text-lg font-medium text-slate-700"
              >
                Konsultasi Gratis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-24 lg:pt-52 lg:pb-40 overflow-hidden bg-slate-900">
    {/* Dynamic Background */}
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-indigo-600/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 px-4 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-[10px] font-bold uppercase tracking-[0.2em] mb-10 backdrop-blur-xl"
      >
        <span className="flex h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]"></span>
        E-Assessment Generasi Terbaru
      </motion.div>
      
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl md:text-8xl font-black text-white leading-tight mb-8 tracking-tight"
        >
          Evaluasi Pintar. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-emerald-400">Hasil Maksimal.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 mb-14 max-w-2xl mx-auto leading-relaxed font-medium opacity-80"
        >
          Ubah kompleksitas asesmen menjadi otomatisasi cerdas. Didukung oleh Generative AI untuk membantu Sekolah & Madrasah mencapai standar akademik global.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href="https://wa.me/628568117553?text=Halo%20Tim%20EduAssess%20AI%2C%20saya%20tertarik%20untuk%20berkonsultasi%20mengenai%20solusi%20asesmen%20digital%20untuk%20sekolah%20kami.%20Mohon%20bantuan%20informasinya%20untuk%20langkah%20awal%20transformasi%20digital%20kami.%20Terima%20kasih."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-indigo-500 transition-all shadow-2xl shadow-indigo-900/40 flex items-center justify-center gap-3 group"
          >
            Mulai Demo Gratis <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={24} />
          </a>
          <button className="w-full sm:w-auto bg-white/5 text-white border border-white/10 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-lg">
            Hubungi Spesialis
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="mt-24 w-full relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000" />
        <div className="relative bg-slate-800 rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl">
          <div className="h-4 bg-slate-900 border-b border-white/5 flex items-center px-4 gap-1.5 shrink-0">
             <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
             <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
             <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          </div>
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop" 
            alt="Dashboard" 
            className="w-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-100 pb-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="relative">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-50 rounded-full z-0 opacity-50" />
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" 
            alt="Collaborative Education" 
            className="rounded-3xl shadow-xl border border-slate-200 relative z-10"
          />
        </motion.div>
        <div>
          <h4 className="text-indigo-600 font-bold uppercase tracking-widest text-xs mb-4">Tentang Produk</h4>
          <h2 className="font-display text-4xl font-bold mb-6 text-slate-900 leading-tight">Mitra Strategis <span className="font-serif italic font-medium text-slate-800">Transformasi Digital</span> Sekolah Anda</h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            EduAssess AI dirancang untuk memecahkan dilema klasik dunia pendidikan: beban administrasi guru yang tinggi versus kebutuhan akan asesmen yang berkualitas.
          </p>
          <ul className="space-y-4">
            {[
              "Meningkatkan produktivitas guru hingga 80%",
              "Menjamin validitas dan kejujuran hasil ujian",
              "Memberikan laporan perkembangan siswa berbasis data"
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-700 font-medium font-sans">
                <CheckCircle2 className="text-emerald-500" size={22} /> {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description, bgLight, textColor }: { icon: any, title: string, description: string, bgLight: string, textColor: string }) => (
  <motion.div 
    whileHover={{ 
      y: -8, 
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)",
      borderColor: "rgb(199, 210, 254)" 
    }}
    className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 text-left relative overflow-hidden group"
  >
    <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-full -mr-12 -mt-12 group-hover:bg-indigo-50 transition-colors duration-500" />
    <div className={`${bgLight} w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${textColor} relative z-10 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
      <Icon size={28} />
    </div>
    <h3 className="font-display font-bold text-xl text-slate-900 mb-4 relative z-10">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed relative z-10">{description}</p>
    <div className="mt-6 flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Selengkapnya <ArrowRight size={14} />
    </div>
  </motion.div>
);

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="fitur" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-indigo-600 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Ekosistem Terintegrasi</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-slate-900">Instrumen Masa Depan Pendidikan</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Kami menghadirkan teknologi tercanggih untuk memastikan setiap detik waktu guru berharga untuk edukasi siswa.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants}>
            <FeatureCard 
              icon={BrainCircuit}
              title="AI Question Generator"
              description="Algoritma cerdas yang mampu membedah dokumen PDF dan video pembelajaran menjadi butir soal HOTS yang variatif."
              bgLight="bg-emerald-50"
              textColor="text-emerald-500"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureCard 
              icon={Trophy}
              title="Interactive Gamification"
              description="Ubah suasana ujian menjadi petualangan belajar yang seru dengan sistem XP, leaderboard, dan reward instan."
              bgLight="bg-orange-50"
              textColor="text-orange-500"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureCard 
              icon={ShieldCheck}
              title="Smart AI Monitoring"
              description="Pengawasan berbasis AI yang mampu mendeteksi arah pandangan dan pergantian jendela browser secara realtime."
              bgLight="bg-rose-50"
              textColor="text-rose-500"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureCard 
              icon={BarChart3}
              title="Automated Analytics"
              description="Dapatkan laporan mendalam mengenai sebaran nilai dan tingkat kesulitan soal tanpa input data manual sama sekali."
              bgLight="bg-blue-50"
              textColor="text-blue-500"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureCard 
              icon={Users}
              title="Unified Admin Portal"
              description="Kelola seluruh hierarki akademik sekolah dalam satu platform, mulai dari Madrasah Ibtidaiyah hingga Aliyah."
              bgLight="bg-purple-50"
              textColor="text-purple-500"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <motion.div 
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
              className="bg-gradient-to-br from-indigo-600 to-blue-700 h-full p-8 rounded-3xl border border-indigo-500 shadow-xl flex flex-col justify-between group overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-8 text-white">
                  <MonitorCheck size={28} />
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-4">Mulai Transformasi?</h3>
                <p className="text-indigo-100 text-sm leading-relaxed mb-8">Dapatkan konsultasi gratis dengan konsultan teknologi pendidikan kami sekarang.</p>
              </div>
              <a 
                href="https://wa.me/628568117553?text=Halo%20Tim%20EduAssess%20AI%2C%20kami%20ingin%20menjadwalkan%20demo%20eksklusif%20untuk%20sekolah/institusi%20kami.%20Mohon%20waktu%20dan%20ketersediaannya.%20Terima%20kasih."
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors w-full shadow-lg"
              >
                Jadwalkan Demo <ArrowRight size={18} />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: 0,
      title: "Live Quiz Interaktif",
      icon: PlayCircle,
      tag: "Engagement",
      desc: "Ubah suasana kelas menjadi arena kompetisi yang seru. Leaderboard real-time dan efek suara yang meningkatkan adrenalin belajar siswa.",
      mockup: (
        <div className="bg-slate-900 rounded-2xl p-6 h-full border border-white/10 shadow-2xl relative overflow-hidden flex flex-col">
          <div className="flex justify-between items-center mb-8">
             <div className="bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Live Mode</div>
             <div className="text-white font-mono text-xs">00:45</div>
          </div>
          <div className="space-y-4 mb-10 flex-grow">
             <div className="text-white font-bold text-lg leading-snug">Apa fungsi utama dari Mitokondria dalam sel?</div>
             <div className="grid grid-cols-2 gap-3">
                <div className="bg-indigo-600/50 border border-indigo-400/30 p-3 rounded-xl text-white text-xs">Penghasil Energi</div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-white/40 text-xs text-center opacity-50">Sintesis Protein</div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-white/40 text-xs text-center opacity-50">Transportasi</div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-xl text-white/40 text-xs text-center opacity-50">Ekskresi</div>
             </div>
          </div>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
             <div className="text-[10px] text-slate-400 uppercase font-bold mb-3 tracking-widest">Leaderboard Top 3</div>
             <div className="space-y-2">
                <div className="flex justify-between text-xs text-white bg-amber-500/10 p-2 rounded-lg border border-amber-500/20">
                   <span>🥇 Ahmad S.</span> <span>1,250 XP</span>
                </div>
                <div className="flex justify-between text-xs text-white p-2">
                   <span>02 Budi R.</span> <span>1,120 XP</span>
                </div>
                <div className="flex justify-between text-xs text-white p-2">
                   <span>03 Clarissa</span> <span>980 XP</span>
                </div>
             </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "Monitoring Real-time",
      icon: Activity,
      tag: "Proctoring",
      desc: "Pantau aktivitas setiap siswa secara langsung. Deteksi dini potensi kendala teknis atau indikasi kecurangan dengan dashboard pengawas.",
      mockup: (
        <div className="bg-white rounded-2xl p-6 h-full border border-slate-200 shadow-2xl relative overflow-hidden flex flex-col">
          <div className="flex items-center gap-3 mb-6">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
             <div className="text-slate-900 font-bold text-sm">Monitoring Aktif: 32 Siswa</div>
          </div>
          <div className="grid grid-cols-4 gap-3 flex-grow">
             {[...Array(12)].map((_, i) => (
                <div key={i} className={`h-16 rounded-xl border flex flex-col items-center justify-center gap-2 ${i === 5 ? 'border-rose-200 bg-rose-50 shadow-inner' : 'border-slate-100 bg-slate-50'}`}>
                   <div className={`w-6 h-6 rounded-full ${i === 5 ? 'bg-rose-200' : 'bg-slate-200'}`} />
                   <div className={`h-1.5 w-10 rounded-full ${i === 5 ? 'bg-rose-400 animate-pulse' : 'bg-slate-300'}`} />
                </div>
             ))}
          </div>
          <div className="mt-8 bg-rose-50 border border-rose-100 p-4 rounded-xl flex items-center gap-4">
             <div className="bg-rose-500 text-white p-2 rounded-lg"><Activity size={18} /></div>
             <div className="text-[10px] text-rose-700 font-bold leading-tight">
                CRITICAL ALERT: <br />
                <span className="font-normal opacity-80 text-[10px]">Siswa "Bambang K." terdeteksi berganti tab browser sebanyak 3 kali.</span>
             </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "AI Generator PDF",
      icon: Sparkles,
      tag: "Intelligence",
      desc: "Ubah tumpukan modul fisik atau digital menjadi bank soal siap pakai. AI kami memahami konteks dan derajat kesulitan materi.",
      mockup: (
        <div className="bg-indigo-900 rounded-2xl p-6 h-full border border-indigo-400/20 shadow-2xl relative overflow-hidden flex flex-col justify-center">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
             <div className="flex items-center gap-5 mb-8">
                <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl"><FileUp size={24} /></div>
                <div>
                   <div className="text-white text-sm font-bold">Kurikulum_Merdeka_Biologi.pdf</div>
                   <div className="text-indigo-300 text-[10px] opacity-70">4.8 MB • 120 Halaman</div>
                </div>
             </div>
             <div className="space-y-6">
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                   <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="h-full bg-gradient-to-r from-emerald-500 to-indigo-400"
                   />
                </div>
                <div className="text-[10px] font-mono text-indigo-200 text-center uppercase tracking-widest animate-pulse">Processing Semantic Analysis...</div>
                <div className="grid grid-cols-2 gap-4">
                   <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                      <div className="text-emerald-400 font-bold text-lg">25</div>
                      <div className="text-white/40 text-[9px] uppercase font-bold tracking-tighter">Multiple Choice</div>
                   </div>
                   <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                      <div className="text-indigo-400 font-bold text-lg">10</div>
                      <div className="text-white/40 text-[9px] uppercase font-bold tracking-tighter">Analytical Essay</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Analisis Nilai Otomatis",
      icon: PieChart,
      tag: "Analytics",
      desc: "Dapatkan wawasan mendalam mengenai daya serap siswa dan efektivitas butir soal secara instan tanpa rekap manual.",
      mockup: (
        <div className="bg-white rounded-2xl p-6 h-full border border-slate-200 shadow-2xl relative overflow-hidden flex flex-col">
           <div className="flex justify-between items-center mb-8">
              <h4 className="text-slate-900 font-bold text-sm tracking-tight">E-Rapor Analytics v1.2</h4>
              <div className="bg-indigo-50 px-3 py-1 rounded-lg text-indigo-600 font-bold text-[10px]">Lengkap</div>
           </div>
           <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                 <div className="text-[9px] text-slate-400 font-bold uppercase mb-1">Rata-rata</div>
                 <div className="text-2xl font-black text-indigo-600">88.5</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                 <div className="text-[9px] text-slate-400 font-bold uppercase mb-1">Tertinggi</div>
                 <div className="text-2xl font-black text-emerald-500">100</div>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                 <div className="text-[9px] text-slate-400 font-bold uppercase mb-1">Terendah</div>
                 <div className="text-2xl font-black text-rose-500">62</div>
              </div>
           </div>
           <div className="space-y-4 flex-grow">
              <div className="flex items-center justify-between">
                 <div className="text-[10px] font-bold text-slate-800 uppercase tracking-widest">Distribusi Capaian</div>
                 <div className="text-[10px] text-slate-400">7 Kelompok</div>
              </div>
              <div className="flex items-end gap-2 h-24 mb-4">
                 {[40, 60, 35, 95, 75, 55, 90].map((h, i) => (
                    <motion.div 
                       key={i} 
                       initial={{ height: 0 }}
                       whileInView={{ height: `${h}%` }}
                       transition={{ delay: i * 0.05, duration: 0.8 }}
                       className="flex-1 bg-indigo-100 rounded-t-lg relative group h-full"
                    >
                       <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg" />
                    </motion.div>
                 ))}
              </div>
           </div>
        </div>
      )
    }
  ];

  return (
    <section id="monitoring" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-12 text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6"
            >
              Demo Interaktif <span className="font-serif italic font-medium text-slate-800">Fitur Utama</span>
            </motion.h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Lihat bagaimana EduAssess AI mentransformasi proses asesmen konvensional menjadi pengalaman digital yang intuitif.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4">
            {features.map((feature, idx) => (
              <motion.button
                key={feature.id}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-left p-6 rounded-3xl transition-all duration-500 border flex gap-6 group ${activeTab === idx ? 'bg-white border-indigo-200 shadow-2xl scale-[1.02]' : 'bg-transparent border-transparent grayscale hover:grayscale-0 hover:bg-white/50'}`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 ${activeTab === idx ? 'bg-indigo-600 text-white rotate-12' : 'bg-slate-200 text-slate-500 group-hover:bg-slate-300'}`}>
                  <feature.icon size={28} />
                </div>
                <div>
                  <div className={`text-[10px] font-bold uppercase tracking-[0.25em] mb-1.5 transition-colors ${activeTab === idx ? 'text-indigo-600' : 'text-slate-400'}`}>
                    {feature.tag}
                  </div>
                  <h4 className={`font-display font-bold text-xl mb-2 transition-colors ${activeTab === idx ? 'text-slate-900' : 'text-slate-600'}`}>{feature.title}</h4>
                  {activeTab === idx && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-slate-500 text-sm leading-relaxed"
                    >
                      {feature.desc}
                    </motion.p>
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          <div className="lg:col-span-7 h-[550px] relative">
            <div className="absolute inset-x-0 -bottom-10 h-20 bg-gradient-to-t from-slate-50 to-transparent z-10 pointer-events-none" />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="h-full"
              >
                {features[activeTab].mockup}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => (
  <section className="py-24 bg-slate-50 border-y border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20 text-slate-900"
      >
        <h2 className="font-display text-4xl font-bold mb-6">Alur Kerja Digital Sederhana</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">Empat langkah mudah untuk beralih ke ekosistem asesmen berbasis teknologi AI.</p>
      </motion.div>
      <div className="grid md:grid-cols-4 gap-12 relative">
        {[
          { icon: FileUp, step: "01", title: "Input Materi", desc: "Unggah dokumen PDF atau video materi sebagai referensi soal." },
          { icon: Users, step: "02", title: "Atur Peserta", desc: "Kelola kelas dan jadwal ujian dalam satu kontrol terpusat." },
          { icon: MonitorCheck, step: "03", title: "Monitoring", desc: "Awasi proses pengerjaan secara real-time dari dashboard pengawas." },
          { icon: BarChart3, step: "04", title: "Hasil & Analisis", desc: "Terima laporan nilai dan analisis butir soal secara otomatis." },
        ].map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative text-center"
          >
            <div className="w-20 h-20 bg-white shadow-sm border border-slate-200 text-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <item.icon size={32} />
            </div>
            <div className="absolute top-10 right-1/4 hidden md:block w-full h-px bg-slate-200 -z-10" />
            <span className="block text-indigo-600 font-bold text-xs uppercase tracking-widest mb-2">Step {item.step}</span>
            <h4 className="font-bold text-slate-800 mb-3">{item.title}</h4>
            <p className="text-slate-500 text-[10px] leading-relaxed px-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const GuidanceSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-indigo-600 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Standard Operating Procedure</span>
          <h2 className="font-display text-4xl font-bold text-slate-900 mb-8 leading-tight">
            Menjaga Integritas dengan <span className="font-serif italic font-medium">SOP Terstandarisasi</span>
          </h2>
          <p className="text-slate-500 text-lg mb-10 leading-relaxed">
            Keberhasilan ujian digital dimulai dari persiapan yang matang. Kami menyediakan panduan lengkap untuk memastikan setiap sesi asesmen berjalan adil, aman, dan tanpa kendala teknis.
          </p>
          
          <div className="space-y-6">
            {[
              { icon: Smartphone, title: "Persiapan Perangkat", desc: "Setting screen timeout minimal 30 menit & batere minimal 80%." },
              { icon: BellOff, title: "Mode Jangan Ganggu", desc: "Wajib mengaktifkan Do Not Disturb untuk menghindari diskualifikasi otomatis." },
              { icon: Shield, title: "Sistem Keamanan", desc: "Deteksi otomatis terhadap screenshot, perpindahan tab, dan aplikasi pihak ketiga." },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-5 group">
                <div className="bg-indigo-50 text-indigo-600 p-3 rounded-2xl h-fit border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <motion.div 
            whileHover={{ x: 10 }}
            className="mt-12 flex items-center gap-4 text-indigo-600 font-bold cursor-pointer group"
          >
            Pelajari Buku Panduan Lengkap <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-indigo-600/5 rounded-[3rem] -rotate-3 translate-x-4 translate-y-4" />
          <div className="relative bg-slate-50 border border-slate-200 rounded-[3rem] p-8 md:p-12 shadow-xl overflow-hidden">
             <div className="absolute top-0 right-0 p-8">
                <Clock className="text-indigo-200" size={120} />
             </div>
             <div className="relative z-10">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 max-w-[280px] mb-8">
                   <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center"><CheckCircle2 size={24} /></div>
                      <div className="font-bold text-xs text-slate-800">SOP Terpenuhi</div>
                   </div>
                   <div className="space-y-2">
                       <div className="h-1.5 w-full bg-slate-100 rounded-full" />
                       <div className="h-1.5 w-4/5 bg-slate-100 rounded-full" />
                   </div>
                </div>
                
                <h3 className="font-display font-bold text-2xl text-slate-900 mb-6 underline decoration-indigo-200 underline-offset-8">Sistem Sanksi Berlapis</h3>
                <div className="space-y-4">
                   <div className="bg-amber-50 border border-amber-100 p-5 rounded-2xl">
                      <div className="flex items-center gap-3 mb-2">
                         <div className="w-3 h-3 bg-amber-500 rounded-full" />
                         <span className="font-bold text-amber-800 text-sm">Kartu Kuning (Peringatan)</span>
                      </div>
                      <p className="text-amber-700 text-xs leading-relaxed">Terdeteksi keluar layar/notifikasi. Akun terlogout sementara, jawaban tetap aman.</p>
                   </div>
                   <div className="bg-rose-50 border border-rose-100 p-5 rounded-2xl">
                      <div className="flex items-center gap-3 mb-2">
                         <div className="w-3 h-3 bg-rose-500 rounded-full" />
                         <span className="font-bold text-rose-800 text-sm">Kartu Merah (Diskualifikasi)</span>
                      </div>
                      <p className="text-rose-700 text-xs leading-relaxed">Pelanggaran berulang. Ujian dihentikan paksa dan nilai di-reset menjadi nol secara otomatis.</p>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const AIShowcase = () => (
  <section id="teknologi-ai" className="py-24 bg-slate-900 text-white overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-indigo-400 font-bold mb-6 text-xs uppercase tracking-widest"
          >
            <BrainCircuit size={20} /> Smart Intelligence
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Asisten Cerdas Guru <br /> 
            <span className="font-serif italic font-medium text-indigo-300">Berbasis Generative AI</span>
          </h2>
          
          <div className="space-y-10">
            <div className="flex gap-4">
              <div className="bg-indigo-500/20 p-4 rounded-2xl h-fit border border-indigo-400/30">
                <FileUp className="text-indigo-400" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Automated Question Generation</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Pangkas waktu pembuatan soal hingga 90% dengan AI yang mampu merangkum materi menjadi soal-soal berkualitas tinggi.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-emerald-500/20 p-4 rounded-2xl h-fit border border-emerald-400/30">
                <ShieldCheck className="text-emerald-400" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">AI Proctoring Intelligence</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Deteksi dini kecurangan melalui pola navigasi layar dan verifikasi visual real-time.</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-[100px]" />
          <div className="bg-slate-800 border border-slate-700 p-10 rounded-3xl relative shadow-3xl">
             <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                   <div className="text-xs font-mono text-indigo-400">AI Task Runner</div>
                   <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-slate-600" />
                      <div className="w-2 h-2 rounded-full bg-slate-600" />
                      <div className="w-2 h-2 rounded-full bg-slate-600" />
                   </div>
                </div>
                <div className="bg-indigo-900/40 p-4 rounded-xl border border-indigo-500/20 italic text-slate-300 text-xs">
                   &quot;AI sedang memproses dokumen Kurikulum Merdeka... Merumuskan 15 soal level HOTS.&quot;
                </div>
                <div className="space-y-3">
                   <div className="h-10 border border-indigo-500/30 rounded-xl flex items-center px-4 text-[10px] uppercase font-bold text-indigo-300 bg-indigo-500/5">
                      15 Soal PG Berhasil Tergenerate
                   </div>
                   <div className="h-10 border border-emerald-500/30 rounded-xl flex items-center px-4 text-[10px] uppercase font-bold text-emerald-300 bg-emerald-500/5">
                      LKPD Siap Unduh (PDF)
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Pricing = () => {
  return (
    <section id="harga" className="py-32 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-indigo-50 rounded-full blur-[100px] opacity-60" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[100px] opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-indigo-600 font-bold text-xs uppercase tracking-[0.3em] mb-4 block"
          >
            Investasi Masa Depan
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Kualitas Premium, <span className="font-serif italic font-medium text-slate-800">Sangat Terjangkau</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Kami percaya teknologi pendidikan berkualitas harus bisa dinikmati oleh seluruh sekolah dan madrasah di Indonesia tanpa terkecuali.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col md:flex-row group transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10"
          >
            <div className="p-10 md:p-16 flex-grow">
              <h3 className="font-display font-bold text-3xl text-slate-900 mb-6">Paket Sekolah Inovatif</h3>
              <p className="text-slate-500 mb-10 leading-relaxed">Akses penuh ke seluruh ekosistem EduAssess AI termasuk AI Question Generator, Live Quiz, Monitoring Real-time, dan Analisis Nilai.</p>
              
              <div className="space-y-4 mb-12">
                {[
                  "Pengguna Guru & Admin Tanpa Batas",
                  "Penyimpanan Bank Soal Cloud Aman",
                  "Update Fitur & Teknologi AI Berkala",
                  "Pelatihan & Pendampingan Implementasi",
                  "Dukungan Teknis Prioritas via WhatsApp"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="bg-emerald-100 text-emerald-600 p-1 rounded-full">
                      <CheckCircle2 size={16} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-slate-100 flex items-center gap-6">
                 <div className="bg-indigo-50 p-4 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500">
                    <Users size={32} />
                 </div>
                 <div>
                    <h4 className="font-bold text-slate-900 text-sm">Gratis 30 Hari Pertama</h4>
                    <p className="text-slate-500 text-xs mt-1">Uji coba di sekolah Anda tanpa komitmen apapun.</p>
                 </div>
              </div>
            </div>

            <div className="bg-slate-50 p-10 md:p-16 md:w-[400px] flex flex-col justify-center items-center text-center border-l border-slate-100 relative">
              <div className="absolute top-0 right-0 p-4">
                 <div className="bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">Paling Hemat</div>
              </div>
              <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Investasi Per Siswa</div>
              <div className="flex items-start gap-1 mb-2">
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-2xl font-bold text-slate-900 mt-2"
                >
                  Rp
                </motion.span>
                <motion.span 
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="text-7xl font-black text-indigo-600 tracking-tighter"
                >
                  4.000
                </motion.span>
              </div>
              <div className="text-slate-500 font-medium text-sm mb-10">/ per semester</div>
              
              <a 
                href="https://wa.me/628568117553?text=Halo%20EduAssess%20AI%2C%20kami%20siap%20untuk%20melakukan%20integrasi%20sistem%20asesmen%20digital%20di%20sekolah%20kami%20dengan%20paket%20Rp.4000/siswa.%20Mohon%20panduannya.%20Terima%20kasih."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 mb-6 group/btn block text-center"
              >
                Mulai Integrasi <ArrowRight className="inline-block ml-2 group-hover/btn:translate-x-1 transition-transform" size={20} />
              </a>
              <p className="text-[10px] text-slate-400 leading-relaxed font-medium italic">
                *Penawaran ini khusus untuk mendukung kemajuan pendidikan di tingkat SD, SMP, SMA, dan Madrasah.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-slate-400 text-sm">Butuh penyesuaian khusus untuk Yayasan besar (&gt;5 Sekolah)? <a href="#" className="text-indigo-600 font-bold border-b-2 border-indigo-100 hover:border-indigo-600 transition-all">Hubungi Partnership Team</a></p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-4xl font-bold mb-16 px-4 text-slate-900"
      >
        Standar Baru Evaluasi Digital
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-16">
        {[
          { label: "99.9%", subtitle: "Akurasi & Integritas", desc: "Sistem keamanan militer yang menjamin kerahasiaan bank soal dan keaslian nilai siswa.", color: "text-indigo-600" },
          { label: "80%", subtitle: "Efisiensi Admin", desc: "Otomatisasi koreksi dan rekapitulasi nilai, memberikan waktu lebih banyak untuk pengajaran.", color: "text-emerald-500" },
          { label: "10k+", subtitle: "Soal Diproses", desc: "Infrastruktur server andal yang siap melayani ujian serentak tanpa kendala latensi.", color: "text-indigo-400" }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <div className={`text-5xl font-extrabold ${stat.color} mb-4`}>{stat.label}</div>
            <p className="font-bold text-slate-800 mb-2 uppercase tracking-wide text-xs">{stat.subtitle}</p>
            <p className="text-slate-500 text-sm leading-relaxed px-2">{stat.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-indigo-600 p-1.5 rounded-lg text-white">
              <GraduationCap size={20} />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-indigo-900">EduAssess AI</span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            Platform modern untuk mendukung terwujudnya digitalisasi pendidikan Indonesia yang berkualitas, adil, dan transparan melalui teknologi kecerdasan buatan.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-slate-900 mb-6 uppercase text-sm tracking-wider">Layanan</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li><a href="#" className="hover:text-indigo-600 transition-colors">E-Assessment Portal</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition-colors">AI Generator Service</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition-colors">Digital Proctoring</a></li>
            <li><a href="#" className="hover:text-indigo-600 transition-colors">Sistem Manajemen Sekolah</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6 uppercase text-sm tracking-wider">Perusahaan</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li>Tentang Kami</li>
            <li>Hubungan Investor</li>
            <li>Blog Pendidikan</li>
            <li>Ketentuan Layanan</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6 uppercase text-sm tracking-wider">Berlangganan Newsletter</h4>
          <p className="text-sm text-slate-500 mb-4">Dapatkan tips & trik memaksimalkan AI untuk pembelajaran.</p>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Email Institusi" 
              className="bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm w-full outline-none focus:border-indigo-300 transition-all"
            />
            <button className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition-colors">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-slate-400 text-xs gap-4">
        <p>&copy; {new Date().getFullYear()} EduAssess AI - PT Inovasi Pendidikan Bangsa. Semua Hak Dilindungi.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-slate-600">Kebijakan Privasi</a>
          <a href="#" className="hover:text-slate-600">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-indigo-600 text-white p-3 rounded-full shadow-2xl hover:bg-indigo-700 transition-colors"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="font-sans bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 z-[60] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <main>
        <Hero />
        
        {/* Trust Bar */}
        <section className="bg-slate-100/50 py-10 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-16 flex items-center justify-between flex-wrap gap-8">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Dipercaya Oleh Institusi</span>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="flex gap-12 opacity-50 grayscale contrast-125 items-center"
            >
               <span className="text-sm font-bold text-slate-700 font-serif italic">SMP Harapan Jaya</span>
               <span className="text-sm font-bold text-slate-700 font-serif italic">MA Al-Ikhlas</span>
               <span className="text-sm font-bold text-slate-700 font-serif italic">SMK Bina Bangsa</span>
            </motion.div>
            <div className="flex gap-3">
               <button className="px-4 py-2 bg-white border border-slate-300 rounded-md text-[10px] font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-50 shadow-sm transition-colors">Panduan</button>
               <button className="px-4 py-2 bg-indigo-600 text-white rounded-md text-[10px] font-bold uppercase tracking-wider shadow-md hover:bg-indigo-700 transition-all">Mulai Sekarang</button>
            </div>
          </div>
        </section>

        <About />
        <Features />
        <FeatureShowcase />
        <HowItWorks />
        <GuidanceSection />
        <Pricing />
        <AIShowcase />
        <WhyChooseUs />

        {/* CTA Section */}
        <section className="py-24 bg-indigo-900 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">
                Siap Bertransformasi Digital?
              </h2>
              <p className="text-indigo-100 text-xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed italic font-serif">
                Bergabunglah dengan ratusan sekolah yang telah memodernisasi cara mereka mengevaluasi perkembangan siswa melalui teknologi kecerdasan buatan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-indigo-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-950">
                  Jadwalkan Presentasi Virtual
                </button>
                <button className="bg-white/10 text-white backdrop-blur-md border border-white/20 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                  Hubungi Engineering Team
                </button>
              </div>
            </motion.div>
          </div>
          {/* Decorative Shapes */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
