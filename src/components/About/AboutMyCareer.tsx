import { useInView } from 'react-intersection-observer';
import 'animate.css';
import myCareerLabel from '../../assets/textLabels/myCareerLabel.json'


export const AboutMyCareer = (props: any) => {

    // -------------------------------------------
    // ラベル設定処理
    // -------------------------------------------

    const id = props.id;

    // 表示ラベル変数群
    let sysName = "";
    let title = "";
    let first = "";
    let second = "";
    let third = ""
    let fourth = "";
    let five = "";

    // キー一覧
    const sysNameKey = `sysName${id}`;
    const titleKey = `title${id}`;
    const firstKey = `first${id}`;
    const secondKey = `second${id}`;
    const thirdKey = `third${id}`;
    const fourthKey = `fourth${id}`;
    const fiveKey = `fives${id}`

    for (const v in myCareerLabel) {

        const key = v as keyof typeof myCareerLabel

        if (String(key) === sysNameKey ) {
            sysName = myCareerLabel[key];
        }

        if (String(key) === titleKey ) {
            title = myCareerLabel[key];
        }

        if (String(key) === firstKey ) {
            first = myCareerLabel[key];
        }

        if (String(key) === secondKey ) {
            second = myCareerLabel[key];
        }

        if (String(key) === thirdKey ) {
            third = myCareerLabel[key];
        }

        if (String(key) === fourthKey ) {
            fourth = myCareerLabel[key];
        }

        if (String(key) === fiveKey ) {
            five = myCareerLabel[key];
        }

    }

    const { ref, inView } = useInView({
        // オプション
        rootMargin: '-50px', // ref要素が現れてから50px過ぎたら
        triggerOnce: true, // 最初の一度だけ実行
    });

    return (
        <>
            <div ref={ref} className='wrap'>
            {
                inView && (
                    <div className="animate__animated animate__lightSpeedInLeft">
                        <div className='title'><h3>{sysName}</h3></div>
                        <div>
                            <p>{title}</p>
                            <p>{first}</p>
                            <p>{second}</p>
                            <br></br>
                            <p>{third}</p>
                            <p>{fourth}</p>
                            <p>{five}</p>
                        </div>
                    </div>
                )
            }
            </div>
        </>
    )
}