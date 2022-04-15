import { Link } from 'react-router-dom';

export const MenuItem = (prop: any) => {
    return (
        <>
            <article className = 'post'>
                <a href = {prop.url}>

                    <span><h2>{prop.children}</h2></span>

                    <figure>
                        <img src = {prop.src} alt = 'image' />
                    </figure>
                </a>
            </article>
        </>
    );
}