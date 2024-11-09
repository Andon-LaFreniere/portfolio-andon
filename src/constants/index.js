import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Hi! My name is Andon Lafreniere and I'm a first-year honors undergraduate at The Ohio State University. I have a background in machine learning and software engineering. I currently searching for an internship for Summer 2025. Please feel free to reach out to me and thank you for taking the time to check out my custom website.`


export const ABOUT_TEXT = `I am a versatile developer with a passion for bringing my ideas to life. My experience spans from AI research, where I worked in multiple labs with deep learning models, to full-stack development, including web app creation. I also enjoy integrating my projects with hardware. With a strong foundation in algorithms, data structures, and web development, I am focused on creating impactful and fun projects. I am excited about the future of technology and the role I will have in creating it!`;

export const EXPERIENCES = [
  {
    year: "May - August, 2024",
    role: "Student Researcher",
    company: "Discovery Lab Global",
    description: `Developed and revised a deep learning artificial intelligence model using only NumPy and a pre-built Open AI Gym environment. Designated to the prestigious Pathfinder team to serve as an example for fellow researchers. Shortened training time for the model through application techniques in reward shaping and ReLu activation. Performed analysis on the efficiency of the model through statistical modeling with Matplotlib. Created technical documentation for the project that was over three hundred pages long.`,
    technologies: ["Python", "OpenAI Gym", "NumPy", "MatPlotLib"],
  },
  {
    year: "June - December, 2023",
    role: "Research Assistant",
    company: "Kastle Lab - Wright State University",
    description: `Documented insights gained by reading prior research and assisting Professor Cogan Shimizu. Created Python scripts and used pywordnet to parse Wikidata for semantic information. Finalized a data structure project which could solve the New York Times game Connections. Collaborated weekly over in-person meetings with a team of six graduate-level researchers.`,
    technologies: ["SQL", "Python", "WikiData"],
  },
  {
    year: "May - August, 2023",
    role: "Engineering Intern",
    company: "Ram Precision Industries",
    description: `Reorganized both the physical and software side of the spare part storage system. Analyzed and reported inefficiencies in the manufacturing process. Mastered Microsoft Suite and learned how to navigate large corporate databases.`,
    technologies: ["Microsoft Office", "CNC Machining"],
  },
  
];

export const PROJECTS = [
  {
    title: "Ohio-Weather-Sucks",
    image: project1,
    description:
      "Developed full stack web application using React, Javascript, Django, and HTML/CSS which allowed users to select an area in Ohio and fetch weather data from the OpenWeather API. Deployed the application on a public server using Choreo and Git and authenticated and stored unique user preferences in a PostgreSQL database. Created REST API endpoints for user management of notification preferences including addition, deletion and customization",
    technologies: ["HTML", "CSS", "React", "PostgreSQL", "Choreo", "Python", "Git"],
  },
  {
    title: "Intel Micromanufacturing Challenge (Hack OHIO 2024)",
    image: project2,
    description:
      "Utilized OpenCV to create a calibrated grid for the motors to navigate. Solved issues regarding hardware and software interfacing. Wrote python algorithms to convert a list of coordinates to a sorted array of step counts for the Arduino . Received a top 5 designation in our division ",
    technologies: ["OpenCV", "Python", "C++", "Arduino", "Git"],
  },
  {
    title: "Deep Learning Atari Pong",
    image: project3,
    description:
      "Used only math and local storage to develop a neural network that could learn to control a paddle in the Atari game Pong and beat another AI model. ",
    technologies: ["Python", "Gymnasium"],
  },
  {
    title: "Connections",
    image: project4,
    description:
      "Wrote a complex algorith to solve the New York Time's puzzle game Connection given the words of the day. ",
    technologies: ["Python", "Wikidata", "pywordnet"],
  },
];

export const CONTACT = {
  address: "191 West Lane Avenue, Columbus, OH 43210 ",
  phoneNo: "+1-(937)-818-7207",
  email: "lafreniere.12@buckeyemail.osu.edu",
};