import React from "react";
import Bg from "../../assets/images/footer.svg"; // Adjust the path as needed
import { Container } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
    return (
        <div
            style={{
                opacity: "1",
                backgroundImage: `url(${Bg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                backgroundColor: "#662046",
            }}
        >
            <Container>
                <div className=" grid grid-cols-3 text-white px-[30px] pt-[45px] gap-11">
                    <div>
                        <p className="text-xl font-medium mb-5">
                            Qatar Airways Holidays
                        </p>
                        <p className="text-sm font-medium ">Home</p>
                        <p className="text-sm font-medium mt-2">
                            Privilege Club
                        </p>
                        <p className="text-sm font-medium mt-2">Contact Us</p>
                        <p className="text-sm font-medium mt-2">FAQ's</p>
                        <p className="text-sm font-medium mt-2">T&C's</p>
                        <p className="text-sm font-medium mt-2">
                            Privacy Notice
                        </p>
                        <p className="text-sm font-medium mt-2">
                            Cookies Policy
                        </p>
                    </div>
                    <div>
                        <p className="text-xl font-medium mb-5">
                            Holiday Types
                        </p>
                        <p className="text-sm font-medium ">Beach Holidays</p>
                        <p className="text-sm font-medium mt-2">
                            Cruise Holidays
                        </p>
                        <p className="text-sm font-medium mt-2">City Breaks</p>
                        <p className="text-sm font-medium mt-2">
                            Honeymoon Packages
                        </p>
                        <p className="text-sm font-medium mt-2">
                            Family & Kids
                        </p>
                        <p className="text-sm font-medium mt-2">
                            Safari Holidays
                        </p>
                    </div>
                    <div>
                        <p className="text-xl font-medium mb-5">Destinations</p>
                        <p className="text-sm font-medium ">Maldives</p>
                        <p className="text-sm font-medium mt-2">Thailand</p>
                        <p className="text-sm font-medium mt-2">Istanbul</p>
                        <p className="text-sm font-medium mt-2">Tbilisi</p>
                        <p className="text-sm font-medium mt-2">
                            United Kingdom
                        </p>
                        <p className="text-sm font-medium mt-2">USA</p>
                    </div>
                </div>
                <hr className="bg-white h-[1px] mt-10" />
                <div className="px-[15px] flex justify-between">
                    <div className="flex gap-3 items-center">
                        <div className="w-[120px] py-4 ">
                            <img
                                className="bg-white"
                                src="https://i.postimg.cc/Dw4pJ0nK/KIDGAGE-Logo-01-removebg-preview.png"
                                alt=""
                            />
                        </div>
                        <div className="h-[40px] bg-white w-[2px]"></div>
                        <div>
                            <p className="text-[28px] text-white">HOLIDAYS</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-8">
                        <div>
                            <p className="text-white text-sm ">Lets Connect</p>
                        </div>
                        <div>
                            <FacebookRoundedIcon className="text-white" />
                        </div>
                        <div>
                            <InstagramIcon className="text-white" />
                        </div>
                        <div>
                            <XIcon className="text-white" />
                        </div>
                        <div>
                            <LinkedInIcon className="text-white" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
