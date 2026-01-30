import React, { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
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
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(form.name)) {
      newErrors.name = "Name should only contain letters";
    }

    // Phone validation
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s+/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    // Email validation
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Subject validation
    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (form.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    // Message validation
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    setStatus(null);

    try {
      const res = await api.post("contacts", { data: form }, { auth: false });
      setStatus({ success: res?.message || "Message sent successfully!" });
      setForm({ name: "", phone: "", email: "", subject: "", message: "" });
      setErrors({});
      setSubmitted(true);
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

  const handleSendAnother = () => {
    setSubmitted(false);
    setStatus(null);
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
          "url('contact-bg.webp')",
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

            {/* Right Side - Form or Thank You Message */}
            {submitted ? (
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md flex flex-col items-center justify-center min-h-[500px] text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Thank You for Contacting Soham Academy!
                </h3>
                <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
                  We have received your message and will reach out to you soon.
                </p>
                <button
                  onClick={handleSendAnother}
                  className="px-6 py-2.5 bg-brand-cyan hover:bg-sky-600 text-white rounded-md font-medium text-sm transition-colors"
                  style={{ backgroundColor: "var(--brand-cyan, #01C1F2)" }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md space-y-4"
              >
                {status?.error && (
                  <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm">
                    {status.error}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-sm font-medium">Name *</span>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className={`mt-1 block w-full border ${errors.name ? "border-red-500" : "border-gray-200"
                        } rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 ${errors.name
                          ? "focus:ring-red-100"
                          : "focus:ring-sky-100"
                        }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <span className="text-xs text-red-500 mt-1">
                        {errors.name}
                      </span>
                    )}
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium">Phone *</span>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className={`mt-1 block w-full border ${errors.phone ? "border-red-500" : "border-gray-200"
                        } rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 ${errors.phone
                          ? "focus:ring-red-100"
                          : "focus:ring-sky-100"
                        }`}
                      placeholder="Your phone number"
                    />
                    {errors.phone && (
                      <span className="text-xs text-red-500 mt-1">
                        {errors.phone}
                      </span>
                    )}
                  </label>
                </div>

                <label className="block">
                  <span className="text-sm font-medium">Email *</span>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full border ${errors.email ? "border-red-500" : "border-gray-200"
                      } rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 ${errors.email ? "focus:ring-red-100" : "focus:ring-sky-100"
                      }`}
                    placeholder="Your email address"
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500 mt-1">
                      {errors.email}
                    </span>
                  )}
                </label>

                <label className="block">
                  <span className="text-sm font-medium">Subject *</span>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={`mt-1 block w-full border ${errors.subject ? "border-red-500" : "border-gray-200"
                      } rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 ${errors.subject
                        ? "focus:ring-red-100"
                        : "focus:ring-sky-100"
                      }`}
                    placeholder="Subject of your inquiry"
                  />
                  {errors.subject && (
                    <span className="text-xs text-red-500 mt-1">
                      {errors.subject}
                    </span>
                  )}
                </label>

                <label className="block">
                  <span className="text-sm font-medium">Message *</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    className={`mt-1 block w-full border ${errors.message ? "border-red-500" : "border-gray-200"
                      } rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 ${errors.message
                        ? "focus:ring-red-100"
                        : "focus:ring-sky-100"
                      }`}
                    placeholder="Tell us about your requirements..."
                  />
                  {errors.message && (
                    <span className="text-xs text-red-500 mt-1">
                      {errors.message}
                    </span>
                  )}
                </label>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2.5 bg-brand-cyan hover:bg-sky-600 text-white rounded-md font-medium text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: "var(--brand-cyan, #01C1F2)" }}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}