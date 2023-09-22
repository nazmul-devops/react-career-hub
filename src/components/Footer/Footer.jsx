const Footer = () => {
  return (
    <footer className="p-10 bg-[#1A1919] text-base-content">
      <div className="footer max-w-7xl mx-auto">
        <aside>
          <h1 className="text-white text-3xl font-extrabold">CareerHub</h1>
          <p className="text-gray-400">There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br /> suffered alteration in some form.</p>
        </aside>
        <nav className="text-white">
          <header className="footer-title text-white">Company</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="text-white">
          <header className="footer-title text-white">Product</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="text-white">
          <header className="footer-title text-white">Support</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav className="text-white">
          <header className="footer-title text-white">Contact</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
