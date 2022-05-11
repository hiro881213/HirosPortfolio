export const AboutSkillArticle = (props: any) => {
    return (
        <>
            <article className = 'skillPost'>
                <figure>
                    <img src = {props.url} />
                </figure>
            </article>
        </>
    );
}