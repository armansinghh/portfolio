"use client";

import { useState, useEffect } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import * as z from "zod";

/* ---------------- VALIDATION ---------------- */
const formSchema = z.object({
  email: z.string().email({ message: "Enter a valid email" }),
  message: z.string().min(10, { message: "Message too short" }),

  // 🔥 honeypot (hidden field)
  company: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function MessageBox() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
      company: "",
    },
  });

  /* ---------------- TOAST FEEDBACK ---------------- */
  useEffect(() => {
    if (status === "success") {
      toast.success("Message sent 🚀");
    } else if (status === "error") {
      toast.error("Something went wrong");
    }
  }, [status]);

  /* ---------------- SUBMIT ---------------- */
  async function onSubmit(values: FormValues) {
    setStatus("sending");

    try {
      const res = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `📧 Email: ${values.email}\n💬 Message: ${values.message}`,
          company: values.company || "", // 🔥 honeypot
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();

        // reset back to idle after 2s
        setTimeout(() => {
          setStatus("idle");
        }, 2000);
      } else {
        const data = await res.json();
        toast.error(data.error || "Failed to send");
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  /* ---------------- UI ---------------- */
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        {/* EMAIL */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="your.email@example.com"
                  {...field}
                  type="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* MESSAGE */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write your message..."
                  {...field}
                  rows={4}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 🔥 HONEYPOT FIELD (HIDDEN) */}
        <input
          type="text"
          {...form.register("company")}
          className="hidden"
          autoComplete="off"
        />

        {/* BUTTON */}
        <Button
          type="submit"
          disabled={status === "sending"}
          className="w-full h-11 rounded-lg text-sm font-medium"
        >
          {status === "sending"
            ? "Sending..."
            : status === "success"
              ? "Sent!"
              : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}
