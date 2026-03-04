export default function WhatsappFloat() {
  const whatsappNumber = "526645601401";
  const msg = encodeURIComponent(
    "Hola, me gustaría solicitar información y una cotización de EGMR GROUP."
  );

  const href = `https://wa.me/${whatsappNumber}?text=${msg}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed z-50 bottom-5 right-5 rounded-2xl px-4 py-3 shadow-lg bg-[color:var(--egmr-ink)] text-white font-semibold hover:brightness-110 transition"
    >
      WhatsApp
    </a>
  );
}