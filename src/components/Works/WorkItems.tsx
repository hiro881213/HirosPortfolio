import AnchorLink from 'react-anchor-link-smooth-scroll';
import graphicData from '../../assets/textLabels/textlabelMenu.json'

export const WorkItems = (props: any) => {

    let target = props.target;
    let title = '';

    const targetTitleKey = `graphicTitle${target}`;

    for (const v in graphicData) {

        const key = v as keyof typeof graphicData

        if (String(key) === targetTitleKey ) {
            title = graphicData[key];
            break;
        }

    }

    return (
        <>
            <article className = 'graphic'>
                <AnchorLink href={`#work${target}`}>
                    <figure>
                        <img src= {props.pictUrl} alt = 'image'></img>
                        <span><h2>{title}</h2></span>
                    </figure>
                </AnchorLink>
            </article>
        </>
    );
}