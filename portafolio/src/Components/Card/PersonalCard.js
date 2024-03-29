// This components is a child for a view/component LandingPage.
import React from 'react';
import { Card, CardTitle, CardText, CardActions, FABButton } from 'react-mdl';
import { withRouter } from 'react-router';

import cvViLara from '../../Documents/VianeyLara_CVAgo21.pdf';

class PersonalCard extends React.Component {
    render() {
        return (
            <div className="hero-slash">
                <Card className="card-box">
                    <CardTitle expand
                        className="card-title">
                        <section className="detail-icon">
                            <i className="fas fa-map-marker-alt">
                                <p className="presentation-icon">CDMX</p>
                            </i>
                            <i className="fas fa-clock">
                                <p className="presentation-icon">30 años</p>
                            </i>
                            <i className="fas fa-mail-bulk">
                                <p className="presentation-icon">vianey.lara.rangel@gmail.com</p>
                            </i>
                        </section>
                    </CardTitle>
                    <CardText className="presentation-box">
                        <div className="presentation-text">
                            <p>
                                Ante el panorama de la transformación digital, decidí
                                seguir aprendiendo, fue así que me acerqué a la
                                tecnología, en dónde desarrolle la cultura que me
                                permite estar al servicio de otros para solucionar con
                                propósito y a propósito. Busco colaborar para
                                entender el problema y así gestionar el cambio.
                                <strong> Te invito a conocer más de lo que he hecho </strong>
                                y así encontrar juntxs la forma de
                                <strong> colaborar profesionalmente.</strong>
                            </p>
                        </div>
                        <div className="box-logo">
                            <img
                                className="logo-brand"
                                src="https://i.ibb.co/ygRXBsL/logo-Ago21-Recorte.png"
                                alt="LogoViLaRa" />
                        </div>
                    </CardText>
                    <CardActions border>
                        <div className="social-buttons" id="anima">
                            <FABButton>
                                <a href={cvViLara} download="VianeyLara_CVAgo21.pdf">
                                    <i className="fas fa-file-download"></i>
                                </a>
                            </FABButton>
                            <FABButton>
                                <a href="https://github.com/VianeyLaraRangel" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>
                            </FABButton>
                            <FABButton>
                                <a href="https://www.linkedin.com/in/vianeylararangel/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </FABButton>
                        </div>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default withRouter(PersonalCard);