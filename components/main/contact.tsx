"use client";

import React, {
  ChangeEvent,
  FormEvent,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useCallback,
  useState,
} from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import SectionWrapper from "@/components/sub/section-wrapper";
import { textVariant } from "@/lib/motion";
// Type for form state
interface FormState {
  name: string;
  email: string;
  message: string;
}

const INITIAL_FORM_STATE: FormState = {
  name: "",
  email: "",
  message: "",
};

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>(INITIAL_FORM_STATE);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      try {
        await emailjs.send(
          "service_j6gr3ea",
          "template_komjl0b",
          {
            name: form.name,
            to_name: "Jane Stone",
            email: form.email,
            to_email: "jane.stone0820@gmail.com",
            message: form.message,
          },
          {
            publicKey: "0ffTfRpnV2bPWq_u3"
          }
        );
        alert("Thank you. I will get back to you as soon as possible.");
        setForm(INITIAL_FORM_STATE);
      } catch (error) {
        console.error(error);
        alert("Oops, something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    },
    [form]
  );

  return (
    <>
      <motion.div
        variants={textVariant(0.2)}
        className="bg-black-100 p-8 rounded-2xl"
      >
        <p className="sm:text-base text-sm text-secondary uppercase tracking-wider text-center">Get in touch</p>
        <h3 className="text-white font-bold md:text-4xl sm:text-3xl xs:text-2xl text-xl text-center mb-8 magic-tex">
          Contact.
        </h3>

        <form onSubmit={handleSubmit} className="sm:min-w-[300px] md:min-w-[600px] w-full flex flex-col gap-8">
          <FormField
            label="Your Name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
          />
          <FormField
            label="Your Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email address?"
          />
          <FormField
            label="Your Message"
            name="message"
            as="textarea"
            rows={7}
            value={form.message}
            onChange={handleChange}
            placeholder="What would you like to say?"
          />
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition-all duration-300 ease-in-out hover:bg-opacity-80 mx-auto"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </>
  );
};

// Union type for FormField props
type InputProps = {
  label: string;
  as?: "input";
} & InputHTMLAttributes<HTMLInputElement>;

type TextareaProps = {
  label: string;
  as: "textarea";
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

type FormFieldProps = InputProps | TextareaProps;

const FormField: React.FC<FormFieldProps> = ({ label, as = "input", ...props }) => {
  const Component = as;
  return (
    <label className="flex flex-col">
      <span className="text-white font-medium mb-4">{label}</span>
      <Component
        className="w-full bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium transition-all duration-300 ease-in-out focus:ring-2 focus:ring-white"
        {...(props as any)} // You can cast to `any` or create a discriminated union for stricter typing
      />
    </label>
  );
};

export default SectionWrapper(Contact, "contact");