// "use client";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const Contact = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <div
//       id="Contact"
//       className="relative w-full bg-gradient-to-b from-violet-950 via-gray-950 to-fuchsia-950 py-24 text-white overflow-hidden"
//     >
//       {/* Background Effects */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-fuchsia-600/20 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-700/20 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl"></div>
//         <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-20">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
//           transition={{ duration: 0.8 }}
//           className="text-center"
//         >
//           <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-emerald-400">
//             Contact Me
//           </h1>
//           <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
//             Let’s collaborate! Whether you have an idea, a project, or just want
//             to say hi — drop me a message, I’ll get back to you soon 🚀
//           </p>
//           <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-500 to-violet-400 mx-auto mt-4 rounded-full"></div>
//         </motion.div>

//         {/* Form */}
//         <motion.form
//           action="https://formsubmit.co/rupesh115511@gmail.com"
//           method="POST"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
//           transition={{ duration: 1, delay: 0.3 }}
//           className="mt-12 max-w-3xl mx-auto bg-gray-900/70 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-gray-800/60"
//         >
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             <div>
//               <label className="text-sm font-medium text-gray-300">Name</label>
//               <input
//                 autoComplete="off"
//                 type="text"
//                 name="text"
//                 required
//                 placeholder="Enter your name"
//                 className="mt-2 w-full py-3 px-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-fuchsia-500 outline-none transition-all"
//               />
//             </div>

//             <div>
//               <label className="text-sm font-medium text-gray-300">Email</label>
//               <input
//                 autoComplete="off"
//                 type="email"
//                 name="email"
//                 required
//                 placeholder="Enter your email"
//                 className="mt-2 w-full py-3 px-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-fuchsia-500 outline-none transition-all"
//               />
//             </div>
//           </div>

//           <div className="mt-6">
//             <label className="text-sm font-medium text-gray-300">Message</label>
//             <textarea
//               name="message"
//               required
//               placeholder="Enter your message"
//               rows="5"
//               className="mt-2 w-full py-3 px-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-fuchsia-500 outline-none transition-all"
//             ></textarea>
//           </div>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.97 }}
//             type="submit"
//             className="mt-8 w-full py-3 bg-gradient-to-r from-fuchsia-600 via-pink-600 to-violet-600 hover:from-fuchsia-700 hover:via-pink-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all shadow-lg shadow-fuchsia-800/30"
//           >
//             Send Message
//           </motion.button>
//         </motion.form>
//       </div>

//       {/* Grid Background Pattern */}
//       <style >{`
//         .bg-grid-pattern {
//           background-size: 30px 30px;
//           background-image: linear-gradient(
//               to right,
//               rgba(255, 255, 255, 0.05) 1px,
//               transparent 1px
//             ),
//             linear-gradient(
//               to bottom,
//               rgba(255, 255, 255, 0.05) 1px,
//               transparent 1px
//             );
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Contact;


"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="Contact"
      className="relative w-full py-28
                 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950
                 text-slate-100 overflow-hidden"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">
        <div className="absolute top-24 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-10 lg:px-20">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-widest text-slate-400">
            Get In Touch
          </p>
          <h1
            className="mt-3 text-3xl sm:text-4xl font-bold
                       text-transparent bg-clip-text
                       bg-gradient-to-r from-indigo-400 to-blue-400"
          >
            Contact Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-blue-400 mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Whether you have a project idea, collaboration opportunity, or just
            want to connect, feel free to drop a message. I’ll get back to you
            as soon as possible.
          </p>
        </motion.div>

        {/* ================= FORM ================= */}
        <motion.form
          action="https://formsubmit.co/rupesh115511@gmail.com"
          method="POST"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-14 max-w-3xl mx-auto
                     bg-slate-900/70 backdrop-blur-md
                     rounded-2xl shadow-xl
                     p-8 md:p-10
                     border border-slate-700"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="text-sm font-medium text-slate-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                autoComplete="off"
                placeholder="Your full name"
                className="mt-2 w-full px-4 py-3
                           bg-slate-800 text-slate-100
                           border border-slate-700 rounded-lg
                           focus:ring-2 focus:ring-indigo-500/40
                           focus:border-indigo-500 outline-none transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-slate-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                autoComplete="off"
                placeholder="you@example.com"
                className="mt-2 w-full px-4 py-3
                           bg-slate-800 text-slate-100
                           border border-slate-700 rounded-lg
                           focus:ring-2 focus:ring-indigo-500/40
                           focus:border-indigo-500 outline-none transition"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mt-6">
            <label className="text-sm font-medium text-slate-300">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Tell me about your idea or project..."
              className="mt-2 w-full px-4 py-3
                         bg-slate-800 text-slate-100
                         border border-slate-700 rounded-lg
                         focus:ring-2 focus:ring-indigo-500/40
                         focus:border-indigo-500 outline-none transition resize-none"
            />
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="mt-8 w-full py-3
                       bg-indigo-600/20 hover:bg-indigo-600/30
                       text-indigo-300 font-semibold
                       rounded-lg border border-indigo-500/40
                       transition shadow-lg shadow-indigo-500/20"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>

      {/* ================= GRID PATTERN ================= */}
      <style>{`
        .bg-grid-pattern {
          background-size: 30px 30px;
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default Contact;
