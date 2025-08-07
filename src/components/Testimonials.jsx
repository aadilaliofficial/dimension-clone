export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0a0a23] text-white px-6">
      <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          What our users say
        </h2>

        <div className="space-y-10">
          {[
            {
              quote: "Dimension has completely changed the way our team works remotely.",
              name: "Aditi Sharma, DevOps Lead",
            },
            {
              quote: "A product that just gets it. Clean, fast, and powerful.",
              name: "Rohan Mehta, CTO, Trilo",
            },
            {
              quote: "Truly next-gen. It's like everything we needed bundled in one platform.",
              name: "Sneha Verma, Product Manager",
            },
          ].map((testimonial, idx) => (
            <blockquote
              key={idx}
              className="bg-white/5 p-6 rounded-xl border border-white/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <p className="text-white/80 italic leading-relaxed">"{testimonial.quote}"</p>
              <footer className="mt-4 text-pink-400 font-medium">— {testimonial.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
