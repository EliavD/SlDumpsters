import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dumpster Rental in Ohio | Fast, Affordable Roll-Off Dumpsters</title>
        <meta name="description" content="Professional dumpster rental services in Dublin, Hilliard, Columbus, and more. Book online for fast delivery and affordable pricing." />
      </Head>
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-green-700 text-white py-16 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ohio's Trusted Dumpster Rental Service</h1>
          <p className="mb-6 text-lg">Fast delivery, affordable pricing, and easy online booking.</p>
          <a href="/book-now" className="bg-white text-green-700 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition">Get a Quote</a>
        </section>
        {/* Service Overview */}
        <section className="py-12 px-4 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Our Dumpster Rental Services</h2>
          <ul className="grid md:grid-cols-3 gap-6">
            <li className="bg-white p-6 rounded shadow">Residential Cleanouts</li>
            <li className="bg-white p-6 rounded shadow">Construction Dumpsters</li>
            <li className="bg-white p-6 rounded shadow">Commercial Waste Removal</li>
          </ul>
        </section>
        {/* Dumpster Sizes */}
        <section className="py-12 px-4 bg-gray-100">
          <h2 className="text-2xl font-bold mb-4 text-center">Dumpster Sizes Available</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="bg-white p-6 rounded shadow w-full md:w-1/3 text-center">
              <h3 className="font-bold text-lg mb-2">14 Yard</h3>
              <p>Perfect for small cleanouts and renovations.</p>
            </div>
            <div className="bg-white p-6 rounded shadow w-full md:w-1/3 text-center">
              <h3 className="font-bold text-lg mb-2">16 Yard</h3>
              <p>Great for medium projects and construction debris.</p>
            </div>
            <div className="bg-white p-6 rounded shadow w-full md:w-1/3 text-center">
              <h3 className="font-bold text-lg mb-2">20 Yard</h3>
              <p>Ideal for large cleanouts and commercial jobs.</p>
            </div>
          </div>
        </section>
        {/* Quick Quote Form */}
        <section className="py-12 px-4 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Get a Quick Quote</h2>
          <form className="bg-white p-6 rounded shadow grid gap-4">
            <input className="border p-2 rounded" type="text" placeholder="Name" required />
            <input className="border p-2 rounded" type="email" placeholder="Email" required />
            <input className="border p-2 rounded" type="tel" placeholder="Phone" required />
            <input className="border p-2 rounded" type="text" placeholder="Service Address" required />
            <button className="bg-green-700 text-white px-4 py-2 rounded font-semibold hover:bg-green-800 transition" type="submit">Request Quote</button>
          </form>
        </section>
        {/* Service Areas Map */}
        <section className="py-12 px-4 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Service Areas</h2>
          <div className="bg-white p-6 rounded shadow text-center">
            <p>We serve Dublin, Hilliard, Columbus, and surrounding Ohio areas.</p>
            <div className="mt-4">
              {/* Placeholder for map */}
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500">[Map Placeholder]</div>
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section className="py-12 px-4 bg-gray-100">
          <h2 className="text-2xl font-bold mb-4 text-center">What Our Customers Say</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <div className="bg-white p-6 rounded shadow w-full md:w-1/3">
              <p className="italic">"Fast delivery and great service! Highly recommend."</p>
              <span className="block mt-2 font-semibold">- Sarah, Dublin</span>
            </div>
            <div className="bg-white p-6 rounded shadow w-full md:w-1/3">
              <p className="italic">"Affordable pricing and easy booking process."</p>
              <span className="block mt-2 font-semibold">- Mike, Hilliard</span>
            </div>
            <div className="bg-white p-6 rounded shadow w-full md:w-1/3">
              <p className="italic">"Professional and reliable. Will use again!"</p>
              <span className="block mt-2 font-semibold">- Lisa, Columbus</span>
            </div>
          </div>
        </section>
        {/* Contact Info */}
        <footer className="py-8 px-4 text-center bg-green-700 text-white">
          <p>Call us: (555) 123-4567 | Email: info@ohiodumpsters.com</p>
          <p className="mt-2">&copy; {new Date().getFullYear()} Ohio Dumpster Rentals. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
} 