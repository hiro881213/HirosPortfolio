import graphicData from '../../assets/textLabels/textlabelMenu.json'

export const WorkDetail = (props: any) => {

    let target = props.children;
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
            <article id = {`work${target}`}>
                <div><span>{title}</span></div>
                <figure>
                    <img src= {props.pictUrl} alt = 'image'></img>
                </figure>
            </article>

        </>
    );
}