import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { Button, Select } from 'antd';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';
import { DownloadOutlined } from '@ant-design/icons';
import { FaThLarge } from 'react-icons/fa';


const { Option } = Select;

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (value) => {
    setActiveFilter(value);
    setAnimateCard({ y: 30, opacity: 0 });
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
      if (value === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(value)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">The places and prices we have:</h2>
      <Select defaultValue="All" style={{ width: 120 }} onChange={handleWorkFilter}> 
        {['All','Kashmir', 'Goa', 'Ladakh', 'Uttarakhand', 'Jaisalmer','Kerala','Kedarnath'].map((item) => (
            <Option key={item} value={item}>{item}</Option>
        ))}
      </Select>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />
              <motion.div
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} rel="noopener noreferrer" target="_blank">
                  <motion.div whileHover={{ scale: 1.10 }} className="app__flex">
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.pdfUrl} rel="noopener noreferrer" target="_blank">
                  <motion.div whileHover={{scale1:1.0}} className="app__flex">
                  <Button type="primary" shape="circle" icon="PDF"  size="large"
          style={{ fontSize: '10px' }}  />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);
