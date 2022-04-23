import editMovie from '../../assets/about/editMovie.jpg'
import program from '../../assets/about/programming.jpg'
import record from '../../assets/about/recording.jpg'
import settingAudio from '../../assets/about/settingAudio.jpg'

export const AboutBackImage = () => {

    const src1  = {
        backgroundImage: `url(${editMovie})`,
    };
    const src2  = {
        backgroundImage: `url(${program})`,
        animationDelay: '4s',
    };
    const src3  = {
        backgroundImage: `url(${record})`,
        animationDelay: '8s',
    };
    const src4  = {
        backgroundImage: `url(${settingAudio})`,
        animationDelay: '12s',
    };

    return (
        <>
            <div className='allAbout'>
                <div style = {src1} className='bgImg'>
                    <h1>HIRO'S<br/>VISION<br/>SKILLS</h1>
                </div>
                <div style = {src2} className='bgImg'>
                    <h1>HIRO'S<br/>VISION<br/>SKILLS</h1>
                </div>
                <div style = {src3} className='bgImg'>
                    <h1>HIRO'S<br/>VISION<br/>SKILLS</h1>
                </div>
                <div style = {src4} className='bgImg'>
                    <h1>HIRO'S<br/>VISION<br/>SKILLS</h1>
                </div>
            </div>
        </>
    )
}