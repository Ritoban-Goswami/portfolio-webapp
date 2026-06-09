"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message was successfully logged (demonstration only).`);
    setFormData({ name: "", email: "", type: "", message: "" });
  };

  return (
    <form className="flex flex-col gap-12" onSubmit={handleFormSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <input
            className="w-full input-line font-body-md text-lg"
            placeholder="Your Name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <input
            className="w-full input-line font-body-md text-lg"
            placeholder="Your Email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>
      <div>
        <select
          className="w-full input-line font-body-md text-lg appearance-none bg-transparent cursor-pointer text-on-background/50"
          required
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        >
          <option disabled value="">
            Project Type / Inquiry
          </option>
          <option className="bg-surface-container-high text-on-background" value="freelance">
            Freelance Project
          </option>
          <option className="bg-surface-container-high text-on-background" value="fulltime">
            Full-time Opportunity
          </option>
          <option className="bg-surface-container-high text-on-background" value="consulting">
            Consulting
          </option>
          <option className="bg-surface-container-high text-on-background" value="other">
            Other
          </option>
        </select>
      </div>
      <div>
        <textarea
          className="w-full input-line font-body-md text-lg min-h-[150px] resize-y"
          placeholder="Tell me about your project..."
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>
      <div className="mt-10 flex justify-center">
        <button
          className="bg-primary text-on-primary font-label-md text-sm uppercase tracking-widest px-14 py-6 rounded-none hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 active:scale-[0.98] flex items-center gap-4"
          type="submit"
        >
          Send Message
          <ArrowRight size={16} />
        </button>
      </div>
    </form>
  );
}
