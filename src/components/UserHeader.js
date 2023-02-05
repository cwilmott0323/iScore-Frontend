import {useEffect, useState} from "react";
import UseToken from "../UseToken";
import IsAuth from "../IsAuth";
import {useNavigate} from "react-router-dom";
import axios from "axios";

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
            <h2>Welcome: {userCont.name}</h2>
        </div>
            <div className="User-Points">
            <h3>Total Points: {userCont.points}</h3>
        </div>
            <div className="Logout-Button">
                <button onClick={() => handleClick()}>Logout</button>
            </div>
        </div>
    )
}

async function getDataAxiosUser(token) {
    try {
        return await axios.get('https://sj9klp6ugk.execute-api.us-east-2.amazonaws.com/dev/accounts/me',
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