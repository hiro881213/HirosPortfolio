import { HomeOpen } from './HomeOpen';
import { HomeParticles } from '../../components/Home/HomeParticles';
import { HeaderArea } from '../../components/Home/Header';
import { Menu } from '../../components/Home/Menu';

export const HomeMain = () => {

    return(
        <>
            <HomeOpen />
            <HomeParticles />
            <div className="App">
                <header>
                    <HeaderArea />
                </header>

                <main>
                    <Menu />
                </main>
            </div>
        </>
    );

};