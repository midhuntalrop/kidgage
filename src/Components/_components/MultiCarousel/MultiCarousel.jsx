import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button, Container } from "@mui/material";

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className="max-768:hidden">
            <button
                onClick={onClick}
                className="group p-2 flex justify-center items-center border border-solid border-indigo-600 w-10 h-10 lg:w-12 lg:h-12 transition-all duration-500 rounded-full hover:bg-indigo-600 max-840:hidden"
                style={{
                    ...style,
                    position: "absolute",
                    right: "16%",
                    top: "-50px",
                    zIndex: 1,
                    transform: "translateY(-50%)",
                }}
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
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className="max-768:hidden">
            <button
                onClick={onClick}
                className="group p-2 flex justify-center items-center border border-solid border-indigo-600 w-10 h-10 lg:w-12 lg:h-12 transition-all duration-500 rounded-full hover:bg-indigo-600 max-768:hidden"
                style={{
                    ...style,
                    position: "absolute",
                    left: "auto",
                    right: "20%",
                    top: "-50px",
                    zIndex: 1,
                    transform: "translateY(-50%)",
                }}
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
        </div>
    );
};

const MultiCarousel = () => {
    const slides = [
        {
            img: "https://i.postimg.cc/9fDnmjz5/pexels-photo-13789557.jpg",
            country: "United Kingdom",
            offer: "Flight + Hotel | 2 nights",
            price: "From QAR 4,244PP",
        },
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

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full carousel-container mb-20">
            <Container>
                <div className="flex justify-between items-center">
                    <h1 className="font-light text-3xl lg:text-4xl text-[#850B48] my-10 max-599:my-5">
                        Top Destination
                    </h1>
                </div>
            </Container>
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="p-5">
                        <div
                            className="h-[416px] w-[100%] flex flex-col justify-end opacity-80 hover:opacity-100 rounded-xl relative group"
                            style={{
                                backgroundImage: `url(${slide.img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="text-white p-4 rounded-b-2xl items-end bg-gradient-to-t from-black">
                                <p className="text-xl sm:text-2xl font-light">
                                    {slide.country}
                                </p>
                                <p className="text-sm sm:text-base font-medium">
                                    {slide.offer}
                                </p>
                                <p className="text-lg sm:text-xl">
                                    {slide.price}
                                </p>
                                <button className="mt-2 px-4 py-2 bg-[#e66625] text-white rounded-lg hover:bg-indigo-700 hidden group-hover:block transition-opacity duration-300">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <Container>
                <div className="text-center mt-8">
                    <Button
                        sx={{
                            width: "100%",
                            maxWidth: "200px",
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
