import React, { useState } from "react";

const Contact = () => {
  // State for Formspree form submission
  const [formState, setFormState] = useState({
    submitting: false,
    succeeded: false,
    error: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ ...formState, submitting: true });

    const form = e.target;
    const data = new FormData(form);

    try {
      // REPLACE "YOUR_FORMSPREE_ENDPOINT" WITH YOUR ACTUAL FORMSPREE ID
      const response = await fetch("https://formspree.io/f/mjgnlgga", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormState({ submitting: false, succeeded: true, error: null });
        form.reset();
      } else {
        const errorData = await response.json();
        setFormState({
          submitting: false,
          succeeded: false,
          error: errorData.errors
            ? errorData.errors.map((err) => err.message).join(", ")
            : "Oops! There was a problem submitting your form",
        });
      }
    } catch (error) {
      setFormState({
        submitting: false,
        succeeded: false,
        error: "Oops! There was a problem submitting your form",
      });
    }
  };

  return (
    <section className="pt-8 max-w-5xl mx-auto animate-fade-in relative pb-12">
      <div className="flex flex-col md:flex-row gap-0 bg-white dark:bg-[#1e293b] rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
        {/* Left: Contact Info */}
        <div className="w-full md:w-5/12 p-8 md:p-12 pr-8 md:pr-4">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">
              Let's talk about your project
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-10">
              Interested in working together or have a question? Feel free to
              reach out through any of the platforms below.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-[#eef4ff] dark:bg-blue-900/30 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="text-[15px] font-bold text-slate-900 dark:text-slate-100 mb-0.5">
                  Email
                </p>
                <p className="text-[13px] text-slate-500 dark:text-slate-400 font-medium">
                  adhesaef@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 rounded-full flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="text-[15px] font-bold text-slate-900 dark:text-slate-100 mb-0.5">
                  GitHub
                </p>
                <a
                  href="https://github.com/AdeSaef"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-slate-500 dark:text-slate-400 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition hover:underline"
                >
                  github.com/AdeSaef
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-[#ebfbf1] dark:bg-green-900/30 text-emerald-500 rounded-full flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="text-[15px] font-bold text-slate-900 dark:text-slate-100 mb-0.5">
                  WhatsApp
                </p>
                <p className="text-[13px] text-slate-500 dark:text-slate-400 font-medium">
                  +62 812-3456-7890
                </p>
              </div>
            </div>
          </div>

          {/* Decorative graphic (Placeholder for the "10" bubble in the image) */}
          <div className="mt-16 md:mt-24 ml-12 relative w-16 h-16 opacity-80">
            <div className="absolute inset-0 bg-[#f4ebd0] rounded-full flex items-center justify-center border-2 border-white dark:border-slate-800 shadow-sm">
              <span className="font-bold text-[#d4c6a0] text-xl">10.</span>
            </div>
            <div className="absolute bottom-0 left-2 w-3 h-3 bg-[#f4ebd0] rounded-full border-2 border-white dark:border-slate-800 shadow-sm translate-y-1/2"></div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="w-full md:w-7/12 p-8 md:p-12 pl-8 md:pl-4">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-[13px] font-bold mb-2 text-slate-700 dark:text-slate-300">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3.5 rounded-xl bg-[#f8fafc] dark:bg-[#0f172a] border border-slate-200/80 dark:border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition text-[15px] placeholder-slate-400"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-[13px] font-bold mb-2 text-slate-700 dark:text-slate-300">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3.5 rounded-xl bg-[#f8fafc] dark:bg-[#0f172a] border border-slate-200/80 dark:border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition text-[15px] placeholder-slate-400"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-[13px] font-bold mb-2 text-slate-700 dark:text-slate-300">
                Message
              </label>
              <textarea
                rows="5"
                name="message"
                required
                className="w-full px-4 py-3.5 rounded-xl bg-[#f8fafc] dark:bg-[#0f172a] border border-slate-200/80 dark:border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition resize-none text-[15px] placeholder-slate-400"
                placeholder="Hello..."
              ></textarea>
            </div>

            {/* Status Messages */}
            {formState.succeeded && (
              <div className="p-3 bg-green-50 text-green-700 text-sm rounded-lg border border-green-200 text-center font-medium">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {formState.error && (
              <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-200 text-center font-medium">
                {formState.error}
              </div>
            )}

            <button
              type="submit"
              disabled={formState.submitting}
              className="w-full bg-[#2563eb] hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3.5 rounded-xl transition mt-2 shadow-sm shadow-blue-500/20"
            >
              {formState.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* Floating Grammarly-like Icon (Decorative) */}
      <div className="absolute right-0 bottom-6 md:right-8 md:bottom-8 z-10 hidden sm:block">
        <div className="w-12 h-12 bg-[#008f7a] rounded-full flex items-center justify-center border-4 border-white dark:border-[#0f172a] shadow-lg">
          <span className="text-white font-bold text-xl leading-none">G</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
