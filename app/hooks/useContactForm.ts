"use client";

import { useState } from "react";

export type Status = "idle" | "loading" | "success" | "error";

export const services = [
  "Data & LAN Cabling",
  "Optic Fibre",
  "Wi-Fi Installation",
  "CCTV Cabling",
  "Computer Room Cleanup",
  "Infrastructure Design",
  "Alarm Systems",
  "Panic Button",
  "Computer Repairs",
  "Other",
];

export function useContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    services: [] as string[],
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleServiceToggle = (service: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.services.length === 0) { setStatus("error"); return; }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          service: form.services.join(", "),
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", services: [], message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return { form, status, handleChange, handleServiceToggle, handleSubmit };
}
