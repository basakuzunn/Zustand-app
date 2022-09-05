import React from 'react';
import './App.css';
import CourseForm from './Components/CourseForm';
import CourseList from './Components/CourseList';

function App() {
  return (
    <div className='App'>
      <h1
        style={{
          fontSize: '2.5rem',
          marginBottom: '2rem',
        }}
      >
        {' '}
        My Course List{' '}
      </h1>
      <CourseForm />
      <CourseList />
    </div>
  );
}

export default App;
