import classes from './scss/GraphicItem.module.scss'
import graphicData from '../../assets/textLabels/textlabelMenu.json'

// グラフィック項目コンポーネント
export const GraphicItem = (props: any) => {

    let target = props.target;
    let title = '';
    let message = '';

    // if (target === 1) {
    //     title = graphicData.graphicTitle01;
    //     message = graphicData.graphicMessage01;

    // } else if (target === 2) {
    //     title = graphicData.graphicTitle02;
    //     message = graphicData.graphicMessage02;

    // } else if (target === 3) {
    //     title = graphicData.graphicTitle03;
    //     message = graphicData.graphicMessage03;

    // } else if (target === 4) {
    //     title = graphicData.graphicTitle04;
    //     message = graphicData.graphicMessage04;

    // } else if (target === 5) {
    //     title = graphicData.graphicTitle05;
    //     message = graphicData.graphicMessage05;

    // } else if (target === 6) {
    //     title = graphicData.graphicTitle06;
    //     message = graphicData.graphicMessage06;

    // } else if (target === 7) {
    //     title = graphicData.graphicTitle07;
    //     message = graphicData.graphicMessage07;

    // } else if (target === 8) {
    //     title = graphicData.graphicTitle08;
    //     message = graphicData.graphicMessage08;

    // } else if (target === 9) {
    //     title = graphicData.graphicTitle09;
    //     message = graphicData.graphicMessage09;

    // }

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