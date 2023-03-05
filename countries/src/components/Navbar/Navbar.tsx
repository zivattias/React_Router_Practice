import { Stack, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar(): JSX.Element {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
            sx={{
                height: "100px",
                backgroundColor: "rgba(9, 9, 13, 0.9)",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            }}
            py="1em"
            px="3em"
        >
            <Typography color="common.white" variant="h4">
                Router Exercise
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Link
                    style={{
                        marginRight: "1em",
                        color: "white",
                        textDecoration: "none",
                    }}
                    to="/"
                >
                    Home
                </Link>
                <Link
                    style={{
                        marginRight: "1em",
                        color: "white",
                        textDecoration: "none",
                    }}
                    to="/about"
                >
                    About
                </Link>
                <Link
                    style={{
                        marginRight: "1em",
                        color: "white",
                        textDecoration: "none",
                    }}
                    to="/countries"
                >
                    Countries
                </Link>
            </Box>
        </Stack>
    );
}

export default Navbar;
