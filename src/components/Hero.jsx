import './AnimatedButton.css'; 

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-32 px-4 max-w-4xl mx-auto overflow-hidden">

      <img
        src="/glow.svg"
        alt="background glow"
        className="absolute top-0 left-1/2 -translate-x-1/2 z-0 opacity-30 blur-3xl pointer-events-none"
      />

      <div
        className="mb-4 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-sm text-pink-400 backdrop-blur-md animate-fadeInUp"
        style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
      >
        Announcing our $1.4M Fundraise
      </div>

      <h1
        className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fadeInUp"
        style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
      >
        <span className="block text-white">Dimension is the new</span>
        <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-300 bg-clip-text text-transparent">
          standard for collaboration
        </span>
      </h1>

      <p
        className="text-lg text-white/70 mb-8 animate-fadeInUp"
        style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
      >
        Chat, code, cloud, deployments, and more.
      </p>

      <div
        className="flex items-center gap-4 bg-white/10 border border-white/20 p-2 rounded-xl backdrop-blur-sm w-full max-w-md animate-fadeInUp"
        style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
      >
        <input
          type="email"
          placeholder="Email address..."
          className="flex-1 px-4 py-2 bg-transparent text-white focus:outline-none placeholder:text-white/50"
        />

        <button className="animated-border-btn relative z-10 text-white font-semibold px-5 py-2 rounded-lg hover:scale-105 transition">
          Join waitlist
        </button>
      </div>
    </section>
  );
}

