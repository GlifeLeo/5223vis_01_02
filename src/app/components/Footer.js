
export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo & Description */}
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span className="text-lg">✦✦ CORAL ✦✦</span>
          </h2>
          <p className="text-sm mt-3">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua
          </p>
          {/* Social Icons using Heroicons */}
          <div className="flex gap-4 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
        </div>

        {/* Catalog */}
        <div>
          <h3 className="font-bold mb-3">CATALOG</h3>
          <ul className="space-y-2 text-sm">
            <li>Necklaces</li>
            <li>Hoodies</li>
            <li>Jewelry Box</li>
            <li>T-Shirt</li>
            <li>Jacket</li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-bold mb-3">ABOUT US</h3>
          <ul className="space-y-2 text-sm">
            <li>Our Producers</li>
            <li>Sitemap</li>
            <li>FAQ</li>
            <li>About Us</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Customer Services */}
        <div>
          <h3 className="font-bold mb-3">CUSTOMER SERVICES</h3>
          <ul className="space-y-2 text-sm">
            <li>Contact Us</li>
            <li>Track Your Order</li>
            <li>Product Care & Repair</li>
            <li>Book An Appointment</li>
            <li>Shipping & Returns</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
