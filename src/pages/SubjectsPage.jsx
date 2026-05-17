import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import arabicCover from '../assets/subject-arabic.png';
import mathCover from '../assets/subject-math.png';
import scienceCover from '../assets/subject-science.png';

const SubjectsPage = () => {
  const subjects = [
    {
      id: 'arabic',
      name: 'اللغة العربية',
      image: arabicCover,
      color: '#F06496',
      gradient: 'linear-gradient(135deg, #F06496 0%, #E94B7E 100%)',
      slug: 'arabic',
    },
    {
      id: 'math',
      name: 'الرياضيات',
      image: mathCover,
      color: '#FBC421',
      gradient: 'linear-gradient(135deg, #FBC421 0%, #F5A623 100%)',
      slug: 'math',
    },
    {
      id: 'science',
      name: 'العلوم',
      image: scienceCover,
      color: '#7AC943',
      gradient: 'linear-gradient(135deg, #7AC943 0%, #5BA82E 100%)',
      slug: 'science',
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          'linear-gradient(180deg, #F0EEFC 0%, #F5EEFA 50%, #FBE7EF 100%)',
      }}
    >
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-16 sm:pb-20">
        <div className="text-center mb-8 pt-0">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-subject1" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
              المواد الدراسية
            </h1>
            <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-subject1" />
          </div>

          <p className="text-grey text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            اختر المادة لاستعراض اللقاءات والدروس والصفوف
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 max-w-6xl mx-auto">
          {subjects.map((subject) => {
            const Icon = subject.icon;
            return (
              <Link
                key={subject.id}
                to={`/subjects/${subject.slug}`}
                className="group relative rounded-3xl overflow-hidden shadow-lg shadow-purple-100/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                style={!subject.image ? { background: subject.gradient } : undefined}
              >
                {subject.image ? (
                  <img
                    src={subject.image}
                    alt={subject.name}
                    className="block w-full h-full object-cover min-h-[160px] sm:min-h-[180px] lg:min-h-[200px] group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="relative p-5 sm:p-6 lg:p-7 min-h-[160px] sm:min-h-[180px] lg:min-h-[200px] flex flex-col items-center justify-center text-center">
                    <div className="absolute top-4 left-4 sm:top-5 sm:left-5 grid grid-cols-4 gap-1 opacity-30 pointer-events-none">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <span key={i} className="w-1 h-1 rounded-full bg-white" />
                      ))}
                    </div>

                    <div className="absolute -bottom-8 -right-8 sm:-bottom-10 sm:-right-10 lg:-bottom-12 lg:-right-12 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full bg-white/10 group-hover:scale-110 transition-transform duration-500 pointer-events-none" />

                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 sm:mb-4 lg:mb-5 group-hover:scale-110 transition-transform duration-300 relative z-10">
                      <Icon className="text-white text-2xl sm:text-3xl lg:text-4xl" />
                    </div>

                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white relative z-10">
                      {subject.name}
                    </h2>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SubjectsPage;
