import { Link } from 'react-router-dom';

import classes from './scss/Menu.module.scss';

export const MenuItem = (props: any) => {

    const style = {
        marginLeft: props.marginContents,
        marginTop: props.marginTop
    };

    const fade = props.mode === 'up' ? classes.fadeUp : classes.fadeDown;

    return (
        <Link to = {props.src}>
            <div className={`${classes.item} ${fade}`} style ={style}>
                <span className = {classes.title}>{props.children}</span>
                
                <figure>
                    <img src={props.image} alt= {"menuImage"} />

                    <div className = {classes.sentenceAll}>
                        <span className = {classes.oneSentence}>{props.message}</span>
                        <span className = {classes.twoSentence}>{props.read}</span>
                    </div>

                </figure>
            </div>
        </Link>
    );
}