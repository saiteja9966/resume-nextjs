"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const contactData = {
  socialLinks: [
    {
      title: "GitHub",
      href: "https://github.com/saitejabudda",
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/saiteja-buddha-458643147",
    },
  ],
  contactInfo: [
    {
      type: "email",
      label: "saitejabudda@gmail.com",
      link: "mailto:saitejabudda@gmail.com",
    },
    {
      type: "phone",
      label: "+91 7036254458",
      link: "tel:+917036254458",
    },
  ],
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const reset = () => {
    setFormData({
      name: "",
      number: "",
      email: "",
      message: "",
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    fetch("https://formsubmit.co/ajax/saitejabudda@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSubmitted(true);
          reset();
        }
      })
      .catch(console.error);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="no-print">
      <div className="container">
        <div className="pt-16 md:pt-32 pb-20">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Contact Me</h2>
            <p className="text-xl text-orange-500">( 05 )</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* FORM */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-7 sm:gap-12">
              <div className="grid grid-cols-2 gap-8">
                <input name="name" placeholder="Name" className="input" value={formData.name} onChange={handleChange} required />
                <input name="number" placeholder="Phone" className="input" value={formData.number} onChange={handleChange} required />
              </div>

              <input name="email" placeholder="Email" className="input" value={formData.email} onChange={handleChange} required />
              <textarea name="message" placeholder="Message" className="input" value={formData.message} onChange={handleChange} required />

              {submitted && (
                <div className="flex items-center gap-2">
                  <Image src="/images/icon/success-icon.svg" alt="success" width={30} height={30} />
                  <p className="text-secondary">Email sent successfully!</p>
                </div>
              )}

              <button type="submit" className="border border-primary px-6 py-3 rounded-full">
                Send Now
              </button>
            </form>

            {/* CONTACT INFO */}
            <div className="flex flex-col gap-10 items-end">
              {contactData.socialLinks.map((item, i) => (
                <Link key={i} href={item.href} className="text-lg hover:text-primary">
                  {item.title}
                </Link>
              ))}

              {contactData.contactInfo.map((item, i) => (
                <Link key={i} href={item.link} className="border-b pb-2 hover:text-primary">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
