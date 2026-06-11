'use client';

import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  images: string[];
  tags: string[];
  rating: number;
  title: string;
  description: string;
  href?: string;
  features?: string[];
  className?: string;
}

export const ServiceCard = ({
  images,
  tags,
  rating,
  title,
  description,
  href,
  features,
  className,
}: ServiceCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const changeImage = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return images.length - 1;
      if (nextIndex >= images.length) return 0;
      return nextIndex;
    });
  };

  const carouselVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      variants={contentVariants}
      whileHover={{
        scale: 1.03,
        boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.15)',
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      }}
      className={cn(
        'w-full max-w-sm h-full flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white text-gray-900 shadow-lg cursor-pointer',
        className
      )}
    >
      {/* Image Carousel Section */}
      <div className="relative group h-64 flex-shrink-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={title}
            custom={direction}
            variants={carouselVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute h-full w-full object-cover"
          />
        </AnimatePresence>

        {/* Carousel Navigation */}
        <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-black/30 hover:bg-black/50 text-white"
            onClick={() => changeImage(-1)}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-black/30 hover:bg-black/50 text-white"
            onClick={() => changeImage(1)}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Top Badges and Rating */}
        <div className="absolute top-3 left-3 z-10 flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-white/90 backdrop-blur-sm text-gray-900">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="absolute top-3 right-3 z-10">
          <Badge variant="secondary" className="flex items-center gap-1 bg-white/90 backdrop-blur-sm text-gray-900">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" /> {rating}
          </Badge>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                'h-1.5 w-1.5 rounded-full transition-all',
                currentIndex === index ? 'w-4 bg-white' : 'bg-white/50'
              )}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content Section */}
      <motion.div variants={contentVariants} className="p-5 flex flex-col flex-1">
        <div className="space-y-2 flex-1">
          <motion.h3 variants={itemVariants} className="text-xl font-bold">
            {title}
          </motion.h3>

          <motion.p variants={itemVariants} className="text-sm text-gray-600 leading-relaxed">
            {description}
          </motion.p>

          {features && features.length > 0 && (
            <motion.ul variants={itemVariants} className="space-y-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-secondary-purple rounded-full"></div>
                  {feature}
                </li>
              ))}
            </motion.ul>
          )}
        </div>

        <motion.div variants={itemVariants} className="pt-2 mt-auto">
          {href ? (
            <Link href={href} className="block">
              <Button className="group w-full text-white hover:shadow-lg" style={{ backgroundColor: '#C02B7D' }}>
                Discover More
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          ) : (
            <Button className="group w-full text-white hover:shadow-lg" style={{ backgroundColor: '#C02B7D' }}>
              Discover More
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
