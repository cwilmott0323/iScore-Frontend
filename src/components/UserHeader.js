import React, {useEffect, useState} from "react";
import UseToken from "../UseToken";
import IsAuth from "../IsAuth";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { GiTrophyCup } from "react-icons/gi";
import "./../index.css";
import Button from "react-bootstrap/Button";

function UserHeader() {
    const [userCont, setUserCont] = useState([]);

    const { token, setToken } = UseToken();

    const x = IsAuth(token, setToken);

    const navigate = useNavigate();

    useEffect(() => {
        if (!x) {
            navigate("/login");
        }
    }, [x, navigate]);

    useEffect(() => {
        getDataAxiosUser(token).then(r => {
            console.log("Data", r.data[0])
            setUserCont(r.data[0])
        }).catch(
            e => e
        );
    }, [token]);

    useEffect(() => {});
    function handleClick() {
        localStorage.removeItem('token');
        window.location.reload();
    }

    return(

        <div className="user-header">
        <div className="User-Greet">
            <h2 className="User-Points"> {userCont.name}</h2>
            <div className="User-Points">
                <h3 className="points">{userCont.points} </h3>
                <GiTrophyCup size="38px" className="trophy" color={userCont.points < 100 ? "#CD7F32" : userCont.points > 150 ? "#FFD700" : "#C0C0C0"} />
            </div>
        </div>
            <button type="button" className="Logout-Button" onClick={() => handleClick()}>
                Logout
            </button>

            {/*<div className="">*/}
            {/*    <button onClick={() => handleClick()}>Logout</button>*/}
            {/*</div>*/}
        </div>
    )
}

async function getDataAxiosUser(token) {
    try {
        return await axios.get(`${process.env.REACT_APP_API_BASE_URL}accounts/me`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            }
        );

    } catch (e) {
        console.log(`Error! status: ${e}`)
    }
}

export default UserHeader