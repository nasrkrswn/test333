export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 text-center text-gray-400">
      <div className="container mx-auto px-4">
        جميع الحقوق محفوظة © {new Date().getFullYear()} — Karim Hesham El TOKHY
      </div>
    </footer>
  );
}
