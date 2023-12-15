import React from 'react';
import {useNavigate} from "react-router-dom";

function Main(props) {
    const navigate = useNavigate();
    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={() => navigate(`/games/select`)}>Create</button>
        </div>
    );
}

export default Main;