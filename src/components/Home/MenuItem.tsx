import classes from './scss/Menu.module.scss';

export const MenuItem = (props: any) => {

    const style = {
        marginLeft: props.marginContents,
    };

    const fade = props.mode === 'up' ? classes.fadeUp : classes.fadeDown;

    return (
        <>
            <div className={`${classes.item} ${fade}`} style ={style}>
                <span>{props.children}</span>
                <img src={props.image} alt="picture" />
            </div>
        </>
    );
}