import MediaQuery from "react-responsive";

import { HomeOpen } from './HomeOpen';
import { HomeParticles } from './HomeParticles';
import { HeaderData } from '../HeaderArea/HeaderData';
import { MenuList   } from '../Menu/MenuList';
import './scss/BaseApp.scss';

export const BaseApp = () => {

    return (
        <>

            <HomeOpen />
            
            {/* <!-- スマートフォン向け画面レイアウト --> */}
            <MediaQuery query = '(max-width: 767px)'>
                <header>
                    <HeaderData></HeaderData>
                </header>
                <section className = 'menuList'>
                    <div className = 'w-container' style = {{height: '100%'}}>
                        <MenuList></MenuList>
                    </div>
                </section>
            </MediaQuery>

            {/* <!-- PC向け画面レイアウト --> */}
            <MediaQuery query = '(min-width: 768px)'>
                <HomeParticles />
                <header>
                    <HeaderData></HeaderData>
                </header>
                <section className = 'menuList'>
                    <div className = 'w-container' style = {{height: '100%'}}>
                        <MenuList></MenuList>
                    </div>
                </section>
            </MediaQuery>


            {/* <footer></footer> */}
        </>
    );

}