"use client";
import { motion } from "framer-motion";
import React from "react";
import { Form, Input, Button } from "@heroui/react";

interface ContactProps {
  t: {
    title: string;
  };
}

export default function Contact({ t }: ContactProps) {
  const [action, setAction] = React.useState<string | null>(null);

  return (
    <div
      id="contact"
      className="h-screen flex flex-col justify-center items-center px-4 md:px-20"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t.title}
      </motion.h2>

      {/* Contact Form */}
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Form
          className="flex flex-col gap-6 bg-white p-8 rounded-xl shadow-lg"
          onReset={() => setAction("reset")}
          onSubmit={(e) => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(e.currentTarget));
            setAction(`submit ${JSON.stringify(data)}`);
          }}
        >
          <Input
            isRequired
            errorMessage="Please enter a valid name"
            label="Name"
            labelPlacement="outside"
            name="name"
            placeholder="Enter your name"
            type="text"
          />

          <Input
            isRequired
            errorMessage="Please enter a valid email"
            label="Email"
            labelPlacement="outside"
            name="email"
            placeholder="Enter your email"
            type="email"
          />

          <Input
            isRequired
            errorMessage="Please enter a message"
            label="Message"
            labelPlacement="outside"
            name="message"
            placeholder="Your message..."
            type="textarea"
          />

          <div className="flex gap-4 justify-end">
            <Button color="primary" type="submit">
              Submit
            </Button>
            <Button type="reset" variant="flat">
              Reset
            </Button>
          </div>

          {/* Display action */}
          {action && (
            <div className="mt-4 text-gray-600 text-sm text-center">
              Action: <code>{action}</code>
            </div>
          )}
        </Form>
      </motion.div>
    </div>
  );
}
