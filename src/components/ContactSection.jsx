import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { api } from "../store/api";

function ContactSection() {
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

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    setStatus(null);

    try {
      // public endpoint: auth: false
      const res = await api.post("contacts", form, { auth: false });
      setStatus({ success: res?.message || "Message sent successfully!" });
      setForm({ name: "", phone: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus({ error: err.message || "Something went wrong. Please try again later." });
    } finally {
      setLoading(false);
    }
  };
  const contactInfo = [
    { key: "email", icon: <Mail className="w-5 h-5 text-brand-cyan" />, title: "Write to us", content: <a href="mailto:admin@sohamacademy.org" className="text-brand-cyan">admin@sohamacademy.org</a> },
    { key: "phone", icon: <Phone className="w-5 h-5 text-brand-cyan" />, title: "Call us at", content: <a href="tel:+918099643298" className="text-brand-cyan">+91 80996 43298</a> },
    { key: "addr", icon: <MapPin className="w-5 h-5 text-brand-cyan" />, title: "Soham Academy", content: <p className="text-gray-500">Bagh Amberpet, Hyderabad, Telangana</p> },
  ];

  return (
    <section className="bg-white" aria-label="Contact">
      <div className="max-w-6xl mx-auto px-10 sm:px-2 lg:px-5">
        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* Left */}
          <div className="w-full sm:px-8 md:px-10 lg:px-2">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2">Want to work with us?</h3>
            <p className="text-gray-500 mb-3 sm:mb-5 max-w-md sm:max-w-lg md:max-w-xl leading-relaxed">
              You can reach out via the below mentioned details
            </p>
            <ul className="space-y-5 max-w-md sm:max-w-lg">
              {contactInfo.map(({ key, icon, title, content }) => (
                <li key={key} className="flex items-start gap-4">
                  <span className="p-2 sm:p-3 rounded-full bg-sky-50 inline-flex items-center justify-center flex-shrink-0">{icon}</span>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">{title}</h4>
                    <div className="text-sm sm:text-base">{content}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="bg-white border border-gray-100 rounded-xl p-4 sm:p-6 shadow-sm space-y-4">
            {status?.error && <div className="p-2 mb-2 bg-red-100 text-red-700 rounded">{status.error}</div>}
            {status?.success && <div className="p-2 mb-2 bg-green-100 text-green-700 rounded">{status.success}</div>}

            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full border rounded-md p-2 mb-2" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input type="text" name="phone" value={form.phone} onChange={handleChange} className="w-full border rounded-md p-2 mb-2" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email *</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full border rounded-md p-2 mb-2" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input type="text" name="subject" value={form.subject} onChange={handleChange} className="w-full border rounded-md p-2 mb-2" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message *</label>
              <textarea name="message" value={form.message} onChange={handleChange} required className="w-full border rounded-md p-2 mb-2" />
            </div>

            <button onClick={handleSubmit} disabled={loading} className="px-4 py-2 bg-blue-500 text-white rounded-md">
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
