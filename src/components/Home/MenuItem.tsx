import classes from './scss/Menu.module.scss';

export const MenuItem = (props: any) => {

    const style = {
        marginLeft: props.marginContents,
    };

    const fade = props.mode === 'up' ? classes.fadeUp : classes.fadeDown;

    return (
        <>
            <div className={`${classes.item} ${fade}`} style ={style}>
                <span className = {classes.title}>{props.children}</span>
                
                <span className = {classes.oneSentence}>脚本作品が表示されます</span>
                <span className = {classes.twoSentence}>Read More →→</span>

                
                <figure>
                    <img src={props.image} alt="picture" />
                </figure>
            </div>
        </>
    );
}