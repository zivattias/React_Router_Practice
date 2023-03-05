import { Link } from "react-router-dom";

export default function CountryList(props: any): JSX.Element {
    const data = props.data;
    return (
        <>
            {data.map((country: any) => {
                return (
                    <Link
                        to={`${country["ccn3"]}`}
                        state={{ countryData: country }}
                        style={{
                            textDecoration: "none",
                            color: "black",
                            fontWeight: "bold",
                            display: "block",
                            marginBottom: "0.5em",
                        }}
                        key={country["ccn3"]}
                    >
                        {country["name"]["official"]}
                    </Link>
                );
            })}
        </>
    );
}
