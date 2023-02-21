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
        console.log("Locations State:", location.state)
        country = location.state
        console.log(country.country)
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
            <div className=" ml-4 mr-4 ">
                <div>
                    {!isLoading && <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-3 gap-y-10 place-items-center">
                        {cityData[0].map(({ city_id, city_name, image_location, country_id, country_name }) => (
                            <div key={city_id}>
                                <div className="card w-80 bg-base-100 shadow-xl">
                                    <figure><img src={`${process.env.REACT_APP_MEDIA_BASE_URL}${image_location}`} className="CountryImage object-fill w-full" alt="p" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{city_name}</h2>
                                        <p>Some city info</p>
                                        <div className="card-actions justify-end">
                                            <Link to={
                                                {
                                                    pathname: `/countries/${country.country}/cities/${city_name}`
                                                }

                                            } state={{ country: city_name }}>
                                                <button className="btn btn-primary">View</button>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Country