import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";
import qrCode from "@/assets/hf_traders_qr_code.png";
import reviewQR from "@/assets/google_review_qr_code.png"; // ✅ NEW QR for Google Review

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#e0f7fa] to-[#fce4ec] text-gray-800">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">H.F Traders</h3>
            <p className="text-gray-700 mb-3">"Turning Waste into Worth Since 1974"</p>
            <p className="text-sm text-gray-600">
              Trusted scrap merchant and waste management company serving Delhi NCR for nearly 50 years.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-blue-500" />
                <span className="text-sm">
                  Sanjay Camp, Singapore Embassy,<br />
                  Chanakyapuri, New Delhi 110021
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500" />
                <div className="text-sm space-y-1">
                  <div>9958654732</div>
                  <div>9015956211</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500" />
                <a
                  href="mailto:hftraders121@gmail.com"
                  className="text-sm text-blue-500 hover:underline"
                >
                  hftraders121@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Instagram size={18} className="text-pink-500" />
                <a
                  href="https://instagram.com/hftraders_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 hover:underline"
                >
                  @hftraders_official
                </a>
              </div>

              {/* ✅ QR Codes Side by Side */}
              <div className="flex flex-wrap gap-6 pt-6">
                {/* Contact QR */}
                <div className="flex flex-col items-center">
                  <img
                    src={qrCode}
                    alt="HF Traders QR Code"
                    width={120}
                    height={120}
                    className="w-[120px] h-[120px] object-contain border border-gray-600 rounded shadow"
                  />
                  <span className="text-xs text-gray-900 mt-2 text-center">Scan to save contact</span>
                </div>

                {/* Google Review QR */}
                <div className="flex flex-col items-center">
                  <img
                    src={reviewQR}
                    alt="Review QR Code"
                    width={120}
                    height={120}
                    className="w-[120px] h-[120px] object-contain border border-gray-600 rounded shadow"
                  />
                  <a
                    href="https://g.page/r/Ceg7Rbm0nsDGEAE/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 underline mt-2 text-center"
                  >
                    Scan to give a review
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            <div className="flex items-center gap-3 mb-4">
              <Clock size={18} className="text-blue-500" />
              <span className="text-sm">Monday - Sunday: 6:00 AM – 10:00 PM</span>
            </div>

            <h5 className="font-semibold mb-2">Quick Services</h5>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
              <li>Free Pickup Service</li>
              <li>Same Day Evaluation</li>
              <li>Best Market Rates</li>
              <li>Instant Payment</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 mt-10 pt-4 text-center">
          <p className="text-sm text-gray-600">
            © 2025 H.F Traders. All rights reserved. | Established 1974 | Licensed Scrap Dealer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
