"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const form = useRef();

  const [mailSended, setmailSended] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_70fkdva",
        "template_th00hij",
        form.current,
        "mn7IpkFnUa2NBoAPy"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            setmailSended(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container mx-auto flex justify-center bg-black text-white">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col h-full w-[70%]"
      >
        <motion.p
          className="text-center text-3xl mb-4 font-bold mt-8"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          Soporte
        </motion.p>
        <motion.label
          className="mb-2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Tu nombre
        </motion.label>
        <motion.input
          type="text"
          name="user_name"
          className=" p-4 bg-emerald-50 text-black rounded-lg outline-none focus:outline-emerald-500 focus:outline-2 mb-5 required:"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          required
        />
        <motion.label
          className="mb-2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          Tu email
        </motion.label>
        <motion.input
          type="email"
          name="user_email"
          className="p-4 bg-emerald-50 text-black rounded-lg outline-none focus:outline-emerald-500 focus:outline-2 mb-5"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          required
        />
        <motion.label
          className="mb-2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          ¿ En que te podemos ayudar ?
        </motion.label>
        <motion.textarea
          name="message"
          className="p-4 bg-emerald-50 text-black rounded-lg outline-none focus:outline-emerald-500 focus:outline-2 mb-12 h-[20%]"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          required
        />

        {!loading ? (
          <motion.input
            type="submit"
            value="Send"
            className=" bg-emerald-500 text-black font-semibold p-7 rounded-lg hover:bg-emerald-600 hover:text-white  lg:w-1/2 lg:self-center"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          />
        ) : null}

        {loading && !mailSended ? (
          <motion.p
            animate={{ opacity: 1 }}
            initial={{ opacity: 0.1 }}
            transition={{ duration: 0.3 }}
            className="bg-white bg-opacity-50 text-black text-center font-semibold p-7 rounded-lg lg:w-1/2 lg:self-center"
          >
            Enviando...
          </motion.p>
        ) : null}

        {mailSended ? (
          <motion.div className="bg-white text-black text-center font-semibold p-7 rounded-lg lg:w-1/2 lg:self-center">
            <motion.p
              animate={{ y: 0, opacity: 1 }}
              initial={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, type: "spring" }}
            >
              Email sent successfully!
            </motion.p>
          </motion.div>
        ) : null}
      </form>
    </div>
  );
}

export default ContactUs;
