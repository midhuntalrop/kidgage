import { Button, Container } from "@mui/material";
import React from "react";
import SelectMui from "../MuiComponents/Select";
import InputBaseComponent from "../MuiComponents/Input";
import DatepickerMui from "../MuiComponents/DatepickerMui";

const BookingBox = () => {
    return (
        <div>
            <Container className=" ">
                <div className="shadow-lg rounded-b-lg">
                    <div className=" bg-white relative mt-[-30px] rounded-lg">
                        <div className="flex bg-orange-500 rounded-t-lg ">
                            <div className="p-3 bg-white rounded-ss-lg ">
                                <p className="text-black text-base bg-white  max-720:text-sm">
                                    Flight + Hotel
                                </p>
                            </div>
                            <div className="ml-2 text-base text-white p-3 max-720:text-sm">
                                <p>Hayya & Visa on arrival</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-4  p-4 gap-3 max-840:grid-cols-2 max-599:grid-cols-1">
                        <div
                            className="rounded "
                            style={{ border: "1px solid #C1C1C1" }}
                        >
                            <SelectMui label={"Flying from"} />
                        </div>
                        <div>
                            <InputBaseComponent label={"Destination"} />
                        </div>
                        <div
                            className="rounded h-[56px] flex"
                            style={{ border: "1px solid #C1C1C1" }}
                        >
                            <input
                                type="date"
                                className="border-0  focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
                            />
                            <input
                                type="date"
                                className="border-0  focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
                            />
                        </div>

                        <InputBaseComponent
                            label={"Room,Guest & Flight Class"}
                        />
                    </div>
                    <div className="gap-4 flex justify-between px-5 max-420:flex-wrap">
                        <div className="flex items-center mb-5">
                            <input type="checkbox" className="mt-[3px]" />
                            <p className="max-720:text-sm max-640:ml-2 mt-[2px]">
                                Book a hotel only part of my trip
                            </p>
                        </div>
                        <div className="mb-5">
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
                                <p className="px-4 max-720:text-sm">Search</p>
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BookingBox;
