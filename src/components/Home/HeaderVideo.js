import video from '../../media/homeVideo.mp4'
import HeaderText from './HeaderText'

const HeaderVideo = () => {
    return ( 
        <div id='videoWrapper'>
            <div className='gradientWrapper'>
                <div className='gradient'></div>
                <video autoPlay loop>
                    <source src={video} type="video/mp4"></source>
                </video>
                <HeaderText></HeaderText>
            </div>
        </div>
    );
}

export default HeaderVideo;

