import graphicData from '../../assets/textLabels/textlabelMenu.json'

export const WorkDetail = (props: any) => {

    let target = props.children;
    let title = '';
    let message = ''

    const targetTitleKey = `graphicTitle${target}`;
    const targetMessageKey = `graphicMessage${target}`;

    for (const v in graphicData) {

        const key = v as keyof typeof graphicData

        if (String(key) === targetTitleKey ) {
            title = graphicData[key];
        }

        if (String(key) === targetMessageKey) {
            message = graphicData[key];
        }

        if (title !== '' && message !== '') {
            break;
        }

    }

    return (
        <>
            <article id = {`work${target}`} className = 'w-container'>
                <div className = 'titleDiv'><span>{title}</span></div>
                <figure>
                    <img src= {props.pictUrl} alt = 'image'></img>
                </figure>
                <div className='memoDiv'><span>{message}</span></div>
            </article>

        </>
    );
}