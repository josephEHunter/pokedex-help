import React from 'react';
import '../App.css';



class ContextProvider extends React.Component {
  constructor(){
    super()
    this.state={
      pokemonData: [],
      game: "",
      location:"",
      isloaded: false,
    }
    this.consoleTest = this.consoleTest.bind(this)
    this.executeFetch = this.executeFetch.bind(this)
    this.logI = this.logI.bind(this)
  }



executeFetch(){
  fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.value}/encounters`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {

      this.setState({
        pokemonData: data,
        isloaded: true,
      })
      return this.logI()
    })


    console.log(this.props)
}

logI(){
for(let i= 0; i<this.state.pokemonData.length; i++){
  const games = (this.state.pokemonData[i].version_details)
  for(let e = 0; e < games.length; e++){
    console.log(this.state.pokemonData[i].location_area.name)
    console.log(games[e].version.name)
    console.log("")
    this.setState({
      game: games[e].version.name,
      location: this.state.pokemonData[i].location_area.name,
    })
  }
}
}


  consoleTest(){
    console.log(this.state.pokemonData)
  }


  render(){
  if (this.state.isloaded === false){
  return (
    <div>
    <div>
    <button onClick={this.executeFetch}>Submit</button>
    </div>
    <h1>{this.props.value}</h1>
    </div>
  );
}

  else{
    return (
      <div>
        <div>
          <button onClick={this.executeFetch}>Submit</button>
        </div>
        <h1 className="red">pokemon version: {this.state.game}</h1>
        <h2>Route: {this.state.location}</h2>


      </div>

    )
    }
  }
}
export default ContextProvider;
