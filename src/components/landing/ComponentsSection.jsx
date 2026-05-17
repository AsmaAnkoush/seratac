const components = [
  {
    number: '1',
    title: 'بناء أسس قوية للتعلم والرفاه',
    desc: 'تعزيز المهارات الأساسية للتعلم والنمو النفسي والاجتماعي لضمان بيئة تعليمية آمنة وداعمة لجميع الطلبة.',
    gradient: 'linear-gradient(135deg, #F06496 0%, #E94B7E 100%)',
  },
  {
    number: '2',
    title: 'تسخير التكنولوجيا لتعلم STEM',
    desc: 'توظيف التكنولوجيا الحديثة في تعلم العلوم والرياضيات والهندسة لإعداد الطلبة لمتطلبات سوق العمل المستقبلية.',
    gradient: 'linear-gradient(135deg, #FBC421 0%, #F5A623 100%)',
  },
  {
    number: '3',
    title: 'تعزيز نظام تقييم تعلم الطلبة',
    desc: 'تطوير أنظمة تقييم فعّالة وعادلة لدعم تقدّم الطلبة وتحسين مخرجات التعليم بشكل مستمر.',
    gradient: 'linear-gradient(135deg, #7AC943 0%, #5BA82E 100%)',
  },
];

function ComponentsSection() {
  return (
    <section id="components" className="py-12 sm:py-16 lg:py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-right mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary inline-flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-subject1" />
            المكونات
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {components.map((c) => (
            <div
              key={c.number}
              className="relative rounded-3xl p-5 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group min-h-[200px] flex flex-col"
              style={{ background: c.gradient }}
            >
              {/* Small dots pattern — top-left corner */}
              <div className="absolute top-5 left-5 grid grid-cols-4 gap-1.5 opacity-25 pointer-events-none">
                {Array.from({ length: 16 }).map((_, i) => (
                  <span key={i} className="w-1 h-1 rounded-full bg-white" />
                ))}
              </div>

              {/* Prominent number with decorative underline */}
              <div className="relative z-10 mb-3 text-right">
                <span className="text-4xl lg:text-5xl font-black text-white leading-none block">
                  {c.number}
                </span>
                <span className="block w-12 h-0.5 bg-white/60 rounded-full mt-2 mr-0 ml-auto" />
              </div>

              <h3 className="text-lg font-bold text-white mb-3 relative z-10 leading-tight text-right">
                {c.title}
              </h3>

              <p className="text-white/90 leading-snug relative z-10 text-sm text-right">
                {c.desc}
              </p>

              {/* Soft decorative circle — bottom-right */}
              <div className="absolute -bottom-8 -right-8 w-20 h-20 rounded-full bg-white/10 group-hover:scale-110 transition-transform duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ComponentsSection;
