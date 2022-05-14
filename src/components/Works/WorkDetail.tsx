import graphicData from '../../assets/textLabels/textlabelMenu.json'
import { useInView } from 'react-intersection-observer';
import 'animate.css';

export const WorkDetail = (props: any) => {

    const { ref, inView } = useInView({
        // オプション
        rootMargin: '-20px', // ref要素が現れてから50px過ぎたら
        triggerOnce: true, // 最初の一度だけ実行
    });

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
            <article ref={ref} id = {`work${target}`} className = 'w-container'>
                {
                    inView && (
                        <div className="animate__animated animate__zoomIn">
                            <div className = 'titleDiv'><span>{title}</span></div>
                            <figure>
                                <img src= {props.pictUrl}></img>
                            </figure>
                            <div className='memoDiv'><span>{message}</span></div>
                        </div>
                )}
            </article>

        </>
    );
}