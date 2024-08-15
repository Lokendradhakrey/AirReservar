import React from "react";
import Navbar from "../navbar/Navbar";
import hero1 from "../../assets/imgs/aero.png"
import hero2 from "../../assets/imgs/hero4.jpg"
import hero3 from "../../assets/imgs/hero5.jpg"

function Home() {
  return (
    <>
      <Navbar />
      <div className="hero">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner h-75">
            <div className="carousel-item active">
              <img src={hero1} class="d-block w-100 object-fit-cover slider-img" alt="heroImg" />
            </div>
            <div className="carousel-item">
              <img src={hero2} class="d-block w-100 object-fit-cover slider-img" alt="heroImg" />
            </div>
            <div className="carousel-item">
              <img src={hero3} class="d-block w-100 object-fit-cover slider-img" alt="heroImg" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
