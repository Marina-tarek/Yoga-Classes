import { DiJava } from "react-icons/di";
import { useNavigate } from "react-router-dom";

function About() {
  let navigate=useNavigate()
  return (
 (
<section>
  <div className="container mx-auto">
        <div className="min-h-screen    p-6 md:p-12">
      <div className="max-w-5xl mx-auto mb-8">
        <div className="flex items-center justify-between flex-wrap flex-col gap-y-2.5 md:flex-row">
          <h1 className="text-3xl font-extrabold">Yoga Center — Balance & Life</h1>
          <button onClick={()=>{navigate("/contact")}} className="cursor-pointer  md:inline-block px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition">
            Book Now
          </button>
        </div>
      </div>

      <main className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <section className="space-y-4 text-left">
          <span className="inline-block px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">About Yoga</span>
          <h2 className="text-3xl font-bold">Why Yoga?</h2>
          <p className="text-gray-700 leading-relaxed">
            Yoga is a holistic way to calm the mind, strengthen the body, and increase flexibility. We offer classes suitable for all
            levels — beginners, intermediate, and advanced practitioners.
            Our sessions focus on proper breathing, safe alignment, and balanced flows that help you build a sustainable routine.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <li className="p-3 bg-white border border-gray-400 rounded-lg shadow-sm">
              <strong>Morning Sessions</strong>
              <div className="text-sm text-gray-600">Energize your body and start your day in harmony.</div>
            </li>
            <li className="p-3 bg-white border border-gray-400 rounded-lg shadow-sm">
              <strong>Evening Sessions</strong>
              <div className="text-sm text-gray-600">Calm your mind and prepare for restful sleep.</div>
            </li>
            <li className="p-3 bg-white border border-gray-400 rounded-lg shadow-sm">
              <strong>Gentle Yoga (Yin)</strong>
              <div className="text-sm text-gray-600">Long holds for flexibility and deep relaxation.</div>
            </li>
            <li className="p-3 bg-white border border-gray-400 rounded-lg shadow-sm">
              <strong>Vinyasa Flow</strong>
              <div className="text-sm text-gray-600">Dynamic sequences to strengthen body and heart.</div>
            </li>
          </ul>

          <div className="mt-4 flex gap-3">
            <button className="px-4 py-2 bg-white border rounded-lg shadow hover:shadow-md transition">View Schedule</button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition">Join Now</button>
          </div>
        </section>

        <aside className="space-y-6">
          {/* GIF from Giphy */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExczBoMWlua2NzMmd2Njd0bW5odTUxdWRkYmwycXZ1ZjhqcTFlZGJ2cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Z1Ijc7kdlMj4pcJJPH/giphy.gif"
              alt="Yoga Breathing GIF"
              className="w-full object-fit"
            />
          </div>
        </aside>
      </main>

      <section className="max-w-5xl mx-auto mt-10">
        <h3 className="text-2xl font-bold text-left mb-4">Our Classes</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Beginner", desc: "Safe introduction to standing, sitting, and breathing" },
            { title: "Intermediate", desc: "Progressive flows to build strength" },
            { title: "Advanced", desc: "Challenging poses for balance and flexibility" },
          ].map((c) => (
            <article key={c.title} className="p-4 bg-white border border-gray-400 rounded-lg shadow-sm text-left">
              <h4 className="font-semibold">{c.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{c.desc}</p>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-sm text-gray-500">45 mins</span>
                <button className="px-3 py-1 bg-purple-50 text-purple-700 rounded">Details</button>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  </div>
</section>
  )
);
}

export default About