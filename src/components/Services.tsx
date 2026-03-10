import { PenTool, Layout, Lightbulb } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <PenTool size={24} />,
      title: 'الهوية البصرية',
      desc: 'تصميم أنظمة بصرية متكاملة تشمل الألوان، الخطوط، الشعار، وطريقة العرض.'
    },
    {
      icon: <Layout size={24} />,
      title: 'التجارب الرقمية',
      desc: 'بناء واجهات ومواقع راقية تعكس شخصية العلامة وتقدم تجربة استخدام واضحة وأنيقة.'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'الاستراتيجية الإبداعية',
      desc: 'دمج التفكير الاستراتيجي مع الإخراج البصري لصناعة حضور احترافي مؤثر وقابل للتطوير.'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <span className="inline-block text-gold-400 text-sm font-bold tracking-[0.15em] mb-3 uppercase">Services</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">الخدمات</h2>
          <p className="text-gray-400 text-lg max-w-3xl">
            عرض مبسط للخدمات الأساسية التي يمكن تقديمها ضمن الهوية الشخصية أو البورتفوليو.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="glass-card p-6 md:p-8 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-gold-400 bg-gold-500/10 border border-gold-500/20 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
