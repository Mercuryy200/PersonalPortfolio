"use client";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import React from "react";
import { Form, Input, Button, Textarea } from "@heroui/react";
import { sendMail } from "@/lib/send-mail";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Please Enter Your Name" }),
  email: z.string().email({ message: "Please Enter a Valid Email Address" }),
  message: z.string().min(10, {
    message: "Please make sure your message is at least 10 characters long.",
  }),
});

interface ContactProps {
  t: {
    title: string;
    name: {
      errorMessage: string;
      label: string;
      placeholder: string;
    };
    email: {
      errorMessage: string;
      label: string;
      placeholder: string;
    };
    message: {
      errorMessage: string;
      label: string;
      placeholder: string;
    };
    submit: string;
    reset: string;
  };
}

export default function Contact({ t }: ContactProps) {
  const [action, setAction] = React.useState<string | null>(null);
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    const mailText = `Name: ${values.name}\n  Email: ${values.email}\nMessage: ${values.message}`;
    const response = await sendMail({
      email: values.email,
      subject: "New Contact Us Form",
      text: mailText,
    });
    if (response?.messageId) {
      toast.success("Application Submitted Successfully.");
    } else {
      toast.error("Failed To send application.");
    }
  };
  return (
    <div
      id="contact"
      className="h-screen flex flex-col justify-center items-center px-4 md:px-20"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t.title}
      </motion.h2>

      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Form
          className="glassBackground flex flex-col gap-6 p-8 rounded-xl shadow-lg"
          onReset={() => setAction("reset")}
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <Input
            isRequired
            errorMessage={t.name.errorMessage}
            label={t.name.label}
            labelPlacement="outside"
            name="name"
            autoComplete="off"
            placeholder={t.name.placeholder}
            type="text"
          />

          <Input
            isRequired
            errorMessage={t.email.errorMessage}
            label={t.email.label}
            labelPlacement="outside"
            name="email"
            autoComplete="off"
            placeholder={t.email.placeholder}
            type="email"
          />

          <Textarea
            isRequired
            errorMessage={t.message.errorMessage}
            label={t.message.label}
            labelPlacement="outside"
            name="message"
            placeholder={t.message.placeholder}
            autoComplete="off"
            classNames={{
              label: "pl-3",
            }}
            className="pb-4"
          />

          <div className="flex gap-4 justify-end">
            <Button color="primary" type="submit">
              {isLoading ? "Sending....." : t.submit}
            </Button>
            <Button type="reset" variant="flat">
              {t.reset}
            </Button>
          </div>

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
