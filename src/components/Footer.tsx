const Footer = () => (
  <footer className="w-full py-16 px-8 mt-20 bg-surface-container-low">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
      <div className="col-span-1 md:col-span-1">
        <div className="text-xl font-bold text-primary mb-6 font-headline tracking-tighter">EITI</div>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
          Pioneering the next generation of industrial leadership through rigorous training and industry partnership.
        </p>
        <div className="flex gap-4">
          <a
            className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all"
            href="#"
            aria-label="Share"
          >
            <span className="material-symbols-outlined text-sm">public</span>
          </a>
          <a
            className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all"
            href="#"
            aria-label="Hub"
          >
            <span className="material-symbols-outlined text-sm">hub</span>
          </a>
          <a
            className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all"
            href="#"
            aria-label="Campaign"
          >
            <span className="material-symbols-outlined text-sm">campaign</span>
          </a>
        </div>
      </div>
      <div>
        <h4 className="font-bold text-primary mb-6 uppercase tracking-wider text-xs">Resources</h4>
        <ul className="space-y-4 text-sm text-on-surface-variant">
          <li><a className="hover:text-primary underline-offset-4 hover:underline" href="#">Partner Portal</a></li>
          <li><a className="hover:text-primary underline-offset-4 hover:underline" href="#">Careers</a></li>
          <li><a className="hover:text-primary underline-offset-4 hover:underline" href="#">Student Login</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-primary mb-6 uppercase tracking-wider text-xs">Contact</h4>
        <ul className="space-y-4 text-sm text-on-surface-variant">
          <li><a className="hover:text-primary underline-offset-4 hover:underline" href="#">Contact Us</a></li>
          <li className="text-on-surface-variant">info@eiti.edu</li>
          <li className="text-on-surface-variant">1-800-EITI-TRAIN</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-primary mb-6 uppercase tracking-wider text-xs">Legal</h4>
        <ul className="space-y-4 text-sm text-on-surface-variant">
          <li><a className="hover:text-primary underline-offset-4 hover:underline" href="#">Privacy Policy</a></li>
          <li><a className="hover:text-primary underline-offset-4 hover:underline" href="#">Terms of Service</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-outline-variant">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-center text-on-surface-variant text-xs">© 2024 Emerging Industries Training Institute. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="text-xs text-outline">Accredited Institution</span>
          <span className="text-xs text-outline">ISO 9001 Certified</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;