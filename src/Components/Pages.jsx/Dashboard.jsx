import React from "react";
import Cursole from "../_components/Cursole";
import BookingBox from "../_components/BookingBox";
import ExclusiveOffers from "../_components/ExclusiveOffers/ExclusiveOffers";
import TravelExperience from "../_components/TravelExperience";
import MultiCarousel from "../_components/MultiCarousel/MultiCarousel";
import FlightHotelDelas from "../_components/FlightHotelDelas";

const Dashboard = () => {
    return (
        <div>
            <Cursole />
            <BookingBox />
            <ExclusiveOffers />
            <TravelExperience />
            <MultiCarousel />
            <FlightHotelDelas />
        </div>
    );
};

export default Dashboard;
