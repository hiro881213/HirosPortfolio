import { Link } from 'react-router-dom';
import graphicData from '../../assets/textLabels/textlabelMenu.json'

export const WorkItems = (props: any) => {

    let target = props.target;
    let title = '';

    if (target === 1) {
        title = graphicData.graphicTitle01;
    } else if (target === 2) {
        title = graphicData.graphicTitle02;
    } else if (target === 3) {
        title = graphicData.graphicTitle03;
    } else if (target === 4) {
        title = graphicData.graphicTitle04;
    } else if (target === 5) {
        title = graphicData.graphicTitle05;
    } else if (target === 6) {
        title = graphicData.graphicTitle06;
    } else if (target === 7) {
        title = graphicData.graphicTitle07;
    } else if (target === 8) {
        title = graphicData.graphicTitle08;
    } else if (target === 9) {
        title = graphicData.graphicTitle09;

    }

    return (
        <>
        <article className = 'graphic'>
            <Link to = '#'>
                <figure>
                    <img src= {props.pictUrl} alt = 'image'></img>
                    <span><h2>{title}</h2></span>
                </figure>
            </Link>
        </article>
        </>
    );
}