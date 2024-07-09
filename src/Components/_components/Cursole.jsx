import { Button, Container } from "@mui/material";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Cursole = () => {
    return (
        <div>
            <div>
                <div className="bg-[url('https://i.postimg.cc/GtD9FpWT/download.webp')] bg-no-repeat bg-center bg-cover h-[65vh] w-full max-720:bg-conatin ">
                    <div className="grid grid-cols-4 max-720:grid-cols-2 max-640:grid-cols-1 "></div>
                    <Container className="max-720:mt-[-30px]">
                        <div className="grid grid-cols-2 h-[100%]]  align-middle mt-32 max-720:grid-cols-1">
                            <div className=" max-w-[460px] ">
                                <span className="">
                                    {" "}
                                    <p className="text-[42px] text-white max-768:text-3xl ">
                                        Lowest package price guaranteed -{" "}
                                        <span> July</span>
                                    </p>
                                    <p className="text-[42px] text-white "></p>
                                </span>
                            </div>
                        </div>
                        <div className="mt-4">
                            {" "}
                            <Button
                                sx={{
                                    border: "2px solid #e66625",
                                    backgroundColor: "#e66625",
                                    borderRadius: "6px",
                                    color: "white",
                                    textTransform: "none",
                                    "&:hover": {
                                        backgroundColor: "darkorange",
                                    },
                                }}
                            >
                                <p className="text-sm">Book by 31 June</p>
                            </Button>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Cursole;

{
    /* <Carousel>
    <div>
        <img src="https://i.postimg.cc/GtD9FpWT/download.webp" />
        <p className="legend">Legend 1</p>
    </div>
    <div>
        <img src="https://i.postimg.cc/GtD9FpWT/download.webp" />
        <p className="legend">Legend 2</p>
    </div>
    <div>
        <img src="https://i.postimg.cc/GtD9FpWT/download.webp" />
        <p className="legend">Legend 3</p>
    </div>
</Carousel>; */
}

{
}
