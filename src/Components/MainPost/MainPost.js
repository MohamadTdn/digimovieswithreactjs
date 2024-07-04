import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import NavMenu from "../NavMenu/NavMenu";
import Footer from "../Footer/Footer";
import "./MainPost.css";
import Comment from "../Comment/Comment";
import { useParams , Navigate} from "react-router-dom";

export default function MainPost() {

  const [posts, setPosts] = useState([])
  const params = useParams()
  const [target, setTarget] = useState()

  async function getFromApi() {
    await fetch("https://tedimovie-df041-default-rtdb.firebaseio.com/posts.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts((prevState) => {
          return (prevState = Object.entries(data));
        });
        let allPosts = Object.entries(data)

        let mainPost = allPosts.find(post => {
          return post[1].id == params.id
        })

        if (mainPost != undefined) {
          setTarget(mainPost)
        }
      })
      .catch((err) => {
        err = new Error("cant get from api");
        console.error(err);
      })
      .finally(() => console.log("done"));
  }

  useEffect(() => {
    getFromApi();
  }, []);

  return (
    <div style={{ color: "#ffff" }}>
      <NavMenu />
      <Container className="MinPost-Container">
        <Row>
        {target ? (
              <Col lg={9} style={{ padding: "90px 0 0 0" }}>
                <div
                  className="Post-background"
                  style={{
                    backgroundImage:
                      `url(${target[1].Cover})`,
                    height: "100px",
                    width: "700px",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "auto",
                  }}
                ></div>
                <div style={{ padding: "10px 0", display: "flex" }}>
                  <img
                    style={{ width: "250px", height: "350px" }}
                    src={target[1].Cover}
                    alt=""
                  />
                  <div style={{ padding: "10px" }}>
                    <h4>{target[1].title}</h4>
                    <img style={{ width: "30px" }} src="/assets/imdb.png" alt="" />
                    <span>{target[1].Imdb}</span>
                    <br />
                    <span>امتیاز منتقدان</span>
                    <span style={{ width: "30px", backgroundColor: "green" }}>
                      {target[1].Metacritic}
                    </span>
                    <h5>سال تولید : {target[1].Year}</h5>
                    <h5>محصول: {target[1].Country}</h5>
                    <h5>ژانر: {target[1].Genre}</h5>
                    <h5>زمان: {target[1].Duration} دقیقه</h5>
                    <Button variant="warning">پخش آنلاین</Button>
                    <Button variant="secondary">پخش آنلاین</Button>
                  </div>
                </div>
                <p className="Story">
                  {target[1].Story}
                </p>
                <ul className="data">
                  <li>زمان: {target[1].Duration} دقیقه</li>
                  <li>گروه سنی: {target[1].Esrb}</li>
                  <li>محصول: {target[1].Country}</li>
                  <li>سال تولید: {target[1].Year}</li>
                  <li>زبان: {target[1].Country}</li>
                </ul>
                <ul className="Crew">
                  <h4>کارگردان</h4>
                  <li className="director">
                    <span>
                      <img
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                        src={target[1].Director}
                        alt=""
                      />
                    </span>
                    <span>{target[1].Director}</span>
                  </li>
                  <h4>بازیگران</h4>
                  {target[1].Actores.map(actor => {
                    return (
                      <li className="Actors">
                        <span>
                          <img
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "50%",
                            }}
                            src={actor.Image}
                            alt=""
                          />
                        </span>
                        <span>{actor.name}</span>
                      </li>
                    )
                  })}
                </ul>
                <h4>نظرات</h4>
                <Comment />
              </Col>
        ) : (
          null
        )}
          <Col lg={3} style={{ padding: "90px 0 0 0" }}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
