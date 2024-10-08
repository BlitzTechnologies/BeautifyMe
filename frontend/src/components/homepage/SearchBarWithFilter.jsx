import { Box, TextField, Button, InputAdornment, MenuItem } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from "react";

function SearchBarWithFilter() {
    const [location, setLocation] = useState("All of Singapore");

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "1rem",
                borderRadius: "10px",
                margin: "0 auto",
            }}
        >
            {/* Search Input */}
            <TextField
                variant="outlined"
                placeholder="Search for an item"
                fullWidth
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                    sx: {
                        height: "40px", // Set the height of the input
                        padding: "0 10px", // Adjust padding to reduce extra space
                    }
                }}
                sx={{
                    marginRight: "1rem",
                    backgroundColor: "white",
                    borderRadius: "5px",
                    height: "40px", // Make the text field container height shorter
                }}
            />

            {/* Location Filter */}
            <TextField
                select
                value={location}
                onChange={handleLocationChange}
                variant="outlined"
                sx={{
                    marginRight: "1rem",
                    minWidth: "200px",
                    backgroundColor: "white",
                    borderRadius: "5px",
                    height: "40px", // Set the height for the dropdown
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <LocationOnIcon />
                        </InputAdornment>
                    ),
                    sx: {
                        height: "40px", // Match the input height
                        padding: "0 10px", // Adjust padding to reduce extra space
                    }
                }}
            >
                <MenuItem value="All of Singapore">All of Singapore</MenuItem>
                <MenuItem value="Central">Central</MenuItem>
                <MenuItem value="North">North</MenuItem>
                <MenuItem value="East">East</MenuItem>
                <MenuItem value="West">West</MenuItem>
                <MenuItem value="South">South</MenuItem>
            </TextField>

            {/* Search Button */}
            <Button
                variant="contained"
                color="success"
                sx={{
                    backgroundColor: '#FFF5EE',
                    color: '#C9A9A6',
                    textTransform: "none",
                    padding: "0.5rem 2rem",
                    height: "40px", // Match height of the input and dropdown
                    '&:hover': {
                        backgroundColor: '#f0f0f0', // Optional: lighter shade on hover
                    },
                }}
            >
                SEARCH
            </Button>
        </Box>
    );
}

export default SearchBarWithFilter;
