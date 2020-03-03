import React from 'react'
import '../App.css';

import ContextProvider from './Fetch'



class Home extends React.Component{
  constructor(){
    super()
    this.state={ value:"  "}
    this.onChange = this.onChange.bind(this)
  }



onChange(e) {
  this.setState({ value: e.target.value})
}

onSubmit(){

}

  render(){


    return(
      <div className="home">
      <h1>Home</h1>

      <form>
      <label>
        <input type="text" onChange={this.onChange} placeholder="Pokemon Name"/>
      </label>
      </form>

      <ContextProvider value={this.state.value} />

      </div>
    )
  }
}
export default Home


/*{this.state.employees.map(item => (
      <li key={item.id}>
        {item.version_details}
        </li>
      ))},*/
