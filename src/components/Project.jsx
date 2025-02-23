// import React from 'react'

// const Project = () => {
//     return (
//         <>
//         <div name="Project">     
//              <h1 className='text-3xl font-bold flex justify-center mb-5 mt-32'>Projects</h1>
//       <section className="body-font">
//   <div className="container px-5 py-24 mx-auto flex flex-wrap">
//     <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
//       <div className="w-full sm:p-4 px-4 mb-6">
//       <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">Musiqo</h1>   
//         <div className="leading-relaxed">The Music Player Website is a comprehensive platform designed for users to enjoy a wide range of music genres. Each folder in the website is organized to categorize songs based on their type, ensuring a seamless and intuitive user experience. The website offers easy navigation and accessibility, allowing users to browse and play songs from various categories.</div>
//       </div>
//       </div>
     
//     <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
//       <img className="object-cover object-center w-full h-full" src="musiqo.jpg" alt="Musicapp"/>
//     </div>
//   </div>
// </section>

// <section className="body-font">
//   <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//     <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
//       <img className="object-cover object-center rounded" alt="weatherapp" src="weather.jpg"/>
//     </div>
//     <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
//       <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">Weather App</h1>
//       <p className="mb-8 leading-relaxed">The Weather Forecasting Website is an interactive platform that provides users with accurate and up-to-date weather information for various locations. In addition to offering essential weather data such as temperature and precipitation, the website also measures wind speed and humidity levels. Based on these parameters, the website dynamically generates relevant visual representations of the weather conditions.</p>
//       <div className="flex w-full md:justify-start justify-center items-end">
//         <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
          
//     </div>
//     </div>
//     </div>
//   </div>
// </section>

// <section className="body-font">
//   <div className="container px-5 py-24 mx-auto flex flex-wrap">
//     <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
//       <div className="w-full sm:p-4 px-4 mb-6">
//       <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">PassWord Manager</h1>   
//         <div className="leading-relaxed"> The Password Management Website is a secure platform designed to store and manage users' login credentials efficiently. The website allows users to store essential information such as website names, usernames, and their corresponding passwords in an encrypted and organized manner. This ensures that users can access their login information with ease while maintaining a high level of security.</div>
//       </div>
//       </div>
     
//     <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
//       <img className="object-cover object-center w-full h-full" src="passop.jpg" alt="passwordmanager"/>
//     </div>
//   </div>
// </section>
// </div>

//         </>
//     )
// }

// export default Project



import React from 'react';

const Project = () => {
  return (
    <div name="Project" className="my-32 px-4 md:px-40">
      <h1 className="text-3xl font-bold text-center mb-10">Projects</h1>

      {/* Musiqo Project */}
      <section className="flex flex-col lg:flex-row items-center gap-10 mb-20">
        <div className="lg:w-1/2 w-full">
          <h1 className="text-3xl font-semibold mb-4">Musiqo</h1>
          <p className="leading-relaxed text-300 mb-4">
            The Music Player Website is a comprehensive platform designed for users to enjoy a wide range of music genres. Each folder in the website is organized to categorize songs based on their type, ensuring a seamless and intuitive user experience.
          </p>
        </div>
        <div className="lg:w-1/2 w-full rounded-lg overflow-hidden">
          <img className="object-cover w-full h-full" src="musiqo.jpg" alt="Musicapp" />
        </div>
      </section>

      {/* Weather App Project */}
      <section className="flex flex-col lg:flex-row items-center gap-10 mb-20">
        <div className="lg:w-1/2 w-full">
          <img className="object-cover rounded-lg w-full h-full" src="weather.jpg" alt="weatherapp" />
        </div>
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h1 className="text-3xl font-semibold mb-4">Weather App</h1>
          <p className="leading-relaxed text-gray-300 mb-4">
            The Weather Forecasting Website is an interactive platform that provides users with accurate and up-to-date weather information for various locations. It includes essential weather data such as temperature, precipitation, wind speed, and humidity.
          </p>
        </div>
      </section>

      {/* Password Manager Project */}
      <section className="flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 w-full">
          <h1 className="text-3xl font-semibold mb-4">PassWord Manager</h1>
          <p className="leading-relaxed text-gray-300 mb-4">
            The Password Management Website is a secure platform designed to store and manage users' login credentials efficiently. It allows users to store essential information like website names, usernames, and their corresponding passwords in an encrypted manner.
          </p>
        </div>
        <div className="lg:w-1/2 w-full rounded-lg overflow-hidden">
          <img className="object-cover w-full h-full" src="passop.jpg" alt="passwordmanager" />
        </div>
      </section>
    </div>
  );
};

export default Project;
