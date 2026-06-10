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

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-6 py-16 text-center">
        <CheckCircle size={48} className="text-primary" />
        <h3 className="font-headline-md text-2xl text-on-background font-semibold">Message sent!</h3>
        <p className="text-on-background/50 font-body-md">I&apos;ll get back to you as soon as possible.</p>
        <button
          className="mt-4 text-on-background/40 hover:text-on-background font-mono-label text-xs uppercase tracking-widest transition-colors"
          onClick={() => setStatus("idle")}
        >
          Send another
        </button>
      </div>
    );
  }

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
      {status === "error" && (
        <div className="flex items-center gap-3 text-sm text-red-400 font-body-md">
          <AlertCircle size={16} />
          {errorMsg}
        </div>
      )}
      <div className="mt-10 flex justify-center">
        <button
          className="bg-primary text-on-primary font-label-md text-sm uppercase tracking-widest px-14 py-6 rounded-none hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 active:scale-[0.98] flex items-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <>
              Sending <Loader2 size={16} className="animate-spin" />
            </>
          ) : (
            <>
              Send Message <ArrowRight size={16} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
