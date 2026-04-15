const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1e2a2a] text-white font-sans">

      {/* Top border */}
      <div className="bg-[#1CA6A3] h-[3px]" />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-10 border-b border-white/10">

          {/* Brand */}
          <div>
            <h2 className="text-[28px] font-bold text-[#1CA6A3] tracking-widest heading-font">
              EITI
            </h2>
            <p className="text-lg text-[#a0b4b3] mt-2">
              Emerging Industries Training Institute
            </p>
            <p className="text-lg text-[#6a8484] mb-5 mt-2">
              Detroit, Michigan
            </p>
            <p className="text-base text-[#7a9898] leading-relaxed max-w-xs border-l-2 border-[#1CA6A3] pl-4">
              Workforce training and employment pathways for emerging industries.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[20px] tracking-[0.14em] text-[#1CA6A3] font-semibold mb-5 pb-2 border-b border-[#74B4E0]/25">
              Contact Us
            </h4>
            <ul className="space-y-3 text-base text-[#9ab0b0]">
              <li>
                5555 Conner Street, Suite 1646 <br />
                Detroit, MI 48213
              </li>
              <li>
                <a href="mailto:info@eitinstitute.org" className="hover:text-[#1CA6A3] transition">
                  info@eitinstitute.org
                </a>
              </li>
              <li>
                <a href="https://trainandemploy.org" className="hover:text-[#1CA6A3] transition">
                  trainandemploy.org
                </a>
              </li>
              <li>313.469.0581</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-[20px]  tracking-[0.14em] text-[#1CA6A3] font-semibold mb-5 pb-2 border-b border-[#74B4E0]/25">
              Office Hours
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-lg text-[#9ab0b0]">
                <span className="w-1.5 h-1.5 bg-[#5FB673] rounded-full" />
                Monday – Friday
              </li>
              <li className="text-base text-[#c8d8d8] font-medium pl-4">
                9:00 am – 4:00 pm
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-[#5a7272]">
        
        {/* Left side (phone) */}
        <div className="flex items-center text-[14px] gap-2">
          <span className="w-1.5 h-1.5 bg-[#5FB673] rounded-full" />
          Office: 313.469.0581
        </div>

        {/* Right side (copyright) */}
        <div className="text-right text-[15px]">
          © {year} Emerging Industries Training Institute. All rights reserved.
        </div>

      </div>

    </footer>
  );
};

export default Footer;