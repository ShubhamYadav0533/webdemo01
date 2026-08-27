import React, { useState } from 'react';

const properties = [
  {
    id: 1,
    title: "Modern Oceanfront Villa",
    location: "Miami Beach, FL",
    price: "$2,450,000",
    beds: 4,
    baths: 3,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Beverly Hills Luxury Estate",
    location: "Los Angeles, CA",
    price: "$4,850,000",
    beds: 5,
    baths: 5,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Manhattan Glass Penthouse",
    location: "New York, NY",
    price: "$3,200,000",
    beds: 3,
    baths: 3,
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Alpine Mountain Chalet",
    location: "Aspen, CO",
    price: "$2,900,000",
    beds: 4,
    baths: 4,
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80"
  }
];

export default function App() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      
      {/* Navbar */}
      <header className="border-b border-slate-800 bg-slate-900/90 sticky top-0 z-20 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">
            Haven<span className="text-amber-400">Homes</span>
          </div>
          <nav className="hidden sm:flex gap-6 text-sm text-slate-300">
            <a href="#properties" className="hover:text-amber-400">Properties</a>
            <a href="#about" className="hover:text-amber-400">About</a>
            <a href="#contact" className="hover:text-amber-400">Contact</a>
          </nav>
          <a href="#contact" className="bg-amber-400 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm hover:bg-amber-300">
            Contact Agent
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 text-center px-4 max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Find Your Next <span className="text-amber-400">Luxury Home</span>
        </h1>
        <p className="text-slate-400 text-base max-w-xl mx-auto">
          Explore modern villas, oceanfront estates, and luxury penthouses across prime destinations.
        </p>

        {/* 2 CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="#properties"
            className="w-full sm:w-auto px-6 py-3 bg-amber-400 text-slate-950 font-bold rounded-lg text-sm hover:bg-amber-300 transition-colors shadow-md"
          >
            Explore Properties
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 bg-slate-900 border border-slate-800 text-slate-200 font-semibold rounded-lg text-sm hover:bg-slate-800 hover:text-white transition-colors"
          >
            Schedule Viewing
          </a>
        </div>
      </section>

      {/* Property Grid */}
      <section id="properties" className="py-12 bg-slate-900/40 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">Featured Properties</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties.map((item) => (
              <div key={item.id} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-amber-400/50 transition">
                <img src={item.image} alt={item.title} className="w-full h-44 object-cover" />
                <div className="p-4 space-y-2">
                  <div className="text-amber-400 font-bold text-lg">{item.price}</div>
                  <h3 className="font-bold text-white text-sm">{item.title}</h3>
                  <p className="text-slate-400 text-xs">{item.location}</p>
                  <div className="text-slate-400 text-xs pt-2 border-t border-slate-800 flex justify-between">
                    <span>{item.beds} Beds</span>
                    <span>{item.baths} Baths</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Why Choose HavenHomes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* Benefit 1 */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-6 hover:border-amber-400/50 transition">
              <div className="text-3xl font-bold text-amber-400 mb-3">🏆</div>
              <h3 className="font-bold text-lg mb-2">Expert Guidance</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Access seasoned real estate professionals with extensive knowledge of luxury markets and exclusive deals.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-6 hover:border-amber-400/50 transition">
              <div className="text-3xl font-bold text-amber-400 mb-3">✓</div>
              <h3 className="font-bold text-lg mb-2">Verified Properties</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Every listing is thoroughly vetted and inspected to ensure authenticity and value for your investment.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-6 hover:border-amber-400/50 transition">
              <div className="text-3xl font-bold text-amber-400 mb-3">⚡</div>
              <h3 className="font-bold text-lg mb-2">Quick Closing</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Streamlined process with dedicated support from initial inquiry to final paperwork completion.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-14 text-center px-4 max-w-2xl mx-auto space-y-3">
        <h2 className="text-2xl font-bold">Trusted Real Estate Agency</h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          Over 15 years connecting buyers with exclusive luxury real estate. We provide verified property listings and complete white-glove advisory support.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-14 bg-slate-900/60 border-t border-slate-800">
        <div className="max-w-md mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">Schedule a Viewing</h2>
          
          {submitted ? (
            <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center rounded-lg text-sm">
              Thank you! Our agent will contact you shortly.
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm focus:outline-none focus:border-amber-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm focus:outline-none focus:border-amber-400"
              />
              <textarea
                placeholder="Message or Property Interested In"
                rows={3}
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm focus:outline-none focus:border-amber-400"
              ></textarea>
              <button
                type="submit"
                className="w-full py-2.5 bg-amber-400 text-slate-950 font-bold rounded-lg text-sm hover:bg-amber-300 transition"
              >
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-slate-500 border-t border-slate-800">
        © 2026 HavenHomes Real Estate. All rights reserved.
      </footer>

    </div>
  );
}
