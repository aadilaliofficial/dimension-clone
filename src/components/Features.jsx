export default function Features() {
  const features = [
    {
      title: "Realtime Collaboration",
      desc: "Work together with your team in real time, from anywhere in the world.",
    },
    {
      title: "Deploy with 1-click",
      desc: "Launch and scale your project instantly with zero config deployment.",
    },
    {
      title: "Integrated Cloud",
      desc: "Bundled storage, hosting, and compute—all in one platform.",
    },
  ];

  return (
    <section className="py-20 bg-[#0a0a23] text-white px-6" id="features">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          data-aos="fade-up"
        >
          Everything your team needs
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm shadow-md hover:shadow-pink-500/20 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
