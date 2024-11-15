import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <div className="text-center mx-auto  text-base-content px-10 mt-5">
        <h2 className="text-2xl mb-2 font-bold">Gadget Heaven</h2>
        <p className="mb-5"><small>Leading the way in cutting-edge technology and innovation.</small></p>
        <footer className="footer justify-center gap-20 text-center mx-auto text-base-content border-base-400 border-t px-10 py-4">
        <nav>
            <h6 className="footer-title">Services</h6>
            <Link className="link link-hover">Product Support</Link>
            <Link className="link link-hover">Order Tracking</Link>
            <Link className="link link-hover">Shipping & Delivery</Link>
            <Link className="link link-hover">Returns</Link>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <Link className="link link-hover">About us</Link>
            <Link className="link link-hover">Careers</Link>
            <Link className="link link-hover">Contact</Link>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <Link className="link link-hover">Terms of use</Link>
            <Link className="link link-hover">Privacy policy</Link>
            <Link className="link link-hover">Cookie policy</Link>
          </nav>
        </footer>
      </div>
    );
  };
  
  export default Footer;
  