import video from '../../media/homeVideo.mp4'

const HeaderVideo = () => {
    return ( 
        <div className='wrapper'>
            <div className='gradientWrapper'>
                <div className='gradient'></div>
                <video autoPlay loop>
                    <source src={video} type="video/mp4"></source>
                </video>
            </div>
        </div>
    );
}

export default HeaderVideo;