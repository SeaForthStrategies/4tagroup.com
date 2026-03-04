"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { EMPLOYEES_PAGE } from "@/lib/constants";

export default function EmployeesPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    const correct = process.env.NEXT_PUBLIC_EMPLOYEE_PASS;
    if (password === correct) {
      setAuthenticated(true);
    } else {
      setError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
    }
  };

  if (authenticated) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center px-4 sm:px-6" style={{ paddingTop: "max(5rem, calc(5rem + env(safe-area-inset-top)))" }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-white rounded-2xl border border-gray-200 p-8 shadow-sm text-center"
        >
          <div className="mx-auto w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mb-5">
            <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-heading text-2xl font-bold text-navy mb-2">{EMPLOYEES_PAGE.welcomeMessage}</h1>
          <p className="text-sm text-gray-500">You now have access to the employee portal.</p>
          <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
            <p className="text-sm text-gray-400">Employee resources and documents will be available here.</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-4 sm:px-6" style={{ paddingTop: "max(5rem, calc(5rem + env(safe-area-inset-top)))" }}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className={`w-full max-w-md bg-white rounded-2xl border border-gray-200 p-8 shadow-sm ${shaking ? "animate-shake" : ""}`}
      >
        <div className="text-center mb-8">
          <div className="mx-auto w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center mb-5">
            <svg className="w-6 h-6 text-navy/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="font-heading text-2xl font-bold text-navy mb-1">{EMPLOYEES_PAGE.subheading}</h1>
          <p className="text-sm text-gray-500">{EMPLOYEES_PAGE.body}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              placeholder={EMPLOYEES_PAGE.placeholder}
              className={`w-full px-4 py-3 rounded-xl border text-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-aviation-blue/25 focus:border-aviation-blue transition-colors ${error ? "border-red-400" : "border-gray-200"}`}
              aria-describedby={error ? "pw-error" : undefined}
              required
            />
            {error && (
              <motion.p id="pw-error" role="alert" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
                className="mt-1.5 text-xs text-red-500">
                {EMPLOYEES_PAGE.errorMessage}
              </motion.p>
            )}
          </div>
          <Button type="submit" className="w-full">
            {EMPLOYEES_PAGE.buttonText}
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
