import { Link } from 'react-router-dom';

import classes from './scss/GraphicMain.module.scss';
import IMG1 from '../../assets/img/ProgramImage.jpg'
import IMG2 from '../../assets/img/GraphicImage.jpg'
import IMG3 from '../../assets/img/ScriptImage.jpg'


export const GraphicMain = () => {
    return (
        <>
            <header className = {classes.headerClass}>
                <div className = {classes.title}>
                    <p className = {classes.titleMain}>My Graphic Designs</p>
                    <label>〜PhotoShop Work And CG Art Work〜</label>
                </div>
            </header>

            <main className = {classes.mainClass}>
                <div className = {classes.worksArea}>
                    <div>
                        <img src= {IMG1} alt="picture" />
                    </div>

                    <div>
                        <img src= {IMG2} alt="picture" />
                    </div>

                    <div>
                        <img src= {IMG3} alt="picture" />
                    </div>

                </div>
            </main>
            <footer>
                <Link to = '/'>HOME</Link>
            </footer>
        </>
    );
}