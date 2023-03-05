import { useState } from "react";
import axios from "axios";
import {
    TextField,
    Typography,
    Container,
    Checkbox,
    FormControlLabel,
    Alert,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import CountryList from "../CountryList/CountryList";

export default function Countries(): JSX.Element {
    const [checked, setChecked] = useState(false);
    const [query, setQuery] = useState("");
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        setError(false);
        setData(null);
        setLoading(true);
        event.preventDefault();
        let apiURL = "";
        checked
            ? (apiURL = "https://restcountries.com/v3.1/name/" + query)
            : (apiURL =
                  "https://restcountries.com/v3.1/name/" +
                  `${query}` +
                  "?fullText=true");
        axios
            .get(apiURL, { validateStatus: (status) => status === 200 })
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    };

    return (
        <Container>
            <form
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    flexDirection: "column",
                    height: "400px",
                }}
                onSubmit={handleSubmit}
            >
                <Typography variant="h4">Lookup a country:</Typography>
                <TextField
                    label="Country name"
                    variant="outlined"
                    sx={{
                        width: "30em",
                        marginBottom: "1em",
                        "& .MuiOutlinedInput-root": {
                            "&.Mui-focused fieldset": {
                                borderColor: "black",
                            },
                        },
                        "& .MuiInputLabel-root": {
                            "&.Mui-focused": {
                                color: "black",
                            },
                        },
                    }}
                    value={query}
                    onChange={(event) => {
                        setQuery(event.target.value);
                    }}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            onClick={() => {
                                setChecked(!checked);
                            }}
                        />
                    }
                    label="Partial name?"
                />
                <LoadingButton
                    loading={loading}
                    variant="contained"
                    type="submit"
                >
                    Search
                </LoadingButton>
            </form>
            {error && (
                <Alert severity="error">
                    Couldn't find a country matching your search!
                </Alert>
            )}
            {data && <CountryList data={data} />}
        </Container>
    );
}
