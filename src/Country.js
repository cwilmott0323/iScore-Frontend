import UserHeader from "./components/UserHeader";
import "./Countries.css";
import "./index.css";
import {Link} from "react-router-dom";
import axios from "axios";
import {useCallback, useEffect, useState} from "react";
import { useLocation } from 'react-router-dom'


function Country(){

    let [cityData, setCityData] = useState({});
    const [isLoading, setLoading] = useState(true);

    const getCities = useCallback( async () => {
        const r = await axios.get(`${process.env.REACT_APP_API_BASE_URL}${window.location.pathname}`)
        setCityData(r.data)
        setLoading(false)
    }, []);


    let country = null
    const location = useLocation()
    try {
        country = location.state
    } catch (e) {

    }

    useEffect(() => {
        getCities()
    }, [getCities, location]);

    return(
        <div>
            <div className="Header">
                {<UserHeader/>}
            </div>
            <div className="Title">
                Choose A City
            </div>
            <div>
                {!isLoading && <div>
                    {cityData[0].map(({ city_id, city_name, image_location, country_id }) => (
                        <div className="City" key={city_id}>
                            <Link state={{ city: city_name, country: country }} to={`${city_name}`}>
                                <img src={`${process.env.REACT_APP_MEDIA_BASE_URL}${image_location}`} className="CityImage" alt="p" />
                            </Link>
                            <div className="CityName">
                                <Link state={{ city: city_name, country: country }} to={`${city_name}`}>{city_name}</Link>
                            </div>
                        </div>
                    ))}
                </div>}
            </div>
        </div>
    )
}

export default Country