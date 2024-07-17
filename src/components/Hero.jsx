import { motion } from "framer-motion"
import { styles } from "../styles"
import { Link } from "react-router-dom"
import { ComputersCanvas } from "./canvas"
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import {AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'



const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      `Software Developer`,
      `Biomedical Engineer`,
      `Boston University`,
      `Masters Student`
      
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#FF2400]" />
          <div className="w-1 sm:h-80 h-40 red-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#FF2400]">Tanish</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 h-[50px]`}>
            {/* I develop a bunch of cool stuff. <br className="sm:block hidden" />
            Check me out! */}
            <span className="uppercase tracking-widest">{text}</span>
          </p>

          <div className='z-20 flex justify-between max-w-[280px] py-4'>
            <div
              onClick={()=>window.open("https://www.linkedin.com/in/tanish-bhowmick","_blank")} 
              className='z-20 rounded-full bg-[#FF2400] shadow-md shadow-black p-3 cursor-pointer hover:scale-110 ease-in duration-200'
            >
              <FaLinkedinIn />
            </div>

            <div
              onClick={()=>window.open("https://www.github.com/tannyb28","_blank")} 
              className='z-20 rounded-full bg-[#FF2400] shadow-md shadow-black p-3 cursor-pointer hover:scale-110 ease-in duration-200'
            >
              <FaGithub />
            </div>

            <div
              onClick={()=>{
                const section = document.querySelector( '#contact' );
                section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
              }
              } 
              className='z-20 rounded-full bg-[#FF2400] shadow-md shadow-black p-3 cursor-pointer hover:scale-110 ease-in duration-200'
            >
              <AiOutlineMail />
            </div>
            
            <div
              onClick={()=>window.open("https://drive.google.com/file/d/1ju6F8bou_ThtmS-wwyD3zELeleMuBLe3/view?usp=sharing","_blank")} 
              className='z-20 rounded-full bg-[#FF2400] shadow-md shadow-black p-3 cursor-pointer hover:scale-110 ease-in duration-200'
            >
              <BsFillPersonLinesFill />
            </div>

          </div>
          
        </div>
      </div>
      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero