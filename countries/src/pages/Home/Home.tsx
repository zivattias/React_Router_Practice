import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Home(): JSX.Element {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}
