import ContestDashboard from "../components/ContestDashboard";
import { NavBar } from "../components/NavBar";

const Contests = () => {
    return (
        <div className="flex flex-col">
            <NavBar />
            <ContestDashboard/>
        </div>
    )
};

export default Contests;

