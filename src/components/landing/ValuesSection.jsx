import {
  FiShield,
  FiTrendingUp,
  FiZap,
  FiLink,
  FiUsers,
  FiLayers,
} from 'react-icons/fi';

const values = [
  { title: 'الصمود والتمكين', icon: FiShield, accent: '#F06496' },
  { title: 'النمو وبناء الأسس', icon: FiTrendingUp, accent: '#FBC421' },
  { title: 'الابتكار والإبداع', icon: FiZap, accent: '#7AC943' },
  { title: 'الاتساق والانسجام', icon: FiLink, accent: '#F06496' },
  { title: 'التوسّع والتنوّع', icon: FiUsers, accent: '#FBC421' },
  { title: 'التكامل والترسيخ', icon: FiLayers, accent: '#7AC943' },
];

function ValuesSection() {
  return (
    <section id="values" className="py-12 sm:py-16 lg:py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-right mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary inline-flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-subject1" />
            قيمنا
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="relative bg-white rounded-3xl p-4 border border-grey/10 shadow-lg shadow-purple-100/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group flex flex-col items-center text-center"
              >
                <div
                  className="absolute top-0 right-0 left-0 h-1 rounded-t-3xl"
                  style={{ background: v.accent }}
                />

                <div
                  className="absolute -top-8 -left-8 w-24 h-24 rounded-full opacity-15 blur-3xl pointer-events-none"
                  style={{ background: v.accent }}
                />

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform duration-300 relative z-10"
                  style={{ background: v.accent }}
                >
                  <Icon className="text-white text-2xl" />
                </div>

                <h3 className="text-sm lg:text-base font-bold text-primary relative z-10 leading-tight">
                  {v.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ValuesSection;
