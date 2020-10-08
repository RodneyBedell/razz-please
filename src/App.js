import React from 'react';
import logo from './logo.svg';
import './App.css';
const textAreaStyles = {
  width: 230,
  height: 150,
  margin: 0
};

class RazzList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfSpots: 0,
      userInput: '',
      memberList: [],
      fullList: []
    }
    
   
    this.changeNumberOfSpots = this.changeNumberOfSpots.bind(this);
    this.changeInputText = this.changeInputText.bind(this);
    this.submitMembers = this.submitMembers.bind(this);
    this.makeList = this.makeList.bind(this);
  }
  
  
  
  changeNumberOfSpots(e) {
    this.setState({
      numberOfSpots: e.target.value
    });
  }
  changeInputText(e){
    this.setState({
      userInput: e.target.value
    });
  }
  submitMembers() {
    const membersArray = this.state.userInput.split(/\r\n|\n|\r/);
    this.setState({
      memberList: membersArray
    });
  }

  makeList(){
    let full = [];
    let items = this.state.memberList;
    for(let i = 0; i<items.length; i++){
      let name = items[i].match(/\D/g).join('');
      let numSpots = items[i].match(/\d/g).join('');
      for(let j = 0; j<numSpots; j++)
      {
        full.splice(Math.random() * full.length, 0, name);
      }
    }
    for(let i=0; i<this.state.numberOfSpots;i++){
      full.push("Video");
    }
    /**
    for(let i = 0; i< full.length; i++){
      full[i] = (i+1).toString() + ". " + full[i];
    }
    */
    this.setState({
      fullList : full
    });
  }

  render() {
    const members = this.state.memberList.map(i => <li>{i}</li>);
    const spots = this.state.fullList.map(i => <li>{i}</li>);
    return (
      <div>
        <form>
         <label>
            Number of spots to Video:
            <input
              type="number"
              value={this.state.numberOfSpots}
              onChange={this.changeNumberOfSpots} />
          </label>
       
       </form>
          <br />
          <br />
          <textarea
            onChange={this.changeInputText}
            value={this.state.userInput}
            style={textAreaStyles}
            placeholder={"Enter the quantities, each in a new line:\n(only do this with a full list, no called spots) \nRodney 12\nJake 4\nMonty 8"}  />
        

        <br />
        <button onClick={this.submitMembers}>Show Members</button>
        <ul>
          {members}
        </ul>
        <button onClick={this.makeList}>Show Spots</button>
        <ol>
          {spots}
        </ol>
      </div>
    );
  }
};
export default RazzList;
