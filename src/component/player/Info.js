import {useLocation, useNavigate} from "react-router-dom";
import {games} from "../game/Games";

function PlayerCard({playerId}) {
    return (
        <div>
            Player{playerId+1} : <input type='text' name='players' placeholder='Name'/>
        </div>
    );
}

const PlayerInfo = () => {
    const {gameId, playerCount} = useLocation().state;
    const navigate = useNavigate();
    const gameInfo = games.find(item => item.id === +gameId);
    const startGame = () => {
        alert(`${gameInfo.gameTitle} Start!`)
    }
    return (
        <div>
            <div>Title : {gameInfo.gameTitle}</div>
            <div>
                {
                    Array(playerCount).fill(0).map((item, index) => {
                        return (
                            <PlayerCard playerId={index} key={index}/>
                        )
                    })
                }
            </div>
            <div>
                <button type='button' onClick={startGame}>시작</button>
                <button type='button' onClick={() => navigate(-1)}>취소</button>
            </div>
        </div>
    )
}

export default PlayerInfo;