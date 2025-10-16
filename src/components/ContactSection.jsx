// components/ContactSection.jsx
import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const dispatchStatus = (type, text) => {
    const payload = { type, text };
    setStatus(payload);
    window.dispatchEvent(new CustomEvent("contact:status", { detail: payload }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.message) {
      return dispatchStatus("error", "Please enter your email and message.");
    }
    try {
      dispatchStatus("success", "Thanks — your message was sent successfully (demo).");
      setForm({ name: "", phone: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      dispatchStatus("error", "Something went wrong. Please try again later.");
    }
  };

  const contactInfo = [
    {
      key: "email",
      icon: <Mail className="w-5 h-5 text-brand-cyan" />,
      title: "Write to us",
      content: (
        <a href="mailto:admin@sohamacademy.org" className="text-brand-cyan">
          admin@sohamacademy.org
        </a>
      ),
    },
    {
      key: "phone",
      icon: <Phone className="w-5 h-5 text-brand-cyan" />,
      title: "Call us at",
      content: (
        <a href="tel:+918099643298" className="text-brand-cyan">
          +91 80996 43298
        </a>
      ),
    },
    {
      key: "addr",
      icon: <MapPin className="w-5 h-5 text-brand-cyan" />,
      title: "Soham Academy",
      content: <p className="text-gray-500">Bagh Amberpet, Hyderabad, Telangana</p>,
    },
  ];

  return (
    <section className="bg-white " aria-label="Contact">
      <div className="max-w-6xl mx-auto px-10 sm:px-2 lg:px-5">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left */}
          <div className="w-full  sm:px-8 md:px-10 lg:px-2">
  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2">
    Want to work with us?
  </h3>

  <p className="text-gray-500 mb-3 sm:mb-5 max-w-md sm:max-w-lg md:max-w-xl leading-relaxed">
    You can reach out via the below mentioned details
  </p>

  <ul className="space-y-5 max-w-md sm:max-w-lg">
    {contactInfo.map(({ key, icon, title, content }) => (
      <li key={key} className="flex items-start gap-4">
        <span className="p-2 sm:p-3 rounded-full bg-sky-50 inline-flex items-center justify-center flex-shrink-0">
          {icon}
        </span>
        <div>
          <h4 className="font-semibold text-sm sm:text-base">{title}</h4>
          <div className="text-sm sm:text-base">{content}</div>
        </div>
      </li>
    ))}
  </ul>
</div>


          {/* Right */}
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-gray-100 rounded-xl p-4 sm:p-6 shadow-sm space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <label className="block">
                <span className="text-sm font-medium">Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-100"
                  placeholder="Your name"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium">Phone</span>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-100"
                  placeholder="Your phone number"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-sm font-medium">Email *</span>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-100"
                placeholder="Your email address"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium">Subject</span>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-100"
                placeholder="Subject of your inquiry"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium">Message *</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="mt-1 block w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-100"
                placeholder="Tell us about your requirements..."
              />
            </label>

            <button
              type="submit"
              className="w-full bg-brand-cyan hover:bg-sky-600 text-white py-3 rounded-md font-semibold transition-colors"
              style={{ backgroundColor: "var(--brand-cyan, #01C1F2)" }}
            >
              SUBMIT
            </button>

            {status && (
              <p
                className={`text-sm pt-1 ${status.type === "error" ? "text-rose-600" : "text-green-600"}`}
              >
                {status.text}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
