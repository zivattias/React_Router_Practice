import { useEffect, useState } from "react";
import { Container, Typography, Button } from "@mui/material";
import axios from "axios";

const apiURL = "https://api.chucknorris.io/jokes/random";

export default function Jokes() {
    const [joke, setJoke] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(apiURL).then((response) => {
            setJoke(response.data.value);
            setLoading(false);
        });
    }, []);

    const getNewJoke = () => {
        setJoke(null);
        setLoading(true);
        axios.get(apiURL).then((response) => {
            setJoke(response.data.value);
            setLoading(false);
        });
    };

    return (
        <Container sx={{ padding: "3em" }}>
            <Typography>Here's a random Chuck Norris joke:</Typography>
            {loading && (
                <Typography sx={{ height: "150px" }}>
                    Getting a joke...
                </Typography>
            )}
            {joke && <Typography sx={{ height: "150px" }}>{joke}</Typography>}
            <Button variant="contained" onClick={getNewJoke}>
                New Joke
            </Button>
        </Container>
    );
}
