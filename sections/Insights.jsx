'use client';

import { motion } from 'framer-motion';

import styles from '../styles';

import { staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Blogs" textStyles="text-center" />
      <TitleText title={<>Coming Soon...</>} textStyles="text-center" />

    </motion.div>
  </section>
);

export default Insights;
