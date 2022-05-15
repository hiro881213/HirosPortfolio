import AnchorLink from 'react-anchor-link-smooth-scroll';
import graphicData from '../../assets/textLabels/textlabelMenu.json'
import { useInView } from 'react-intersection-observer';
import 'animate.css';

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

    const { ref, inView } = useInView({
        // オプション
        rootMargin: '0px', // ref要素が現れてから50px過ぎたら
        triggerOnce: true, // 最初の一度だけ実行
    });

    return (
        <>
            <article ref={ref} className = 'graphic'>
            {
                inView && (
                    <div className="animate__animated animate__rotateInDownLeft">
                        <AnchorLink href={`#work${target}`}>
                            <figure>
                                <img src= {props.pictUrl} alt = 'image'></img>
                                <span><h2>{title}</h2></span>
                            </figure>
                        </AnchorLink>
                    </div>
                )
            }

            </article>
        </>
    );
}