import './App.css';
import React from 'react'
import axios from 'axios'
import UserCard from './Components/UserCard'
import FollowerCard from './Components/FollowerCard'
class App extends React.Component{
  state = {
    user: {},
    followers: []
  }

  async componentDidMount(){
    // axios.get('https://api.github.com/users/francishtknguyen')
    //   .then( resp => {
    //     console.log(resp);
    //     this.setState({
    //       user: resp.data
    //     })
    //   })
    //   .catch((err)=> {
    //     console.log(err);
    //   })

    const [firstResp, secondResp] = await Promise.all([
      axios.get('https://api.github.com/users/francishtknguyen'),
      axios.get('https://api.github.com/users/francishtknguyen/followers')
    ])
    // .then( (resp)=> {
    //   this.setState({
    //   user: resp[0].data,
    //   followers: resp[1].data
    //   })
    // })
    // .catch((err)=> {
    //   console.log(err);
    // })
    console.log(firstResp.data);
    this.setState({
      user: firstResp.data,
      followers: secondResp.data
      });
    
  }

  render(){
    return (
      <div className="App">
          <h1>Hello {this.state.user.name}!</h1>
          <div className="container">
            <UserCard user={this.state.user} />
            <div className="followers">
              <h3>Followers:</h3>
              {this.state.followers.map( followers => {
                  return <FollowerCard followers={followers}/>
                })
              }
            </div>
          </div>
      </div>
    );
  }
}

export default App;
