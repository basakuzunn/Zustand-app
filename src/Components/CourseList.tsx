import React from 'react';
import useCourseStore from './courseStore';

const CourseList = () => {

  const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourseStatus: state.toggleCourseStatus,
    })
  );

  return (
    <div>
      <ul>
        {courses.map((course, i) => {
          return (
            <div key={i}>
              <li
                className={`course-item`}
                style={{
                  backgroundColor: course.completed ? '#00FF0044' : 'white',
                }}
              >
                <span className='course-item-col-1'>
                  <input
                    type='checkbox'
                    checked={course.completed}
                    onChange={(e) => {
                      toggleCourseStatus(course.id);
                    }}
                  />
                </span>
                <span>
                  {course?.title}
                  <button
                    className='delete-btn'
                    onClick={() => {
                      removeCourse(course.id);
                    }}
                  >
                    Delete{' '}
                  </button>
                </span>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default CourseList;
