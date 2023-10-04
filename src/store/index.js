import {configureStore} from '@reduxjs/toolkit'
import userReduser from './userSlicer'
import coursesReduser from './coursesSlicer';
import getCourseReduser from './getCoursesSlicer';
import saveDateSlicer from './saveDataSlicer';

 const store = configureStore({
    reducer: {
        user: userReduser,
        createCourse : coursesReduser,
        getCourses : getCourseReduser,
        saveData : saveDateSlicer
    },
  })
export default store ;