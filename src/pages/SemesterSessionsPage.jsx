import React, { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { subjects, grades, semesters, getSessions } from '../data/subjects';

const SemesterSessionsPage = () => {
  const { subjectSlug, gradeSlug } = useParams();
  const subject = subjects[subjectSlug];
  const grade = grades.find((g) => g.slug === gradeSlug);

  const [selectedSemester, setSelectedSemester] = useState(semesters[0].slug);

  if (!subject || !grade) return <Navigate to="/subjects" />;

  const sessions = getSessions(subjectSlug, gradeSlug, selectedSemester);

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
            to={`/subjects/${subjectSlug}`}
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
              {grade.name}
            </h1>
            <span
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full"
              style={{ background: subject.color }}
            />
          </div>
          <p className="text-grey text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            {subject.name} - اختر الفصل ثم اضغط على أي لقاء لاستعراض محتواه
          </p>
        </div>

        {/* Semester Tabs - centered */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="bg-white rounded-2xl shadow-md border border-grey/10 p-2 inline-flex gap-2">
            {semesters.map((semester) => {
              const active = selectedSemester === semester.slug;
              return (
                <button
                  key={semester.slug}
                  onClick={() => setSelectedSemester(semester.slug)}
                  className={`py-2.5 sm:py-3 px-5 sm:px-8 rounded-xl font-bold text-sm sm:text-base transition-all whitespace-nowrap ${
                    active ? 'text-white shadow-md' : 'text-grey hover:bg-grey/5'
                  }`}
                  style={active ? { background: subject.gradient } : undefined}
                >
                  {semester.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sessions Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {sessions.map((session) => (
            <Link
              key={session.slug}
              to={`/subjects/${subjectSlug}/${gradeSlug}/${selectedSemester}/${session.slug}`}
              className="bg-white rounded-2xl p-4 sm:p-5 lg:p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-grey/10 group flex flex-col items-center text-center"
            >
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 shadow-sm group-hover:scale-110 transition-transform"
                style={{ background: subject.gradient }}
              >
                <span className="text-xl sm:text-2xl font-bold text-white">
                  {session.number}
                </span>
              </div>

              <h3 className="text-primary font-bold text-sm sm:text-base leading-tight">
                {session.fullName}
              </h3>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SemesterSessionsPage;
