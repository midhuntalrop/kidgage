import React, { useRef, useEffect, useState } from "react";
import "./multiCarousel.css"; // Assuming custom styles are in this file
import { Button, Container } from "@mui/material";

const MultiCarousel = () => {
    const trackRef = useRef(null);
    const slidesRef = useRef([]);
    const [currentIndex, setCurrentIndex] = useState(1); // Start from 1 due to the duplicated first slide
    const slideWidth = useRef(0);
    const slides = [
        {
            img: "https://i.postimg.cc/9fDnmjz5/pexels-photo-13789557.jpg",
            country: "United Kingdom",
            offer: "Flight + Hotel | 2 nights",
            price: "From QAR 4,244PP",
        },
        // Add more slide objects here
        {
            img: "https://i.postimg.cc/9fDnmjz5/pexels-photo-13789557.jpg",
            country: "France",
            offer: "Flight + Hotel | 3 nights",
            price: "From QAR 5,500PP",
        },
        {
            img: "https://i.postimg.cc/9fDnmjz5/pexels-photo-13789557.jpg",
            country: "Germany",
            offer: "Flight + Hotel | 4 nights",
            price: "From QAR 6,000PP",
        },
        {
            img: "https://i.postimg.cc/9fDnmjz5/pexels-photo-13789557.jpg",
            country: "Italy",
            offer: "Flight + Hotel | 5 nights",
            price: "From QAR 7,200PP",
        },
        {
            img: "https://i.postimg.cc/9fDnmjz5/pexels-photo-13789557.jpg",
            country: "Spain",
            offer: "Flight + Hotel | 6 nights",
            price: "From QAR 8,300PP",
        },
        {
            img: "https://i.postimg.cc/9fDnmjz5/pexels-photo-13789557.jpg",
            country: "Greece",
            offer: "Flight + Hotel | 7 nights",
            price: "From QAR 9,100PP",
        },
    ];
    const totalSlides = slides.length;

    const totalSlidesWithDuplicates = totalSlides + 2; // Including the duplicated first and last slides

    useEffect(() => {
        slideWidth.current = slidesRef.current[0].getBoundingClientRect().width;
        trackRef.current.style.transform = `translateX(-${slideWidth.current}px)`;
    }, []);

    const handlePrevClick = () => {
        let newIndex = currentIndex - 1;
        if (newIndex < 0) {
            newIndex = totalSlides;
        }
        setCurrentIndex(newIndex);
        trackRef.current.style.transition = "transform 0.5s ease";
        trackRef.current.style.transform = `translateX(-${
            slideWidth.current * newIndex
        }px)`;
    };

    const handleNextClick = () => {
        let newIndex = currentIndex + 1;
        setCurrentIndex(newIndex);
        trackRef.current.style.transition = "transform 0.5s ease";
        trackRef.current.style.transform = `translateX(-${
            slideWidth.current * newIndex
        }px)`;

        if (newIndex === totalSlidesWithDuplicates - 1) {
            setTimeout(() => {
                trackRef.current.style.transition = "none";
                trackRef.current.style.transform = `translateX(-${slideWidth.current}px)`;
                setCurrentIndex(1);
            }, 500);
        } else if (newIndex === 0) {
            setTimeout(() => {
                trackRef.current.style.transition = "none";
                trackRef.current.style.transform = `translateX(-${
                    slideWidth.current * totalSlides
                }px)`;
                setCurrentIndex(totalSlides);
            }, 500);
        }
    };

    return (
        <div className="w-full carousel-container my-20">
            <Container>
                <div className="flex justify-between items-baseline">
                    <div className="container">
                        <h1 className="font-light text-[36px] text-[#850B48]">
                            Top Destination
                        </h1>
                    </div>
                    <div className="top-0 right-0 flex justify-end items-center p-4">
                        <button
                            id="slider-button-left"
                            onClick={handlePrevClick}
                            className="group !p-2 flex justify-center items-center border border-solid border-indigo-600 !w-12 !h-12 transition-all duration-500 rounded-full hover:bg-indigo-600 mx-1"
                        >
                            <svg
                                className="h-5 w-5 text-indigo-600 group-hover:text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <path
                                    d="M10.0002 11.9999L6 7.99971L10.0025 3.99719"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        <button
                            id="slider-button-right"
                            onClick={handleNextClick}
                            className="group !p-2 flex justify-center items-center border border-solid border-indigo-600 !w-12 !h-12 transition-all duration-500 rounded-full hover:bg-indigo-600 mx-1"
                        >
                            <svg
                                className="h-5 w-5 text-indigo-600 group-hover:text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <path
                                    d="M5.99984 4.00012L10 8.00029L5.99748 12.0028"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </Container>
            <div ref={trackRef} className="carousel-track">
                {[slides[slides.length - 1], ...slides, slides[0]].map(
                    (slide, index) => (
                        <div
                            key={index}
                            ref={(el) => (slidesRef.current[index] = el)}
                            className={`carousel-slide ${
                                currentIndex === index ? "centered-slide" : ""
                            }`}
                        >
                            <div
                                className=" overflow-hidden rounded-2xl w-[350px] h-[350px] flex flex-col justify-end p-5 hi"
                                style={{
                                    backgroundImage: `url(${slide.img})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >

                                <div className="text-white p-4 rounded-b-2xl items-end">
                                    <p className="text-4xl font-light">
                                        {slide.country}
                                    </p>
                                    <p className="text-base font-medium">
                                        {slide.offer}
                                    </p>
                                    <p className="text-[26px]">{slide.price}</p>
                                    <button className="btn-more-info">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
            <Container>
                <div className="text-center grid-cols-2">
                    <Button
                        sx={{
                            width: "20%",
                            border: "2px solid  #E66625",
                            backgroundColor: "white",
                            borderRadius: "6px",
                            color: "#e66625",
                            textTransform: "none",
                            "&:hover": {
                                backgroundColor: "darkorange",
                                color: "white",
                            },
                        }}
                    >
                        View all destination
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default MultiCarousel;
