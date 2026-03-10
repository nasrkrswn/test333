import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
          
          <div className="glass-card p-8 md:p-10">
            <div className="inline-block mb-5 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-bold">
              Portfolio • Premium Creative Experience
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              أصمم هويات بصرية وتجارب رقمية تترك أثرًا واضحًا
            </h1>
            <div className="text-xl md:text-2xl text-gold-400 font-bold mb-5">
              Karim Hesham El TOKHY
            </div>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl">
              مدير إبداعي وخبير في بناء العلامات التجارية والتجارب الرقمية، بخبرة تجمع بين الرؤية الإبداعية، التنظيم البصري، والنتائج العملية في مشاريع رفيعة المستوى.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#projects" className="px-6 py-3 rounded-full font-bold bg-gradient-to-br from-gold-500 to-gold-400 text-black hover:-translate-y-1 transition-transform inline-flex items-center justify-center">
                عرض الأعمال
              </a>
              <a href="#contact" className="px-6 py-3 rounded-full font-bold border border-white/10 hover:border-gold-500/50 hover:text-gold-400 transition-colors inline-flex items-center justify-center">
                تواصل الآن
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { value: '15+', label: 'سنة خبرة' },
                { value: '200+', label: 'مشروع مكتمل' },
                { value: '12+', label: 'جائزة دولية' },
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                  <strong className="block text-2xl text-gold-400 mb-1">{stat.value}</strong>
                  <span className="text-sm text-gray-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card min-h-[400px] lg:min-h-[520px] flex items-center justify-center relative overflow-hidden p-8">
            <motion.div 
              animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[280px] h-[280px] rounded-full bg-gold-500/20 blur-[28px]"
            />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute w-[250px] md:w-[340px] h-[250px] md:h-[340px] border border-gold-500/20 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute w-[320px] md:w-[440px] h-[320px] md:h-[440px] border border-dashed border-white/10 rounded-full"
            />
            
            <div className="relative w-[180px] md:w-[230px] h-[180px] md:h-[230px] rounded-[30px] flex items-center justify-center text-[90px] md:text-[110px] font-extrabold text-gold-400 bg-gradient-to-br from-gold-500/20 to-white/5 border border-gold-500/30 -rotate-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
              K
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
