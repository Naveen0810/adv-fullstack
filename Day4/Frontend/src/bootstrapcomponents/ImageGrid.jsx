import React from "react";

const ImageGrid = () => {
  return (
    <div className="container mt-4">
      <div className="row g-3">

        <div className="col-md-4">
          <img 
            src="https://images.shiksha.com/mediadata/images/1745386951phpka3mqC_205x160.jpg"
            className="img-fluid rounded"
            alt="Grid 1"
          />
        </div>

        <div className="col-md-4">
          <img 
            src="https://abped-college-dashboard.s3.us-east-2.amazonaws.com/tted/college-backend/college/d81f4c1e-13c1-41a5-bcb1-d843d6c667b1.jpg"
            className="img-fluid rounded"
            alt="Grid 2"
          />
        </div>

        <div className="col-md-4">
          <img 
            src="https://studyhigher.in/images/college/296/296-7.jpg"
            className="img-fluid rounded"
            alt="Grid 3"
          />
        </div>

      </div>
    </div>
  );
};

export default ImageGrid;
