import React, { Component } from 'react';
import './App.css';
import '../vendors/css/normalize.css';
import '../vendors/css/grid.css';
import '../resources/css/style.css';

import logo from '../resources/img/organic-pantry.png';
import pic1 from '../resources/img/avocado.svg';
import pic2 from '../resources/img/strawberry.svg';
import pic3 from '../resources/img/salad.svg';
import pic4 from '../resources/img/grapes.svg';
import meal1 from '../resources/img/m1.jpg';
import meal2 from '../resources/img/m2.jpg';
import meal3 from '../resources/img/m3.jpg';
import meal4 from '../resources/img/m4.jpg';
import meal5 from '../resources/img/m5.jpg';
import meal6 from '../resources/img/m6.jpg';
import meal7 from '../resources/img/m7.jpg';
import meal8 from '../resources/img/m8.jpg';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <div className="row">
              <img src={logo} alt="logo" className="logo" />
              <ul className="menu-header">
                <li>
                  <a href="">How it works</a>
                </li>
                <li>
                  <a href="">Packages</a>
                </li>
                <li>
                  <a href="">Our Local Farmers</a>
                </li>
                <li>
                  <a href="">Sign up</a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="hero-text-box">
            <h1>
              Eating clean starts
              <br />
              from choosing the right ingredients
            </h1>
            <a className="btn btn-1" href="#">
              Start here
            </a>
            <a className="btn btn-2" href="#">
              Show me more
            </a>
          </div>
        </header>

        <section className="section-features">
          <div className="row">
            <h2>Prepare your meals with quality ingredients</h2>
            <p className="general-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              ullam voluptates libero sequi laudantium nihil natus.
            </p>
          </div>
          <div className="row">
            <div className="col span-1-of-4 box-paragraph">
              <img className="img-icon" src={pic1} alt="" />
              <h3>Nutricious</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                veritatis laboriosam ad odit tempora aut sequi accusamus non,
                earum dolorum ea fugit deserunt similique assumenda distinctio!
              </p>
            </div>

            <div className="col span-1-of-4 box-paragraph">
              <img className="img-icon" src={pic2} alt="" />
              <h3>Variety</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                veritatis laboriosam ad odit tempora aut sequi accusamus non,
                earum dolorum ea fugit deserunt similique assumenda distinctio.
              </p>
            </div>

            <div className="col span-1-of-4 box-paragraph">
              <img className="img-icon" src={pic3} alt="" />
              <h3>Healthy</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                veritatis laboriosam ad odit tempora aut sequi accusamus non,
                earum dolorum ea fugit deserunt similique assumenda distinctio!
              </p>
            </div>

            <div className="col span-1-of-4 box-paragraph">
              <img className="img-icon" src={pic4} alt="" />
              <h3>Affordable</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                veritatis laboriosam ad odit tempora aut sequi accusamus non,
                earum dolorum ea fugit deserunt similique assumenda distinctio.
              </p>
            </div>
          </div>
        </section>

        <section className="meal-section">
          <ul className="meal-group">
            <li>
              <figure className="meal-img-container">
                <img src={meal1} alt="" />
              </figure>
            </li>
            <li>
              <figure className="meal-img-container">
                <img src={meal2} alt="" />
              </figure>
            </li>
            <li>
              <figure className="meal-img-container">
                <img src={meal3} alt="" />
              </figure>
            </li>
            <li>
              <figure className="meal-img-container">
                <img src={meal4} alt="" />
              </figure>
            </li>
            <li>
              <figure className="meal-img-container">
                <img src={meal5} alt="" />
              </figure>
            </li>
            <li>
              <figure className="meal-img-container">
                <img src={meal6} alt="" />
              </figure>
            </li>
            <li>
              <figure className="meal-img-container">
                <img src={meal7} alt="" />
              </figure>
            </li>
            <li>
              <figure className="meal-img-container">
                <img src={meal8} alt="" />
              </figure>
            </li>
          </ul>
        </section>

        <section className="package-section">
          <div className="row">
            <h2>Choose package based on your family size</h2>
          </div>

          <div className="row">
            <div className="col span-1-of-3">
              <div className="package-box">
                <div>
                  <h3>Couple Family</h3>
                  <p>2 adults</p>
                  <div>
                    <p className="price">
                      $30 <span> /week</span>
                    </p>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div>
                  <ul>
                    <li>
                      <i className="fas fa-check" />
                      Lorem, ipsum dolor.
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Lorem, ipsum dolor.
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Lorem, ipsum dolor.
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Lorem, ipsum dolor.
                    </li>
                  </ul>
                </div>
                <div>
                  <a className="btn btn-1" href="#">
                    Get Couple
                  </a>
                </div>
              </div>
            </div>

            <div className="col span-1-of-3">
              <div className="package-box">
                <div>
                  <h3>Small Family</h3>
                  <p>2 adults + 2 kids</p>
                  <div>
                    <p className="price">
                      $45 <span> /week</span>
                    </p>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div>
                  <ul>
                    <li>
                      <i className="fas fa-check" />
                      Lorem, ipsum dolor.
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Lorem, ipsum dolor.
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Lorem, ipsum dolor.
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Lorem, ipsum dolor.
                    </li>
                  </ul>
                </div>
                <div>
                  <a className="btn btn-1" href="#">
                    Get Small
                  </a>
                </div>
              </div>
            </div>

            <div className="col span-1-of-3">
              <div className="package-box">
                <div>
                  <h3>Large Family</h3>
                  <p>2 adults + 4 kids, or 4 adults</p>
                  <div>
                    <p className="price">
                      $60 <span> /week</span>
                    </p>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div>
                  <ul>
                    <li>
                      <i className="fas fa-check" />
                      Lorem, ipsum dolor.
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Lorem, ipsum dolor.
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Lorem, ipsum dolor.
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Lorem, ipsum dolor.
                    </li>
                  </ul>
                </div>
                <div>
                  <a className="btn btn-1" href="#">
                    Get Large
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="row">
            <div className="col span-1-of-2">
              <ul className="footnote-nav">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Partners</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div className="col span-1-of-2">
              <ul className="social-links">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-google-plus-g" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <p>
              Icons made by {''}
              <a
                className="link-simple"
                href="https://www.flaticon.com/authors/smashicons"
                title="Smashicons"
              >
                Smashicons
              </a>
              {''} from {''}
              <a
                className="link-simple"
                href="https://www.flaticon.com/"
                title="Flaticon"
              >
                www.flaticon.com
              </a>
              {''} is licensed by {''}
              <a
                className="link-simple"
                href="http://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
              >
                CC 3.0 BY
              </a>
            </p>
            <p>Copyright &copy; 2018 by Organic Pantry. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
