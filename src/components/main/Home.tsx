import home_img from '../../img/home.png';

const Home = () => {
  return (
    <div className='main-home'>
      <h1>Dreams</h1>
      <div className="main-home-text">
        <p>
          A dream is a succession of images, ideas, emotions, and sensations that usually occur involuntarily in the mind during certain stages of sleep. The content and function of dreams are not fully understood, although they have been a topic of scientific, philosophical and religious interest throughout recorded history. Dream interpretation is the attempt at drawing meaning from dreams and searching for an underlying message. The scientific study of dreams is called oneirology. Dreams mainly occur in the rapid-eye movement stage of sleep—when brain activity is high and resembles that of being awake. REM sleep is revealed by continuous movements of the eyes during sleep. At times, dreams may occur during other stages of sleep. However, these dreams tend to be much less vivid or memorable. The length of a dream can vary; they may last for a few seconds, or approximately 20–30 minutes. People are more likely to remember the dream if they are awakened during the REM phase.
        </p>
      </div>
      <div className="main-home-picture">
        <img src={home_img} /> 
      </div>
    </div>
  )
}

export default Home
