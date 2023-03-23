import React from 'react';
import logo from './logo.svg';
import './App.css';
import CollegeBasketballTeams from './CollegeBasketballTeams.json';

class Team extends React.Component {
  render() {
    const oneTeam: any = this.props;
    return (
      <tr>
        <td>{oneTeam.school}</td>
        <td>{oneTeam.name}</td>
        <td>
          {oneTeam.city}, {oneTeam.state}
        </td>
      </tr>
    );
  }
}

function TeamList() {
  const teamsInfo = CollegeBasketballTeams.teams;
  return (
    <div>
      {teamsInfo.map((oneTeam) => (
        <Team {...oneTeam} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Jared's Website!!!</h1>
      </header>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>

      {/* Render the TeamList component and pass in the CollegeBasketballTeams array as a prop */}
      <TeamList />
    </div>
  );
}

export default App;
