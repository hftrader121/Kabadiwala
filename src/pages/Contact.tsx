import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { FaWhatsapp } from "react-icons/fa";
import QRImage from "@/assets/hf_contact_qr.png"; // adjust path if needed
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Navigation as NavigationIcon,
  Star
} from "lucide-react";

const Contact = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/919958654732?text=Hi%20I%20want%20to%20sell%20scrap", "_blank");
  };

  const openMaps = () => {
  window.open(
    "https://www.google.com/maps?q=H.F+Traders,+Sanjay+Camp,+Singapore+Embassy,+Chanakyapuri,+New+Delhi,+Delhi+110021",
    "_blank"
  );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Get in touch with us for the best scrap prices and professional service. 
            We're here to help you turn your waste into worth.
          </p>
        </div>
      </section>

      


      
      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            
            {/* Phone */}
            <Card className="text-center bg-gradient-card shadow-card hover:shadow-eco transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Call Us</h3>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-primary">9958654732</p>
                  <p className="text-lg font-semibold text-primary">9015956211</p>
                  <p className="text-sm text-muted-foreground">Available 6 AM - 10 PM</p>
                </div>
                <Button 
                  className="mt-4 w-full" 
                  onClick={() => window.open("tel:+919958654732")}
                >
                  Call Now
                </Button>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="text-center bg-gradient-card shadow-card hover:shadow-eco transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle size={42} />
                </div>
                <h3 className="text-xl font-bold mb-3">WhatsApp</h3>
                <p className="text-muted-foreground mb-4">
                  Quick response and instant quotes via WhatsApp
                </p>
                <Button 
                  className="mt-4 w-full bg-green-500 hover:bg-green-600" 
                  onClick={openWhatsApp}
                >
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="text-center bg-gradient-card shadow-card hover:shadow-eco transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-secondary text-secondary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Email</h3>
                <p className="text-lg font-semibold text-primary mb-2">hftraders121@gmail.com</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Send us details and photos of your scrap
                </p>
                <Button 
                  variant="secondary" 
                  className="mt-4 w-full"
                  onClick={() => window.open("mailto:hftraders121@gmail.com")}
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Location & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Address Card */}
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="text-primary" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">H.F Traders</h4>
                  <p className="text-muted-foreground">
                    Sanjay Camp, Singapore Embassy, <br />
                    Chanakyapuri, New Delhi, <br />
                    Delhi 110021
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-2">Business Hours</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Monday - Sunday: 6:00 AM - 10:00 PM</p>
                      </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button onClick={openMaps} className="flex-1">
                    <NavigationIcon className="mr-2" size={16} />
                    Get Directions
                  </Button>
                  <Button variant="outline" onClick={openWhatsApp}>
                    <MessageCircle className="mr-2" size={16} />
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="bg-gradient-card shadow-card overflow-hidden">
              <div className="h-full min-h-[400px] bg-muted flex items-center justify-center relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='16' fill='%236b7280'%3EClick to view map%3C/text%3E%3C/svg%3E")`
                  }}
                  onClick={openMaps}
                >
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                      <MapPin size={48} className="mx-auto mb-3 text-primary" />
                      <p className="font-semibold text-primary">Chanakyapuri, New Delhi</p>
                      <p className="text-sm text-muted-foreground">Click to open in Google Maps</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Service Areas</h2>
            <p className="text-muted-foreground">We provide pickup services across Delhi NCR</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Central Delhi", "South Delhi", "North Delhi", 
              "East Delhi", "West Delhi", "New Delhi",
              "Gurgaon", "Noida", "Faridabad",
              "Ghaziabad", "Greater Noida", "Dwarka"
            ].map((area) => (
              <Card key={area} className="text-center p-4 bg-gradient-card">
                <p className="font-medium">{area}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
<section className="py-20 bg-muted/20">
  <div className="container mx-auto px-4">
    <div className="text-center mb-14">
      <h2 className="text-4xl font-extrabold mb-3 text-primary">What Our Customers Say</h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        💬 50+ Years. 1000+ Clients. One Name Everyone Trusts — <strong>HF Traders</strong>.
      </p>
      <div className="mt-6 inline-block bg-primary text-white px-4 py-1.5 rounded-full shadow-md text-sm">
        ⭐ "Wall of Trust" – Celebrating Decades of Honest Business
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
        <p className="text-base text-gray-700 italic mb-4">
          “HF Traders made our factory’s waste recycling seamless. Professional team, digital
          billing, and on-time pickups. Their service saved us time and money.”
        </p>
        <div className="font-semibold text-primary">— Rajeev Sharma, Okhla</div>
        <div className="text-xs text-gray-500">Industrial Partner</div>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
        <p className="text-base text-gray-700 italic mb-4">
          “As an NGO, transparency matters. HF Traders gave us clean, honest pricing with
          proper receipts. It’s rare to find this level of ethics.”
        </p>
        <div className="font-semibold text-primary">— Nidhi Arora, New Delhi</div>
        <div className="text-xs text-gray-500">NGO Coordinator</div>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
        <p className="text-base text-gray-700 italic mb-4">
          “Quick response, proper weighing, and great communication. HF Traders is my go-to
          partner for all site scrap handling.”
        </p>
        <div className="font-semibold text-primary">— Imran Sheikh, Rohini</div>
        <div className="text-xs text-gray-500">Contractor</div>
      </div>

      {/* Testimonial 4 */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
        <p className="text-base text-gray-700 italic mb-4">
          “It’s not just about scrap—it’s about service. HF Traders has been our family’s
          trusted partner for 20+ years. From household cleanups to estate clearing—they do it all.”
        </p>
        <div className="font-semibold text-primary">— Kavita Bansal, Chanakyapuri</div>
        <div className="text-xs text-gray-500">Homeowner</div>
      </div>

      {/* Testimonial 5 */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
        <p className="text-base text-gray-700 italic mb-4">
          “Great experience! Their Instagram is active, team is responsive on WhatsApp, and
          payments are immediate. Super smooth for a busy office like ours.”
        </p>
        <div className="font-semibold text-primary">— Ramesh Goyal, CP</div>
        <div className="text-xs text-gray-500">Office Manager</div>
      </div>

      {/* Testimonial 6 */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
        <p className="text-base text-gray-700 italic mb-4">
          “Trustworthy, punctual, and always professional. We’ve referred them to friends, schools,
          and even temples. HF Traders truly stands for trust.”
        </p>
        <div className="font-semibold text-primary">— Aftab Qureshi, South Delhi</div>
        <div className="text-xs text-gray-500">Community Leader</div>
      </div>
    </div>

    <div className="text-center mt-16">
      <p className="text-muted-foreground text-lg mb-6">
        📞 Want to experience trusted scrap service? Call us today at <strong>+91-99586 54732</strong> or message us on Instagram: <strong>@hftraders_official</strong>
      </p>
      <a
        href="tel:+919958654732"
        className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition duration-300"
      >
        Call Now & Get the Best Scrap Rates
      </a>
    </div>
    </div>
      </section>

      {/* CTA */}
<section className="py-20 bg-gradient-to-r from-[#e0f7fa] to-[#fce4ec] text-gray-800">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
    <p className="text-xl mb-8 opacity-90">
      Contact us today for a free quote and same-day pickup service
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button 
        variant="secondary" 
        size="lg"
        onClick={() => window.open("tel:+919958654732")}
        className="gap-2 bg-white text-gray-800 hover:bg-gray-100"
      >
        <Phone size={20} />
        Call Now
      </Button>
      <Button 
        variant="outline" 
        size="lg"
        onClick={openWhatsApp}
        className="gap-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
      >
        <MessageCircle size={20} />
        WhatsApp
      </Button>
    </div>
  </div>
</section>


      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Contact;