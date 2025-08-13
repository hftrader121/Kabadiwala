import React from "react";

type Testimonial = {
  id: number;
  name: string;
  title?: string;
  location?: string;
  quote: string;
};

type Props = {
  brandName?: string;
  phone?: string;
  address?: string;
  className?: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ravi Mishra",
    title: "Local Teacher",
    location: "Husenpur",
    quote:
      "I purchased a ceiling fan from Spark X Electronics last April, and I couldn’t be happier. The quality is superb, and it works silently even at high speed. The installation team came on time, set it up quickly, and explained how to care for it. In the peak of summer, that fan has been my savior. Highly recommend their products!",
  },
  {
    id: 2,
    name: "Rekha Sharma",
    title: "Homemaker",
    location: "Ambedkar Nagar",
    quote:
      "I had a table fan that stopped working just before my daughter’s wedding. I was stressed, but Spark X’s repair team came the same day and fixed it within an hour. They even cleaned it before returning it. That level of service is rare these days.",
  },
  {
    id: 3,
    name: "Arif Khan",
    title: "Contractor",
    location: "Akbarpur",
    quote:
      "I’ve been buying lights and wiring supplies from Spark X Electronics for my small construction business. Their prices are fair, but what I love most is their advice. They don’t just sell – they guide me to the right product for the job. That’s why I keep coming back.",
  },
  {
    id: 4,
    name: "Pooja Verma",
    title: "Student",
    location: "Husenpur",
    quote:
      "Diwali was approaching, and I wanted to decorate my home with beautiful lights. Spark X Electronics had an amazing collection, from LED strips to fancy bulbs. The quality was excellent, and the prices didn’t break my budget. My home looked magical, and guests couldn’t stop praising the decorations!",
  },
  {
    id: 5,
    name: "Suresh Yadav",
    title: "Farmer",
    location: "Jalalpur",
    quote:
      "My cooler suddenly stopped cooling in June. I thought I’d have to buy a new one, but Spark X’s technician checked it, replaced a small part, and it started working like new. They saved me thousands of rupees. That’s honesty and skill you can trust.",
  },
  {
    id: 6,
    name: "Rajesh Gupta",
    title: "Tea Stall Owner",
    location: "Musalman Chauraha",
    quote:
      "I run a small tea stall and needed a wall fan urgently in the summer. Spark X not only sold me a high-quality fan but also delivered and installed it the same day. That quick service meant my customers could enjoy tea without sweating in the heat.",
  },
  {
    id: 7,
    name: "Sunita Devi",
    title: "Homemaker",
    location: "Ambedkar Nagar",
    quote:
      "It’s been three years since I bought my ceiling fans from Spark X Electronics, and they’re still running like the first day. No noise, no speed issues. That’s why I tell everyone in my family to buy from here.",
  },
  {
    id: 8,
    name: "Vikram Singh",
    title: "School Principal",
    location: "Husenpur",
    quote:
      "We ordered LED tube lights for our school classrooms. Spark X Electronics not only gave us a bulk discount but also sent a team to install them properly. The classrooms are now bright, and the students are more comfortable. Thank you for supporting education in our village!",
  },
  {
    id: 9,
    name: "Meena Kumari",
    title: "Shopkeeper",
    location: "Ambedkar Nagar",
    quote:
      "I’m not very technical, but whenever I go to Spark X, the staff patiently explain product features in simple words. They never push expensive items – they suggest what fits my needs. That’s rare in today’s market.",
  },
  {
    id: 10,
    name: "Akash Singh",
    title: "Mobile Repair Shop Owner",
    location: "Akbarpur",
    quote:
      "I had a faulty wiring issue at my shop. Spark X’s electrician fixed it quickly and also checked other points to ensure safety. They don’t just do business; they care for your well-being.",
  },
  {
    id: 11,
    name: "Anita Singh",
    title: "Homemaker",
    location: "Ambedkar Nagar",
    quote:
      "Our home needed a cooler for my elderly parents. Spark X recommended a model that’s energy-efficient and easy to clean. It has made summers bearable for them. Thank you for understanding our needs.",
  },
  {
    id: 12,
    name: "Kamal Patel",
    title: "Grocery Shop Owner",
    location: "Husenpur",
    quote:
      "I run a grocery store, and proper lighting is important for display. Spark X gave me affordable yet stylish lighting solutions that attract customers. My sales have improved!",
  },
  {
    id: 13,
    name: "Vishal Kumar",
    title: "College Student",
    location: "Ambedkar Nagar",
    quote:
      "I bought a desk lamp for late-night study sessions. The light is bright but not harsh, and it helps me focus. Great product at a great price.",
  },
  {
    id: 14,
    name: "Imran Ali",
    title: "Farmer",
    location: "Husenpur",
    quote:
      "Spark X Electronics is my first choice for any home appliance. They stand by their products.",
  },
  {
    id: 15,
    name: "Geeta Devi",
    title: "Teacher",
    location: "Ambedkar Nagar",
    quote:
      "Best repair service in Ambedkar Nagar. Fast, affordable, and reliable.",
  },
  {
    id: 16,
    name: "Rohit Chauhan",
    title: "Shop Owner",
    location: "Husenpur",
    quote:
      "They delivered my fan to a nearby village without extra charge. That’s service!",
  },
  {
    id: 17,
    name: "Sanjay Kumar",
    title: "Mechanic",
    location: "Ambedkar Nagar",
    quote:
      "Whenever I need a quick fix or replacement, Spark X is just a call away.",
  },
];

