import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SubjectsPage from './pages/SubjectsPage';
import GradesPage from './pages/GradesPage';
import SemesterSessionsPage from './pages/SemesterSessionsPage';
import LessonPage from './pages/LessonPage';
import GuidePage from './pages/GuidePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/subjects" element={<SubjectsPage />} />
        <Route path="/subjects/:subjectSlug" element={<GradesPage />} />
        <Route
          path="/subjects/:subjectSlug/:gradeSlug"
          element={<SemesterSessionsPage />}
        />
        <Route
          path="/subjects/:subjectSlug/:gradeSlug/:semesterSlug/:sessionSlug"
          element={<LessonPage />}
        />
        <Route path="/guide" element={<GuidePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
