import {Link} from "react-router-dom";
import {games} from "./Games";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBowlingBall} from "@fortawesome/free-solid-svg-icons";


const GameSelect = () => {
    return (
        <Container className="pt-4">
            <Row>
            {
                games.map((item, i) => {
                    return (
                        <Col key={i}>
                            <Link to={'/players/setting/'+item.id} style={{textDecoration: 'none'}}>
                                <Card>
                                    <Card.Body>
                                        <Card.Img src={process.env.PUBLIC_URL + item.image}></Card.Img>
                                        <Card.Text className="text-center">
                                            {item.gameTitle}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    )
                })
            }
            </Row>
        </Container>
    )
}

export default GameSelect;