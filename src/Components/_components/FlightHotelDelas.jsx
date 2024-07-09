import { Button, Container } from "@mui/material";
import React from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import BrunchDiningOutlinedIcon from "@mui/icons-material/BrunchDiningOutlined";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";

const FlightHotelDelas = () => {
    const array = ["1", "2", "3", "4", "5", "6", "7"];
    return (
        <div className="bg-[#F1F3F8] ">
            <Container className="pb-20">
                <div className="py-[30px]">
                    <h1 className="font-light text-[36px] text-[#850B48] max-720:text-3xl">
                        Flight + Hotel Deals
                    </h1>
                </div>
                <div className="grid grid-cols-3 gap-2 max-980:grid-cols-2 max-980:gap-4 max-720:gap-2   max-599:grid-cols-1 max-599:gap-7 ">
                    {array.map((item, index) => (
                        <div className="card px-[8px] mt-2">
                            <div className="w-[100%] rounded-lg shadow-lg shadow-slate-400">
                                <div className="rounded-lg  ">
                                    <img
                                        src="https://i.postimg.cc/kXdTGqdW/download-2.jpg"
                                        alt=""
                                        className="rounded-t-2xl w-[100%] h-[100%] shadow-xl shadow-slate-500"
                                    />
                                </div>
                                <div className="bg-[#e66625] w-[100%]">
                                    <p className="p-[2px] px-4 w-[100%] text-white text-lg font-medium max-720:text-base max-599:text-lg">
                                        Thistel Londan Marble Arch
                                    </p>
                                </div>
                                <div className="p-4">
                                    <div className="flex gap-2 items-center ">
                                        <LightModeOutlinedIcon className="text-gray-500 max-720:text-[12px] " />
                                        <p className="text-sm text-[#1F212B] max-720:text-[12px] max-599:text-sm">
                                            3 nights
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center mt-3">
                                        <CalendarMonthOutlinedIcon className="text-gray-500 max-720:text-[12px]" />
                                        <p className="text-sm text-[#1F212B] max-720:text-[12px] max-599:text-sm">
                                            Checks in : 11 Jul, 2024
                                        </p>
                                    </div>

                                    <div className="flex gap-2 items-center mt-3 ">
                                        <BrunchDiningOutlinedIcon className="text-gray-500 max-720:text-[12px]" />
                                        <p className="text-sm text-[#1F212B] max-720:text-[12px] max-599:text-sm">
                                            Room Only
                                        </p>
                                    </div>
                                    <div className="flex gap-2 items-center mt-3">
                                        <FlightTakeoffOutlinedIcon className="text-gray-500 max-720:text-[12px]" />
                                        <p className="text-sm text-[#1F212B] max-720:text-[12px] max-599:text-sm">
                                            Return Flight from Doha - Hamad
                                            International
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-1 px-4 items-center">
                                    <img
                                        src="https://i.postimg.cc/rFqhXPP8/image.png"
                                        alt=""
                                        className="text-xs"
                                    />
                                    <img
                                        src="https://i.postimg.cc/rFqhXPP8/image.png"
                                        alt=""
                                        className="text-xs"
                                    />
                                    <img
                                        src="https://i.postimg.cc/rFqhXPP8/image.png"
                                        alt=""
                                        className="text-xs"
                                    />
                                    <img
                                        src="https://i.postimg.cc/rFqhXPP8/image.png"
                                        alt=""
                                        className="text-xs"
                                    />

                                    <hr className="h-[2px] w-full bg-gray-300 " />
                                </div>
                                <div>
                                    <div className="p-4 flex justify-between max-720:flex-wrap">
                                        <div className="">
                                            <p className="text-[16px] font-medium text-[#1F212B] max-720:text-[14px] max-599:text-[16px]">
                                                From
                                            </p>
                                            <p className="text-[#850B48] text-[16px] font-semibold max-720:text-[13px] max-599:text-[16px]">
                                                QAR 55200PP
                                            </p>
                                        </div>
                                        <div>
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
                                                <p className="max-720:text-[12px] max-599:text-[14px]">
                                                    Book Now
                                                </p>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default FlightHotelDelas;
