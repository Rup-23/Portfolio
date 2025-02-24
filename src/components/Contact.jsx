// import React from 'react';

// const Contact = () => {
//   return (
//     <>
//       <div name="Contact">
//         <section className="body-font relative text-black py-24">
//           <div className="container px-5 mx-auto">
//             <div className="text-center w-full mb-12">
//               <h1 className="sm:text-4xl text-3xl font-semibold text-white">Contact Me</h1>
//               <p className="lg:w-2/3 mx-auto text-base text-gray-300 mt-4">
//               Feel free to reach out if you have any questions or if you’re interested in collaborating. I’d be happy to connect!
//               </p>
//             </div>

//             <form action="https://formsubmit.co/rupesh115511@gmail.com" method="POST">
//               <div className="lg:w-1/2 md:w-2/3 mx-auto bg-white rounded-lg p-8 shadow-lg">
//                 <div className="flex flex-wrap -m-4">
//                   <div className="p-4 w-full sm:w-1/2">
//                     <label className="text-sm font-medium text-gray-700">Name</label>
//                     <input
//                       placeholder="Enter your name"
//                       type="text"
//                       id="name"
//                       name="name"
//                       required
//                       className="w-full bg-gray-100 rounded-lg border border-gray-300 text-base outline-none py-2 px-4 mt-2 focus:ring-2 focus:ring-emerald-600 transition-all"
//                     />
//                   </div>

//                   <div className="p-4 w-full sm:w-1/2">
//                     <label className="text-sm font-medium text-gray-700">Email</label>
//                     <input
//                       placeholder="Enter your email"
//                       type="email"
//                       id="email"
//                       name="email"
//                       required
//                       className="w-full bg-gray-100 rounded-lg border border-gray-300 text-base outline-none py-2 px-4 mt-2 focus:ring-2 focus:ring-emerald-600 transition-all"
//                     />
//                   </div>

//                   <div className="p-4 w-full">
//                     <label className="text-sm font-medium text-gray-700">Message</label>
//                     <textarea
//                       placeholder="Enter your message"
//                       id="message"
//                       name="message"
//                       required
//                       className="w-full bg-gray-100 rounded-lg border border-gray-300 text-base outline-none py-2 px-4 mt-2 h-32 focus:ring-2 focus:ring-emerald-600 transition-all"
//                     ></textarea>
//                   </div>

//                   <div className="p-4 w-full">
//                     <button className="w-full py-3 px-6 bg-emerald-700 hover:bg-emerald-800 rounded-lg text-white text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all">
//                       Send Message
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </section>

//         <div className="bg-gray-200 h-1 opacity-10 mt-12"></div>
//       </div>
//     </>
//   );
// };

// export default Contact;



import React from 'react';

const Contact = () => {
  return (
    <>
      <div name="Contact">
        <section className="body-font relative text-white py-24">
          <div className="container px-5 mx-auto">
            <div className="text-center w-full mb-12">
              <h1 className="sm:text-4xl text-3xl font-semibold text-emerald-600">Contact Me</h1>
              <p className="lg:w-2/3 mx-auto text-base text-gray-400 mt-4">
                Feel free to reach out if you have any questions or if you’re interested in collaborating. I’d be happy to connect!
              </p>
            </div>

            <form action="https://formsubmit.co/rupesh115511@gmail.com" method="POST">
              <div className="lg:w-1/2 md:w-2/3 mx-auto bg-gray-800 rounded-lg p-8 shadow-lg">
                <div className="flex flex-wrap -m-4">
                  <div className="p-4 w-full sm:w-1/2">
                    <label className="text-sm font-medium text-gray-300">Name</label>
                    <input
                      placeholder="Enter your name"
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-gray-700 rounded-lg border border-gray-600 text-white outline-none py-2 px-4 mt-2 focus:ring-2 focus:ring-emerald-600 transition-all"
                    />
                  </div>

                  <div className="p-4 w-full sm:w-1/2">
                    <label className="text-sm font-medium text-gray-300">Email</label>
                    <input
                      placeholder="Enter your email"
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-gray-700 rounded-lg border border-gray-600 text-white outline-none py-2 px-4 mt-2 focus:ring-2 focus:ring-emerald-600 transition-all"
                    />
                  </div>

                  <div className="p-4 w-full">
                    <label className="text-sm font-medium text-gray-300">Message</label>
                    <textarea
                      placeholder="Enter your message"
                      id="message"
                      name="message"
                      required
                      className="w-full bg-gray-700 rounded-lg border border-gray-600 text-white outline-none py-2 px-4 mt-2 h-32 focus:ring-2 focus:ring-emerald-600 transition-all"
                    ></textarea>
                  </div>

                  <div className="p-4 w-full">
                    <button className="w-full py-3 px-6 bg-emerald-700 hover:bg-emerald-800 rounded-lg text-white text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>

        <div className="bg-gray-700 h-1 opacity-20 mt-12"></div>
      </div>
    </>
  );
};

export default Contact;

