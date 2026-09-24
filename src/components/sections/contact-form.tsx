"use client";

import { AnimatePresence, motion } from "motion/react";
import { Check, CircleAlert } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { services } from "@/data/services";
import { site } from "@/lib/site";
import { cn, ease } from "@/lib/utils";

interface FormValues {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}

type Errors = Partial<Record<keyof FormValues, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const budgets = ["< $5k", "$5k – $15k", "$15k – $40k", "$40k+", "Not sure yet"];

function validate(v: FormValues): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please tell us your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Please enter a valid email address.";
  if (!v.projectType) e.projectType = "Choose the closest project type.";
  if (!v.budget) e.budget = "Pick a budget range.";
  if (v.message.trim().length < 20) e.message = "A few more details help — at least 20 characters.";
  return e;
}

/**
 * TODO(integration): send the inquiry to your backend, CRM or email service.
 * Replace the body of this function with a real request (e.g. a Server Action or
 * fetch("/api/contact")). Throwing an error shows the failure state.
 */
async function submitInquiry(values: FormValues): Promise<void> {
  await new Promise((r) => setTimeout(r, 900));
  void values;
}

export function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    company: "",
    projectType: defaultService,
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  const set =
    (key: keyof FormValues) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const next = { ...values, [key]: e.target.value };
      setValues(next);
      if (touched) setErrors(validate(next));
    };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setTouched(true);
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      document.getElementById(`field-${first}`)?.focus();
      return;
    }
    setStatus("submitting");
    try {
      await submitInquiry(values);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: ease.out }}
        className="rounded-[24px] border border-line bg-offwhite p-10 md:p-14"
        role="status"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green text-navy">
          <Check className="h-6 w-6" />
        </span>
        <h2 className="text-title mt-8 text-navy">Thanks, {values.name.split(" ")[0]} — we&apos;ve got it.</h2>
        <p className="text-lead mt-4 max-w-md text-muted">{site.responseTime}</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-x-6 gap-y-7 md:grid-cols-2" aria-describedby="form-status">
      <Field label="Name" name="name" error={errors.name}>
        <input
          id="field-name"
          autoComplete="name"
          value={values.name}
          onChange={set("name")}
          className={input(errors.name)}
          {...aria("name", errors.name)}
        />
      </Field>
      <Field label="Email" name="email" error={errors.email}>
        <input
          id="field-email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={set("email")}
          className={input(errors.email)}
          {...aria("email", errors.email)}
        />
      </Field>
      <Field label="Company" name="company" optional>
        <input
          id="field-company"
          autoComplete="organization"
          value={values.company}
          onChange={set("company")}
          className={input()}
        />
      </Field>
      <Field label="Project type" name="projectType" error={errors.projectType}>
        <select
          id="field-projectType"
          value={values.projectType}
          onChange={set("projectType")}
          className={cn(
            input(errors.projectType),
            "appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat",
          )}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%230A1A27' stroke-width='1.5'/%3E%3C/svg%3E\")",
          }}
          {...aria("projectType", errors.projectType)}
        >
          <option value="">Select…</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
          <option value="other">Something else</option>
        </select>
      </Field>

      <fieldset className="md:col-span-2">
        <legend className="mb-3 text-sm font-semibold text-navy">Budget</legend>
        <div
          className="flex flex-wrap gap-2"
          role="radiogroup"
          aria-describedby={errors.budget ? "error-budget" : undefined}
        >
          {budgets.map((b) => (
            <label
              key={b}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-2.5 text-sm font-medium transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-green",
                values.budget === b ? "border-navy bg-navy text-white" : "border-line text-navy hover:border-navy/40",
              )}
            >
              <input
                type="radio"
                name="budget"
                value={b}
                checked={values.budget === b}
                onChange={set("budget")}
                className="sr-only"
                id={b === budgets[0] ? "field-budget" : undefined}
              />
              {b}
            </label>
          ))}
        </div>
        <ErrorText id="error-budget" message={errors.budget} />
      </fieldset>

      <Field label="Tell us about the project" name="message" error={errors.message} className="md:col-span-2">
        <textarea
          id="field-message"
          rows={6}
          value={values.message}
          onChange={set("message")}
          className={cn(input(errors.message), "h-auto resize-y py-4")}
          placeholder="Goals, timeline, links — anything useful."
          {...aria("message", errors.message)}
        />
      </Field>

      <div className="flex flex-col gap-5 md:col-span-2 md:flex-row md:items-center md:justify-between">
        <MagneticButton type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send Project Inquiry"}
        </MagneticButton>
        <p className="text-sm text-muted">{site.responseTime}</p>
      </div>

      <div id="form-status" aria-live="polite" className="md:col-span-2">
        <AnimatePresence>
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-start gap-3 rounded-[14px] border border-red-200 bg-red-50 p-4 text-sm text-red-800"
            >
              <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" />
              Something went wrong sending your message. Please try again, or email us directly at {site.email}.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}

function input(error?: string) {
  return cn(
    "h-14 w-full rounded-[14px] border bg-white px-4 text-navy outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-navy/35 focus:border-teal focus:shadow-[0_0_0_4px_rgba(16,139,136,0.12)]",
    error ? "border-red-400" : "border-line hover:border-navy/30",
  );
}

function aria(name: string, error?: string) {
  return { "aria-invalid": error ? true : undefined, "aria-describedby": error ? `error-${name}` : undefined };
}

function Field({
  label,
  name,
  error,
  optional,
  className,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  optional?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={`field-${name}`} className="mb-3 flex justify-between text-sm font-semibold text-navy">
        {label}
        {optional && <span className="font-normal text-muted">Optional</span>}
      </label>
      {children}
      <ErrorText id={`error-${name}`} message={error} />
    </div>
  );
}

function ErrorText({ id, message }: { id: string; message?: string }) {
  return (
    <AnimatePresence initial={false}>
      {message && (
        <motion.p
          id={id}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="overflow-hidden pt-2 text-sm text-red-700"
        >
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  );
}
