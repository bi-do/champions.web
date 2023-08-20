import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";

const Detail = () => {
  const params = useParams();
  const [championchat, setchampioninfo] = useState("");
  const [championpassive, setchampionpassive] = useState("");
  const [skills, setskills] = useState([]);
  const [position1, setposition1] = useState("");
  const [position2, setposition2] = useState("");
  const [championname, setchampionname] = useState("");
  const [skillsdescription, setskillsdescription] = useState("");
  const [skilltitle, setskilltitle] = useState("");
  const [passivein, setpassivein] = useState("");
  let chamid = params.id;

  const championscreen = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${chamid}_0.jpg`;

  let championapi = async () => {
    let curl = new URL(
      `http://ddragon.leagueoflegends.com/cdn/13.16.1/data/ko_KR/champion/${chamid}.json`
    );

    let cresponse = await fetch(curl);
    let cdata = await cresponse.json();
    let chinfo = Object.values(cdata.data);
    let chat = chinfo[0]?.blurb || "";
    let skillp = chinfo[0].passive.image.full;
    let skill = chinfo[0]?.spells;
    let pogi1 = chinfo[0]?.tags[0];
    let pogi2 = chinfo[0]?.tags[1];
    let chamname = chinfo[0]?.name;
    let passivelet = chinfo[0]?.passive;

    setpassivein(passivelet);
    setskills(skill);
    setchampionname(chamname);
    setposition1(pogi1);
    setposition2(pogi2);
    setchampioninfo(chat);
    setchampionpassive(skillp);
    console.log(chinfo);
  };
  useEffect(() => {
    championapi();
  }, []);

  const skillinfo = (item) => {
    setskillsdescription(item.description);
    return setskilltitle(item.name);
  };

  const passiveinfo = () => {
    setskillsdescription(passivein.description.replace(/<br>/g, ""));
    return setskilltitle(passivein.name);
  };

  return (
    <div className="champion-back">
      <Container className="champion-info">
        <div className="champion-splash">
          <img src={championscreen}></img>
          <h1 className="champion-name">{championname}</h1>
        </div>
        <Row className="position-box">
          <Col lg={6} sm={12} className="position-img">
            <div>
              <img src={`/images/${position1}.png`} width={80}></img>
            </div>
            <div>
              {position2 && <img src={`/images/${position2}.png`} width={80} />}
            </div>
          </Col>
          <Col lg={6} sm={12} className="position-text">
            {championchat}
          </Col>
        </Row>

        <div className="skills">
          <h1>스킬</h1>
          <Row className="skills-intro">
            <Col lg={5} sm={12}className="skills-img">
              <div>
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/13.16.1/img/passive/${championpassive}`}
                  onClick={passiveinfo}
                ></img>
              </div>
              {skills.map((item) => (
                <div>
                  <img
                    src={`http://ddragon.leagueoflegends.com/cdn/13.16.1/img/spell/${item.image.full}`}
                    onClick={() => skillinfo(item)}
                  ></img>
                </div>
              ))}
            </Col>
            <Col lg={6} sm={12}className="skill-text">
              <div className="skill-title">{skilltitle}</div>
              {skillsdescription}
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Detail;
