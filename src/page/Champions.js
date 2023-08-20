import Card from "../component/Card";
import { Col, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Champions = ({positionstate,setpositionstate}) => {
  const [championdata, setchampiondata] = useState([]);
  const [query, setquery] = useSearchParams();

  const test = async () => {
    let searchquery = query.get("q") || "";

    let url = new URL(
      `http://ddragon.leagueoflegends.com/cdn/13.16.1/data/ko_KR/champion.json?}`
    );

    let response = await fetch(url);

    let data = await response.json();
    const champions = Object.values(data.data);
   
    if (searchquery == "") {
      setchampiondata(champions);
      
    } else {
      let searchfilter = champions.filter((item) => {
        return item.name == searchquery;
      });
      setchampiondata(searchfilter);
      setpositionstate("")
    }
    if (positionstate != "") {
      let positionfilter = champions.filter((item) => {
        return item.tags[0] == positionstate || item.tags[1] == positionstate;
      });
      console.log('찍고있음')
      setchampiondata(positionfilter);
    }
  };

  useEffect(() => {
    test();
  }, [query, positionstate]);

  return (
    <div className="main">
      <Container>
        <Row>
          {championdata.map((item) => (
            <Col lg={2} md={4} sm={6}>
              <Card item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Champions;
