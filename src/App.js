import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Container from "./Container";
import Nav from "./components/Nav";
import Column from "./Column";
import Row from "./Row";
import "./App.css";

// Game logic
function shuffleFriends(array) {

  for (let i = array.length - 1; i > 0; i--) {

    let k = Math.floor(Math.random() * (i + 1));

    [array[i], array[k]] = [array[k], array[i]];
  }

  return array;

};

// ScoreBoard
class App extends Component {
  // Setting state
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };

  // Register clicks
  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  // For each unique click increment score state and provide a positive feedback message
  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: "Hella Cool!"
    })
// ////////////////////////////////////////////////////////////




// //////////////////////////////////////////////////////////////////
    //  Display new score
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    // If score reaches 16, display game won message
    else if (newScore === 16) {
      this.setState({ rightWrong: "You Win a Bag of Cheezy-Poofs!" });
    }
    // Call Reshuffle cards function
    this.handleShuffle();
  };
    // If player clicks same, reset score to Zero, empty array and display losing message
  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "OMG, You Killed Kenny!",
      clicked: []
    });
    // Call Reshuffle cards function
    this.handleShuffle();
  };
    // Reshuffle cards function
  handleShuffle = () => {
    let shuffledFriends = shuffleFriends(friends);
    this.setState({ friends: shuffledFriends });
  };
  // Render NavBar and scoreBoard
  render() {
    return (
      <Wrapper>
        <Nav
          title="South Park Clicky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />

        {/* Display game instructions */}
        <Title>
          Click on each character without clicking any one twice!
            <br />
          Please Don't Kill Kenny! ...Again!
        </Title>

        {/* Build to FirendCard model */}
        <Container>
          <Row>
            {this.state.friends.map(friend => (
              <Column size="md-3 sm-6">
                <FriendCard
                  key={friend.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleShuffle={this.handleShuffle}
                  handleReset={this.handleReset}
                  id={friend.id}
                  image={friend.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;