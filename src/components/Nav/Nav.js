import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav id="parallax">
        <ul>


            {/* <li className="scoreBoard">
                <a href="/clicky-game/">{props.title}</a>
            </li> */}

            <div align="center">

                <li className="scoreBoard">
                <a href="/clicky-game/">{props.title}</a>
            </li>

                {/* <li className="scoreBoard">{props.title}</li> */}

            <li id="rw">{props.rightWrong}</li>

            </div>

            <div id="scores" align="center">

            <li>Your Score: {props.score}</li>

            <li>Your Top Score: {props.topScore}</li>

            </div>
        </ul>
    </nav>
);

export default Nav;