import React from 'react';
import { CourseInfo } from '../typescript/courseInfo';

const SubjectInfo: React.FC = () => {
  return (
  <div className='mr-8'>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">TOTAL SUBJECTS</h1>
        <div className="text-sm text-gray-500">Total subjects: ? results</div>
      </div>
      {CourseInfo.map((course) => (
      <div className="mb-5" key={course.code}>
          <div className="border border-gray-500 rounded p-5">
            <h3 className="text-lg font-semibold">{course.name}</h3>
            <p>{course.code}</p>
          </div>
      </div>
      ))}
    </div>
  );
};

export default SubjectInfo;