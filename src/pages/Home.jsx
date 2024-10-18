import React from 'react';
import { Search } from 'lucide-react';
import demoimg from '../Pics/waterfall.jpg';


// 1. default 
// 2. cards of freeelnacer
// 3. Services
// 4. Why blockHire
    // Ex.  decentralized
// 5. Testimonials
// 6. contact us




const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">Find Freelance Services on BlockHire</h1>
            <p className="text-lg mb-4">Hire talented freelancers to offer your skills to get work done.</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter your search..."
                className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-yellow-500 text-white p-2 rounded-r-lg hover:bg-yellow-600 transition duration-300">
                <Search size={24} />
              </button>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-yellow-500 mr-2">★★★★☆</span>
              <span className="text-sm text-gray-600">4.85 / 5 average | 2M+ reviews</span>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img src={demoimg} alt="Freelancer working" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Freelance Services Marketplace</h2>
        <p className="text-lg mb-8">Hire talented freelancers to offer your skills to get work done.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src={demoimg} alt="Freelancer coding" className="rounded-lg shadow-md mb-4" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Find the perfect freelancer</h3>
            <p className="text-lg">Browse through a wide range of talented freelancers offering their services on Fivito. Find the perfect match for your project needs.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Showcase your skills</h3>
            <p className="text-lg">Showcase your skills and expertise to a global audience on Fivito. Get hired for exciting projects.</p>
          </div>
          <div>
            <img src={demoimg} alt="Freelancer workspace" className="rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      <section>
        <img src={demoimg} alt="Freelancer working on computer" className="w-full rounded-lg shadow-lg" />
      </section>
    </div>
  );
};

export default Home;