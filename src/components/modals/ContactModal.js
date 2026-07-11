import { useState, useEffect } from "react";
import { CloseIcon } from "../ui/Icon";

const ENDPOINT =
  process.env.REACT_APP_CONTACT_ENDPOINT ||
  "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";

export const ContactModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && onClose();
    if (isOpen) document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(form).toString(),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(onClose, 1800);
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl border border-white/10 bg-ink-900 p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full border border-white/10 p-2 text-ink-100 hover:border-accent hover:text-accent"
        >
          <CloseIcon />
        </button>
        <div className="mb-6 font-mono text-xs uppercase tracking-widest text-accent">
          → say hello
        </div>
        <h2 className="mb-6 font-display text-3xl font-semibold text-ink-50">
          Book a call with Pratik
        </h2>
        <form onSubmit={submit} className="space-y-4">
          <Field label="Name" value={form.name} onChange={update("name")} />
          <Field
            label="Email"
            type="email"
            value={form.email}
            onChange={update("email")}
          />
          <Field
            label="Message"
            textarea
            value={form.message}
            onChange={update("message")}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary w-full justify-center"
          >
            {status === "loading" ? "Sending…" : "Send message"}
          </button>
          {status === "success" && (
            <p className="text-center text-sm text-accent">
              Sent! I'll reply soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-magenta">
              Something broke — try email instead.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

const Field = ({ label, textarea, ...rest }) => (
  <label className="block">
    <span className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-ink-200/70">
      {label}
    </span>
    {textarea ? (
      <textarea
        rows="4"
        required
        {...rest}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] p-3 text-ink-50 outline-none transition focus:border-accent"
      />
    ) : (
      <input
        required
        {...rest}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] p-3 text-ink-50 outline-none transition focus:border-accent"
      />
    )}
  </label>
);
