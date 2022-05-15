import { useInView } from 'react-intersection-observer';
import 'animate.css';

export const AboutSkillArticle = (props: any) => {
    
    const { ref, inView } = useInView({
        // オプション
        rootMargin: '-50px', // ref要素が現れてから50px過ぎたら
        triggerOnce: true, // 最初の一度だけ実行
    });

    return (
        <>
            <article ref={ref} className = 'skillPost'>
            {
                inView && (
                    <figure className="animate__animated animate__rotateInDownLeft">
                        <img src = {props.url} />
                    </figure>
                )
            }
            </article>
        </>
    );
}