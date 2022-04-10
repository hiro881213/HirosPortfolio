import { HeaderData } from '../HeaderArea/HeaderData';
import { MenuList   } from '../Menu/MenuList';
import './scss/BaseApp.scss';

export const BaseApp = () => {

    return (
        <>
            <header>
                <HeaderData></HeaderData>
            </header>

            <section className = 'menuList'>
                <div className = 'w-container' style = {{height: '100%'}}>
                    <MenuList></MenuList>
                </div>
            </section>

            {/* <footer></footer> */}
        </>
    );

}