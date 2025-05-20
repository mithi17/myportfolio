import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> REAL-TIME NEWS ANALYSIS</h3>
              <p className="text-gray-400 mb-4">
              I have experience working with Python for web crawling and portal development.
              Developed custom web crawlers to gather NewsArticles.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Flask", "python", "MongoDB", "javaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-green-400 hover:text-blue-100 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Maids Service | MERN Stack</h3>
              <p className="text-gray-400 mb-4">
              Set up user authentication with JWT bcrypt for secure login/sign-up users and service providers.
              Implemented features such as user authentication,data visualization, and search functionality within web portals.
              Built an dintegrated RESTful APIs to enables seamless communication between front-end and back-end.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["MongoDB","Express.js", "React.js","Node.js"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-green-400 hover:text-blue-100 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">E-Commerce Web App</h3>
              <p className="text-gray-400 mb-4">
                Full-stack e-commerce with modern UI, secure payment
                integration, and customizable product inventory.
                Created a slick, mobile-friendly UI with React and Tailwind.
                Users can add, browse, filter, and buy/sell cars easily.
                Built secure REST APIs to handle listings, users, transactions, and reviews.
                Included smart filters & search by price, model, year, etc. with MongoDB queries.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["MongoDB","Express.js", "React.js","Node.js"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-green-400 hover:text-blue-100 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
