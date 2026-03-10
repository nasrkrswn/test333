export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <span className="inline-block text-gold-400 text-sm font-bold tracking-[0.15em] mb-3 uppercase">About</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">من أنا</h2>
          <p className="text-gray-400 text-lg max-w-3xl">
            بورتفوليو منظم يعرض الهوية المهنية، المهارات، والأعمال بطريقة واضحة وفاخرة تناسب شخصية قيادية في المجال الإبداعي.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6">
          <div className="glass-card p-6">
            <div className="min-h-[360px] h-full rounded-2xl flex items-center justify-center bg-gradient-to-br from-gold-500/20 to-white/5 border border-white/10 text-gold-400 text-2xl font-bold">
              صورة شخصية
            </div>
          </div>

          <div className="glass-card p-6 md:p-8">
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              كريم هشام الطوخي مدير إبداعي واستراتيجي علامات تجارية، يعمل على تطوير هويات بصرية وتجارب رقمية تجمع بين الفخامة، الوضوح، والبعد الاستراتيجي.
            </p>

            <div className="grid gap-4">
              {[
                { title: 'الخبرة', desc: 'أكثر من 15 عامًا في التصميم، الهوية البصرية، وقيادة المشاريع الإبداعية.' },
                { title: 'الموقع', desc: 'مصري ومقيم في دبي.' },
                { title: 'اللغات', desc: 'العربية لغة أم، الإنجليزية بطلاقة، الفرنسية مستوى متوسط.' },
                { title: 'الاهتمامات', desc: 'التصوير الفوتوغرافي، السفر، كتب التصميم والفلسفة، العزف على الجيتار، الجري.' },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <strong className="block text-gold-400 mb-1">{item.title}</strong>
                  <span className="text-gray-300">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
