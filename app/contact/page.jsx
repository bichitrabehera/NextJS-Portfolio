"use client";
import { useRef, useCallback, useState, memo } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import ReturnButton from "@/components/ui/ReturnButton";

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
    <section className="bg-background text-foreground py-10">
      <div
        className="
          mx-auto px-6
          max-w-2xl
        "
      >
        <ReturnButton/>

        <div className="rounded-3xl">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-8 mx-auto max-w-3xl"
          >
            <BotBubble text="hello. i'm listening. who is this?" />

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
                whileTap={{ scale: 0.96 }}
                type="submit"
                className="
                  w-12 h-12 rounded-full
                  bg-blue-500 text-white
                  hover:bg-blue-400 transition
                  flex items-center justify-center
                  text-lg
                "
              >
                →
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
      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text">
        <Image
          src="/assets/me.jpg"
          alt="profile"
          width={112}
          height={112}
          className="rounded-full shadow-lg object-cover"
          priority
        />
      </div>
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
