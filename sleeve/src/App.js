import React from "react";
import "./App.css";
import img1 from "./assets/AppMusic.png";
import img2 from "./assets/AppSpotify.png";
import img3 from "./assets/AppDoppler.png";
import img4 from "./assets/search image.png";
import img5 from "./assets/ArtSlowMagic.jpg";
import img6 from "./assets/ArtCarolinePolachek.jpg";
import img7 from "./assets/ArtChelseaCutler.jpg";
import img8 from "./assets/ArtPetitBiscuit.jpg";
import img9 from "./assets/ThemeIcon@3x.png";
import img10 from "./assets/ThemeUIActive.png";
import img11 from "./assets/ThemeUI.png";
// import img12 from "./assets/ThemeFile.png";
import img12 from "./assets/ThemeExport.png";
import img13 from "./assets/midimage.png";

const App = () => {
  return (
    <div className="App">
      <div className="header1">
        <center>
          <h1>
            sleeve<span>2</span>
          </h1>
          <h1 id="header1-h11">The ultimate music accessory for your Mac.</h1>
          <p>
            Sleeve sits on the desktop, displaying and controlling the music
            you’re<br></br>
            currently playing in{" "}
            <img src={img1} className="header-imgs" alt="musicpng" /> Apple
            Music, <img src={img2} className="header-imgs" alt="spotiffy" />{" "}
            Spotify, and{" "}
            <img src={img3} className="header-imgs" alt="doppler" /> Doppler.
          </p>
        </center>
      </div>

      <div className="header2">
        <center>
          <button className="btn1">
            <img
              src="https://res.cloudinary.com/dpfnyv0ut/image/upload/v1716548039/bupfnhanusnuxcet0cgk.webp"
              className="header-imgs"
              alt="apple-logo"
            ></img>{" "}
            Mac App Store
          </button>
          <button className="btn2">
            Buy Directly <span id="header2-span">$5.99</span>
          </button>
        </center>
      </div>

      <div className="section1">
        <center>
          <p
            className="text-sm opacity-50 max-w-[32ch] sm:max-w-auto"
            id="para1"
          >
            No subscriptions. No in-app<br></br> purchases. Requires macOS 11
            Big Sur<br></br> or later.
          </p>
          <img src={img4} className="search-bar" alt="search-bar"></img>
          <button className="btn3">
            Now with <span id="btn3-para">shelves and a progress bar</span>.See
            whats new in Sleeve 2.3
            <span id="arrow-fill">➜</span>
          </button>
        </center>
      </div>

      <div className="section2">
        <center>
          <p style={{ color: "rgb(13 158 255)" }}>
            New IN <span>2.0</span>
          </p>
          <div style={{ marginTop: "7rem" }}>
            <center>
              <h1 id="h11">Themes. Unlimited themes</h1>
              <h2 id="h3">
                Themes in Sleeve make creating and switching between
                customizations easy.<br></br> Share your own creations with
                friends and install as many themes as you like with just a
                double-click.
              </h2>
            </center>
          </div>
        </center>
      </div>

      <div className="poster">
        <div className="post">
          <div className="div1">
            <img src={img5} alt="" />
            <span>
              <b>Eternal Sunshine</b>
            </span>
            <span>Forgotten Feels</span>
            <span>Slow Magic</span>
          </div>
          <div className="div2">
            <img src={img6} alt="" />
            <div className="div2-text">
              <span>
                <b>Bunny Is a Rider</b>
              </span>
              <span style={{ opacity: "0.7" }}>
                Desire, I Want to Turn Into You
              </span>
              <span style={{ opacity: "0.7" }}>Caroline Polachek</span>
              <span style={{ marginTop: "10px" }}>
                <svg
                  viewBox="0 0 65 21"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  height="16"
                  className="transform-gpu"
                >
                  <path d="M61.59 16.578c.625 0 .922-.297.922-.922V5.07c0-.648-.297-.93-.922-.93h-1.727c-.625 0-.93.305-.93.93v5c-.078-.273-.273-.5-.609-.703l-8.031-4.719c-.273-.156-.523-.265-.805-.265-.531 0-1 .406-1 1.195v9.555c0 .789.469 1.195 1 1.195.282 0 .54-.101.805-.265l8.031-4.72c.328-.202.531-.429.61-.702v5.015c0 .625.304.922.93.922h1.726ZM30.426 17.65c.694 0 1.037-.334 1.037-1.037V4.704c0-.73-.343-1.046-1.037-1.046h-1.951c-.695 0-1.038.343-1.038 1.046v11.91c0 .702.343 1.036 1.038 1.036h1.95Zm6.1 0c.694 0 1.036-.334 1.036-1.037V4.704c0-.73-.342-1.046-1.037-1.046h-1.95c-.695 0-1.038.343-1.038 1.046v11.91c0 .702.343 1.036 1.037 1.036h1.951ZM5.144 16.578c.617 0 .921-.297.921-.922v-5.015c.079.273.282.5.618.703l8.03 4.719c.266.164.516.265.798.265.539 0 1-.406 1-1.195V5.578c0-.789-.461-1.195-1-1.195-.282 0-.532.11-.797.265l-8.031 4.72c-.336.202-.54.429-.618.702v-5c0-.648-.304-.93-.921-.93H3.41c-.617 0-.922.305-.922.93v10.586c0 .625.305.922.922.922h1.735Z"></path>
                </svg>
              </span>
            </div>
          </div>
          <div className="div3">
            <img src={img7} alt="" />
            <div className="div3-text">
              <span>
                <svg
                  viewBox="0 0 65 21"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  height="16"
                  class="transform-gpu"
                >
                  <path d="M61.59 16.578c.625 0 .922-.297.922-.922V5.07c0-.648-.297-.93-.922-.93h-1.727c-.625 0-.93.305-.93.93v5c-.078-.273-.273-.5-.609-.703l-8.031-4.719c-.273-.156-.523-.265-.805-.265-.531 0-1 .406-1 1.195v9.555c0 .789.469 1.195 1 1.195.282 0 .54-.101.805-.265l8.031-4.72c.328-.202.531-.429.61-.702v5.015c0 .625.304.922.93.922h1.726ZM30.426 17.65c.694 0 1.037-.334 1.037-1.037V4.704c0-.73-.343-1.046-1.037-1.046h-1.951c-.695 0-1.038.343-1.038 1.046v11.91c0 .702.343 1.036 1.038 1.036h1.95Zm6.1 0c.694 0 1.036-.334 1.036-1.037V4.704c0-.73-.342-1.046-1.037-1.046h-1.95c-.695 0-1.038.343-1.038 1.046v11.91c0 .702.343 1.036 1.037 1.036h1.951ZM5.144 16.578c.617 0 .921-.297.921-.922v-5.015c.079.273.282.5.618.703l8.03 4.719c.266.164.516.265.798.265.539 0 1-.406 1-1.195V5.578c0-.789-.461-1.195-1-1.195-.282 0-.532.11-.797.265l-8.031 4.72c-.336.202-.54.429-.618.702v-5c0-.648-.304-.93-.921-.93H3.41c-.617 0-.922.305-.922.93v10.586c0 .625.305.922.922.922h1.735Z"></path>
                </svg>
              </span>
              <span>Are You Listening</span>
              <span>How To Be Human</span>
              <span>Chelsea Cutler</span>
            </div>
          </div>
          <div className="div4">
            <img src={img8} alt="" />
            <div className="div4-text">
              <p>Creation Comes Alive</p>
              <span>Petit Biscuit</span>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="left-part">
          <img id="bg-img" src={img9} alt="" />
          <div id="left-part-left">
            <p className="section-heading">Change it up</p>
            <p className="section-para">
              Switch between themes <br /> with just a click.
            </p>
            <p className="section-para">
              Modify the built-in themes or create your own using <br />
              Sleeve’s extensive preferences.
            </p>
          </div>
          <div id="left-part-right">
            <img id="left-part-img1" src={img10} alt="" />
            <img id="left-part-img2" src={img11} alt="" />
          </div>
        </div>
        <div className="right-part">
          <img id="right-part-bg-img" src={img12} alt="" />
          <div id="right-part-left">
            <p className="section-heading">Shareable</p>
            <p className="section-para">
              Export your themes and share them with friends using the handy new
              Sleeve Theme file format.
            </p>
            <p className="section-para">
              Install themes from anywhere with a double-click or a drag and
              drop.
            </p>
          </div>
          <div className="right-part-right">
            <img id="right-part-img1" src={img12} alt="" />
          </div>
        </div>
      </div>
      <div className="customize-section">
        <div className="customize-section-heading">
          <center>
            {" "}
            <p>CUSTOMIZATION</p>
          </center>
        </div>
        <div className="customize-section-h1">
          <center>
            {" "}
            <h1>Countless ways to customize.</h1>
          </center>
        </div>
        <div className="customize-section-para">
          <center>
            {" "}
            <p>
              Customization is at the core of the Sleeve experience — choose
              from any<br></br> combination of design choices, behaviors and
              settings to make Sleeve at home on<br></br> your desktop.
            </p>
          </center>
        </div>
        <div className="customize-section-img">
          <center>
            <img src={img13} alt="" />
          </center>
        </div>
      </div>
    </div>
  );
};

export default App;
