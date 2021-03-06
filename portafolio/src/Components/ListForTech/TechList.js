import React from 'react';
import { List, ListItem, ListItemContent } from 'react-mdl';
import { withRouter } from 'react-router';

import Javascript from '../../Assets/JavaScriptLogo.jpg';
import Html from '../../Assets/html5Logo.png';
import Css from '../../Assets/css3Logo.png';
import Git from '../../Assets/gitLogo.png';
import GitHub from '../../Assets/githubLogo.png';
import Firebase from '../../Assets/firebaseLogo.png';
import Node from '../../Assets/nodeLogo.png';
import ReactLogo from '../../Assets/reactLogo.png';
import Reactstrap from '../../Assets/reactstrapLogo.png';
import VSC from '../../Assets/vsLogo.png';

class ListOfTech extends React.Component {
    render() {
        return (
            <List style={{ width: '300px' }}>
                <ListItem>
                    <ListItemContent>
                        <img src={ReactLogo} className="tech-logo" alt="react-logo"></img>
                        REACT
                    </ListItemContent>
                </ListItem>
                <ListItem className="techIcon-box">
                    <ListItemContent>
                        <img src={Javascript} className="tech-logo" alt="javascript-logo"></img>
                        JAVASCRIPT ECMA6
                    </ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent>
                        <img src={Html} className="tech-logo" alt="html-logo"></img>
                        HTML5
                    </ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent>
                        <img src={Css} className="tech-logo" alt="css-logo"></img>
                        CSS3
                    </ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent>
                        <img src={Git} className="tech-logo" alt="git-logo"></img>
                        GIT
                    </ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent>
                        <img src={GitHub} className="tech-logo" alt="github-logo"></img>
                        GITHUB
                    </ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent>
                        <img src={Firebase} className="tech-logo" alt="firebase-logo"></img>
                        FIREBASE
                    </ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent>
                        <img src={Node} className="tech-logo" alt="node-logo"></img>
                        NODE
                    </ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent>
                        <img src={Reactstrap} className="tech-logo" alt="reactstrap-logo"></img>
                        REACTSTRAP
                    </ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent>
                        <img src={VSC} className="tech-logo" alt="vsc-logo"></img>
                        VISUAL STUDIO CODE
                    </ListItemContent>
                </ListItem>
            </List>
        );
    }
}

export default withRouter(ListOfTech);