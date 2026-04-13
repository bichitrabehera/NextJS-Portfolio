"use client";
import { FiSend } from "react-icons/fi";
import { useRef, useCallback, useState, memo } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef(null);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = useCallback((e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY },
      )
      .then(() => {
        setIsSent(true);
        form.current.reset();
      });
  }, []);

  return (
    <section className="bg-background text-foreground py-6">
      <div
        className="
          mx-auto px-6
          max-w-2xl
        "
      >
        <div className="rounded-3xl">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-8 mx-auto max-w-3xl"
          >
            <BotBubble text="hello. who is this?" />

            <UserInput name="user_name" placeholder="your name ..." required />

            <BotBubble text="where should i send my reply?" />

            <UserInput
              name="user_email"
              placeholder="email ..."
              type="email"
              required
            />

            <BotBubble text="alright. what's on your mind?" />

            <motion.textarea
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              name="message"
              required
              rows={4}
              placeholder="write your query ..."
              className="
                w-full rounded-2xl px-6 py-4
                bg-background text-foreground
                placeholder:text-foreground/30
                border outline-none
                ring-1 ring-white/5
                focus:ring-white/20
                transition
              "
            />

            <div className="flex justify-end pt-2">
              <motion.button
                whileTap={{ scale: 0.92 }}
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="
    group relative
    w-12 h-12 rounded-full
    bg-gradient-to-br from-blue-500 to-indigo-600
    text-white
    flex items-center justify-center
    
    transition-all duration-300
    hover:shadow-xl hover:shadow-blue-500/40
    active:shadow-md
  "
              >
                <FiSend
                  className="
      relative z-10
      text-xl
      transition-transform duration-200
      group-hover:translate-x-0.5 group-hover:-translate-y-0.5
    "
                />
              </motion.button>
            </div>

            {isSent && (
              <BotBubble
                success
                text="message received. i'll get back to you soon."
              />
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function BotBubble({ text, success }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-start gap-1"
    >
      <div
        className={`
          px-5 py-1 rounded-2xl text max-w-[80%]
          ${
            success
              ? "bg-green-500/10 text-green-400"
              : "bg-white/5 text-foreground"
          }
        `}
      >
        {text}
      </div>
    </motion.div>
  );
}

function UserInput({ placeholder, name, type = "text", required }) {
  return (
    <motion.input
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      className="
        w-full rounded-2xl px-6 py-2
        bg-background text-foreground
        placeholder:text-foreground/30
        border
        outline-none
        ring-1 ring-white/5
        focus:ring-white/20
        transition
      "
    />
  );
}

export default memo(Contact);
