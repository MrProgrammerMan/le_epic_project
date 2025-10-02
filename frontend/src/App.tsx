import React from 'react';
import WelcomeSection from "./components/WelcomeSection";
import Filterbox from "./components/Filterbox";
import SubjectInfo from "./components/SubjectInfo";


function App() {
  return ( 
    <div className="min-h-screen bg-gray-50">
      <div className="ml-64 min-h-screen flex justify-start pt-8 pb-8">
        <div className="border-2 border-gray-400 rounded-lg w-full max-w-41 mr-8">
          <WelcomeSection />
          <div className="flex flex-col md:flex-row gap-8 mt-8">
            <div className="md:w-1/4">
              <Filterbox />
            </div>
            <div className="md:w-3/4">
              <SubjectInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
