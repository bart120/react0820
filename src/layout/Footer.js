import React, { Component } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@material-ui/core';

class Footer extends Component {


    state = {
        version: 1,
        rooms: null
    }

    componentDidMount() {
        this.setState({
            rooms: [
                { name: 'Calliope', image: 'Calliope.jpg' },
                { name: 'Pegase', image: 'Pegase.jpg' },
                { name: 'Thalie', image: 'Thalie.jpg' }
            ]
        });
    }

    render() {
        return (
            <footer>
                &copy; formation reactJS version {this.state.version}
                {this.state.rooms ? (
                    <>
                        <Grid container>
                            {this.state.rooms.map((item, index) => (
                                <Grid item key={item.name}>
                                    <Card variant="outlined" style={index === 1 ? cardStyle.error : null}>
                                        <CardMedia image={`/images/${item.image}`} title="salle" style={cardStyle.image} />
                                        <CardContent>
                                            <Typography color="textSecondary" gutterBottom>
                                                {item.name}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                        <Button onClick={this.onDelete}>suppr</Button>
                    </>
                ) : (<></>)}
            </footer>
        );
    }

    onDelete = () => {
        this.setState({
            rooms: [
                { name: 'Calliope', image: 'Calliope.jpg' },
                { name: 'Thalie', image: 'Thalie.jpg' }
            ]
        });
    }
};

const cardStyle = {
    error: {
        backgroundColor: '#cccccc'
    },
    image: { height: 140, width: 250 }
};

export default Footer;