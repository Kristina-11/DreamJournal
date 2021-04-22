import github from '../img/github.png';
import linkedin from '../img/linedin.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div>Background picture taken from <a href='https://pngtree.com/so/pagedecorative'>pagedecorative - pngtree.com</a></div>
      <div>Home and AddADream picture taken from <a href='https://pngtree.com/so/ripped-paper'>ripped paper - pngtree.com</a></div>
      <div>AllDreams picture taken from <a href='https://pngtree.com/so/dream-catcher-clipart'>dream catcher - pngtree.com</a></div>
      <b>Made by Kristina &copy; 2021</b>
      <div className='social'>
        <a href='https://github.com/Kristina-11'>
          <img src={github} />
        </a>
        <a href='https://www.linkedin.com/in/kristina91jovanovic11/'>
          <img src={linkedin} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
