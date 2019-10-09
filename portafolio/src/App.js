import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './Components/Main';
import { Link } from 'react-router-dom';

import './App.css';

class App extends Component {
  render () {
      return (
        <div className="demo-big-content">
            <Layout>
                <Header title="Title" scroll>
                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">Acerca de mí</Link>
                        <Link to="/projects">Proyectos</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">Acerca de mí</Link>
                        <Link to="/projects">Proyectos</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main/>
                </Content>
            </Layout>
        </div>
    );
  }
}

export default App;