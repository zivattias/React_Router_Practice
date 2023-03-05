import { Container, Typography } from "@mui/material";
import { useLocation, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Country(props: any) {
    const { state } = useLocation();
    const urlParams = useParams();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!state) {
            console.log('No state, requesting data')
            axios
                .get(
                    "https://restcountries.com/v3.1/alpha/" +
                        urlParams.countryCode
                )
                .then((response) => {
                    setData(response.data[0]);
                    setLoading(false);
                });
        } else {
            console.log('Stateful, data present')
            setData(state.countryData);
            setLoading(false);
        }
    }, [urlParams.countryCode, state]);

    return (
        <>
            {!loading && data && (
                <Container
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "1em",
                    }}
                >
                    <Typography variant="h2">
                        {data["name"]["common"]}
                    </Typography>
                    <Link to="/countries">Back</Link>
                </Container>
            )}
        </>
    );
}
