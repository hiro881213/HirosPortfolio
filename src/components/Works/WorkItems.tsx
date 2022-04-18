import { Link } from 'react-router-dom';

export const WorkItems = (props: any) => {
    return (
        <>
        <article className = 'graphic'>
            <Link to = '#'>
                <figure>
                    <img src= {props.pictUrl} alt = 'image'></img>
                    <span><h2>Title</h2></span>
                </figure>
            </Link>
        </article>
        </>
    );
}