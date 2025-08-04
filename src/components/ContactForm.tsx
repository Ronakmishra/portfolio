"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    // <section className="w-full py-12 flex justify-center items-center">
    //   <motion.div
    //     initial={{ opacity: 0, y: 20 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.6 }}
    //     className="w-full max-w-3xl rounded-lg border p-6 shadow-lg bg-background"
    //   >
    //     <form
    //       action={process.env.NEXT_PUBLIC_FORMSPREE_URL} // 🔁 Replace `xxx` with your actual Formspree ID
    //       method="POST"
    //       className="space-y-4"
    //     >
    //       <Input type="text" name="name" placeholder="Name" required />
    //       <Input type="email" name="email" placeholder="Email" required />
    //       <Input
    //         type="tel"
    //         name="phone"
    //         placeholder="Phone (Optional)"
    //         pattern="^\+?[0-9\s\-]{7,15}$"
    //         title="Enter a valid phone number"
    //       />
    //       <Textarea name="message" placeholder="Your message" rows={5} required />
    //       <div className="text-right">
    //         <Button type="submit">Send 🚀</Button>
    //       </div>
    //     </form>
    //   </motion.div>
    // </section>
    <section className="w-full py-12 flex justify-center items-center">
      <div className="relative w-full flex justify-center">
        {/* 🔮 Aura Glow */}
        <div className="absolute top-1/2 left-1/2 -z-10 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-fuchsia-500/30 blur-3xl opacity-60" />

        {/* 📩 Contact Form with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl rounded-lg border p-6 shadow-lg bg-background"
        >
          <form
            action={process.env.NEXT_PUBLIC_FORMSPREE_URL}
            method="POST"
            className="space-y-4"
          >
            <Input type="text" name="name" placeholder="Name" required />
            <Input type="email" name="email" placeholder="Email" required />
            <Input
              type="tel"
              name="phone"
              placeholder="Phone (Optional)"
              pattern="^\+?[0-9\s\-]{7,15}$"
              title="Enter a valid phone number"
            />
            <Textarea name="message" placeholder="Your message" rows={5} required />
            <div className="text-right">
              <Button type="submit">Send 🚀</Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
