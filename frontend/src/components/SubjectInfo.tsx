import React from 'react';

const SubjectInfo: React.FC = () => {
  return (
  <div className='mr-8'>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">TOTAL SUBJECTS</h1>
        <div className="text-sm text-gray-500">Total subjects: ? results</div>
      </div>
      <div className="mb-5">
          <div className="border border-gray-500 rounded p-5">
            <h3 className="text-lg font-semibold">Discrete Mathematics</h3>
            <p>DAPE1300</p>
          </div>
      </div>
      <div className="mb-5">
        <div className="border border-gray-500 rounded p-5">
          <h3 className="text-lg font-semibold">Programming</h3>
          <p>DAPE1400</p>
          </div>
      </div>
      <div className="mb-5">
        <div className="border border-gray-500 rounded p-5">
          <h3 className="text-lg font-semibold">Technology and Society for Programmers</h3>
          <p>DATA1100</p>
          </div>
      </div>
      <div className="mb-5">
        <div className="border border-gray-500 rounded p-5">
          <h3 className="text-lg font-semibold">Inclusive Web Design</h3>
          <p>DATA1200</p>
          </div>
      </div>
      </div>
  );
};

export default SubjectInfo;