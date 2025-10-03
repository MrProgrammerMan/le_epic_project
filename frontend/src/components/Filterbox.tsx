import React from 'react';

const Filterbox: React.FC = () => {
  
  return (
    <div>
      <h1>Filter</h1>
      <div>
      <div>
        <label>Faculty</label>
        <select>
          <option>Technology, Art and Design (TKD)</option>
        </select>
      </div>

      <div>
        <label>Department</label>
        <select>
          <option>Department for Computer Science (IT)</option>
        </select>
      </div>

      <div>
        <label>Studies</label>
        <select>
          <option>All</option>
          <option>Software Engineer</option>
          <option>Applied Computer Science</option>
          <option>Information technology</option>
          <option>Mathematical Modelling and Data Science</option>
        </select>
      </div>
      
      <div>
        <label>Education Level</label>
        <div>
          <label>
          <input type="checkbox" name="educationLevel" value="bachelor"/>
          Bachelor
          </label>
          <label>
          <input type="checkbox" name="educationLevel" value="master"/>
          Master
          </label>
        </div> 
      </div>

      <div>
        <label>Year</label>
        <div>
          <label>
          <input type="checkbox" name="educationYear" value="1"/>
          1
          </label>
          <label>
          <input type="checkbox" name="educationYear" value="2"/>
          2
          </label>
          <label>
          <input type="checkbox" name="educationYear" value="3"/>
          3
          </label>
          <label>
          <input type="checkbox" name="educationYear" value="4"/>
          4
          </label>
          <label>
          <input type="checkbox" name="educationYear" value="5"/>
          5
          </label>
        </div> 
      </div>

      <div>
        <label>Semester</label>
        <div>
          <label>
          <input type="checkbox" name="semester" value="autumn"/>
          Autumn
          </label>
          <label>
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