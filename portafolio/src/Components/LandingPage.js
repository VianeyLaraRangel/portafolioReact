import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://i.ibb.co/9V94KV9/vianeylara.jpg" 
                        alt="VianeyLara´s pic"
                        className="avatar-img"/>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landing;