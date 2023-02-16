import UserHeader from "./components/UserHeader";
import axios from "axios";
import {Link, useLocation} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";


function City() {

    let [cityDataPlaces, setCityDataPlaces] = useState({});
    let [cityDataFood, setCityDataFood] = useState({});
    let [cityDataEvents, setCityDataEvents] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(true);

    const places = [];
    const food = [];
    const events = [];

    const getCityInfo = useCallback( async () => {
        try {
            const r = await axios.get(`${process.env.REACT_APP_API_BASE_URL}${window.location.pathname}`)
            console.log("Status:", r.status)
            r.data[0].forEach((item, i) => {
                for(let key in item) {
                    if (item[key] === "Place") {
                        places.push(item)
                    }
                    if (item[key] === "Food") {
                        food.push(item)
                    }
                    if (item[key] === "Event") {
                        events.push(item)
                    }
                    setCityDataPlaces(places)
                    setCityDataFood(food)
                    setCityDataEvents(events)
                }
            });
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
                Not Found
            </div>
        );
    }
    return(
        <div>
            {<UserHeader/>}
            <div className=" ml-4 mr-4 ">
            <div className="city">
                Places
                    {!isLoading && <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 sm:gap-3:grid-cols-3 md:grid-cols-3 grid-cols-3 gap-3">
                    {cityDataPlaces.map(({ activity_id, activity_name, activity_type, city_id, city_name,country_id,country_name,image_location ,points, sponsored}) => (
                        <div className="City" key={activity_id}>
                                <img src={`${process.env.REACT_APP_MEDIA_BASE_URL}${image_location}`} className="CityImage object-contain vw-100" alt="p" />
                        </div>
                    ))}
                        </div>}
                </div>
                <div className="city">
                    Food
                    {!isLoading && <div className="grid grid-cols-4 gap-3">
                        {cityDataFood.map(({ activity_id, activity_name, activity_type, city_id, city_name,country_id,country_name,image_location ,points, sponsored}) => (
                            <div className="City" key={activity_id}>
                                <img src={`${process.env.REACT_APP_MEDIA_BASE_URL}${image_location}`} className="CityImage object-fill" alt="p" />
                            </div>
                        ))}
                    </div>}
                </div>
                <div className="city">
                    Events
                    {!isLoading && <div className="grid grid-cols-4 gap-3">
                        {cityDataEvents.map(({ activity_id, activity_name, activity_type, city_id, city_name,country_id,country_name,image_location ,points, sponsored}) => (
                            <div className="City" key={activity_id}>
                                <img src={`${process.env.REACT_APP_MEDIA_BASE_URL}${image_location}`} className="CityImage object-fill" alt="p" />
                            </div>
                        ))}
                    </div>}
                </div>
            </div>
        </div>
    );

}
export default City