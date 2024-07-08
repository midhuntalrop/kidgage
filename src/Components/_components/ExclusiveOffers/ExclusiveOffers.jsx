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
            style={
                direction !== "prev"
                    ? { top: "87%", right: "50%" }
                    : { top: "87%", left: "42%" }
            }
            className={`absolute top-1/2 transform -translate-y-1/2 z-10 bg-white text-black rounded-full p-2 shadow-md hover:bg-gray-200 ${
                direction === "prev" ? "left-4" : "right-4"
            }`}
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
                <div className="w-[100%] relative">
                    {" "}
                    {/* Ensure relative positioning */}
                    <h1 className="mt-10 font-light text-[36px] text-[#850B48]">
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
                        <div className="my-10 rounded-md shadow-sm">
                            <div className="grid grid-cols-2  w-[100%]">
                                <div className="">
                                    <img
                                        className="w-[100%] h-[100%] rounded-l-md"
                                        src="https://i.postimg.cc/0rR3nDwQ/download-1.webp"
                                        alt=""
                                    />
                                </div>
                                <div
                                    className="text-start p-[45px]  rounded-r-lg"
                                    style={{ border: "1px solid #DEDEDE" }}
                                >
                                    <p className="text-[38px] font-light mt-6">
                                        Explore Saudi this summer
                                    </p>
                                    <p className=" text-base mt-6">
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

                        <div className="my-10 rounded-md shadow-sm">
                            <div className="grid grid-cols-2  w-[100%]">
                                <div className="">
                                    <img
                                        className="w-[100%] h-[100%] rounded-l-md"
                                        src="https://i.postimg.cc/50rDHZ98/download-3.webp"
                                        alt=""
                                    />
                                </div>
                                <div
                                    className="text-start p-[45px] rounded-r-lg"
                                    style={{ border: "1px solid #DEDEDE" }}
                                >
                                    <p className="text-[38px] font-light mt-6">
                                        Explore Saudi this summer
                                    </p>
                                    <p className=" text-base mt-6">
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

                        <div className="my-10 rounded-md shadow-sm">
                            <div className="grid grid-cols-2  w-[100%]">
                                <div className="">
                                    <img
                                        className="w-[100%] h-[100%] rounded-l-md"
                                        src="https://i.postimg.cc/L5ZwjNhw/download-2.webp"
                                        alt=""
                                    />
                                </div>
                                <div
                                    className="text-start p-[45px] rounded-r-lg"
                                    style={{ border: "1px solid #DEDEDE" }}
                                >
                                    <p className="text-[38px] font-light mt-6">
                                        Explore Saudi this summer
                                    </p>
                                    <p className=" text-base mt-6">
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
