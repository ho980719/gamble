import {Link} from "react-router-dom";
import {games} from "./Games";


const GameSelect = () => {
    return (
        <div>
            {
                games.map((item, i) => {
                    return (
                        <Link to={'/players/setting/'+item.id} key={i}>
                            <div >{item.gameTitle}</div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default GameSelect;