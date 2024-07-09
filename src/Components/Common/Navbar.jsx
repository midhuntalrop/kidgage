import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const pages = [
    "Designation",
    "Sports & Experiences",
    "Cruises",
    "Special Offers",
    "Contact Us",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <div>
            {/* <AppBar
                position="static"
                sx={{
                    backgroundColor: "white",
                    color: "black",
                    boxShadow: "none",
                    ".& css-19r6kue-MuiContainer-root": {
                        width: "",
                        marginLeft: "",
                    }, // Remove box shadow if not needed
                }}
            >
                <Container maxWidth="xl">
                    */}

            <Toolbar>
                {/* <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                        mr: 2,
                        display: { xs: "none", md: "flex" },
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: ".3rem",
                        color: "inherit",
                        textDecoration: "none",
                    }}
                >
                    <div className="w-20 h-5">
                        <img
                            src="https://i.postimg.cc/pXVtQ4Qs/KIDGAGE-Logo-01.jpg"
                            alt=""
                        />
                    </div>
                </Typography> */}

                <Box
                    sx={{
                        flexGrow: 1,
                        display: { xs: "flex", md: "none" },
                    }}
                >
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: "block", md: "none" },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography
                                    textAlign="center"
                                    sx={{ color: "black" }}
                                >
                                    {page}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <div className="w-[120px] max-720:w-[150px] max-720:ml-[-10px]">
                    <img
                        src="https://i.postimg.cc/pXVtQ4Qs/KIDGAGE-Logo-01.jpg"
                        alt=""
                    />
                </div>
                <Container className="bg-white">
                    <div className="flex justify-center align-middle items-center gap-8">
                        {/* <div className="w-[120px] max-980:hidden">
                            <img
                                src="https://i.postimg.cc/pXVtQ4Qs/KIDGAGE-Logo-01.jpg"
                                alt=""
                            />
                        </div> */}
                        <div className=" ">
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: "none", md: "flex" },
                                    gap: "32px",
                                }}
                            >
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{
                                            my: 2,
                                            color: "black",
                                            display: "block",
                                        }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>
                        </div>
                    </div>
                </Container>
            </Toolbar>
            {/* // </Container> */}
            {/* // </AppBar>  */}
            {/* <Container className="bg-white">
                <div className="flex justify-center align-middle items-center gap-8">
                    <div className="w-[120px] ">
                        <img
                            src="https://i.postimg.cc/pXVtQ4Qs/KIDGAGE-Logo-01.jpg"
                            alt=""
                        />
                    </div>
                    <div className=" ">
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", md: "flex" },
                                gap: "32px",
                            }}
                        >
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                        color: "black",
                                        display: "block",
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    </div>
                </div>
            </Container> */}
        </div>
    );
};

export default Navbar;
