import './Header.css';
import Idf from './img/idf.png';
import Nifgaim from './img/nifgaim.png';


const Header = () => {

    return (
    <div className="header">
        <img src={Nifgaim} alt={"Header"} className="nifgaim-image"/>
        <img src={Idf} alt={"Header"} className="idf-image"/>
    </div>
    );
}

export default Header;