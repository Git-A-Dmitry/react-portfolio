import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

import { Tooltip } from 'react-tooltip';
// import 'react-tooltip/dist/react-tooltip.css';

const Skills = () => {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperience(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className='head-text'>Skills and Experience</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div //
              key={skill.name}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: [0.5] }}
              className='app__skills-item app__flex'
              // id={skill.id}
              // key={skill.name}
            >
              <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className='app__skills-exp'>
          {/* {console.log('here', experience.works)} */}
          {experience.map((experience) => (
            <motion.div //
              className='app__skills-exp-item'
              key={experience.year}
            >
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{experience.year}</p>
              </div>

              <motion.div className='app__skills-exp-works'>
                {experience.works.map((work, index) => (
                  <div key={work.name}>
                    <motion.div //
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: [0.5] }}
                      className='app__skills-exp-work'
                      data-tip
                      data-for={work.name}
                      // key={work.name}
                    >
                      <h4 id={work.name} className='bold-text'>
                        {work.name}
                      </h4>
                      <p className='p-text'>{work.company}</p>
                    </motion.div>

                    <Tooltip //
                      anchorId={work.name}
                      place='top'
                      className='skills-tooltip'
                      content={work.desc}
                    />
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', 'app__whitebg');
