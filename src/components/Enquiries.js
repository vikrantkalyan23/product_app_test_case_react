import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEnquiries } from '../redux/actions/enquiryActions';

const Enquiries = () => {
  const dispatch = useDispatch();
  const enquiries = useSelector((state) => state.enquiries.enquiries);

  useEffect(() => {
    dispatch(fetchEnquiries());
  }, [dispatch]);

  return (
    <div>
      <h2>Enquiries</h2>
      {enquiries.map((enquiry, index) => (
        <div key={index}>
          <p>{enquiry.name}</p>
          <p>{enquiry.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Enquiries;
