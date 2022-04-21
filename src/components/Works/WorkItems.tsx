import { Link } from 'react-router-dom';
import graphicData from '../../assets/textLabels/textlabelMenu.json'

export const WorkItems = (props: any) => {

    let target = props.target;
    let title = '';

    const targetTitleKey = `graphicTitle${target}`;

    for (const v in graphicData) {

        const key = v as keyof typeof graphicData

        if (String(key) === targetTitleKey ) {
            title = graphicData[key];
            console.log(graphicData[key]);
            break;
        }

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