import axios from 'axios';

export const fetchCourses = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3001/courses');
    dispatch({ type: 'FETCH_COURSES_SUCCESS', payload: response.data });
  } catch (error) {
    console.error('Error fetching courses:', error);
  }
};
