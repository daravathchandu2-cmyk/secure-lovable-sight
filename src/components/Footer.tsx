import { Shield } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: ["Features", "How It Works", "Pricing", "API Docs"],
    Company: ["About Us", "Careers", "Press Kit", "Contact"],
    Resources: ["Blog", "Help Center", "Community", "Status"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Compliance"],
  };

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-secondary" />
              <span className="text-2xl font-bold">Lovable</span>
            </div>
            <p className="text-white/70 text-sm">
              AI-powered product authenticity verification for a safer marketplace.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-lg mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 Lovable. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                Twitter
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                LinkedIn
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
