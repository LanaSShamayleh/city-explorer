import React from 'react';
import Card from 'react-bootstrap/Card';



class Cards extends React.Component {

    render() {

        return (
            <>
                {(this.props.display && this.props.movieData.length !== 0) &&  this.props.movieData.map((element, idx) => {
                    return (<Card  key={idx} className='movie'>
                        <img variant="top" src={element.imagePath} className="Img" alt={element.title} width='400px' height='400px'/>
                        <Card.Body className='cardBody'>
                            <Card.Title>{element.title}</Card.Title>
                            <Card.Text className='movieText'>
                                {element.overview}<br />
                             <b>Total votes:</b> {element.totalVotes}<br />
                             <b>Avg votes:</b> {element.avgVotes}<br />
                             <b>Popularity:</b> {element.popularity}<br />
                             <b>Release Date:</b> {element.releaseDate}<br />
                            </Card.Text>

                        </Card.Body>
                    </Card>)
                })
                }
                {this.props.display ===false && <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>
                         {this.props.movieData.message}
                        </Card.Title>
                    </Card.Body>
                </Card>}

            </>
        )
    }
}

export default Cards;