import MediaQuery from "react-responsive";

import { Link } from 'react-router-dom';
import { LogoInf } from '../Common/LogoInf'

import './scss/HeaderArea.scss'

export const HeaderData = () => {

    return (
        <>
            <div className = 'container w-container'>
                <MediaQuery query = '(max-width: 767px)'>
                    <a href= "/">
                        <LogoInf type = {1}></LogoInf>
                        <h1 className = 'headerTitle'>HIRO'S<br/>PORTFOLIO</h1>
                    </a>
                </MediaQuery>

                <MediaQuery query = '(min-width: 768px)'>
                    <a href= "/">
                        <LogoInf type = {1}></LogoInf>
                    </a>
                </MediaQuery>


            </div>
        </>
    );
}