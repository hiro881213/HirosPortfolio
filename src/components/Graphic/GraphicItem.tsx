import classes from './scss/GraphicItem.module.scss'

// グラフィック項目コンポーネント
export const GraphicItem = (props: any) => {

    let target = props.target;
    let title = '';
    let message = '';


    if (target === 1) {
        title = 'Illusion In The Forest';
        message = `彩度を上げ、残像を加えることで神秘感を表現`

    } else if (target === 2) {
        title = 'Castle In the Painting';
        message = `城の画像に対してテクスチャを入れることで質感のある表現を作成`

    } else if (target === 3) {
        title = 'Dots Imaging';
        message = `ドット調にすることでカッコよさを引き立てた表現`

    } else if (target === 4) {
        title = 'Dimensional Distortion';
        message = `一部画像を引き延ばすことでテクノロジー感を表現`

    } else if (target === 5) {
        title = 'ミニチュア世界';
        message = `彩度を極端に増加させることでミニチュア感を表現`

    } else if (target === 6) {
        title = 'Illusion Of The Heart';
        message = 'サイケディックな背景色に変え、被写体の周辺を歪ませることで幻想を表現'

    } else if (target === 7) {
        title = 'Power Of Wave';
        message = 'ボクサーに対して、波動を加えることで、威力感を表現'

    } else if (target === 8) {
        title = 'Smoking Hades';
        message = 'サイケディックな背景色に変え、被写体の周辺を歪ませることで幻想を表現'

    } else if (target === 9) {
        title = 'Red Of Core';
        message = 'お花畑を回転させることで、球体のコアのような表現を実現'

    }

    return (
        <>
            <div className = {`${classes.item}`}>
                <img className = {classes.scriptIMG} src= {props.pictUrl} alt= {"graphicData"} />
                <div className = {classes.detail}>
                    <label className = {classes.title}>{title}</label>
                    <p>PhotoShop合成作品(2021)</p>
                    <br></br>
                    <p>{message}</p>
                </div>
            </div>
        </>
    );

}