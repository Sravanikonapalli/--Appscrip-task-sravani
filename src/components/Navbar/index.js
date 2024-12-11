import {IoIosSearch, IoIosArrowDown} from 'react-icons/io'
import {GrFavorite} from 'react-icons/gr'
import {BsBag} from 'react-icons/bs'
import {RiContactsLine} from 'react-icons/ri'

import './index.css'

const Navbar = () => (
  <div className="navbar">
    <div className="logo-and-icons">
      <h1>LOGO</h1>
      <div className="icons">
        <IoIosSearch size={30}/>
        <GrFavorite size={30} />
        <BsBag size={30} />
        <RiContactsLine size={30} />
        <p>
          ENG
          <span>
            <IoIosArrowDown size={25} />
          </span>
        </p>
      </div>
    </div>
    <ul className="navbar-items">
      <li className="ls-items">SHOP</li>
      <li className="ls-items">SKILLS</li>
      <li className="ls-items">STORIES</li>
      <li className="ls-items">ABOUT</li>
      <li className="ls-items">CONTACTUS</li>
    </ul>
    <hr className="hr-line" />
  </div>
)

export default Navbar
