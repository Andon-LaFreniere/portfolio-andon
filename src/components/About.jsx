import aboutImage from "../assets/aboutImage.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";


const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">About 
            <span> Me</span>
            </h1>
            <div className="flex flex-wrap">
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1, delay: 0.2}}
                className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl"src={aboutImage} alt="About Me Image"/>
                    </div>
                </motion.div>

                <motion.div className="w-full lg:w-1/2"
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:1, delay:0.2}}
                >
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                    </div>
                    <div>
                      <p className="my-2 max-w-xl py-6">Outside of my work in tech, I enjoy spending time with friends and family, skateboarding, and working out. I also volunteer as a statistics tutor at a local high school. Previosly, I have worked with the Leukemia and Lymphoma Society to lead a fundraising team for blood cancer research.</p>
                    </div>
                    </motion.div>
            </div>
    </div>
  );
};

export default About;
