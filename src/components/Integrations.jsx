export default function Integrations() {
  return (
    <section
      className="py-20 bg-[#0a0a23] text-center text-white px-4"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-semibold mb-4">Works with your favorite tools</h2>
      <p className="text-white/60 mb-12">
        We integrate with everything your team already uses.
      </p>

      <div className="flex flex-wrap justify-center gap-12 items-center max-w-4xl mx-auto">
        {[
          {
            src: "https://toppng.com/uploads/preview/new-slack-logo-vector-11573841407oge7pdoqjg.png",
            alt: "Slack",
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
            alt: "GitHub",
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
            alt: "Figma",
          },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
            alt: "Notion",
          },
        ].map((tool, i) => (
          <img
            key={i}
            src={tool.src}
            alt={tool.alt}
            className="h-10 grayscale hover:grayscale-0 transition duration-300 hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
          />
        ))}
      </div>
    </section>
  );
}
