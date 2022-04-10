import './scss/MenuList.scss';

import grachic from '../../assets/img/ProgramImage.jpg';
import script  from '../../assets/img/ScriptImage.jpg';
import graphic from '../../assets/img/GraphicImage.jpg'

export const MenuList = () => {
    return (
        <>
            <div className = 'posts-container'>
                <article className = 'post'>
                    <a href = '#'>
                        <figure>
                            <img src = {grachic} alt = 'image' />
                        </figure>
                    </a>
                </article>

                <article className = 'post'>
                    <a href = '#'>
                        <figure>
                            <img src = {script} />
                        </figure>
                    </a>
                </article>

                <article className = 'post'>
                    <a href = '#'>
                        <figure>
                            <img src = {graphic} />
                        </figure>
                    </a>
                </article>
            </div>
        </>
    );
}