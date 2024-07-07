import React from 'react'
import { useEffect, useState } from "react";
import "./Posts.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LanguageIcon from "@mui/icons-material/Language";

export default function Movies() {

  const [posts, setPosts] = useState([]);

  async function getFromApi() {
    await fetch("https://tedimovie-df041-default-rtdb.firebaseio.com/posts.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts((prevState) => {
          return (prevState = Object.entries(data));
        });
      })
      .catch((err) => {
        err = new Error("cant get from api");
        console.error(err);
      })
      .finally(() => console.log("done"));
  }

  useEffect(() => {
    getFromApi();
  });

  return (
    <Container>
      {posts.filter(item => {
        return item[1].type == 'Movie'
      }).map(post => {
        return (
          <>
            <Row key={post[1].id} className="Posts">
              <Col lg={9}>
                <h5 className="Post-title pt-3 ps-3">
                  دانلود فیلم {post[1].title}
                </h5>
                <p className="Post-desc pt-3 ps-3">{post[1].Story}</p>
                <ul className="Post-data" style={{ listStyle: "none" }}>
                  <li
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <AccessTimeIcon />
                    <span>زمان: {post[1].Duration}</span>
                  </li>
                  <li
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <SubtitlesIcon />
                    ژانر: {post[1].Genre}
                  </li>
                  <li
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <LanguageIcon />
                    محصول: {post[1].Country}
                  </li>
                  <li
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <img className="Imdb" src="assets/imdb.png" alt="" />
                    امتیاز: {post[1].Imdb}
                  </li>
                </ul>
                <Button style={{ margin: "0 300px 10px 0" }} variant="warning">
                  <Link to={`/post/${post[1].id}`}>ادامه+ دانلود</Link>
                </Button>
              </Col>
              <Col lg={3}>
                <img className="Post-image w-100" src={post[1].Cover} alt="" />
              </Col>
            </Row>
          </>
        )
      })}
  </Container>
  )
}
