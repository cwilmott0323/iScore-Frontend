import UserHeader from "./components/UserHeader";
import axios from "axios";
import {Link, useLocation} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import {Carousel} from "react-daisyui";
import { Button } from 'react-daisyui'


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

    return (
        <div>
                <div className="Header">
                    {<UserHeader/>}
                </div>
            <div className="flex flex-col gap-10 ml-5 mr-5">
                    <div className="carousel rounded-box gap-2 border-8 border-gray-400">
                        {!isLoading && cityDataPlaces.map((key, index) => (
                            <div>
                        <div className="carousel-item relative h-80 w-80">
                                <img className="static" src={`${process.env.REACT_APP_MEDIA_BASE_URL}${key.image_location}`} alt="Burger" />
                                <div className="absolute inset-x-0 bottom-0 text-center">
                                <button className="btn glass">{key.activity_name}</button>
                                </div>
                                </div>
                            </div>
                            ))}
                    </div>
            <div className="carousel rounded-box gap-2">
                {!isLoading && cityDataFood.map((key, index) => (
                    <div>
                        <div className="carousel-item relative h-80 w-80">
                            <img className="static" src={`${process.env.REACT_APP_MEDIA_BASE_URL}${key.image_location}`} alt="Burger" />
                            <div className="absolute inset-x-0 bottom-0 text-center">
                                <button className="btn glass sm:h-64 md:h-64 lg:h-64 xl:h-12">{key.activity_name}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="carousel rounded-box gap-2">
                {!isLoading && cityDataEvents.map((key, index) => (
                    <div>
                        <div className="carousel-item relative h-80 w-80">
                            <img className="static" src={`${process.env.REACT_APP_MEDIA_BASE_URL}${key.image_location}`} alt="Burger" />
                            <div className="absolute inset-x-0 bottom-0 text-center">
                                <button className="btn glass sm:h-64 md:h-64 lg:h-64 xl:h-12">{key.activity_name}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
            </div>
    );
}

export default City