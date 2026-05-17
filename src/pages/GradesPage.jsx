import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { subjects, grades } from '../data/subjects';

const GradesPage = () => {
  const { subjectSlug } = useParams();
  const subject = subjects[subjectSlug];

  if (!subject) return <Navigate to="/subjects" />;

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
        {/* Back */}
        <div className="mb-4">
          <Link
            to="/subjects"
            className="inline-flex items-center gap-2 bg-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-md hover:shadow-lg border border-grey/10 text-primary font-semibold text-sm sm:text-base hover:-translate-x-1 transition-all"
          >
            <FiArrowRight className="text-base sm:text-lg" />
            <span>رجوع</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-8 pt-0">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full"
              style={{ background: subject.color }}
            />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
              {subject.name}
            </h1>
            <span
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full"
              style={{ background: subject.color }}
            />
          </div>
          <p className="text-grey text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            اختر الصف الدراسي للمتابعة
          </p>
        </div>

        {/* Grades Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {grades.map((grade) => (
            <Link
              key={grade.slug}
              to={`/subjects/${subjectSlug}/${grade.slug}`}
              className="group relative rounded-3xl overflow-hidden shadow-lg shadow-purple-100/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              style={{ background: subject.gradient }}
            >
              <div className="relative p-6 sm:p-8 min-h-[160px] sm:min-h-[200px] flex flex-col items-center justify-center text-center">
                <div className="absolute top-5 left-5 grid grid-cols-4 gap-1 opacity-30 pointer-events-none">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span key={i} className="w-1 h-1 rounded-full bg-white" />
                  ))}
                </div>

                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-white/10 group-hover:scale-110 transition-transform duration-500 pointer-events-none" />

                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10">
                  <span className="text-white text-2xl sm:text-3xl font-bold">
                    {grade.number}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-white relative z-10">
                  {grade.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GradesPage;
