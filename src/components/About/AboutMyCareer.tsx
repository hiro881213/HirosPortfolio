import myCareerLabel from '../../assets/textLabels/myCareerLabel.json'

export const AboutMyCareer = (props: any) => {
    
    const id = props.id;
    
    let sysName = "";
    let title = "";
    let first = "";
    let second = "";
    let third = ""
    let fourth = "";

    const sysNameKey = `sysName${id}`;
    const titleKey = `title${id}`;
    const firstKey = `first${id}`;
    const secondKey = `second${id}`;
    const thirdKey = `third${id}`;
    const fourthKey = `fourth${id}`;

    for (const v in myCareerLabel) {

        const key = v as keyof typeof myCareerLabel

        if (String(key) === sysNameKey ) {
            sysName = myCareerLabel[key];
        }

        if (String(key) === titleKey ) {
            title = myCareerLabel[key];
        }

        if (String(key) === firstKey ) {
            first = myCareerLabel[key];
        }

        if (String(key) === secondKey ) {
            second = myCareerLabel[key];
        }

        if (String(key) === thirdKey ) {
            third = myCareerLabel[key];
        }

        if (String(key) === fourthKey ) {
            fourth = myCareerLabel[key];
        }


        if (sysName !== '' && title !== '' && first !== '' && second !== '' && third !== '' && fourth !== '') {
            break;
        }

    }

    return (
        <>
            <div className='wrap'>
                <div className='title'><h3>{sysName}</h3></div>
                <div>
                    <p>{title}</p>
                    <p>{first}</p>
                    <p>{second}</p>
                    <br></br>
                    <p>{third}</p>
                    <p>{fourth}</p>
                </div>
            </div>
        </>
    )
}