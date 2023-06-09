"use client";
import Image from "next/image";
import { CustomButton } from "./";
import { Variant, motion } from "framer-motion";

const Hero = () => {
  const variants = {
    hidden: {
      x: "100vw",
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.5,
        delay: custom * 0.5, // delay the animation
      },
    }),
  };
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book or rent a car - quickly and easily
        </h1>
        <p className="hero__subtitle">
          Streamline your travel experience with our car rental services in over
          5000+ locations worldwide. Find the right car for your journey, and
          make a reservation in minutes.
        </p>
        <CustomButton
          title={"Find a car"}
          containerStyle={"bg-primary-blue text-white rounded-full mt-10"}
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <motion.div
          className="hero__image"
          initial="hidden"
          animate="visible"
          variants={variants}
          custom={1}
        >
          <Image
            src={"/hero.png"}
            alt="hero"
            fill
            className="w-full h-full object-contain"
          />
        </motion.div>
        <motion.div
          className="hero__image-overlay"
          initial="hidden"
          animate="visible"
          variants={variants}
          custom={0}
        />
      </div>
    </div>
  );
};

export default Hero;
