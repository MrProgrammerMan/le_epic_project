import React from 'react';

const Filterbox: React.FC = () => {
  
  return (
    <div className="p-6">
      <h1 className="text-lg font-semibold mb-4">Filter</h1>
      <div className='p-5'>
      <div className="mb-6">
        <label>Faculty</label>
        <select className='w-full border'>
          <option>Technology, Art and Design (TKD)</option>
        </select>
      </div>

      <div className="mb-6">
        <label>Department</label>
        <select className="w-full border">
          <option>Department for Computer Science (IT)</option>
        </select>
      </div>

      <div className="mb-6">
        <label>Studies</label>
        <select className="w-full border">
          <option>All</option>
          <option>Software Engineer</option>
          <option>Applied Computer Science</option>
          <option>Information technology</option>
          <option>Mathematical Modelling and Data Science</option>
        </select>
      </div>
      
      <div className='mb-4'>
        <label>Education Level</label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
          <input type="checkbox" name="educationLevel" value="bachelor"/>
          Bachelor
          </label>
          <label className="flex items-center gap-2">
          <input type="checkbox" name="educationLevel" value="master"/>
          Master
          </label>
        </div> 
      </div>

      <div className='mb-4'>
        <label className="labelFont flex items-center gap-2">Year</label>
        <div className="flex gap-4 flex-wrap">
          <label>
          <input type="checkbox" name="educationYear" value="1"/>
          <span> 1 </span>
          </label>
          <label>
          <input type="checkbox" name="educationYear" value="2"/>
          <span> 2 </span>
          </label>
          <label>
          <input type="checkbox" name="educationYear" value="3"/>
          <span> 3 </span>
          </label>
          <label>
          <input type="checkbox" name="educationYear" value="4"/>
          <span> 4 </span>
          </label>
          <label>
          <input type="checkbox" name="educationYear" value="5"/>
          <span> 5 </span>
          </label>
        </div> 
      </div>

      <div>
        <label>Semester</label>
        <div className="flex gap-4 flex-wrap">
        <label className="flex items-center gap-2">
          <input type="checkbox" name="semester" value="autumn"/>
          Autumn
          </label>
          <label className="flex items-center gap-2">
          <input type="checkbox" name="semester" value="spring"/>
          Spring
          </label>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Filterbox;