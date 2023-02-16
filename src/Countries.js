import UserHeader from "./components/UserHeader";
import "./Countries.css";
import "./index.css";
import {createSearchParams, Link} from "react-router-dom";
import axios from "axios";
import {useCallback, useEffect, useState} from "react";


function Countries(){

    let [countryData, setCountryData] = useState({});
    const [isLoading, setLoading] = useState(true);

    const getCountries = useCallback( async () => {
        const r = await axios.get(`${process.env.REACT_APP_API_BASE_URL}countries/all`)
        setCountryData(r.data)
        setLoading(false)
    }, []);

    useEffect(() => {
        getCountries()
    }, [getCountries]);


    return(
        <div>
            <div className="Header">
                {<UserHeader/>}
            </div>
            <div className=" ml-4 mr-4 ">
        <div className="Title">
            Choose A Country
        </div>
            <div>
                {!isLoading && <div className="grid grid-cols-5 gap-3">
                    {countryData[0].map(({ country_id, country_name, image_location }) => (
                        <div>
                            <Link to={
                                {
                                    pathname: `/countries/${country_name}/cities`
                                }
                            } state={{ country: country_name }}>{country_name}
                            </Link>
                            <Link to={
                                {
                                    pathname: `/countries/${country_name}/cities`
                                }
                            } state={{ country: country_name }}>
                                <img src={`${process.env.REACT_APP_MEDIA_BASE_URL}${image_location}`} className="CountryImage object-fill h-60 w-80" alt="p" />
                            </Link>
                            </div>
                    ))}
                </div>}
            </div>
            </div>
        </div>
    )
}

export default Countries