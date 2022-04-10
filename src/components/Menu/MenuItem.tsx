import { Link } from 'react-router-dom';

export const MenuItem = (prop: any) => {
    return (
        <>
            <article className = 'post'>
                <a href = {prop.url}>
                    <figure>
                        <img src = {prop.src} alt = 'image' />
                    </figure>
                </a>
            </article>
        </>
    );
}