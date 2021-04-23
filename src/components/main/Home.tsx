import home_img from '../../img/home.png';

const Home = () => {
  return (
    <div className='main-home'>
      <h1>Dreams</h1>
      <div className="main-home-text">
        <p>
        A dream is a succession of <b>images, ideas, emotions, and sensations</b> that usually occur involuntarily in the mind during certain stages of sleep. The content and function of dreams are not fully understood, although they have been a topic of scientific, philosophical and religious interest throughout recorded history. Dream interpretation is the attempt at drawing meaning from dreams and searching for an underlying message. The scientific study of dreams is called <b>oneirology</b>. The length of a dream can vary; they may last for a few seconds, or approximately 20–30 minutes.
        </p>
      </div>
      <div className="main-home-picture">
        <img src={home_img} /> 
      </div>
    </div>
  )
}

export default Home
