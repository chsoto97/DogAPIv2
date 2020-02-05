import React from 'react';
import './App.css';
import Search from './search';
import Image from './image';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      breed : null,
      images : []
    }
  }
    search = (query) =>{
      let url = 'https://dog.ceo/api/breed/'+query+'/images/random';
      let settings = {
        method : 'GET'
      }
    
    fetch( url, settings )
      .then( response => {
        if( response.ok ){
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then( responseJSON => {
        let listaNueva = [...this.state.images, responseJSON.message];
        this.setState({
          images : listaNueva
        });
      })
      .catch( err => {
        console.log(err);
      });
    }

  componentDidMount(){

  }

  render(){
    return(
      <div>
        <div>
          <h1>Dog API</h1>
          <Search search={this.search}/>
        </div>
        <div>
          {this.state.images.map( (imgSrc, index) => {
              return (
                <Image img={imgSrc} key={index}/>
              )
            })}
        </div>
      </div>
    )
  }
}

export default App;