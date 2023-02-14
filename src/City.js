import UserHeader from "./components/UserHeader";
import axios from "axios";
import {Link, useLocation} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";


function City() {

    let [cityDataPlaces, setCityDataPlaces] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(true);

    const getCityInfo = useCallback( async () => {
        try {
            const r = await axios.get(`${process.env.REACT_APP_API_BASE_URL}${window.location.pathname}`)
            console.log("Status:", r.status)
                setCityDataPlaces(r.data)
                setLoading(false)

        } catch (e) {
            setNotFound(false)
        }
    }, []);


    let locationInfo = null
    const location = useLocation()
    try {
        locationInfo = location.state
        console.log("Here", locationInfo)
        console.log(window.location.pathname);
        console.log(window.location.href);
    } catch (e) {

    }

    useEffect(() => {
        getCityInfo()
    }, [getCityInfo, location]);

    if (notFound === false) {
        return (
            <div>
                {console.log("Status HTTP: ", notFound)}
                Not Found
            </div>
        );
    }
    return(
        <div>
            {<UserHeader/>}
            {console.log("Returned Data: ", cityDataPlaces)}
            <div className="city">
                Places
                <div className="grid-container-places  grid-container city">
                    {!isLoading && <div>
                    {cityDataPlaces[0].map(({ activity_id, activity_name, activity_type, city_id, city_name,country_id,country_name,image_location ,points, sponsored}) => (
                        <div className="City" key={activity_id}>
                                <img src={`${process.env.REACT_APP_MEDIA_BASE_URL}${image_location}`} className="CityImage" alt="p" />
                        </div>
                    ))}
                        </div>}
                </div>
            </div>
        </div>
    );

}
export default City