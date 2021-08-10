import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

let serverRoute = process.env.REACT_APP_SERVER;


class FormInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            locationResult:'',
        }
    }

    getInput = (event) => {
        let searchRequest = '';
        searchRequest = event.target.value;
        this.setState({
            searchInput: searchRequest,
        })
    }
    getData = async (e) => {
        e.preventDefault();
        let reqUrl = `https://eu1.locationiq.com/v1/search.php?key=pk.b63c5ecf5d90031a016f3169a46a0e31&q=${this.state.searchInput}&format=json`;
        try{
        let result = await axios.get(reqUrl);
        this.setState({
        locationResult:result.data[0],
        })
        this.props.setData(this.state.locationResult,true);
        }catch(error){
           this.props.setData(error,false);
        }
        try{
            let weatherData = await axios.get(`${serverRoute}/weather?searchQuery=${this.state.searchInput}&long=${this.state.locationResult.lon}&lat=${this.state.locationResult.lat}`);
            this.props.setWeather(weatherData.data,true);
            console.log(serverRoute);
        }catch(e){
            console.log(e.response);
            this.props.setWeather(e.response,false);
        }
        try{
        let movUrl = (`${serverRoute}/movie?searchQuery=${this.state.searchInput}`);
        console.log(serverRoute);
        let movie = await axios.get(movUrl);
        this.props.setMovie(movie.data,true)
        }catch(e){
        this.props.setMovie(e,false);
        console.log(e.response.data);
        }
    }
    render() {
        return (
            <>
                <Form onSubmit={this.getData}>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label> Exploer The City </Form.Label>
                        <Form.Control type="text" placeholder="City Name" onChange={this.getInput} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Explore
                    </Button>
                </Form>
            </>
        )
    }
}
export default FormInfo;