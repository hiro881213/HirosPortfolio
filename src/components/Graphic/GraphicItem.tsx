import classes from './scss/GraphicItem.module.scss'

// グラフィック項目コンポーネント
export const GraphicItem = (props: any) => {

    return (
        <>
            <div className = {`${classes.item}`}>
                <img src= {props.pictUrl} alt="picture" />
            </div>
        </>
    );

}