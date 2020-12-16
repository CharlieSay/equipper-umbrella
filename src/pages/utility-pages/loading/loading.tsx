import React from "react";
import Spinner from "react-bootstrap/Spinner";

import "./loading.scss";

function Loading() {
  return (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
}

export default Loading;
