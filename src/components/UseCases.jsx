export default function UseCases() {
  return (
    <section className="py-24 bg-[#0b0b25] text-white text-center px-6 animate-fadeInUp">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Built for every use case
      </h2>
      <p className="text-white/60 mb-12 max-w-3xl mx-auto">
        Whether you're a dev team building the next big app, a designer collaborating in real-time, or a founder managing async communication — Dimension adapts to you.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Startups",
            desc: "Launch faster with built-in integrations and cloud support.",
          },
          {
            title: "Designers",
            desc: "Work alongside developers with real-time updates.",
          },
          {
            title: "Remote Teams",
            desc: "Collaborate globally with low-latency infra.",
          },
          {
            title: "Product Managers",
            desc: "Keep everyone aligned with transparent task flows.",
          },
          {
            title: "Developers",
            desc: "Powerful CLI, GitHub integrations, and instant deployments.",
          },
          {
            title: "Enterprises",
            desc: "Secure, scalable, and customizable for large teams.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/5 p-6 rounded-xl border border-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-white/70">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
