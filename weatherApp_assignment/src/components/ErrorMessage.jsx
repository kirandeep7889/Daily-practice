// ErrorMessage.js
import React from 'react';

const ErrorMessage = ({ errorMessage }) => {
  return (
    <div>
      {errorMessage && (
        <p style={{ color: "red", textAlign: "center", fontSize: "larger", marginTop: "50px" }}>
          {errorMessage}
        </p>
      )}
    </div>
  );
}

export default ErrorMessage;
