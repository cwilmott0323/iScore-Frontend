import "./Cities.css";
import UserHeader from "./components/UserHeader";


function NewZealand() {
    return(
        <div>
            {<UserHeader/>}
            <div className="london">
                Places
                <div className="grid-container-places  grid-container london">
                    <div className="grid-item-places grid-item">
                        <img src={`${process.env.REACT_APP_MEDIA_BASE_URL}Countries/New+Zealand/theshard+copy.png`} className="city-image image1" alt="logo"/>
                    </div>
                    <div className="grid-item-places grid-item">
                        <img src={`${process.env.REACT_APP_MEDIA_BASE_URL}Countries/New+Zealand/bigben.jpeg`} className="city-image image2" alt="logo"/>
                    </div>
                    <div className="grid-item-places grid-item">
                        <img src={`${process.env.REACT_APP_MEDIA_BASE_URL}Countries/New+Zealand/o2arena+copy.png`} className="city-image image3" alt="logo"/>
                    </div>
                </div>
                <div className="london">
                    Activities
                </div>
                <div className="grid-container-places  grid-container london">
                    <div className="grid-item-places grid-item">
                        <img src={`${process.env.REACT_APP_MEDIA_BASE_URL}Countries/New+Zealand/theshard+copy.png`} className="city-image image1" alt="logo"/>
                    </div>
                    <div className="grid-item-places grid-item">
                        <img src={`${process.env.REACT_APP_MEDIA_BASE_URL}Countries/New+Zealand/bigben.jpeg`} className="city-image image2" alt="logo"/>
                    </div>
                    <div className="grid-item-places grid-item">
                        <img src={`${process.env.REACT_APP_MEDIA_BASE_URL}Countries/New+Zealand/o2arena+copy.png`} className="city-image image3" alt="logo"/>
                    </div>
                </div>
                <div className="london">
                    Eat/Drink
                </div>
                <div className="grid-container-places  grid-container london">
                    <div className="grid-item-places grid-item">
                        <img src={`${process.env.REACT_APP_MEDIA_BASE_URL}Countries/New+Zealand/theshard+copy.png`} className="city-image image1" alt="logo"/>
                    </div>
                    <div className="grid-item-places grid-item">
                        <img src={`${process.env.REACT_APP_MEDIA_BASE_URL}Countries/New+Zealand/bigben.jpeg`} className="city-image image2" alt="logo"/>
                    </div>
                    <div className="grid-item-places grid-item">
                        <img src={`${process.env.REACT_APP_MEDIA_BASE_URL}Countries/New+Zealand/o2arena+copy.png`} className="city-image image3" alt="logo"/>
                    </div>
                </div>
                <div className="london">
                    Extra
                </div>
                <div className="grid-container-places  grid-container london">
                    <div className="grid-item-places grid-item">
                        <img src={`${process.env.REACT_APP_MEDIA_BASE_URL}Countries/New+Zealand/theshard+copy.png`} className="city-image image1" alt="logo"/>
                    </div>
                    <div className="grid-item-places grid-item">
                        <img src={`${process.env.REACT_APP_MEDIA_BASE_URL}Countries/New+Zealand/bigben.jpeg`} className="city-image image2" alt="logo"/>
                    </div>
                    <div className="grid-item-places grid-item">
                        <img src={`${process.env.REACT_APP_MEDIA_BASE_URL}Countries/New+Zealand/o2arena+copy.png`} className="city-image image3" alt="logo"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewZealand