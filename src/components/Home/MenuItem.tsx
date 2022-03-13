import classes from './scss/Menu.module.scss';

export const MenuItem = (props: any) => {
    return (
        <>
            <div className={classes.item}>
                <span>{props.children}</span>
            </div>
        </>
    );
}