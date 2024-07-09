import { Container } from "@mui/material";
import React from "react";

const TravelExperience = () => {
    return (
        <div className="my-8">
            <div className="bg-[#ff7f00] p-[45px] ">
                <Container>
                    <div className=" grid grid-cols-3 gap-14 text-center max-768:grid-cols-2 max-640:grid-cols-1">
                        <div className="text-center flex flex-col items-center">
                            <div className="w-[100px] ">
                                <img
                                    src="https://i.postimg.cc/66jqCHBr/download-removebg-preview-1.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <p className="text-white font-semibold text-lg max-720:text-base">
                                    World's Best Business Class
                                </p>
                            </div>
                            <div>
                                <p className="text-white text-base  max-720:text-sm">
                                    Enjoy an award-winning experience with
                                    world-class service
                                </p>
                            </div>
                        </div>
                        <div className="text-center  flex flex-col items-center">
                            <div className=" w-[100px]">
                                <img
                                    src="https://i.postimg.cc/66jqCHBr/download-removebg-preview-1.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <p className="text-white font-semibold text-lg max-720:text-base">
                                    Exclusive Savings and Benefits
                                </p>
                            </div>
                            <div>
                                <p className="text-white text-base  max-720:text-sm">
                                    Choose from a reliable and wide range of
                                    hotels, tours and destinations to explore.
                                </p>
                            </div>
                        </div>
                        <div className="text-center flex flex-col items-center">
                            <div className="w-[100px] ">
                                <img
                                    src="https://i.postimg.cc/66jqCHBr/download-removebg-preview-1.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <p className="text-white font-semibold text-lg max-720:text-base">
                                    Earn Rewards on all bookings
                                </p>
                            </div>
                            <div>
                                <p className="text-white text-base  max-720:text-sm">
                                    Become a Privilege Club member and earn
                                    bonus Avios on all bookings.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default TravelExperience;
