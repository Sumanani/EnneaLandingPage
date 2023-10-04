import logo from "../assets/images/ennea-logo.png";

const Footer = () => {
  return (
    <footer className="footer p-10 text-base-content">
      <aside>
        <img className="w-[160px]" src={logo} alt="ennea logo" />
      </aside>
      <nav>
        <header className="footer-title">Corporate Office</header>
        <p>Ennea Solutions</p>
        <p>H.No. 8-2-293/82/A, Plot No. - 1293/A</p>
        <p>Road No. - 63, Jubilee Hills, Hyderabad - 500033</p>
      </nav>
      <nav>
        <header className="footer-title">Contact Us</header>
        <p>contact@enneasolutions.com</p>
        <p>+91-7337464764</p>
      </nav>
      <form>
        <header className="footer-title">Newsletter</header>
        <fieldset className="form-control w-full">
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn btn-secondary absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
