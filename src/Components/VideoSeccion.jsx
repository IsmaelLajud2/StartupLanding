import '../Styles/VideoStyles.css'
const VideoSeccion = () => {
    return (
        <div className='video-container' >
            <video className='full-screenvideo' autoPlay loop muted controls>
                <source src='Images/Videos/videoSeccion.mp4' type="video/mp4" />
            </video>
        </div>
    )
}

export default VideoSeccion