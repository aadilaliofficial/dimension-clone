export default function Footer() {
  return (
    <footer
      className="py-10 px-6 text-center text-white/50 border-t border-white/10 bg-[#0a0a23]"
      data-aos="fade-up"
    >
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="text-white font-semibold">Dimension.dev</span> — All rights reserved
      </p>
    </footer>
  );
}
