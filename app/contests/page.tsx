import ContestCard from "../components/ContestCard";
import ContestDashboard from "../components/ContestDashboard";
import { NavBar } from "../components/NavBar";

const Contests = () => {
    return (
        <div className="flex flex-col">
            <NavBar />
            
            <div>
                {/* <ContestCard /> */}
            </div>
            <ContestDashboard/>
        </div>
    )
};

export default Contests;

