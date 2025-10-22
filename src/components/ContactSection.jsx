import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { api } from "../store/api";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.email) newErrors.email = "Email is required";
    if (!form.message) newErrors.message = "Message is required";
    setStatus(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    setStatus(null);

    try {
      // API call from your first code
      const res = await api.post("contacts", form, { auth: false });
      setStatus({ success: res?.message || "Message sent successfully!" });
      setForm({ name: "", phone: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus({
        error:
          err.message || "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      key: "email",
      icon: <Mail className="w-5 h-5 text-brand-cyan" />,
      title: "Mail Us at",
      content: (
        <a
          href="mailto:admin@sohamacademy.org"
          className="text-brand-cyan hover:text-sky-600 transition-colors"
        >
          admin@sohamacademy.org
        </a>
      ),
    },
    {
      key: "phone",
      icon: <Phone className="w-5 h-5 text-brand-cyan" />,
      title: "Call Us on",
      content: (
        <a
          href="tel:+918099643298"
          className="text-brand-cyan hover:text-sky-600 transition-colors"
        >
          +91 80996 43298
        </a>
      ),
    },
    {
      key: "addr",
      icon: <MapPin className="w-5 h-5 text-brand-cyan" />,
      title: "Soham Academy",
      content: (
        <a
          href="https://www.google.com/maps/dir//2-2-186%2F18%2F6,+Ramakrishna+Nagar,+Amberpet,+Hyderabad,+Telangana+500013/@17.3968961,78.4381458,12z"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-600 hover:text-sky-600 transition-colors"
        >
          Bagh Amberpet, Hyderabad, Telangana
        </a>
      ),
    },
  ];

  return (
    <section
      className="relative py-12"
      aria-label="Contact"
      style={{
        backgroundImage:
          "url('https://ria.sohamacademy.org/wp-content/uploads/2025/01/Snapinst.app_469204666_1514121172637631_4412047678977477125_n_1080-1024x576.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-white/20 backdrop-brightness-75"></div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="bg-white rounded-3xl shadow-2xl p-10 sm:p-14 md:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side */}
            <div>
              <h5 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900 leading-snug">
                Looking for a similar program for your school or institution?
              </h5>
              <p className="text-gray-500 mb-8 max-w-lg leading-relaxed">
                You can reach out via the below mentioned details.
              </p>

              <ul className="space-y-6 max-w-md sm:max-w-lg">
                {contactInfo.map(({ key, icon, title, content }) => (
                  <li key={key} className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border border-sky-400 bg-white shadow-sm">
                      {React.cloneElement(icon, {
                        className: "w-5 h-5 text-sky-500",
                      })}
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-semibold text-base text-gray-900">
                        {title}
                      </h4>
                      <div className="text-base text-sky-500">{content}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side */}
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md space-y-4"
            >
              {status?.error && (
                <div className="p-2 bg-red-100 text-red-700 rounded">
                  {status.error}
                </div>
              )}
              {status?.success && (
                <div className="p-2 bg-green-100 text-green-700 rounded">
                  {status.success}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  rows={6}
                  className="mt-1 block w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-100"
                  placeholder="Tell us about your requirements..."
                />
              </label>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-brand-cyan hover:bg-sky-600 text-white rounded-md font-medium text-sm transition-colors"
                  style={{ backgroundColor: "var(--brand-cyan, #01C1F2)" }}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
