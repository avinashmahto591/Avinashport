
import pic from "../../public/avin.png";

// Icons
import { FaSquareFacebook, FaLinkedin, FaTelegram, FaReact, FaNodeJs } from "react-icons/fa6";
import { IoLogoYoutube, IoCall } from "react-icons/io5";
import { SiGmail, SiMongodb, SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28">
      <div className="flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 mt-12 md:mt-24 space-y-4 order-2 md:order-1">
          <span className="text-xl font-medium text-gray-600">Welcome In My Feed</span>
          <div className="flex space-x-2 text-3xl md:text-5xl">
            <h1>Hello, I&apos;m a</h1>
            <ReactTyped
              className="text-purple-600 font-bold"
              strings={["Developer", "Programmer", "Coder"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </div>
          
          <p className="text-md md:text-lg text-gray-700 text-justify leading-relaxed">
            I am a Computer Science Engineering student and a passionate Software Developer currently in my final year. With a strong foundation in Java and a deep interest in Data Structures and Algorithms, I’ve honed my problem-solving skills by solving over 200+ challenges on LeetCode.

I thrive on writing optimized code and building scalable applications. Beyond algorithms, I am experienced in the MERN stack (React, Node.js) and databases like MongoDB, allowing me to bridge the gap between complex logic and user-centric development
          </p>

          <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0 pt-8">
            {/* Social Media & Contact Section */}
            <div className="space-y-3">
              <h1 className="font-bold text-center md:text-left">Available on</h1>
              <ul className="flex space-x-6">
                {/* Facebook & Phone Group */}
                <li className="flex flex-col items-center space-y-4">
                  <a href="https://www.facebook.com/avinasa.mahato.2025/" target="_blank" rel="noreferrer">
                    <FaSquareFacebook className="text-2xl cursor-pointer hover:text-blue-600 transition-all" />
                  </a>
                  <a href="tel:6200098516">
                    <IoCall className="text-2xl cursor-pointer hover:text-green-600 transition-all" />
                  </a>
                </li>

                {/* LinkedIn & Gmail Group */}
                <li className="flex flex-col items-center space-y-4">
                  <a href="https://www.linkedin.com/in/avinash-kumar-mahto-b384a5348/" target="_blank" rel="noreferrer">
                    <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-700 transition-all" />
                  </a>
                  <a href="mailto:avinashmahto591@gmail.com">
                    <SiGmail className="text-2xl cursor-pointer hover:text-red-600 transition-all" />
                  </a>
                </li>

                <li>
                  <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                    <IoLogoYoutube className="text-2xl cursor-pointer hover:text-red-700 transition-all" />
                  </a>
                </li>
                <li>
                  <a href="https://t.me/" target="_blank" rel="noreferrer">
                    <FaTelegram className="text-2xl cursor-pointer hover:text-sky-500 transition-all" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Tech Stack Section */}
            <div className="space-y-3">
              <h1 className="font-bold text-center md:text-left">Currently working on</h1>
              <div className="flex space-x-5">
                <SiMongodb className="text-3xl hover:scale-110 duration-200 rounded-full border-2 p-1 border-gray-200 cursor-pointer" />
                <SiExpress className="text-3xl hover:scale-110 duration-200 rounded-full border-2 p-1 border-gray-200 cursor-pointer" />
                <FaReact className="text-3xl hover:scale-110 duration-200 rounded-full border-2 p-1 border-gray-200 cursor-pointer" />
                <FaNodeJs className="text-3xl hover:scale-110 duration-200 rounded-full border-2 p-1 border-gray-200 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The OVAL Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end items-center order-1 md:order-2 mt-10 md:mt-0">
          <div className="relative">
            {/* The Image with Oval/Pill Shape */}
            <img
              src={pic}
              className="
                w-[280px] h-[350px]          /* Oval Dimensions for Mobile */
                md:w-[350px] md:h-[450px]    /* Oval Dimensions for Desktop */
                rounded-[150px]             /* High rounding creates the Oval effect */
                object-cover 
                object-top 
                border-[6px] border-purple-500 
                shadow-2xl 
                hover:scale-105 transition-transform duration-500
              "
              alt="Avinash Kumar"
            />
          </div>
        </div>
      </div>
      <hr className="mt-20" />
    </div>
  );
}

export default Home;