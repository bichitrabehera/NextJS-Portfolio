"use client";
import { memo, useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: true, threshold: 0.2 });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = useCallback((e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY }
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          setTimeout(() => setIsSent(false), 3000);
        },
        () => {
          setError("Failed to send message. Try again later.");
        }
      );
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative pt-10 mx-auto font-light max-w-4xl text-foreground"
    >
      <motion.div className="container relative z-10 px-6 md:px-6 mx-auto">

        {/* HEADER */}
        <div className="flex flex-col w-full mb-12 text-center">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-left underline text-foreground">
              Contact
            </h2>
          </div>

          <motion.p className="text-foreground/70 text-left leading-relaxed">
            Have a project in mind or want to discuss opportunities? Drop me a
            message and I'll get back to you within 24 hours.
          </motion.p>
        </div>

        {/* FORM */}
        <motion.div
          className="
            p-4 mx-auto rounded-xl
            border border-border
            bg-background/80
            max-w-5xl
          "
        >
          <form ref={form} onSubmit={sendEmail} className="relative space-y-8">

            {/* Inputs */}
            <div className="flex flex-col md:flex-row gap-6">

              {/* Name */}
              <div className="flex-1">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-foreground/70"
                >
                  Your Name{" "}
                  <span
                    title="This field is required"
                    className="text-red-500 text-xl cursor-help"
                  >
                    *
                  </span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="
                    w-full px-4 py-2 rounded-lg text-[16px]
                    bg-background text-foreground
                    border border-border
                    focus:ring-1 focus:ring-foreground/40 focus:border-transparent
                    transition-all
                  "
                  placeholder="Ratan Tata"
                  required
                />
              </div>

              {/* Email */}
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-foreground/70"
                >
                  Email Address{" "}
                  <span
                    title="This field is required"
                    className="text-red-500 text-xl cursor-help"
                  >
                    *
                  </span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="
                    w-full px-4 py-2 rounded-lg text-[16px]
                    bg-background text-foreground
                    border border-border
                    focus:ring-1 focus:ring-foreground/40 focus:border-transparent
                    transition-all
                  "
                  placeholder="ratantata@gmail.com"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-foreground/70"
              >
                Your Message{" "}
                <span
                  title="This field is required"
                  className="text-red-500 text-xl cursor-help"
                >
                  *
                </span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="
                  w-full px-4 py-2 rounded-lg text-[16px]
                  bg-background text-foreground
                  border border-border
                  focus:ring-1 focus:ring-foreground/40 focus:border-transparent
                  transition-all
                "
                placeholder="Tell me about your project..."
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <motion.button
                type="submit"
                whileTap={{ scale: 0.95 }}
                className="btn text-[16px]"
              >
                Send
              </motion.button>
            </div>

            {/* Success Message */}
            {isSent && (
              <motion.div
                className="
                  flex items-center gap-3 p-4 mt-6 rounded-lg
                  text-green-400 border border-green-500/50
                  bg-green-900/30 text-[16px]
                "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="font-medium">Message sent successfully!</p>
                  <p className="text-sm text-green-300">I'll get back to you soon.</p>
                </div>
              </motion.div>
            )}

            {/* Error Message */}
            {error && (
              <motion.div
                className="
                  flex items-center gap-3 p-4 mt-6 rounded-lg
                  text-red-400 border border-red-500/50
                  bg-red-900/30 text-[16px]
                "
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-medium">Error sending message</p>
                  <p className="text-sm text-red-300">{error}</p>
                </div>
              </motion.div>
            )}
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default memo(Contact);
