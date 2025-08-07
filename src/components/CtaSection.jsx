export default function CtaSection() {
  return (
    <section
      className="py-20 bg-primary text-center relative overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <img
        src="/glow.svg"
        alt="glow"
        className="absolute top-0 left-1/2 -translate-x-1/2 opacity-30 blur-3xl z-0"
      />
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Join the future of collaboration
        </h2>
        <p className="text-white/60 mb-6">
          It’s free to try. No credit card required.
        </p>
        <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 px-6 py-3 rounded-full text-black font-semibold shadow-md hover:scale-105 transition-all duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
}
