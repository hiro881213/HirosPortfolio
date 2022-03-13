import classes from './scss/Menu.module.scss';

export const MenuItem = (props: any) => {

    const style = {
        marginLeft: props.marginContents,
    };

    const fade = props.mode === 'up' ? classes.fadeUp : classes.fadeDown;

    return (
        <a href = './script'>
            <div className={`${classes.item} ${fade}`} style ={style}>
                <span className = {classes.title}>{props.children}</span>
                
                <figure>
                    <img src={props.image} alt="picture" />

                    <div className = {classes.sentenceAll}>
                        <span className = {classes.oneSentence}>{props.message}</span>
                        <span className = {classes.twoSentence}>{props.read}</span>
                    </div>

                </figure>
            </div>
        </a>
    );
}