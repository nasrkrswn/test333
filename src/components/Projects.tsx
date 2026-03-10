export default function Projects() {
  const projects = [
    {
      title: 'Luxury Brand Experience',
      client: 'LuxStay',
      desc: 'إعادة بناء هوية وتجربة رقمية راقية لمنصة ضيافة فاخرة مع تحسين الحضور البصري.',
      tags: ['Branding', 'UI/UX', 'Strategy']
    },
    {
      title: 'Digital Product Design',
      client: 'FinWallet',
      desc: 'تصميم تجربة تطبيق مالي حديث يوازن بين الوضوح، الثقة، والأداء البصري العالي.',
      tags: ['App Design', 'UX Research', 'Interface']
    },
    {
      title: 'Restaurant Identity',
      client: 'Saffron & Silk',
      desc: 'هوية بصرية متكاملة لمطعم فاخر بدءًا من العلامة وحتى تطبيق النظام على الواجهة.',
      tags: ['Logo', 'Identity', 'Art Direction']
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <span className="inline-block text-gold-400 text-sm font-bold tracking-[0.15em] mb-3 uppercase">Projects</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">نماذج أعمال</h2>
          <p className="text-gray-400 text-lg max-w-3xl">
            يمكنك استبدال هذه المشاريع لاحقًا بمشاريعك الحقيقية وإضافة صور وروابط وصفحات تفصيلية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="glass-card p-6 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="h-[200px] rounded-2xl mb-6 flex items-center justify-center text-gold-400 text-2xl font-bold bg-gradient-to-br from-gold-500/15 to-white/5 border border-white/10 group-hover:border-gold-500/30 transition-colors">
                {project.client}
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 rounded-full text-xs text-gray-400 bg-white/5 border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
