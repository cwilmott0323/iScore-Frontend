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
            <div className="ml-4 mr-4 ">
            <div>
                {!isLoading && <div className="grid 2xl:grid-cols-4 sm:grid-cols-1 gap-3 gap-y-10 place-items-center">
                    {countryData[0].map(({ country_id, country_name, image_location }) => (
                        <div key={country_id}>
                            <div className="card w-80 bg-base-100 shadow-xl">
                                <figure><img src={`${process.env.REACT_APP_MEDIA_BASE_URL}${image_location}`} className="CountryImage object-fill w-full" alt="p" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{country_name}</h2>
                                    <p>Some country info</p>
                                    <div className="card-actions justify-end">
                                        <Link to={
                                            {
                                                pathname: `/countries/${country_name}/cities`
                                            }

                                        } state={{ country: country_name }}>
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

export default Countries