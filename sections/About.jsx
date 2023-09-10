'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >

        I'm Shambhavi, <span className="font-extrabold text-white"> a computer science enthusiast</span>{' '} with a penchant for all things code.
        When I'm not tinkering with algorithms or exploring the latest tech trends, you'll find me gazing at the stars or lost in a good book.{' '}
        <br /> <br />
        <span className="font-extrabold text-white">Why 'NebuTrix'?</span>{' '}
        Well, the name itself is a cosmic fusion of <span className="font-extrabold text-white">'nebula'</span>, representing the vastness of knowledge, and <span className="font-extrabold text-white">'matrix'</span>, symbolizing the digital world we traverse.
        Together, they form NebulaTrix - my digital universe.

      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