export default function SparkXTestimonials({
  brandName = "Spark X Electronics",
  phone = "+91 91207 95494",
  address = "Husenpur Dhaba or Chauraha, Allapur Ambedkar Nagar - 224181",
  className = "",
}: Props) {
  return (
    <section className={`py-12 px-4 sm:px-6 lg:px-8 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            What Customers Say About {brandName}
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Trusted by families, shop owners, and local schools across Husenpur and
            Ambedkar Nagar. Read real stories about our products, repairs, and
            fast service.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column: summary & CTA */}
          <aside className="lg:col-span-1 bg-gray-50 p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold">Why People Choose Us</h2>
            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
              <li>High-quality fans, coolers, and lighting</li>
              <li>Same-day repairs for urgent problems</li>
              <li>Honest pricing and practical advice</li>
              <li>Community-first approach — we treat customers like family</li>
            </ul>

            <div className="mt-6">
              <p className="text-sm text-gray-600">Visit us:</p>
              <p className="font-medium">{address}</p>
              <p className="mt-3 text-sm text-gray-600">Call now:</p>
              <a href={`tel:${phone}`} className="text-indigo-600 font-semibold">
                {phone}
              </a>
            </div>

            <div className="mt-6">
              <a
                href={`tel:${phone}`}
                className="inline-block w-full text-center px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium shadow-sm"
                aria-label={`Call ${brandName}`}
              >
                Call {brandName}
              </a>
            </div>
          </aside>

          {/* Testimonials grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t) => (
                <article
                  key={t.id}
                  className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm"
                  aria-labelledby={`testimonial-${t.id}-title`}
                >
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-semibold text-gray-700">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div>
                      <h3
                        id={`testimonial-${t.id}-title`}
                        className="text-sm font-semibold"
                      >
                        {t.name}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {t.title} • {t.location}
                      </p>
                    </div>
                  </div>

                  <blockquote className="mt-4 text-gray-700 text-sm leading-relaxed">
                    “{t.quote}”
                  </blockquote>
                </article>
              ))}
            </div>

            {/* Long form trust & summary section */}
            <div className="mt-8 bg-gradient-to-r from-indigo-50 to-white p-6 rounded-2xl border border-indigo-100">
              <h3 className="text-lg font-semibold">Our Promise to the Community</h3>
              <p className="mt-3 text-gray-700">
                At {brandName}, we’re proud to serve Husenpur and nearby towns with
                honest pricing, high-quality products, and technicians who treat
                your home like their own. Whether it’s a quick repair before a
                celebration, energy-efficient lighting for a classroom, or a
                reliable fan to keep your family cool, our team shows up on time
                and does the job right.
              </p>

              <p className="mt-3 text-gray-700">
                We stock trusted brands and models that last, and we stand behind
                our workmanship. Many of our customers come back season after
                season — that kind of trust isn’t given; it’s earned.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <h4 className="text-2xl font-bold">Fast</h4>
                  <p className="text-xs text-gray-600 mt-1">Same-day repairs</p>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-bold">Fair</h4>
                  <p className="text-xs text-gray-600 mt-1">Honest pricing</p>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-bold">Friendly</h4>
                  <p className="text-xs text-gray-600 mt-1">Community-first</p>
                </div>
              </div>
            </div>

            {/* CTA strip */}
            <div className="mt-6 p-6 rounded-2xl bg-indigo-600 text-white flex items-center justify-between">
              <div>
                <h4 className="text-lg font-semibold">Ready to experience the Spark X difference?</h4>
                <p className="text-sm opacity-90 mt-1">Call us for a free consultation.</p>
              </div>
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-indigo-600 rounded-lg font-semibold shadow-sm"
                aria-label={`Call ${brandName}`}
              >
                {phone}
              </a>
            </div>

            {/* Small FAQs or micro testimonials */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-white border">
                <h5 className="font-semibold">Do you install too?</h5>
                <p className="text-sm text-gray-600 mt-1">
                  Yes — our trained technicians provide installation and safety
                  checks as part of the service.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white border">
                <h5 className="font-semibold">Do you offer bulk discounts?</h5>
                <p className="text-sm text-gray-600 mt-1">
                  For schools, shops, and contractors we provide tailored discounts
                  on bulk purchases and installation packages.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer testimonial quotes */}
        <div className="mt-10 text-center text-gray-600">
          <p className="italic max-w-3xl mx-auto">
            "Spark X Electronics isn’t just a shop — it’s a part of daily life in
            our community. From weddings to classrooms to small shops, they
            always deliver with care and craftsmanship."
          </p>

          <p className="mt-4 text-sm">
            Visit us at <strong>{address}</strong> or call <a href={`tel:${phone}`}>{phone}</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
