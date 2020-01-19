import React from 'react';
import '../../allStyle/header.scss';
import Logo from '../../img/norman_logo.svg'
import LogoPartner from '../../img/LogoPartner.svg';
import Dropp from './drop'


class Header extends React.Component {
    render() {

        let headerRight;
        if(this.props.logState){
            headerRight = <HeaderRight/>
        }
        return (
            <header>
                <div className="row align-center">
                    <div className="column medium-6">
                        <div className="header-left">
                            <a href="/" className="logoWrap">
                                <img src={Logo} alt={Logo} />
                            </a>
                            <div className="lodo-text">
                                ԿԱՌԱՎԱՐՄԱՆ ՀԱՄԱԿԱՐԳ
                            </div>
                        </div>
                    </div>
                    {headerRight}
                </div>
            </header>
        )
    }
}


const HeaderRight=()=>{
    return(
        <div className="column medium-6">
            <div className="header-right">
                <div className="partner-block">
                    <div className="partner-logo">
                        <img src={LogoPartner} alt={LogoPartner} />
                    </div>
                    <Dropp/>
                </div>
            </div>
        </div>
    )
}


export default Header;