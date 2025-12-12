import React from "react";

const ImageCarousel = () => {
  return (
    <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">

        <div className="carousel-item active">
          <img 
            src="https://timess3spore.s3.amazonaws.com/ndata/media/Counsellor/CollegeImage/2023/04/23/1682252094.png"
            className="d-block w-100"
            alt="Slide 1"
          />
        </div>

        <div className="carousel-item">
          <img 
            src="https://images.shiksha.com/mediadata/images/1520420083phpyKP3vR.jpeg"
            className="d-block w-100"
            alt="Slide 2"
          />
        </div>

        <div className="carousel-item">
          <img 
            src="https://kongu.ac.in/static/media/cc-banner.e869b858a7080258c6ff.png"
            className="d-block w-100"
            alt="Slide 3"
          />
        </div>

      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default ImageCarousel;
