import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

class FormInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            CityInput: '',
        }
    }

    getInput = (event) => {
        let Citysearch = '';
        Citysearch = event.target.value;
        this.setState({
            CityInput: Citysearch,
        })
    }
 
    getData = async (e) => {
        e.preventDefault();

        let Url = `https://eu1.locationiq.com/v1/search.php?key=pk.8051979a1ba78b6bb685f7730bcf2f5a&q=${this.state.CityInput}&format=json`;
        
        try{

        let result = await axios.get(Url);
        this.props.setData(result.data[0],true);

        }catch(error){
           this.props.setData(error,false);
        }
    }
    render() {
        return (
            <>
                <Form onSubmit={this.getData}>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Enter the City Name : </Form.Label>
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