import { getUrl } from '../../CommonUtil'
import { LogoInf } from '../Common/LogoInf'

export const AboutMain = () => {
    return (
        <>
            <header className = 'workContainer w-container'>
                <a href= {getUrl()}>
                    <LogoInf type = {1}></LogoInf>
                </a>
            </header>
        </>
    )
}