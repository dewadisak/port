import React, { Component } from "react";
import cat from "../images/cat.jpg";
import cat1 from "../images/cat1.jpg";
import cat2 from "../images/cat2.jpg";
import cat3 from "../images/cat3.jpg";
import cat4 from "../images/cat4.jpg";
import cat5 from "../images/cat5.jpg";
import cat6 from "../images/cat6.jpg";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="flexbox">
          <div className="item1">
            <div className="content1">
              <img src={cat} />
            </div>
          </div>

          <div className="item1">
            <div className="content2">
              <h3> Dolore excepteur</h3>
              <br />
              <p>
                {" "}
                Dolore excepteur ad officia tempor. Fugiat aliquip aliquip nisi
                ex aliqua ut eiusmod fugiat ut. Amet tempor nisi veniam pariatur
                duis culpa aliquip veniam. Laboris voluptate ea ullamco
                exercitation proident voluptate qui esse incididunt exercitation
                elit amet commodo. Nostrud minim incididunt id ipsum ipsum.
                Tempor commodo pariatur esse non ad minim pariatur.
              </p>
            </div>
          </div>
        </div>

        <div className="flexbox2">
          <div className="item2">
            <div className="content3">
              <img src={cat1} />
              <br />
              <br />
              <h3>Irure qui</h3>
              <br />
              <p>
                Irure qui duis nulla culpa voluptate eu nulla duis non sit. Do
                dolor nulla minim cupidatat consectetur proident ut consequat ea
                id.
              </p>
            </div>
          </div>

          <div className="item2">
            <div className="content3">
              <img src={cat2} />
              <br />
              <br />
              <h3>Commodo</h3>
              <br />
              <p>
                Commodo eu do consectetur anim non ullamco pariatur consequat
                deserunt eiusmod ex. Amet sunt enim esse Lorem sit dolor laboris
                laboris consequat fugiat officia. Quis proident nisi anim dolore
                ad elit consequat ea. 
              </p>
            </div>
          </div>

          <div className="item2">
            <div className="content3">
              <img src={cat3} />
              <br />
              <br />
              <h3>Ut aliquip</h3>
              <br />
              <p>
                Ut aliquip commodo deserunt magna amet aute. Ut sint ad commodo
                quis. Consectetur reprehenderit sit et reprehenderit est tempor
                minim occaecat officia. 
              </p>
            </div>
          </div>

          <div className="item2">
            <div className="content3">
              <img src={cat4} />
              <br />
              <br />
              <h3>Minim in laboris</h3>
              <br />
              <p>
                Minim in laboris adipisicing nisi amet nulla Lorem. Dolore
                dolore veniam aliquip aliqua. Commodo velit pariatur Lorem
                cillum dolore tempor incididunt magna amet.
              </p>
            </div>
          </div>
          <div className="item2">
            <div className="content3">
              <img src={cat5} />
              <br />
              <br />
              <h3>Irure excepteur</h3>
              <br />
              <p>
                Irure excepteur amet consectetur mollit laboris veniam aute.
                Consectetur eiusmod nisi mollit commodo consequat non pariatur
                occaecat reprehenderit reprehenderit fugiat.
              </p>
            </div>
          </div>
          <div className="item2">
            <div className="content3">
              <img src={cat6} />
              <br />
              <br />
              <h3>Ut aute </h3>
              <br />
              <p>
                Ut aute ea anim Lorem id Lorem incididunt anim sint officia
                consectetur dolore. Qui culpa ea id consequat ut consectetur
                fugiat ex eiusmod excepteur velit ad.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
