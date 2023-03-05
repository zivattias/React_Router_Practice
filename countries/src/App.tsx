import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import About from "./pages/About/About";
import Jokes from "./pages/Jokes/Jokes";
import Countries from "./pages/Countries/Countries";
import Country from "./pages/Country/Country";

export default function App(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route index element={<Jokes />} />
                <Route path="about" element={<About />} />
                <Route path="countries" element={<Countries />} />
                <Route path="countries/:countryCode" element={<Country />} />
            </Route>
        </Routes>
    );
}
