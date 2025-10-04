import React from 'react';
import { useState } from "react";
import { BiFilterAlt } from "@react-icons/all-files/bi/BiFilterAlt";;

type EducationLevel= {
  name: string; years: number[];}
  
  const educationLevels: EducationLevel[] = [
      {name: 'Bachelor', years: [1, 2, 3]},
      
      {name: 'Master', years: [1, 2]}
    ];
    
    const getYearsForLevel = (levelName: string): number[] => {
      const level = educationLevels.find(l => l.name === levelName);
      return level ? level.years : [];
    };

const Filterbox: React.FC = () => {

    const [isFilterboxOpen, setFilterboxOpen] = useState(false);
    
    const filterboxFunction = () => {
        setFilterboxOpen(!isFilterboxOpen);
    }

    const [selectedLevel, setSelectedLevel] = useState('');

    const handleLevelChange = (level: string) => {
        setSelectedLevel(selectedLevel === level ? '' : level);
    };

    

  return (
    <div className="p-6">
      <button onClick={filterboxFunction} className="text-lg font-semibold mb-4 flex items-center gap-2">Filter<BiFilterAlt /></button>

      {isFilterboxOpen && (
      <div className="bg-gray-200 p-6">
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
        {educationLevels.map((level) => (
          <label key={level.name}>
          <input type="checkbox" checked={selectedLevel === level.name} onChange={() => handleLevelChange(level.name)}/>
          <span className="p-1">{level.name}</span>
          </label>
        ))}
        </div> 
      </div>

      {selectedLevel && (
      <div className='mb-4'>
        <label className="labelFont flex items-center gap-2">Year</label>
        <div className="flex gap-4 flex-wrap">
        {getYearsForLevel(selectedLevel).map((year) => (
          <label key={year}>
          <input type="checkbox"/>
          <span className='p-1 text-sm'>{year}</span>
          </label>
        ))}
        </div> 
      </div>
      )}

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
    )}
    </div>
  );
};

export default Filterbox;