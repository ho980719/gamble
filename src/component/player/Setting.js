import {useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {games} from "../game/Games";

const PlayerSetting = () => {
    const navigate = useNavigate();
    const {gameId} = useParams();
    const gameInfo = games.find(item => item.id === +gameId);
    let [playerCount, setPlayerCount] = useState(0);

    const selectPlayers = () => {
        if (playerCount < 1) {
            alert('플레이어 수를 한명 이상 설정해주세요.')
            return false;
        }

        navigate('/players/info', {state: {gameId: gameId, playerCount: playerCount}})
    }
    return (
        <div>
            <div>Title : {gameInfo.gameTitle}</div>
            <div>Max Player : {gameInfo.maxPlayer}</div>
            <div>
                <button type='button' onClick={() => {
                    if (playerCount >= gameInfo.maxPlayer) {
                        alert(`${gameInfo.gameTitle}의 최대 player 수는 ${gameInfo.maxPlayer}명으로 제한됩니다.`);
                        return false;
                    }
                    setPlayerCount(playerCount + 1)
                }}>+</button>
                <button type='button' onClick={() => playerCount ? setPlayerCount(playerCount - 1) : null}>-</button>
                <button type='button' onClick={selectPlayers}>확인</button>
                <Link to='/'>
                    <button type='button'>취소</button>
                </Link>
                <span>{playerCount}</span>
            </div>
        </div>
    )
}

export default PlayerSetting;