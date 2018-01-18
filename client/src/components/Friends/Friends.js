import React, { Component } from 'react';
import './Friends.css';

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  fetchFriends = () => {
    fetch('/api/friends')
    .then((res) => res.json())
    .then((friends) => this.setState({ friends }, () => console.log('friends fetch', friends)))
    .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.fetchFriends();
  }

  render() {
    return (
      <div className="Friends">
        <h2>Friends</h2>
        <ul>
          {
            this.state.friends.map((friend) => <li key={ friend.id }>{ friend.name }</li>)
          }
        </ul>
      </div>
    );
  }
}

export default Friends;
