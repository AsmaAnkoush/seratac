import React, { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { subjects, grades, semesters, getUnits } from '../data/subjects';
import { FiArrowRight, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const SemesterSessionsPage = () => {
  const { subjectSlug, gradeSlug } = useParams();
  const subject = subjects[subjectSlug];
  const grade = grades.find(g => g.slug === gradeSlug);

  const [selectedSemester, setSelectedSemester] = useState(semesters[0].slug);
  const [openUnits, setOpenUnits] = useState({ 'unit-1': true }); // First unit open by default

  if (!subject || !grade) return <Navigate to="/subjects" />;

  const units = getUnits(subjectSlug, gradeSlug, selectedSemester);

  const toggleUnit = (unitSlug) => {
    setOpenUnits(prev => ({
      ...prev,
      [unitSlug]: !prev[unitSlug]
    }));
  };

  // When semester changes, reset to first unit open
  const handleSemesterChange = (newSemester) => {
    setSelectedSemester(newSemester);
    setOpenUnits({ 'unit-1': true });
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #F0EEFC 0%, #F5EEFA 50%, #FBE7EF 100%)' }}>
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-20">

        {/* Back button */}
        <div className="mb-4">
          <Link
            to={`/subjects/${subjectSlug}`}
            className="inline-flex items-center gap-2 bg-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-md hover:shadow-lg border border-grey/10 text-primary font-semibold hover:-translate-x-1 transition-all text-sm sm:text-base"
          >
            <FiArrowRight className="text-base sm:text-lg" />
            <span>رجوع</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full" style={{ background: subject.color }}></span>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary">
              {grade.name}
            </h1>
            <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full" style={{ background: subject.color }}></span>
          </div>
          <p className="text-grey text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-2">
            {subject.name} - اختر الفصل ثم اضغط على أي لقاء لاستعراض محتواه
          </p>
        </div>

        {/* Semester Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-2xl shadow-md border border-grey/10 p-2 flex gap-2">
            {semesters.map((semester) => (
              <button
                key={semester.slug}
                onClick={() => handleSemesterChange(semester.slug)}
                className={`py-2.5 sm:py-3 px-5 sm:px-8 rounded-xl font-bold transition-all whitespace-nowrap text-sm sm:text-base ${
                  selectedSemester === semester.slug
                    ? 'text-white shadow-md'
                    : 'text-grey hover:bg-grey/5'
                }`}
                style={selectedSemester === semester.slug ? { background: subject.gradient } : {}}
              >
                {semester.name}
              </button>
            ))}
          </div>
        </div>

        {/* Units Accordion */}
        <div className="space-y-4 max-w-5xl mx-auto">
          {units.map((unit) => {
            const isOpen = openUnits[unit.slug];
            return (
              <div
                key={unit.slug}
                className="bg-white rounded-2xl shadow-md border border-grey/10 overflow-hidden"
              >
                {/* Unit Header (clickable) */}
                <button
                  onClick={() => toggleUnit(unit.slug)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 hover:bg-grey/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {isOpen ? (
                      <FiChevronUp className="text-grey text-xl flex-shrink-0" />
                    ) : (
                      <FiChevronDown className="text-grey text-xl flex-shrink-0" />
                    )}
                    <span className="text-xs sm:text-sm text-grey/60 hidden sm:inline">
                      {unit.sessions.length} لقاءات
                    </span>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* Number FIRST in DOM = appears on RIGHT in RTL */}
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0"
                      style={{ background: subject.gradient }}
                    >
                      <span className="text-white text-base sm:text-lg font-bold">
                        {unit.number}
                      </span>
                    </div>
                    {/* Title SECOND in DOM = appears to the LEFT of number in RTL */}
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-primary">
                      {unit.name}
                    </h3>
                  </div>
                </button>

                {/* Sessions (collapsible) */}
                {isOpen && (
                  <div className="border-t border-grey/10 p-4 sm:p-5 bg-grey/5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {unit.sessions.map((session) => (
                        <Link
                          key={session.slug}
                          to={`/subjects/${subjectSlug}/${gradeSlug}/${selectedSemester}/${session.slug}`}
                          className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all border border-grey/10 group flex items-center gap-3 sm:gap-4"
                        >
                          {/* Session number */}
                          <div
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform"
                            style={{ background: subject.colorLight }}
                          >
                            <span className="text-base sm:text-lg font-bold" style={{ color: subject.color }}>
                              {session.number}
                            </span>
                          </div>

                          {/* Session title */}
                          <div className="flex-1 text-right">
                            <p className="text-primary font-bold text-sm sm:text-base leading-tight">
                              اللقاء {session.number}
                            </p>
                            <p className="text-grey text-xs sm:text-sm mt-0.5">
                              {session.title}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SemesterSessionsPage;
