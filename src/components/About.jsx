function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
         Hi, I&apos;m Avinash Kumar, a MERN Stack Developer focused on building scalable web applications. I turn complex ideas into clean, functional code&mdash;specializing in everything from database management to polished user interfaces.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education
        </h1>
        <span>
  {/* Current Education */}
  <strong>Bachelor of Technology (B.Tech)</strong>, 
  IES College of Technology, Bhopal (MP), 2022 - 2026  <br />
  <em>Current CGPA: 7.5</em>
  
  <br /><br />

  {/* Class 12 */}
  <strong>Class XII (Science)</strong>, 
  Inter Science College, Hazaribagh (JH), 2019 - 2021 <br />
  <em>Result: 78%</em>

  <br /><br />

  {/* Class 10 */}
  <strong>Class X</strong>, 
  Ravi Mahato Smarak High School, Dhanbad (JH), 2019 <br />
  <em>Result: 85%</em>
</span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
       <span>
  <strong>Proficient in:</strong> Java, JavaScript (ES6+), and MySQL Database <br />
  
  <strong>Experienced with:</strong> MongoDB, Express.js, React.js, Node.js, 
  SQL Queries, Git/GitHub, and Postman <br />
  
  <strong>Strong grasp of:</strong> Relational & Non-Relational Databases, 
  RESTful APIs, and Responsive Web Design <br />
  
  <strong>Soft Skills:</strong> Excellent problem-solving, analytical thinking, 
  and effective team collaboration
</span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
       <span>
Java Intern, Coding Thinker, 08th July 2024 to 24th July 2024. Completed an intensive program covering Java syntax, data structures, and file handling. Developed projects using object-oriented programming (OOP) and exception handling. Student Trainee, IES College of Technology, Bhopal, July 2024. Applied theoretical CSE knowledge to practical Java programming and project development. Java Developer, Coding Thinker Project, 2024. Focused on building core programming logic and implementing robust exception handling for software reliability. </span>
        <br />
        <br />
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative Software Field solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;
