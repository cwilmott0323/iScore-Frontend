import UserHeader from "./components/UserHeader";
import "./Locations.css";

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
                ><img src={`${process.env.REACT_APP_MEDIA_BASE_URL}Countries/England/bigben.jpeg`} className="CountryImage" alt="logo"/>
                    </a>
                <a href="/locations/newzealand">
                <div className="CountryName">
                    England
                </div>
                    </a>
            </div>
            <div className="City">
                <a href="/locations/newzealand">
                    <img src={`${process.env.REACT_APP_MEDIA_BASE_URL}Countries/New+Zealand/beehive.webp`} className="CountryImage" alt="logo"/>
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