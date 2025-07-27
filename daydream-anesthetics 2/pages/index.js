
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Home() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xwkglzjy", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await res.json();
      if (result.ok || result.success) {
        setFormStatus("Message sent successfully.");
        form.reset();
      } else {
        setFormStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setFormStatus("Network error. Please try again.");
    }
  };

  return (
    <>
      <Head>
        <title>Daydream Anesthetics | Mobile Dental Anesthesia</title>
        <meta name="description" content="Mobile dental anesthesia services across Illinois. Safe, seamless sedation by a board-certified anesthesiologist." />
        <meta property="og:title" content="Daydream Anesthetics" />
        <meta property="og:description" content="Mobile anesthesia for dental offices – pediatric, adult, and special needs sedation by a board-certified anesthesiologist." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.daydreamanesthetics.com" />
        <meta property="og:image" content="/daydream-og.png" />
      </Head>

      <div className="min-h-screen bg-[#fdfdfd] text-gray-800 font-sans">
        <header className="p-6 border-b border-gray-200 sticky top-0 bg-white z-50 shadow-sm">
          <nav className="flex justify-between items-center max-w-6xl mx-auto">
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="Daydream Anesthetics Logo" width={50} height={50} />
              <h1 className="text-3xl font-bold tracking-tight text-blue-800">Daydream Anesthetics</h1>
            </div>
            <ul className="flex space-x-6 text-sm font-medium">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#dentists" className="hover:underline">Dentists</a></li>
              <li><a href="#patients" className="hover:underline">Patients</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </header>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="py-20 px-6 text-center bg-gradient-to-br from-blue-50 to-white">
          <h2 className="text-5xl font-extrabold text-blue-900 leading-tight mb-4">Safe, Seamless Dental Anesthesia</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Mobile anesthesia services across Illinois — for dentists who care, and patients who deserve comfort.</p>
        </motion.section>
      </div>
    </>
  );
}
