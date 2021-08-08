import React from 'react';
import Card from 'react-bootstrap/Card';


class CityInfo extends React.Component {
    render() {
        return (
            <>
                {this.props.display && <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.8051979a1ba78b6bb685f7730bcf2f5a&center=${this.props.data.lat},${this.props.data.lon}`} alt='' />
                    <Card.Body>
                        <Card.Title>{this.props.data.display_name.split(',')[0]}</Card.Title>
                        <Card.Text>
                            latitude:   {this.props.data.lat}.<br />
                            longitude: {this.props.data.lon}.
                        </Card.Text>
                    </Card.Body>
                </Card>}

                {this.props.display === false && <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Error {this.props.data.response.status}</Card.Title>
                        <Card.Text>
                           {this.props.data.message}
                        </Card.Text>
                    </Card.Body>
                </Card>}

            </>
        )
    }
}

export default CityInfo;