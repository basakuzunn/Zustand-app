import React, { useState } from 'react';
import useCourseStore from './courseStore';

const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);
  const [courseTitle, setCourseTitle] = useState('');
  console.log('courseform rendered');

  const handleCourseSubmit = () => {
    if (!courseTitle) {
      return alert('add course title');
    }
    addCourse({
      id: Math.ceil(Math.random() * 10000),
      title: courseTitle,
    });
    setCourseTitle('');
  };
  return (
    <div className='form-conbtainer'>
      <input
        value={courseTitle}
        onChange={(e) => {
          setCourseTitle(e.target.value);
        }}
        className='form-input'
      />
      <button
        className='form-submit-btn'
        onClick={() => {
          handleCourseSubmit();
        }}
      >
        Add Course
      </button>
    </div>
  );
};

export default CourseForm;
