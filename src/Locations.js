import UserHeader from "./components/UserHeader";
import "./Locations.css";
import england from "./media/bigben.jpeg";
import newzealand from "./media/beehive.webp";

function Locations(){
    return(
        <div>
            <div className="Header">
                {<UserHeader/>}
            </div>
        <div className="Title">
            Choose A Country
        </div>
            <div className="City">
                <a href="/locations/england"
                ><img src={england} className="CountryImage" alt="logo"/>
                    </a>
                <a href="/locations/newzealand">
                <div className="CountryName">
                    England
                </div>
                    </a>
            </div>
            <div className="City">
                <a href="/locations/newzealand">
                    <img src={newzealand} className="CountryImage" alt="logo"/>
                </a>
                <a href="/locations/newzealand">
                <div className="CountryName">
                    New Zealand
                </div>
                    </a>
            </div>
        </div>
    )
}

export default Locations