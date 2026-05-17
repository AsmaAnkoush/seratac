import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

function GuidePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-lightGrey px-4">
      <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6 text-center">
        صفحة الدليل - قيد التطوير
      </h1>
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-subject1 font-semibold hover:underline"
      >
        <FiArrowRight />
        العودة إلى الرئيسية
      </Link>
    </div>
  );
}

export default GuidePage;
