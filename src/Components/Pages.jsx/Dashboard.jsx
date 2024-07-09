import React from "react";
import Cursole from "../_components/Cursole";
import BookingBox from "../_components/BookingBox";
import ExclusiveOffers from "../_components/ExclusiveOffers/ExclusiveOffers";
import TravelExperience from "../_components/TravelExperience";
import TopDestinations from "../_components/TopDestinations/TopDestinations";
import FlightHotelDelas from "../_components/FlightHotelDelas";

const Dashboard = () => {
    return (
        <div>
            <Cursole />
            <BookingBox />
            <ExclusiveOffers />
            <TravelExperience />
            <TopDestinations />
            <FlightHotelDelas />
        </div>
    );
};

export default Dashboard;
