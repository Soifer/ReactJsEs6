import * as types from './actionTypes';
import acourseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
    return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function loadCourses() {
    return function (dispatch) {
        return acourseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}