import Landing from "./Landing"

import "./main.css"

import connections from "../../assets/site/connections.png";
import datasci from "../../assets/site/datasci.png";
import mastery from "../../assets/site/mastery.png";

import About from "../about/About";
import Works from "../works/Works";
import Contact from "../contact/Contact";

function Main() {
  return (
    <>
        <div className="main" id="top">

          <div className="hero">

            <div className="title">Neoskopia</div>
            <div className="des">Become an adept in <span>Data Science</span>, one step at a time.</div>
            <div className="button">Button</div>

          </div>

          <Landing />

          <div className="second">

            <div className="head">
              <span>THE OPPORTUNITY</span>
              <p>Become a part of an ever-growing community of innovators.</p>
            </div>

            <div className="contents">
              <div className="content">
                <div className="left_part">
                  <h1>Network</h1>
                  <p>Sign-up and get access to a wide range of resources and network with like-minded individuals. </p>
                </div>
                <div className="right_part">
                  <img src={connections} className="right_pic"></img>
                </div>
              </div>
            </div>


            <div className="contents">
              <div className="content">
                <div className="left_part">
                  <h1>Groundwork</h1>
                  <p>Get a solid foundation in Data Science and Machine Learning from your peers and industry experts.</p>
                </div>
                <div className="right_part">
                  <img src={datasci} className="right_pic"></img>
                </div>
              </div>
            </div>


            <div className="contents">
              <div className="content">
                <div className="left_part">
                  <h1>Mastery</h1>
                  <p>Apply your learnings and share them with the community. An opportunity to promote data-driven solutions to real-world problems.</p>
                </div>
                <div className="right_part">
                  <img src={mastery} className="right_pic"></img>
                </div>
              </div>
            </div>

          </div>


        </div>

        <About />
        <Works />
        <Contact />
        
    </>
  )
}

export default Main