import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { styled } from "@mui/material/styles";

const CustomDatePicker = styled(DatePicker)({
   
    '& .MuiInputBase-root': {
        border: 'none',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },
});

const DatepickerMui = ({ label }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
                <CustomDatePicker label={label} />
            </DemoContainer>
        </LocalizationProvider>
    );
};

export default DatepickerMui;
