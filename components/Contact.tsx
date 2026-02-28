"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { type Dictionary } from "@/lib/dictionary";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function Contact({ dict }: { dict: Dictionary }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const isAr = dict.nav.projects !== 'Projects' && dict.nav.projects !== 'Projets';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");
      
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="pt-10 pb-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Section (Matching Experience/Projects Layout) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16 flex flex-col items-start"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {dict.contact?.title || "Contact"}
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full opacity-80 mb-6" />
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            {dict.contact?.subtitle || "Let's work together"}
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Form Side */}
          <motion.form 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="w-full lg:w-1/2 bg-muted/20 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] border border-border/40 shadow-xl"
          >
            <div className={`flex flex-col md:flex-row gap-6 mb-8 ${isAr ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-2">
                <label htmlFor="name" className={`text-sm font-semibold text-foreground/80 ${isAr ? 'mr-4' : 'ml-4'}`}>
                  {dict.contact?.name || "Name"}
                </label>
                <input 
                  id="name"
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-background/60 hover:bg-background/80 focus:bg-background rounded-2xl px-6 py-4 outline-none border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all font-light shadow-sm"
                />
              </div>
              <div className="flex-1 space-y-2">
                <label htmlFor="email" className={`text-sm font-semibold text-foreground/80 ${isAr ? 'mr-4' : 'ml-4'}`}>
                  {dict.contact?.email || "Email"}
                </label>
                <input 
                  id="email"
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-background/60 hover:bg-background/80 focus:bg-background rounded-2xl px-6 py-4 outline-none border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all font-light text-left shadow-sm"
                  dir="ltr"
                />
              </div>
            </div>
            
            <div className="space-y-2 mb-10">
              <label htmlFor="message" className={`text-sm font-semibold text-foreground/80 ${isAr ? 'mr-4' : 'ml-4'}`}>
                {dict.contact?.message || "Message"}
              </label>
              <textarea 
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-background/60 hover:bg-background/80 focus:bg-background rounded-3xl mx-px px-6 py-5 outline-none border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all resize-none font-light shadow-sm"
              />
            </div>

            <button 
              type="submit" 
              disabled={status === "loading" || status === "success"}
              className={`w-full h-16 rounded-full bg-foreground text-background font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] hover:shadow-lg active:scale-95 transition-all disabled:opacity-70 disabled:hover:scale-100 ${isAr ? 'flex-row-reverse' : ''}`}
              style={{ cursor: status === "loading" || status === "success" ? "not-allowed" : "pointer" }}
            >
              {status === "idle" && (
                 <>
                   {dict.contact?.send || "Send"} 
                   <Send size={20} className={isAr ? "rotate-180" : ""} />
                 </>
              )}
              {status === "loading" && (
                 <>
                   <Loader2 size={20} className="animate-spin" />
                   {dict.contact?.sending || "Sending..."}
                 </>
              )}
              {status === "success" && (
                 <>
                   <CheckCircle2 size={20} className="text-green-500" />
                   {dict.contact?.success || "Sent!"}
                 </>
              )}
              {status === "error" && (
                 <>
                   <AlertCircle size={20} className="text-rose-500" />
                   {dict.contact?.error || "Error"}
                 </>
              )}
            </button>
          </motion.form>

          {/* Megaphone Illustration Side (Right) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:flex w-full lg:w-1/2 justify-center items-center pointer-events-none"
          >
            <div className="relative w-full max-w-lg drop-shadow-2xl">
              <Image 
                src="/megaphone-voice-being-heard.svg" 
                alt="Megaphone illustration" 
                width={500} 
                height={500} 
                className={`w-full h-auto opacity-90 dark:hidden ${isAr ? 'scale-x-[-1]' : ''}`}
              />
              <Image 
                src="/megaphone-voice-being-heard_white.svg" 
                alt="Megaphone illustration dark" 
                width={500} 
                height={500} 
                className={`w-full h-auto opacity-90 hidden dark:block ${isAr ? 'scale-x-[-1]' : ''}`}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
