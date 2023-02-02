import "./Cities.css";
import theshard from "./media/theshard copy.png";
import bigben from "./media/bigben.jpeg";
import arena from "./media/o2arena copy.png";
import UserHeader from "./components/UserHeader";


function NewZealand() {
    return(
        <div>
            {<UserHeader/>}
            <div className="london">
                Places
                <div className="grid-container-places  grid-container london">
                    <div className="grid-item-places grid-item">
                        <img src={theshard} className="city-image image1" alt="logo"/>
                    </div>
                    <div className="grid-item-places grid-item">
                        <img src={bigben} className="city-image image2" alt="logo"/>
                    </div>
                    <div className="grid-item-places grid-item">
                        <img src={arena} className="city-image image3" alt="logo"/>
                    </div>
                </div>
                <div className="london">
                    Activities
                </div>
                <div className="grid-container-places  grid-container london">
                    <div className="grid-item-places grid-item">
                        <img src={theshard} className="city-image image1" alt="logo"/>
                    </div>
                    <div className="grid-item-places grid-item">
                        <img src={bigben} className="city-image image2" alt="logo"/>
                    </div>
                    <div className="grid-item-places grid-item">
                        <img src={arena} className="city-image image3" alt="logo"/>
                    </div>
                </div>
                <div className="london">
                    Eat/Drink
                </div>
                <div className="grid-container-places  grid-container london">
                    <div className="grid-item-places grid-item">
                        <img src={theshard} className="city-image image1" alt="logo"/>
                    </div>
                    <div className="grid-item-places grid-item">
                        <img src={bigben} className="city-image image2" alt="logo"/>
                    </div>
                    <div className="grid-item-places grid-item">
                        <img src={arena} className="city-image image3" alt="logo"/>
                    </div>
                </div>
                <div className="london">
                    Extra
                </div>
                <div className="grid-container-places  grid-container london">
                    <div className="grid-item-places grid-item">
                        <img src={theshard} className="city-image image1" alt="logo"/>
                    </div>
                    <div className="grid-item-places grid-item">
                        <img src={bigben} className="city-image image2" alt="logo"/>
                    </div>
                    <div className="grid-item-places grid-item">
                        <img src={arena} className="city-image image3" alt="logo"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewZealand