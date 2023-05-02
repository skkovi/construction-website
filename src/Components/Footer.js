import '../Css/Footer.css';
import moretti from '../Images/Moretti.png'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footertext-container'>
                <img src={moretti} alt='' />
            </div>
            <div className='footertext-container'>
                <h2 className='footer-maintext'>CONTACT INFO</h2>
                <span className='contactInfoFooter'>Phone: 1 (914) 738-8722</span>
                <span className='contactInfoFooter'>Email: patmorettigc@gmail.com</span>
                <span className='contactInfoFooter'>Fax: 1 (845) 878-3393</span>
            </div>
            <div className='footertext-container'>
                <h2 className='footer-maintext'>ADDRESS</h2>
                <span className='contactInfoFooter'>Segale Bros. Wood Products Inc. <br />
                    1705 Sabre Street
                    Hayward, CA 94545</span>
            </div>
        </div>
    );
}

export default Footer;