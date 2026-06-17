"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setFormData({ name: "", email: "", type: "", message: "" });
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  const inquiryTypes = [
    { value: "freelance", label: "Freelance" },
    { value: "fulltime", label: "Full-time" },
    { value: "consulting", label: "Consulting" },
    { value: "other", label: "Other" },
  ];

  if (status === "success") {
    return (
      <div className="flex flex-col gap-5 py-16 border-t border-on-background/5">
        <div className="flex items-center gap-3">
          <CheckCircle size={18} className="text-primary shrink-0" />
          <h3 className="font-mono-label text-xs uppercase tracking-[0.2em] text-on-background/60">Message sent</h3>
        </div>
        <p className="text-on-background/40 font-body-md font-light text-sm">I&apos;ll get back to you within 24 hours.</p>
        <button
          className="mt-2 px-4 py-2 text-on-background/50 hover:text-on-background hover:bg-on-background/5 border border-on-background/10 hover:border-on-background/30 font-mono-label text-xs uppercase tracking-widest transition-all duration-300 w-fit rounded-full"
          onClick={() => setStatus("idle")}
        >
          Send another →
        </button>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-8" onSubmit={handleFormSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <input
          className="w-full input-line font-body-md"
          placeholder="Your Name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          className="w-full input-line font-body-md"
          placeholder="Your Email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      {/* Inquiry type chips */}
      <div>
        <p className="font-mono-label text-[10px] uppercase tracking-[0.2em] text-on-background/30 mb-3">Inquiry Type</p>
        <div className="flex flex-wrap gap-2">
          {inquiryTypes.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              onClick={() => setFormData({ ...formData, type: value })}
              className={`px-4 py-2 text-xs font-mono-label uppercase tracking-wider rounded-full border transition-all duration-300 ${formData.type === value
                ? "border-primary bg-primary/10 text-primary"
                : "border-on-background/10 text-on-background/40 hover:border-on-background/30 hover:text-on-background/70 hover:bg-on-background/5"
                }`}
            >
              {label}
            </button>
          ))}
        </div>
        {/* Hidden required field for form validation */}
        <input type="text" required className="sr-only" value={formData.type} onChange={() => { }} tabIndex={-1} />
      </div>

      <textarea
        className="w-full input-line font-body-md min-h-[130px] resize-none"
        placeholder="Tell me about your project..."
        required
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />

      {status === "error" && (
        <div className="flex items-center gap-3 text-xs text-red-400 font-mono-label">
          <AlertCircle size={14} />
          {errorMsg}
        </div>
      )}

      <button
        className="w-full bg-primary text-on-primary font-mono-label text-xs uppercase tracking-[0.2em] py-3.5 rounded-full hover:bg-primary-container transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-40 disabled:cursor-not-allowed mt-2 group"
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <><Loader2 size={14} className="animate-spin" /> Sending</>
        ) : (
          <>Send Message <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" /></>
        )}
      </button>
    </form>
  );
}
