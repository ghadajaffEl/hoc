import React, { Component } from "react";
import "../App.css";
class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [
        {
          title: "Expandables",
          image: "https://i.ytimg.com/vi/KG6y2cVtt04/maxresdefault.jpg"
        },
        {
          title: "Piege en eau trouble",
          image:
            "http://www.linternaute.com/cinema/image_cache/objdbfilm/image/540/34271.jpg"
        },
        {
          title: "58 minutes pour vivre",
          image:
            "http://fr.web.img3.acsta.net/medias/nmedia/18/36/04/14/19052566.jpg"
        },
        {
          title: "L'arme fatale",
          image: "http://img.over-blog-kiwi.com/2/29/55/03/obpiczosaTQ.jpeg"
        }
      ]
    };
  }

  render() {
    return (
      <div className="listMovie">
        {this.state.movieList.map((el, i) => {
          return (
            <div className="movieItem" key={i}>
              <img src={el.image} />
              <h5>{el.title}</h5>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MovieList;
