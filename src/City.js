import UserHeader from "./components/UserHeader";
import axios from "axios";
import {Link, useLocation} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import 'tw-elements';
import userHeader from "./components/UserHeader";


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
            <div>
                {<UserHeader/>}
            </div>
            <div className="">
        <div className="flex flex-col grow-0 m-5 gap-3">
            <div id="carouselExampleCaptions1" className="flex carousel slide relative" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex p-0 mb-4">
            {!isLoading && cityDataPlaces.map((key, index) => (
                index === 0 ?
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions1"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        >
                        </button>
                            :
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions1"
                            data-bs-slide-to={index}
                            aria-label="Slide 2"
                        ></button>
                        ))}
                    </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                    {!isLoading && cityDataPlaces.map((key, index) => (
                        index === 0 ?
                            <div className="carousel-item active relative float-left w-full">
                                <img
                                    src={`${process.env.REACT_APP_MEDIA_BASE_URL}${key.image_location}`}
                                    className="block w-full"
                                    alt="..."
                                />
                                <div className="carousel-caption hidden md:block absolute text-center">
                                    <h5 className="text-xl">{key.activity_name}</h5>
                                </div>
                            </div>
                            :
                            <div className="carousel-item relative float-left w-full">
                                <img
                                    src={`${process.env.REACT_APP_MEDIA_BASE_URL}${key.image_location}`}
                                    className="block w-full"
                                    alt="..."
                                />
                                <div className="carousel-caption hidden md:block absolute text-center">
                                    <h5 className="text-xl">{key.activity_name}</h5>
                                </div>
                            </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions1"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions1"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div id="carouselExampleCaptions2" className="flex carousel slide relative" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex p-0 mb-4">
                    {!isLoading && cityDataFood.map((key, index) => (
                        index === 0 ?
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions2"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            >
                            </button>
                            :
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions2"
                                data-bs-slide-to={index}
                                aria-label="Slide 2"
                            ></button>
                    ))}
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                    {!isLoading && cityDataFood.map((key, index) => (
                        index === 0 ?
                            <div className="carousel-item active relative float-left w-full">
                                <img
                                    src={`${process.env.REACT_APP_MEDIA_BASE_URL}${key.image_location}`}
                                    className="block w-full"
                                    alt="..."
                                />
                                <div className="carousel-caption hidden md:block absolute text-center">
                                    <h5 className="text-xl">{key.activity_name}</h5>
                                </div>
                            </div>
                            :
                            <div className="carousel-item relative float-left w-full">
                                <img
                                    src={`${process.env.REACT_APP_MEDIA_BASE_URL}${key.image_location}`}
                                    className="block w-full"
                                    alt="..."
                                />
                                <div className="carousel-caption hidden md:block absolute text-center">
                                    <h5 className="text-xl">{key.activity_name}</h5>
                                </div>
                            </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions2"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions2"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div id="carouselExampleCaptions3" className="flex carousel slide relative" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex p-0 mb-4">
                    {!isLoading && cityDataEvents.map((key, index) => (
                        index === 0 ?
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions3"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            >
                            </button>
                            :
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions3"
                                data-bs-slide-to={index}
                                aria-label="Slide 2"
                            ></button>
                    ))}
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                    {!isLoading && cityDataEvents.map((key, index) => (
                        index === 0 ?
                            <div className="carousel-item active relative float-left w-full">
                                <img
                                    src={`${process.env.REACT_APP_MEDIA_BASE_URL}${key.image_location}`}
                                    className="block w-full"
                                    alt="..."
                                />
                                <div className="carousel-caption hidden md:block absolute text-center">
                                    <h5 className="text-xl">{key.activity_name}</h5>
                                </div>
                            </div>
                            :
                            <div className="carousel-item relative float-left w-full">
                                <img
                                    src={`${process.env.REACT_APP_MEDIA_BASE_URL}${key.image_location}`}
                                    className="block w-full"
                                    alt="..."
                                />
                                <div className="carousel-caption hidden md:block absolute text-center">
                                    <h5 className="text-xl">{key.activity_name}</h5>
                                </div>
                            </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions3"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions3"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
            </div>
        </div>
    );
}
export default City