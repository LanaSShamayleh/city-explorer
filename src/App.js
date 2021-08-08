import './App.css';
import React from 'react';
import FormInfo from './components/Forms.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import CityInfo from './components/Cards';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Info: '',
      show:false,
      display:false,
    }
  }

  setData =(data,showing) => {
   this.setState({
      Info: data,
      show:true,
      display:showing
    })
  }

  render() {
    return (
      <>
        <FormInfo setData={this.setData} />
        {this.state.show &&
        <CityInfo data={this.state.Info} display={this.state.display} />
        }
      </>
    )
  }
}

export default App;