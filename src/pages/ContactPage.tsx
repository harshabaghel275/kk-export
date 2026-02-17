import { useState } from 'react';
import { IMG } from '../constants/images';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe2,
  Send,
  CheckCircle2,
  Building,
  MessageSquare,
} from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', company: '',
    jobTitle: '', industry: '', inquiry: '', productInterest: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      {/* <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.wovenClose3} alt="Woven textile" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal-dark/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <div className="max-w-3xl">
            <span className="text-silver-light font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
              Let's Discuss Your Textile Requirements
            </h1>
            <p className="text-silver text-lg leading-relaxed">
              At KK Exports India, we are ready to support your apparel sourcing needs with reliable solutions and professional coordination. Whether you are looking for custom garment development, bulk production, fabric sourcing, or a long-term buying house partnership, our experienced team is here to assist you.
            </p>
          </div>
        </div>
      </section> */}

      {/* Contact Content */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-cloud-dark p-6 lg:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-cloud-light rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-charcoal" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-charcoal">Inquiry Form</h2>
                    <p className="text-sm text-silver-dark">Fill in the details below and our team will respond within 24 hours.</p>
                  </div>
                </div>

                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-cloud-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-charcoal" />
                    </div>
                    <h3 className="text-2xl font-bold text-charcoal mb-2">Thank You!</h3>
                    <p className="text-silver-darker max-w-md mx-auto">
                      Your inquiry has been received. Our B2B specialist will contact you within 24 business hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 px-6 py-2 text-charcoal font-semibold border border-cloud-dark rounded-lg hover:bg-cloud-lighter transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Contact Information */}
                    <div>
                      <h3 className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-4">Contact Information</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1.5">First Name *</label>
                          <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-cloud-dark rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-charcoal focus:border-transparent text-charcoal" placeholder="" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1.5">Last Name *</label>
                          <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-cloud-dark rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-charcoal focus:border-transparent text-charcoal" placeholder="" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1.5">Business Email *</label>
                          <input type="email" name="email" required value={formData.email} onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-cloud-dark rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-charcoal focus:border-transparent text-charcoal" placeholder="" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1.5">Phone Number</label>
                          <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-cloud-dark rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-charcoal focus:border-transparent text-charcoal" placeholder="" />
                        </div>
                      </div>
                    </div>

                    {/* Business Details */}
                    <div>
                      <h3 className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-4">Business Details</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1.5">Company Name *</label>
                          <input type="text" name="company" required value={formData.company} onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-cloud-dark rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-charcoal focus:border-transparent text-charcoal" placeholder="Company Inc." />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1.5">Job Title</label>
                          <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-cloud-dark rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-charcoal focus:border-transparent text-charcoal" placeholder="Procurement Manager" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1.5">Industry *</label>
                          <select name="industry" required value={formData.industry} onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-cloud-dark rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-charcoal focus:border-transparent bg-white text-charcoal">
                            <option value="">Select Industry</option>
                            <option value="automotive">Automotive</option>
                            <option value="aerospace">Aerospace & Defense</option>
                            <option value="healthcare">Healthcare & Medical</option>
                            <option value="construction">Construction</option>
                            <option value="agriculture">Agriculture</option>
                            <option value="energy">Energy & Environment</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1.5">Inquiry Type *</label>
                          <select name="inquiry" required value={formData.inquiry} onChange={handleChange}
                            className="w-full px-4 py-2.5 border border-cloud-dark rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-charcoal focus:border-transparent bg-white text-charcoal">
                            <option value="">Select Type</option>
                            <option value="quote">Request for Quote</option>
                            <option value="sample">Sample Request</option>
                            <option value="custom">Custom Development</option>
                            <option value="partnership">Partnership Inquiry</option>
                            <option value="general">General Inquiry</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Product Interest */}
                    <div>
                      <h3 className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-4">Product Interest</h3>
                      <select name="productInterest" value={formData.productInterest} onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-cloud-dark rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-charcoal focus:border-transparent bg-white text-charcoal">
                        <option value="">Select Product Category</option>
                        <option value="technical">Technical Textiles</option>
                        <option value="industrial">Industrial Fabrics</option>
                        <option value="coated">Coated Textiles</option>
                        <option value="nonwoven">Nonwoven Fabrics</option>
                        <option value="yarns">Specialty Yarns</option>
                        <option value="smart">Smart Textiles</option>
                        <option value="multiple">Multiple Categories</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">Your Message *</label>
                      <textarea name="message" required rows={5} value={formData.message} onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-cloud-dark rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-charcoal focus:border-transparent resize-none text-charcoal"
                        placeholder="Please describe your textile requirements, specifications, estimated quantities, and any other relevant details..." />
                    </div>

                    <div className="flex items-start gap-2">
                      <input type="checkbox" required className="mt-1 rounded border-cloud-dark accent-charcoal" />
                      <span className="text-xs text-silver-darker">
                        I agree to the processing of my personal data in accordance with the Privacy Policy. TexVista Global will use this information solely to respond to my inquiry.
                      </span>
                    </div>

                    <button type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-charcoal text-white font-bold rounded-lg hover:bg-charcoal-light transition-colors">
                      <Send className="w-4 h-4" /> Submit Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <div className="bg-cloud-lighter rounded-2xl p-6 border border-cloud-dark">
                <h3 className="text-lg font-bold text-charcoal mb-6">Get in Touch</h3>
                <div className="space-y-5">
                  {[
                    { icon: Building, label: 'Head Office', value: '313 GOVINDAM COMPLEX,GANDHI NAGAR,BHILWARA,311001 India' },
                    { icon: Phone, label: 'Phone', value: '+91 9818434231' },
                    { icon: Mail, label: 'Email', value: 'KKEXPORT95@GMAIL.COM' },
                    { icon: Clock, label: 'Business Hours', value: 'Mon - SAT: 10:00 AM - 7:00 PM' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-cloud rounded-lg flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-charcoal" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-silver-dark uppercase tracking-wider">{item.label}</span>
                        <p className="text-sm text-charcoal mt-0.5 whitespace-pre-line">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Global Offices */}
              {/* <div className="bg-cloud-lighter rounded-2xl p-6 border border-cloud-dark">
                <h3 className="text-lg font-bold text-charcoal mb-4 flex items-center gap-2">
                  <Globe2 className="w-5 h-5 text-charcoal" /> Global Offices
                </h3>
                <div className="space-y-4">
                  {[
                    { city: 'Delhi', type: 'India' },
                    { city: 'Noida ', type: 'India' },
                    { city: 'Bhilwara', type: 'India' },
                    { city: 'Madurai', type: 'India' },
                    { city: 'tirupurr', type: 'India' },
                      { city: 'karur', type: 'India' },
                       { city: 'Panipat ', type: 'India' },
                  ].map((office) => (
                    <div key={office.city} className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-silver-dark shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-charcoal">{office.city}</p>
                        <p className="text-xs text-silver-dark">{office.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}
<div
  style={{
    background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #111111 100%)",
    borderRadius: "24px",
    padding: "0",
    border: "1px solid #2a2a2a",
    overflow: "hidden",
    boxShadow: "0 8px 40px rgba(0,0,0,0.18), 0 1px 0 rgba(255,255,255,0.05) inset",
    fontFamily: "'Inter', system-ui, sans-serif",
    position: "relative",
  }}
>
  {/* Subtle top glow */}
  <div style={{
    position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
    width: "60%", height: "1px",
    background: "linear-gradient(90deg, transparent, #ffffff22, transparent)",
  }} />

  {/* Header */}
  <div style={{
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "24px 28px 20px",
    borderBottom: "1px solid #222",
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <div style={{
        width: "38px", height: "38px", borderRadius: "10px",
        background: "linear-gradient(135deg, #ffffff15, #ffffff08)",
        border: "1px solid #333",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <Globe2 className="w-4 h-4" style={{ color: "#e0e0e0" }} />
      </div>
      <div>
        <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#f0f0f0", margin: 0, letterSpacing: "-0.01em" }}>
          Global Offices
        </h3>
        <p style={{ fontSize: "11px", color: "#555", margin: 0, marginTop: "1px" }}>
          {7} locations across India
        </p>
      </div>
    </div>

    <span style={{
      fontSize: "11px", fontWeight: 600,
      padding: "4px 12px", borderRadius: "100px",
      background: "#ffffff10", color: "#aaa",
      border: "1px solid #333", letterSpacing: "0.05em",
    }}>
      🇮🇳 India
    </span>
  </div>

  {/* Cities Grid */}
  <div style={{
    display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1px", background: "#2B2B2B",
    margin: "0",
  }}>
    {[
      { city: "Delhi",    sub: "National Capital" },
      { city: "Noida",    sub: "Uttar Pradesh"    },
      { city: "Bhilwara", sub: "Rajasthan"        },
      { city: "Madurai",  sub: "Tamil Nadu"       },
      { city: "Tirupur",  sub: "Tamil Nadu"       },
      { city: "Karur",    sub: "Tamil Nadu"       },
     
    ].map((item, i) => (
      <div
        key={item.city}
        style={{
          background: "#111",
          padding: "16px 18px",
          display: "flex", alignItems: "center", gap: "10px",
          cursor: "default",
          transition: "background 0.2s",
          // last item if odd spans 1 col
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#1c1c1c")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#111")}
      >
        {/* Dot indicator */}
        {/* <div style={{
          width: "6px", height: "6px", borderRadius: "50%",
          background: "linear-gradient(135deg, #c9b99a, #8a7d6a)",
          flexShrink: 0,
          boxShadow: "0 0 6px #c9b99a55",
        }} /> */}
        <div>
          <p style={{ fontSize: "13px", fontWeight: 600, color: "#e8e8e8", margin: 0 }}>
            {item.city}
          </p>
          <p style={{ fontSize: "10px", color: "#555", margin: 0, marginTop: "1px" }}>
            {item.sub}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Footer strip */}
  <div style={{
    padding: "12px 28px",
    borderTop: "1px solid #1e1e1e",
    display: "flex", alignItems: "center", gap: "6px",
  }}>
    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 6px #4ade8088" }} />
    <span style={{ fontSize: "11px", color: "#444" }}>All offices operational</span>
  </div>
</div>



              {/* Quick Contact CTA */}
              <div className="bg-charcoal rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Need Immediate Assistance?</h3>
                <p className="text-sm text-silver mb-4">
                  {/* Lorem ipsum dolor sit amet. Our B2B specialists are available during business hours. */}
                </p>
                <a href="tel:+15552345678" className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/15 hover:bg-white/20 rounded-lg text-sm font-semibold transition-colors border border-white/15">
                  <Phone className="w-4 h-4" /> +91 9818434231
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      {/* <section className="bg-cloud-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="relative rounded-2xl h-[300px] overflow-hidden border border-cloud-dark">
            <img src={IMG.fabricRolls3} alt="Fabric production" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-charcoal/60 flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="w-10 h-10 mx-auto mb-2 text-silver-light" />
                <p className="font-semibold text-lg">TexVista Global Headquarters</p>
                <p className="text-silver text-sm">Mumbai, India — Serving 45+ Countries Worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}




      <section className="bg-cloud-lighter">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
    <div className="relative rounded-2xl h-[300px] overflow-hidden border border-cloud-dark">
      <iframe
        title="KK Export Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.123456789!2d74.6313!3d25.3478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f84dce1234567%3A0xabcdef1234567890!2sBhilwara%2C%20Rajasthan%20311001%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0, display: "block" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
</section>
    </div>
  );
}
