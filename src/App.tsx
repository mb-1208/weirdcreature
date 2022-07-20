import { IconBrandTwitter } from "@tabler/icons";
import "./App.css";
import "./Bootstrap.css";
import "./Style.css";

function App() {
  return (
    <>
      <section className="landing-section" style={{ position: "relative" }}>
        <img
          className="floating"
          src="assets/wc-logo.png"
          width="50%"
          alt=""
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div className="App"></div>
      </section>
      <section className="story-section">
        <img className="p-3" width="50%" src="assets/story/1.2.png" alt="" />
        <div className="row p-4 m-4 title-story-position">
          <div className="col-sm-8 text-center">
            <h2 className="title-story-size">
              When humans have reached the most sophisticated technology, the
              desire to conquer each other finally arises. This triggered a
              great war, in which eventually destroyed humans civilization.
              <br />
              <br />
              Unwittingly, the remained radiation left over from the war
              triggers the emergence of new creatures that watch over the earth.
              Not only that, war resulted in the opening of another realm where
              creatures from other dimensions entered the earth. Welcome to the
              “weird creatures realm”, where weird creatures with superpower
              gather together to occupy the earth.
            </h2>
          </div>
        </div>
        <img
          className="char-story-position"
          src="assets/story/3.2.png"
          width="40%"
          alt=""
        />
      </section>
      <section className="roadmap-section">
        <div className="title-roadmap text-center">
          <img
            className="pt-4 mt-3"
            src="assets/roadmap/1.2.png"
            width="40%"
            alt=""
          />
        </div>
        <div className="roadmap-1 text-white">
          <h1 className="title-roadmap-box">WEIRD CREATURES SHOWCASE</h1>
          <h3>A showcase about Weird Creatures</h3>
        </div>
        <div className="roadmap-2 text-white">
          <h1 className="title-roadmap-box">WCs STUDIO</h1>
          <h3>
            WCs Studio is a illustration/drawing/painting <br /> studio to
            develop Weird Creatures, can be in other <br /> forms besides
            digital such as painting on canvas, <br /> graphic arts, mural,
            artprint, merch/stuff, etc.
          </h3>
        </div>
        <div className="roadmap-3 text-white">
          <h1 className="title-roadmap-box">WCs SHOP</h1>
          <h3>
            Official merch/collectible Weird Creatures like <br />{" "}
            artprint/graphic art, statue, accessories, etch.
          </h3>
        </div>
        <div className="roadmap-4 text-white">
          <h1 className="title-roadmap-box">SOLO EXHIBITION</h1>
          <h3>
            A solo exhibition about Weird Creatures in painting <br /> on
            canvas, graphic art, statue, motion graphic,etc.
          </h3>
        </div>
        <div className="roadmap-5 text-white">
          <h1 className="title-roadmap-box">Wcs GATH</h1>
          <h3>
            Community Gath an event when Weird Creatures <br /> Holders meet
            IRL.
          </h3>
        </div>
      </section>
      <section className="collaboration-section">
        <div className="text-end">
          <img
            className="p-3"
            width="60%"
            src="assets/collaboration/5.2.png"
            alt=""
          />
        </div>
        <div className="row p-4 m-4 title-story-position">
          <div className="col-sm-8 text-center">
            <h2 className="title-story-size"></h2>
          </div>
        </div>
        <img
          className="char-collab-position"
          src="assets/collaboration/4.png"
          width="30%"
          alt=""
        />
      </section>
      <section className="team-section">
        <div id="content-wrapper" style={{ width: "100%" }}>
          <div id="row-top">
            <div className="text-center">
              <img
                className="pt-3"
                src="assets/team/13.2.png"
                width="20%"
                alt=""
              />
            </div>
          </div>
          <div id="row-bottom">
            <div
              className="row text-center"
              style={{ height: "100%", width: "100%" }}
            >
              <div
                className="col-sm-3 hover-team"
                style={{ position: "relative" }}
              >
                <img src="assets/team/5.2.png" width="80%" alt="" />
                <div className="circle-box">
                  <div className="circle-content">
                    <h5>Founder</h5>
                    <h4>John Doe</h4> <IconBrandTwitter stroke={2} />
                  </div>
                </div>
              </div>
              <div className="col-sm-3" style={{ position: "relative" }}>
                <img src="assets/team/6.2.png" width="80%" alt="" />
                <div className="circle-box">
                  <div className="circle-content">
                    <h5>Founder</h5>
                    <h4>John Doe</h4>
                    <IconBrandTwitter stroke={2} />
                  </div>
                </div>
              </div>
              <div className="col-sm-3" style={{ position: "relative" }}>
                <img src="assets/team/7.2.png" width="80%" alt="" />
                <div className="circle-box">
                  <div className="circle-content">
                    <h5>Founder</h5>
                    <h4>John Doe</h4>
                    <IconBrandTwitter stroke={2} />
                  </div>
                </div>
              </div>
              <div className="col-sm-3" style={{ position: "relative" }}>
                <img src="assets/team/8.2.png" width="80%" alt="" />
                <div className="circle-box">
                  <div className="circle-content">
                    <h5>Founder</h5>
                    <h4>John Doe</h4>
                    <IconBrandTwitter stroke={2} />
                  </div>
                </div>
              </div>
              <div className="col-sm-3" style={{ position: "relative" }}>
                <img src="assets/team/9.2.png" width="80%" alt="" />
                <div className="circle-box">
                  <div className="circle-content">
                    <h5>Founder</h5>
                    <h4>John Doe</h4>
                    <IconBrandTwitter stroke={2} />
                  </div>
                </div>
              </div>
              <div className="col-sm-3" style={{ position: "relative" }}>
                <img src="assets/team/10.2.png" width="80%" alt="" />
                <div className="circle-box">
                  <div className="circle-content">
                    <h5>Founder</h5>
                    <h4>John Doe</h4>
                    <IconBrandTwitter stroke={2} />
                  </div>
                </div>
              </div>
              <div className="col-sm-3" style={{ position: "relative" }}>
                <img src="assets/team/11.2.png" width="80%" alt="" />
                <div className="circle-box">
                  <div className="circle-content">
                    <h5>Founder</h5>
                    <h4>John Doe</h4>
                    <IconBrandTwitter stroke={2} />
                  </div>
                </div>
              </div>
              <div className="col-sm-3" style={{ position: "relative" }}>
                <img src="assets/team/12.2.png" width="80%" alt="" />
                <div className="circle-box">
                  <div className="circle-content">
                    <h5>Founder</h5>
                    <h4>John Doe</h4>
                    <IconBrandTwitter stroke={2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="pt-3 rock-left"
          src="assets/team/3.2.png"
          width="10%"
          alt=""
        />
        <img
          className="pt-3 rock-right"
          src="assets/team/4.2.png"
          width="10%"
          alt=""
        />
      </section>
      <section className="faq-section">
        <div className="text-center">
          <img className="p-3" width="25%" src="assets/faq/1.2.png" alt="" />
        </div>
      </section>
      <section className="footer-section">
        <div className="section-footer-1">
          <div className="row container" style={{ margin: "0 auto" }}>
            <div className="col-sm-5">
              <img src="assets/footer/17.png" width="90%" alt="" />
            </div>
            <div className="col-sm-7 text-center">
              <a href="">
                <img src="assets/footer/10.2.png" width="12%" alt="" />
              </a>
              <a href="">
                <img src="assets/footer/11.2.png" width="12%" alt="" />
              </a>
              <a href="">
                <img src="assets/footer/12.2.png" width="12%" alt="" />
              </a>
              <a href="">
                <img src="assets/footer/13.2.png" width="10%" alt="" />
              </a>
              <a href="">
                <img src="assets/footer/9.2.png" width="40%" alt="" />
              </a>
              <div className="link-section">
                <a className="section-title px-3" href="">
                  Our Story
                </a>
                <a className="section-title px-3" href="">
                  Roadmap
                </a>
                <a className="section-title px-3" href="">
                  Collaboration
                </a>
                <a className="section-title px-3" href="">
                  The Team
                </a>
                <a className="section-title px-3" href="">
                  FAQ
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="section-footer-2">
          <div
            className="row container text-white"
            style={{ margin: "0 auto" }}
          >
            <div className="col-sm-7">
              <img src="assets/footer/16.png" width="100%" alt="" />
              <div className="row" style={{ padding: "0 1rem" }}>
                <div className="col-sm-8">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="YOUR EMAIL"
                  />
                </div>
                <div className="col-sm-4">
                  <button className="button-footer-submit">SUBMIT NOW</button>
                </div>
              </div>
            </div>
            <div className="col-sm-5 text-center" style={{ alignSelf: "end" }}>
              <a className="section-title" href="">
                <h5>Etherscan</h5>
              </a>
              <h6>
                COPYRIGHT © 2022 WEIRD CREATURES REALM. ALL RIGHTS RESERVED.
              </h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
