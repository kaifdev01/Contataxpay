import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Globe,
} from "lucide-react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white rounded-t-[3rem] px-8 md:mx-5 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <h3 className="text-xl font-bold">Contataxpay</h3>
            </div>

            <p className="text-sm text-blue-100 mb-6 leading-relaxed">
              Digitale Buchhaltungsplattform, die die Art und Weise verändert,
              wie Unternehmer und Buchhalter ihre Finanzen verwalten.
            </p>

            <div className="text-sm text-blue-100 space-y-2 mb-6">
              <p>
                <span className="font-semibold">Firma:</span> SMARTPOINT DIGITAL
                VISION SRL – Zweigniederlassung Deutschland
              </p>
              <p>
                <span className="font-semibold">Hauptadresse:</span>{" "}
                Raiffeisenweg 5, 88416 Erlenmoos, Deutschland
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-blue-600/40 hover:bg-blue-600/60 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-600/40 hover:bg-blue-600/60 rounded-full flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-600/40 hover:bg-blue-600/60 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Produkt */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Produkt</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Funktionen
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Preise
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Häufig gestellte Fragen
                </a>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Rechtliches
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Allgemeine Geschäftsbedingungen
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Datenschutzerklärung
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sicherheit
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600/40 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span>neurik@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600/40 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div>+69 196 6574832</div>
                  <div>+69 196 6578832</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600/40 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <span>+49 789 6578699</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600/40 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Berlin, Deutschland</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600/40 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <span>Support DE/EN/RO/RU</span>
              </li>
            </ul>

            <button className="mt-6 flex items-center gap-2 text-sm  px-4 py-2 ">
              <MessageCircle className="w-4 h-4" />
              Kontaktieren Sie uns
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex items-center justify-between pt-6 border-t border-blue-400/20">
          <p className="text-sm text-blue-100">
            2024 Contataxpay. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
