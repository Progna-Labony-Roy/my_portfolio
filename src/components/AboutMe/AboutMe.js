import React from 'react';
import './AboutMe.css';
import myImg from '../Image/myImg.png'

const AboutMe = () => {
    return (
      <div className='pt-20' id='about-id'>
        <p className='text-4xl text-center my-10'>About Me</p>
          <div className='grid grid-cols-1 lg:grid-cols-2 main mx-auto'>
            <div>
                <img className='my-image' src={myImg} alt="" />
            </div>
            
            <div>
            <span className='vertical'></span>
                <p>I'm quite interested in web development. For almost 1.5 years, I've been learning front-end development, and for 7 months, I've been learning back-end development. I'm always looking for new experiences. I recently completed a complete web development course from 𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗶𝗻𝗴 𝗛𝗲𝗿𝗼.

<p>I've completed a number of projects utilizing diverse web technologies, frameworks, and libraries, including 𝗥𝗲𝗮𝗰𝘁𝗝𝗦, 𝗡𝗼𝗱𝗲𝗝𝗦, 𝗘𝘅𝗽𝗿𝗲𝘀𝘀𝗝𝗦, 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁, 𝗕𝗼𝗼𝘁𝘀𝘁𝗿𝗮𝗽, 𝗧𝗮𝗶𝗹𝘄𝗶𝗻𝗱 𝗖𝗦𝗦, 𝗱𝗮𝗶𝘀𝘆𝗨𝗜, 𝗳𝗶𝗿𝗲𝗯𝗮𝘀𝗲, 𝗻𝗲𝘁𝗹𝗶𝗳𝘆, 𝗮𝗻𝗱 𝘃𝗲𝗿𝗰𝗲𝗹.I am a 𝐪𝐮𝐢𝐜𝐤 𝐥𝐞𝐚𝐫𝐧𝐞𝐫 and a self-motivated individual. In addition, I have problem-solving, decision-making, and communication skills.</p>
</p>
            </div>
        </div>
      </div>
    );
};

export default AboutMe;