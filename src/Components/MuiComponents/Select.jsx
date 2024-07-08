import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectMui = () => {
    const [age, setAge] = useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth variant="">
                <InputLabel
                    id="demo-simple-select-label"
                    sx={{
                        fontSize: "12px",
                        "&.Mui-focused": {
                            color: "gray", // Optional: keep the label color consistent
                        },
                    }}
                >
                    Flying form:
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                        },
                    }}
                >
                    <MenuItem value={10} sx={{ borderBottom: "none" }}>
                        Ten
                    </MenuItem>
                    <MenuItem value={20} sx={{ borderBottom: "none" }}>
                        Twenty
                    </MenuItem>
                    <MenuItem value={30} sx={{ borderBottom: "none" }}>
                        Thirty
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default SelectMui;
