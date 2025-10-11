"use client";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import React from "react";
import { Input, Button, Textarea } from "@heroui/react";
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
    console.log("Submitting form with:", values);
    const mailText = `Name: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`;
    const mailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${values.name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${values.email}</p>
        </div>
        <div style="margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Message:</strong></p>
          <p style="background-color: #fff; padding: 15px; border-left: 4px solid #007bff; white-space: pre-wrap;">
            ${values.message}
          </p>
        </div>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p style="color: #666; font-size: 12px;">
          This email was sent from your website contact form.
        </p>
      </div>
    `;

    try {
      const response = await sendMail({
        email: values.email,
        subject: `New Contact Form: ${values.name}`,
        text: mailText,
        html: mailHtml,
      });

      if (response?.success) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        form.reset();
      } else {
        toast.error(
          response?.error || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-4 md:px-20"
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
        className="w-full max-w-md glassBackground"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <form
          className="glassBackground flex flex-col gap-6 p-8 rounded-xl shadow-lg"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <Input
            isRequired
            isInvalid={!!form.formState.errors.name}
            errorMessage={form.formState.errors.name?.message}
            label={t.name.label}
            labelPlacement="outside"
            placeholder={t.name.placeholder}
            type="text"
            {...form.register("name")}
            autoComplete="off"
          />

          <Input
            isRequired
            isInvalid={!!form.formState.errors.email}
            errorMessage={form.formState.errors.email?.message}
            label={t.email.label}
            labelPlacement="outside"
            placeholder={t.email.placeholder}
            type="email"
            {...form.register("email")}
            autoComplete="off"
          />

          <Textarea
            isRequired
            isInvalid={!!form.formState.errors.message}
            errorMessage={form.formState.errors.message?.message}
            label={t.message.label}
            labelPlacement="outside"
            placeholder={t.message.placeholder}
            classNames={{ label: "pl-3" }}
            className="pb-4"
            {...form.register("message")}
          />

          <div className="flex gap-4 justify-end">
            <Button
              color="primary"
              type="submit"
              className="bg-coffeBean text-almond rounded-xl w-1/2 p-2"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : t.submit}
            </Button>

            <Button
              type="button"
              className="bg-coffeBean text-almond rounded-xl w-1/2 p-2"
              variant="flat"
              onPress={() => form.reset()}
            >
              {t.reset}
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
