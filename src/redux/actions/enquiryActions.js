import axios from 'axios';

export const addEnquiry = (enquiry) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3001/enquiries', enquiry);
    dispatch({ type: 'ADD_ENQUIRY_SUCCESS', payload: response.data });
  } catch (error) {
    console.error('Error adding enquiry:', error);
  }
};

export const fetchEnquiries = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3001/enquiries');
    dispatch({ type: 'FETCH_ENQUIRIES_SUCCESS', payload: response.data });
  } catch (error) {
    console.error('Error fetching enquiries:', error);
  }
};
