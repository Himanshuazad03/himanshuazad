"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Loader2 } from "lucide-react";
import { sendEmail } from "../actions/sendEmail";
import { StaggerContainer, StaggerItem } from "@/components/Stagger";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    try {
      const result = await sendEmail(formData);
      reset();
      if (result?.success) {
        toast.success(result?.data);
      }
    } catch (err) {
      console.error("Email failed:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen py-32 px-6 overflow-hidden">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950" />
        <div
          className="absolute left-1/2 top-20 h-[500px] w-[500px]
          -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]"
        />
      </div>

      <StaggerContainer className="relative mx-auto max-w-5xl">
        {/* HEADER */}
        <StaggerItem>
          <div className="mb-20 text-center">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-100">
              Let’s turn{" "}
              <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                ideas
              </span>{" "}
              into{" "}
              <span
                className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent
"
              >
                real products
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-400">
              Whether it’s a question, collaboration, or feedback — feel free to
              reach out. I’m always open to conversations that lead to growth.
            </p>
          </div>
        </StaggerItem>

        {/* CONTENT */}
        <StaggerContainer className="grid gap-16 lg:grid-cols-2">
          {/* LEFT INFO */}
          <StaggerItem className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-200">
              Get in touch
            </h2>
            <p className="text-slate-400 leading-relaxed mb-2">
              I enjoy working on practical problems and building products that
              scale well over time. If you have an idea, a project, or just want
              to connect, this is the right place.
            </p>

            <div className="flex items-center gap-3 text-slate-300">
              <Mail className="h-5 w-5 text-cyan-400" />
              <span className="text-sm">himanshuazad05@gmail.com</span>
            </div>
          </StaggerItem>

          {/* CONTACT FORM */}
          <StaggerItem>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Card
                className="border-slate-800/80 bg-slate-900/60
                backdrop-blur-md shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]"
              >
                <CardContent className="p-8 space-y-6">
                  {/* NAME */}
                  <div>
                    <label className="text-sm font-medium text-slate-300">
                      Name
                    </label>
                    <Input
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                      })}
                      placeholder="Your name"
                      className="mt-2 bg-slate-950 border-slate-800 text-slate-200"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="text-sm font-medium text-slate-300">
                      Email
                    </label>
                    <Input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address",
                        },
                      })}
                      placeholder="you@example.com"
                      className="mt-2 bg-slate-950 border-slate-800 text-slate-200"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="text-sm font-medium text-slate-300">
                      Message
                    </label>
                    <Textarea
                      {...register("message", {
                        required: "Message cannot be empty",
                        minLength: {
                          value: 10,
                          message: "Message should be at least 10 characters",
                        },
                      })}
                      placeholder="Tell me about your idea or question…"
                      rows={5}
                      className="mt-2 bg-slate-950 border-slate-800 text-slate-200"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* SUBMIT */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-cyan-500 text-slate-950
                    hover:bg-cyan-400 transition disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>

                  <p className="text-xs text-slate-500 text-center">
                    I usually respond within 24–48 hours.
                  </p>
                </CardContent>
              </Card>
            </form>
          </StaggerItem>
        </StaggerContainer>
      </StaggerContainer>
    </section>
  );
}
