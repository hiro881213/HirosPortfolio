import './scss/LofoInf.scss'

export const LogoInf = (prop: any) => {

    return (
        <>
            <div className='container'>
                <div className={`infinity${prop.type}`}></div>
            </div>
        </>
    )
}