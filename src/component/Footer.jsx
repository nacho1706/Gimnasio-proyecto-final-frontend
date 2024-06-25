import "../pages/style/Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="footer-content">
        <div className="footer-section about">
          <img
            src="i_will_design_eye_catching_modern_sports__fitness_and_gym_logo-removebg-preview.png"
            alt=""
            width={120}
          />
        </div>
        <div className="footer-section location">
          <h2>Ubicación</h2>
          <div className="maps-footer">
            <a
              href="https://maps.app.goo.gl/xmjhxmXdZQJ8L2te9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogle size={50} />
            </a>
          </div>

          <p></p>
        </div>
        <div className="footer-section contact">
          <h2>Contacto</h2>
          <p>Teléfono: (0381) 456-7890</p>
          <p>Email: contacto@gymevolution</p>
        </div>
        <div className="footer-section social">
          <h2>Redes Sociales</h2>
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={50} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={50} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={50} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
