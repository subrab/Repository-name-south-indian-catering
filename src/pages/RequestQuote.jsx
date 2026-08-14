import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, MessageCircle, Mail } from "lucide-react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import services from "../data/services";

// TODO: Replace this with your real WhatsApp Business number,
// including country code, no + or spaces (e.g. "919876543210").
const WHATSAPP_NUMBER = "+917010120871";

// TODO: Replace this with the email address quote requests should go to.
const QUOTE_EMAIL = "subramaniabharathi5@gmail.com";
const WEB3FORMS_ACCESS_KEY = "8c5e91cd-275f-4b89-9816-c8d89d2d8e5a"; 

const initialForm = {
  name: "",
  email: "",
  phone: "",
  eventType: "",
  eventDate: "",
  guestCount: "",
  message: ""
};

export default function RequestQuote() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [method, setMethod] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function buildMessageLines() {
    return [
      "New Quote Request — Annam Global",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Event Type: ${form.eventType}`,
      form.eventDate ? `Event Date: ${form.eventDate}` : null,
      form.guestCount ? `Guest Count: ${form.guestCount}` : null,
      form.message ? `Message: ${form.message}` : null
    ].filter(Boolean);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // e.nativeEvent.submitter tells us which button was actually
    // clicked to trigger this submit — "whatsapp" or "email".
    const usedMethod = e.nativeEvent.submitter?.value;
    setMethod(usedMethod);
    const lines = buildMessageLines();

    if (usedMethod === "email") {
      const subject = encodeURIComponent(
        `Quote Request — ${form.eventType || "Catering Enquiry"}`
      );
      const body = encodeURIComponent(lines.join("\n"));
      window.location.href = `mailto:${QUOTE_EMAIL}?subject=${subject}&body=${body}`;
    } else {
      const whatsappMessage = encodeURIComponent(lines.join("\n"));
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;
      // Opens WhatsApp (app or web) in a new tab with the message
      // pre-filled — the visitor just needs to hit send.
      window.open(whatsappUrl, "_blank");
    }

    setSubmitted(true);
  }

  return (
    <div>
      <Navbar />

      <section className="bg-[#7A1F1F] py-20">
        <div className="max-w-4xl mx-auto px-8 text-center text-white">
          <p className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
            Get Started
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            Request a Quote
          </h1>
          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Tell us about your event and we'll get back to you with a
            tailored menu and pricing.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#FFF8F0]">
        <div className="max-w-2xl mx-auto px-8">

          {submitted ? (

            <div className="bg-white rounded-3xl shadow-lg p-12 text-center">

              <CheckCircle2 className="w-16 h-16 text-[#7A1F1F] mx-auto" strokeWidth={1.5} />

              <h2 className="text-3xl font-bold text-[#7A1F1F] mt-6">
                Almost There!
              </h2>

              <p className="mt-4 text-gray-600 leading-7">
                {method === "email"
                  ? "We've opened your email app with your details filled in — just hit send there to complete your request."
                  : "We've opened WhatsApp with your details filled in — just hit send there to complete your request. If it didn't open, check your pop-up blocker."}
              </p>

              <Link
                to="/"
                className="mt-8 inline-block bg-[#7A1F1F] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5B1717] transition"
              >
                Back to Home
              </Link>

            </div>

          ) : (

            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl shadow-lg p-8 md:p-12 space-y-6"
            >

              <div>
                <label className="block text-sm font-semibold text-[#7A1F1F] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  placeholder="Your full name"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">

                <div>
                  <label className="block text-sm font-semibold text-[#7A1F1F] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#7A1F1F] mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    placeholder="+91 00000 00000"
                  />
                </div>

              </div>

              <div className="grid sm:grid-cols-2 gap-6">

                <div>
                  <label className="block text-sm font-semibold text-[#7A1F1F] mb-2">
                    Event Type *
                  </label>
                  <select
                    name="eventType"
                    required
                    value={form.eventType}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] bg-white"
                  >
                    <option value="" disabled>
                      Select an event type
                    </option>
                    {services.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#7A1F1F] mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={form.eventDate}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  />
                </div>

              </div>

              <div>
                <label className="block text-sm font-semibold text-[#7A1F1F] mb-2">
                  Estimated Guest Count
                </label>
                <input
                  type="number"
                  name="guestCount"
                  min="1"
                  value={form.guestCount}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  placeholder="e.g. 150"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#7A1F1F] mb-2">
                  Tell Us More
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  placeholder="Venue, cuisine preferences, dietary needs, or anything else we should know"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">

                <button
                  type="submit"
                  name="method"
                  value="whatsapp"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1fb855] transition"
                >
                  <MessageCircle className="w-5 h-5" />
                  Send via WhatsApp
                </button>

                <button
                  type="submit"
                  name="method"
                  value="email"
                  className="flex items-center justify-center gap-2 bg-[#7A1F1F] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5B1717] transition"
                >
                  <Mail className="w-5 h-5" />
                  Send via Email
                </button>

              </div>

            </form>

          )}

        </div>
      </section>

      <Footer />
    </div>
  );
}