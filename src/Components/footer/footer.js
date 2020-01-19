import React from 'react';
import phone from '../../img/prohe.svg';
import mail from '../../img/mail.svg';
import pin from '../../img/pin.svg';
import fb from '../../img/fb.svg';
import insta from '../../img/insta.svg';


class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="feedback">
                    <img src={phone} alt="phone" />
                    011 999-910, 044 999-920
                </div>
                <div className="feedback">
                    <img src={mail} alt="mail" />
                    info@normancredit.am
                </div>
                <div className="feedback">
                    <img src={pin} alt="pin" />
                    ԱՀՀ, ք.Երևան 0001, Սայաթ-Նովա 12, տարածք 3
                </div>
                <div className="socIcon-wrapp">
                    <a href="" className="socIcon">
                        <img src={fb} alt="fb" />
                    </a>
                    <a href="" className="socIcon">
                        <img src={insta} alt="insta" />
                    </a>
                </div>
            </footer>
        )
    }
}

export default Footer;