export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-2">Your Name</h1>
        <p className="text-lg text-gray-600">Engineer • Designer • Builder</p>

        <div className="flex justify-center gap-4 mt-6">
          <a className="px-4 py-2 border rounded-lg hover:bg-gray-100">GitHub</a>
          <a className="px-4 py-2 border rounded-lg hover:bg-gray-100">LinkedIn</a>
          <a className="px-4 py-2 border rounded-lg hover:bg-gray-100">Email</a>
        </div>
      </header>

      {/* About */}
      <section className="max-w-3xl mx-auto px-4 mt-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <div className="bg-white rounded-2xl shadow p-6 leading-relaxed text-gray-700">
          I'm a multidisciplinary developer passionate about creating impactful, elegant, and human-centered technology. I love building interactive systems, intuitive UIs, and scalable solutions.
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto px-4 mt-16">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((p) => (
            <div key={p} className="bg-white rounded-2xl shadow p-6 space-y-2">
              <h3 className="text-xl font-semibold">Project {p}</h3>
              <p className="text-gray-600">A short description of your project goes here.</p>
              <button className="mt-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800">View More</button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-3xl mx-auto px-4 mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-600 mb-4">Feel free to reach out anytime.</p>
        <a className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 cursor-pointer">
          Send a Message
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-12 mt-16">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
      <div className="p-10 bg-red-500 text-white">
  If this is red, Tailwind works!
</div>
    </div>
  );
}
