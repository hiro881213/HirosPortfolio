import { HeaderData } from '../HeaderArea/HeaderData';
import './scss/BaseApp.scss';

export const BaseApp = () => {

    return (
        <>
            <header className = 'w-container'>
                <HeaderData></HeaderData>
            </header>
            {/* <section></section>
            <footer></footer> */}
        </>
    );

}