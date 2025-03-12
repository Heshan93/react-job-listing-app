import React from 'react';
import RingLoader from "react-spinners/ClipLoader";

const override = {
  display: 'block',
  margin: '0 auto', 
};

function Spinner({ loading }) {
  return (
    <RingLoader
      color="#6940b4"
      cssOverride={override}
      loading={loading}
      size={150}
      speedMultiplier={0.4}
    />
  );
}

export default Spinner;
