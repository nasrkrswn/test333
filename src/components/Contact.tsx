import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert('تم إرسال الرسالة بنجاح بشكل تجريبي.');
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <span className="inline-block text-gold-400 text-sm font-bold tracking-[0.15em] mb-3 uppercase">Contact</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">تواصل معي</h2>
          <p className="text-gray-400 text-lg max-w-3xl">
            نموذج بسيط وآمن. يعمل الآن بشكل تجريبي بدون أي ربط خارجي حتى لا يحدث خطأ.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-6">
          <div className="glass-card p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-3">معلومات التواصل</h3>
            <p className="text-gray-400 mb-6">يمكنك تعديل هذه البيانات لاحقًا بسهولة داخل الكود.</p>

            <div className="grid gap-3">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-gray-300">
                الموقع: دبي، الإمارات
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-gray-300">
                البريد: karim.tokhy@outlook.com
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-gray-300">
                الهاتف: +971 55 XXX XXXX
              </div>
              <div className="grid grid-cols-3 gap-3 mt-2">
                {['LinkedIn', 'Behance', 'Dribbble'].map(social => (
                  <a key={social} href="#" className="p-3 text-center rounded-2xl bg-white/5 border border-white/10 text-gray-300 hover:border-gold-500/40 hover:text-gold-400 transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card p-6 md:p-8">
            <form onSubmit={handleSubmit} className="grid gap-4">
              <input 
                type="text" 
                placeholder="الاسم" 
                required 
                className="w-full p-4 rounded-2xl border border-white/10 bg-white/5 text-white outline-none focus:border-gold-500/50 focus:ring-4 focus:ring-gold-500/10 transition-all"
              />
              <input 
                type="email" 
                placeholder="البريد الإلكتروني" 
                required 
                className="w-full p-4 rounded-2xl border border-white/10 bg-white/5 text-white outline-none focus:border-gold-500/50 focus:ring-4 focus:ring-gold-500/10 transition-all"
              />
              <textarea 
                placeholder="اكتب رسالتك هنا..." 
                required 
                className="w-full p-4 rounded-2xl border border-white/10 bg-white/5 text-white outline-none focus:border-gold-500/50 focus:ring-4 focus:ring-gold-500/10 transition-all min-h-[140px] resize-y"
              ></textarea>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl font-bold bg-gradient-to-br from-gold-500 to-gold-400 text-black hover:-translate-y-1 transition-transform disabled:opacity-70 disabled:hover:translate-y-0 cursor-pointer"
              >
                {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
