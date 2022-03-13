import classes from './scss/Menu.module.scss';

export const MenuItem = (props: any) => {

    const style = {
        marginLeft: props.marginContents,
    };


    return (
        <>
            <div className={classes.item} style ={style}>
                <span>{props.children}</span>
                <img src={props.image} alt="picture" />
            </div>
        </>
    );
}