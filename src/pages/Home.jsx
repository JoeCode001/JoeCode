import React from 'react'
import avatar from "../assets/avatar.png"
import LinkingButton from '../components/LinkingButton'
import { FaGithub } from 'react-icons/fa'

function Home() {
  const scrollToSectionId = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='bg-white w-full flex flex-col gap-5 md:ml-[4rem]  '>
      <img
        src={avatar}
        className='w-40 h-40 rounded-full'
      />
      <h1 className="text-2xl md:text-5xl font-bold text-gray-800 ">
        Hey, I'm Jonathan Phillip. <br />
        <span className="text-blue-600">Software Engineer</span>
      </h1>
      <p className="text-gray-600 md:text-[1.1rem] text-sm">
        Pushing boundaries with every project I create.<br />
        Challenger by day, fearless innovator by night
      </p>
      <div className='flex gap-3 align-items-center'>
        <LinkingButton
        to="" 
        text="Hire me!"
        onClick={() => scrollToSectionId("contact")}
        />
        <LinkingButton
          to="https://github.com/JoeCode001"
          text="My GitHub"
          icon={<FaGithub />}
          isExternal={true}
          target="_blank"
        />
      </div>
    </div>
  )
}

export default Home
