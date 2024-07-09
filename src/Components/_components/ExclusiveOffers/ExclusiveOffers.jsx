import { Button, Container } from "@mui/material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel CSS
import "./carouselCustom.css"; // Import the custom CSS for the dots

// Custom arrow button component
const CustomArrow = ({ onClick, direction }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`absolute top-[87%] transform -translate-y-1/2 z-10 bg-white text-black rounded-full p-2 shadow-md max-1080:hidden hover:bg-gray-200 ${
                direction === "prev" ? "left-4" : "right-4"
            }`}
            style={direction !== "prev" ? { right: "50%" } : { left: "42%" }}
        >
            {direction === "prev" ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            )}
        </button>
    );
};

const ExclusiveOffers = () => {
    return (
        <div>
            <Container className="pt-10">
                <div className="w-full relative">
                    {" "}
                    {/* Ensure relative positioning */}
                    <h1 className="mt-10 font-light text-2xl md:text-4xl text-[#850B48]">
                        Exclusive Offers
                    </h1>
                    <Carousel
                        className="p-2 rounded-md "
                        showThumbs={true}
                        infiniteLoop={true}
                        autoPlay={false}
                        showStatus={false}
                        transitionTime={300}
                        renderArrowPrev={(onClickHandler, hasPrev, label) =>
                            hasPrev && (
                                <CustomArrow
                                    onClick={onClickHandler}
                                    direction="prev"
                                    label={label}
                                />
                            )
                        }
                        renderArrowNext={(onClickHandler, hasNext, label) =>
                            hasNext && (
                                <CustomArrow
                                    onClick={onClickHandler}
                                    direction="next"
                                    label={label}
                                />
                            )
                        }
                    >
                        <div className="my-10 rounded-md shadow-sm max-768:rounded-t-md">
                            <div className="grid grid-cols-1 md:grid-cols-2 w-full max-768:rounded-t-lg">
                                <div>
                                    <img
                                        className="w-full h-full rounded-l-md max-768:rounded-t-lg max-768:rounded-l-none "
                                        src="https://i.postimg.cc/0rR3nDwQ/download-1.webp"
                                        alt=""
                                    />
                                </div>
                                <div
                                    className="text-start p-4 md:p-10 rounded-r-lg max-768:rounded-r-none max-768:rounded-b-lg"
                                    style={{ border: "1px solid #DEDEDE" }}
                                >
                                    <p className="text-xl md:text-2xl lg:text-3xl font-light mt-6">
                                        Explore Saudi this summer
                                    </p>
                                    <p className="text-sm md:text-base mt-6">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Voluptate illo tempora
                                        adipisci inventore reprehenderit error
                                        quas odio veritatis molestias, non
                                        voluptas natus deleniti impedit tempore
                                        labore repellendus nihil fugit at?
                                    </p>
                                    <div className="mt-6">
                                        <Button
                                            sx={{
                                                border: "2px solid #e66625",
                                                backgroundColor: "#e66625",
                                                borderRadius: "6px",
                                                color: "white",
                                                textTransform: "none",
                                                fontSize: {
                                                    xs: "12px", // Small size for extra small screens
                                                    sm: "14px", // Medium size for small screens
                                                    md: "16px", // Larger size for medium screens
                                                },
                                                padding: {
                                                    xs: "6px 12px", // Small padding for extra small screens
                                                    sm: "8px 16px", // Medium padding for small screens
                                                    md: "10px 20px", // Larger padding for medium screens
                                                },
                                                "&:hover": {
                                                    backgroundColor:
                                                        "darkorange",
                                                },
                                            }}
                                        >
                                            Book now
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="my-10 rounded-md shadow-sm max-768:rounded-t-md">
                            <div className="grid grid-cols-1 md:grid-cols-2 w-full max-768:rounded-t-lg">
                                <div>
                                    <img
                                        className="w-full h-full rounded-l-md max-768:rounded-t-lg max-768:rounded-l-none"
                                        src="https://i.postimg.cc/50rDHZ98/download-3.webp"
                                        alt=""
                                    />
                                </div>
                                <div
                                    className="text-start p-4 md:p-10 rounded-r-lg max-768:rounded-r-none max-768:rounded-b-lg "
                                    style={{ border: "1px solid #DEDEDE" }}
                                >
                                    <p className="text-xl md:text-2xl lg:text-3xl font-light mt-6">
                                        Explore Saudi this summer
                                    </p>
                                    <p className="text-sm md:text-base mt-6">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Voluptate illo tempora
                                        adipisci inventore reprehenderit error
                                        quas odio veritatis molestias, non
                                        voluptas natus deleniti impedit tempore
                                        labore repellendus nihil fugit at?
                                    </p>
                                    <div className="mt-6">
                                        <Button
                                            sx={{
                                                border: "2px solid #e66625",
                                                backgroundColor: "#e66625",
                                                borderRadius: "6px",
                                                color: "white",
                                                textTransform: "none",
                                                fontSize: {
                                                    xs: "12px", // Small size for extra small screens
                                                    sm: "14px", // Medium size for small screens
                                                    md: "16px", // Larger size for medium screens
                                                },
                                                padding: {
                                                    xs: "6px 12px", // Small padding for extra small screens
                                                    sm: "8px 16px", // Medium padding for small screens
                                                    md: "10px 20px", // Larger padding for medium screens
                                                },
                                                "&:hover": {
                                                    backgroundColor:
                                                        "darkorange",
                                                },
                                            }}
                                        >
                                            Book now
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="my-10 rounded-md shadow-sm max-768:rounded-t-md">
                            <div className="grid grid-cols-1 md:grid-cols-2 w-full max-768:rounded-t-lg">
                                <div>
                                    <img
                                        className="w-full h-full rounded-l-md max-768:rounded-t-lg max-768:rounded-l-none"
                                        src="https://i.postimg.cc/L5ZwjNhw/download-2.webp"
                                        alt=""
                                    />
                                </div>
                                <div
                                    className="text-start p-4 md:p-10 rounded-r-lg max-768:rounded-r-none max-768:rounded-b-lg"
                                    style={{ border: "1px solid #DEDEDE" }}
                                >
                                    <p className="text-xl md:text-2xl lg:text-3xl font-light mt-6">
                                        Explore Saudi this summer
                                    </p>
                                    <p className="text-sm md:text-base mt-6">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Voluptate illo tempora
                                        adipisci inventore reprehenderit error
                                        quas odio veritatis molestias, non
                                        voluptas natus deleniti impedit tempore
                                        labore repellendus nihil fugit at?
                                    </p>
                                    <div className="mt-6">
                                        <Button
                                            sx={{
                                                border: "2px solid #e66625",
                                                backgroundColor: "#e66625",
                                                borderRadius: "6px",
                                                color: "white",
                                                textTransform: "none",
                                                fontSize: {
                                                    xs: "12px", // Small size for extra small screens
                                                    sm: "14px", // Medium size for small screens
                                                    md: "16px", // Larger size for medium screens
                                                },
                                                padding: {
                                                    xs: "6px 12px", // Small padding for extra small screens
                                                    sm: "8px 16px", // Medium padding for small screens
                                                    md: "10px 20px", // Larger padding for medium screens
                                                },
                                                "&:hover": {
                                                    backgroundColor:
                                                        "darkorange",
                                                },
                                            }}
                                        >
                                            Book now
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </Container>
        </div>
    );
};

export default ExclusiveOffers;
