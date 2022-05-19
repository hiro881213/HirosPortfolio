import graphicData from '../../assets/textLabels/textlabelMenu.json'
import { useInView } from 'react-intersection-observer';
import 'animate.css';

export const WorkDetail = (props: any) => {

    const { ref, inView } = useInView({
        // オプション
        rootMargin: '0px',
        triggerOnce: true,
    });

    let target = props.children;
    let title = '';
    let message = ''
    let makeMessage = '';

    const targetTitleKey = `graphicTitle${target}`;
    const targetMessageKey = `graphicMessage${target}`;
    const targetMakeMessageKey = `makeessage${target}`;

    for (const v in graphicData) {

        const key = v as keyof typeof graphicData

        if (String(key) === targetTitleKey ) {
            title = graphicData[key];
        }

        if (String(key) === targetMessageKey) {
            message = graphicData[key];
        }

        if (String(key) === targetMakeMessageKey) {
            makeMessage = graphicData[key];
        }

    }

    return (
        <>
            <article ref={ref} id = {`work${target}`} className = 'w-container'>
                {
                    inView && (
                        <div className="animate__animated animate__zoomIn">
                            <div className = 'titleDiv'><span>{title}</span></div>
                            <div className='memoDiv'>Maked By <span style = {{fontWeight: "bold"}}>{makeMessage}</span></div>
                            <figure>
                                <img src= {props.pictUrl} alt = {props.pictUrl}></img>
                            </figure>
                            <div className='memoDiv'>
                                <span>{message}</span>
                            </div>
                        </div>
                )}
            </article>

        </>
    );
}