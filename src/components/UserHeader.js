import React, {useEffect, useState} from "react";
import UseToken from "../UseToken";
import IsAuth from "../IsAuth";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import "./../index.css";

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
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">iScore</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered" />
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0}>
                    <div className="navbar-end">
                        <a className="text-2xl mr-3">{userCont.name}</a>
                        <a className="text-2xl">{userCont.points}</a>
                    </div>
                        </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
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