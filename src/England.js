import "./Cities.css";
import UserHeader from "./components/UserHeader";


function England() {
    return(
        <div>
            {<UserHeader/>}
            <div className="london">
                Places
                <div className="grid-container-places  grid-container london">
                    <div className="grid-item-places grid-item">
                        <img src={`${process.env.REACT_APP_MEDIA_BASE_URL}Countries/England/theshard+copy.png`} className="city-image image1" alt="logo"/>
                    </div>
                    <div className="grid-item-places grid-item">
                        <img src={`${process.env.REACT_APP_MEDIA_BASE_URL}Countries/England/bigben.jpeg`} className="city-image image2" alt="logo"/>
                    </div>
                    <div className="grid-item-places grid-item">
                        <img src={`${process.env.REACT_APP_MEDIA_BASE_URL}Countries/England/o2arena+copy.png`} className="city-image image3" alt="logo"/>
                    </div>
                </div>
                <div className="london">
                    Activities
                </div>
                <div className="grid-container-places  grid-container london">
                    <div className="grid-item-places grid-item">
                        <img src={`${process.env.REACT_APP_MEDIA_BASE_URL}Countries/England/theshard+copy.png`} className="city-image image1" alt="logo"/>
                    </div>
                    <div className="grid-item-places grid-item">
                        <img src={`${process.env.REACT_APP_MEDIA_BASE_URL}Countries/England/bigben.jpeg`} className="city-image image2" alt="logo"/>
                    </div>
                    <div className="grid-item-places grid-item">
                        <img src={`${process.env.REACT_APP_MEDIA_BASE_URL}Countries/England/o2arena+copy.png`} className="city-image image3" alt="logo"/>
                    </div>
                </div>
                <div className="london">
                    Eat/Drink
                </div>
                <div className="grid-container-places  grid-container london">
                    <div className="grid-item-places grid-item">
                        <img src={`${process.env.REACT_APP_MEDIA_BASE_URL}Countries/England/theshard+copy.png`} className="city-image image1" alt="logo"/>
                    </div>
                    <div className="grid-item-places grid-item">
                        <img src={`${process.env.REACT_APP_MEDIA_BASE_URL}Countries/England/bigben.jpeg`} className="city-image image2" alt="logo"/>
                    </div>
                    <div className="grid-item-places grid-item">
                        <img src={`${process.env.REACT_APP_MEDIA_BASE_URL}Countries/England/o2arena+copy.png`} className="city-image image3" alt="logo"/>
                    </div>
                </div>
                <div className="london">
                    Extra
                </div>
                <div className="grid-container-places  grid-container london">
                    <div className="grid-item-places grid-item">
                        <img src={`${process.env.REACT_APP_MEDIA_BASE_URL}Countries/England/theshard+copy.png`} className="city-image image1" alt="logo"/>
                    </div>
                    <div className="grid-item-places grid-item">
                        <img src={`${process.env.REACT_APP_MEDIA_BASE_URL}Countries/England/bigben.jpeg`} className="city-image image2" alt="logo"/>
                    </div>
                    <div className="grid-item-places grid-item">
                        <img src={`${process.env.REACT_APP_MEDIA_BASE_URL}Countries/England/o2arena+copy.png`} className="city-image image3" alt="logo"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default England