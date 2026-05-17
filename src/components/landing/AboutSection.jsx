import { FiTarget, FiEye } from 'react-icons/fi';

const cards = [
  {
    number: '01',
    title: 'رسالتنا',
    desc: 'تمكين المتعلمين من تحقيق كامل إمكاناتهم من خلال تعزيز مخرجات التعليم الأساسي والثانوي، وإتاحة مسارات متنوعة تقود إلى التعليم العالي.',
    icon: FiTarget,
    gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
  },
  {
    number: '02',
    title: 'رؤيتنا',
    desc: 'بحلول عام 2030، ستكون الدفعة الأولى من الطلبة الفلسطينيين قد أتمّت مسارًا تعليميًا عامًا عالي الجودة، وحظيت بخدمة تعليمية متميزة تؤهلها لدخول سوق العمل أو التعليم العالي بثقة وقوة.',
    icon: FiEye,
    gradient: 'linear-gradient(135deg, #EC4899 0%, #F472B6 100%)',
  },
];

function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-right mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary inline-flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-subject1" />
            عن سيرتك
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="relative bg-white rounded-3xl p-6 border border-grey/10 shadow-xl shadow-purple-100/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 right-0 left-0 h-1 rounded-t-3xl"
                  style={{ background: card.gradient }}
                />

                {/* Soft gradient blob in top corner */}
                <div
                  className="absolute -top-10 -left-10 w-32 h-32 rounded-full opacity-20 blur-3xl pointer-events-none"
                  style={{ background: card.gradient }}
                />

                {/* Large faded number watermark */}
                <div className="absolute -bottom-4 left-4 text-8xl font-black opacity-[0.05] text-primary leading-none select-none pointer-events-none">
                  {card.number}
                </div>

                {/* Icon + Title */}
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300"
                    style={{ background: card.gradient }}
                  >
                    <Icon className="text-white text-3xl" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">
                    {card.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-grey leading-relaxed relative z-10 text-sm text-right">
                  {card.desc}
                </p>

                {/* Bottom corner dots */}
                <div className="absolute bottom-3 right-3 grid grid-cols-3 gap-0.5 opacity-20 pointer-events-none">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <span
                      key={i}
                      className="w-0.5 h-0.5 rounded-full bg-primary"
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
