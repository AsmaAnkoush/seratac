import React from 'react';

const PageHeader = ({ title, subtitle, breadcrumb }) => {
  return (
    <>
      {breadcrumb && (
        <div className="text-center text-sm text-grey/70 mb-6">
          {breadcrumb}
        </div>
      )}

      <div className="text-center mb-8 pt-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-3 h-3 rounded-full bg-subject1" />
          <h1 className="text-4xl lg:text-5xl font-bold text-primary">
            {title}
          </h1>
          <span className="w-3 h-3 rounded-full bg-subject1" />
        </div>

        {subtitle && (
          <p className="text-grey text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </>
  );
};

export default PageHeader;
