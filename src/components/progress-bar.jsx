
'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

const ProgressBarNavigation = ({ 
  steps, 
  activeStep = 1,
  onStepClick,
  className = "",
  position = "bottom-right",
  size = "medium" // "small", "medium", "large"
}) => {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    const progress = steps.length > 1 ? (activeStep / (steps.length )) * 100 : 0;
    setProgressWidth(progress);
  }, [activeStep, steps.length]);

  const getPositionClasses = () => {
    switch (position) {
      case "bottom-left":
        return "bottom-8 left-6";
      case "bottom-center":
        return "bottom-8 left-1/2 -translate-x-1/2";
      case "bottom-right":
      default:
        return "bottom-0 right-0";
    }
  };

  const getSizeConfig = () => {
    switch (size) {
      case "small":
        return {
          button: "w-8 h-8",
          padding: "px-4 py-3",
          margin: "mx-2",
          fontSize: "text-xs",
          tooltip: "text-xs px-3 py-1.5 bottom-12",
          tooltipWidth: "70px"
        };
      case "large":
        return {
          button: "w-14 h-14",
          padding: "px-8 py-5",
          margin: "mx-4",
          fontSize: "text-base",
          tooltip: "text-base px-5 py-2.5 bottom-20",
          tooltipWidth: "110px"
        };
      case "medium":
      default:
        return {
          button: "w-10 h-10",
          padding: "px-5 py-3",
          margin: "mx-2.5",
          fontSize: "text-sm",
          tooltip: "text-sm px-4 py-2 bottom-14",
          tooltipWidth: "90px"
        };
    }
  };

  const sizeConfig = getSizeConfig();

  const handleStepClick = (index) => {
    if (onStepClick) {
      onStepClick(index);
    }
  };

  return (
    <div className={cn("hidden md:block fixed z-50 ",className,getPositionClasses())}>
      <div className="flex items-center justify-center">
        <motion.div 
          className={`relative flex items-center w-fit bg-transparent rounded-full ${sizeConfig.padding} shadow-none`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          
          <div className={`absolute top-1/2 ${size === "small" ? "left-4 right-4" : size === "large" ? "left-8 right-8" : "left-5 right-5"} h-[2px] bg-gradient-to-r from-white/30 to-white/10 dark:from-white/20 dark:to-white/5 rounded-full z-0`} />
          
          <motion.div
            className={`absolute top-1/2 ${size === "small" ? "left-4" : size === "large" ? "left-8" : "left-5"} h-[2px] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full z-10 shadow-lg shadow-blue-500/30`}
            initial={{ width: "0%" }}
            animate={{ width: `${progressWidth}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          
          <motion.div
            className={`absolute top-1/2 ${size === "small" ? "left-4" : size === "large" ? "left-8" : "left-5"} h-[4px] bg-gradient-to-r from-blue-400/50 via-purple-400/50 to-pink-400/50 rounded-full blur-sm z-5`}
            initial={{ width: "0%" }}
            animate={{ width: `${progressWidth}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          
          {steps.map((step, index) => (
            <div key={index} className={`relative z-20 flex flex-col items-center ${sizeConfig.margin}`}>
              <motion.div
                className={`absolute ${sizeConfig.tooltip} rounded-xl backdrop-blur-lg bg-white/90 dark:bg-gray-900/90 text-gray-800 dark:text-white shadow-2xl border border-white/20 dark:border-gray-700/50 whitespace-nowrap`}
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ 
                  opacity: (hoveredStep === index || (hoveredStep === null && activeStep === index)) ? 1 : 0,
                  y: (hoveredStep === index || (hoveredStep === null && activeStep === index)) ? 0 : 10,
                  scale: (hoveredStep === index || (hoveredStep === null && activeStep === index)) ? 1 : 0.8
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{ minWidth: sizeConfig.tooltipWidth, textAlign: 'center' }}
              >
                <div className="font-medium">{step.label}</div>
                {/* Enhanced tooltip arrow with glow */}
                <div className="absolute left-1/2 -bottom-1.5 -translate-x-1/2">
                  <div className="w-3 h-3 bg-white/90 dark:bg-gray-900/90 border-r border-b border-white/20 dark:border-gray-700/50 rotate-45" />
                  <div className="absolute inset-0 w-3 h-3 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rotate-45 blur-sm" />
                </div>
              </motion.div>
              
              <motion.button
                aria-label={`Go to ${step.label}`}
                className={`relative ${sizeConfig.button} flex items-center justify-center font-medium ${sizeConfig.fontSize} rounded-full transition-all duration-300 group overflow-hidden
                  ${index <= activeStep 
                    ? 'text-white shadow-lg shadow-blue-500/30' 
                    : 'text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-white'
                  }`}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                onClick={() => handleStepClick(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className={`absolute inset-0 rounded-full ${
                    index <= activeStep
                      ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'
                      : 'bg-white/10 dark:bg-white/5 group-hover:bg-white/20 dark:group-hover:bg-white/10'
                  }`}
                  animate={{ 
                    scale: index <= activeStep ? 1 : 0.8,
                    opacity: index <= activeStep ? 1 : 0.7
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {index === activeStep && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-white/50"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
                
                <motion.div
                  className={`absolute inset-0 rounded-full blur-lg ${
                    index <= activeStep
                      ? 'bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40'
                      : 'bg-transparent'
                  }`}
                  animate={{ 
                    scale: hoveredStep === index ? 1.5 : 1,
                    opacity: hoveredStep === index ? 0.8 : (index <= activeStep ? 0.6 : 0)
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <span className="relative z-10 font-semibold tracking-wider">
                  {step.number || (index + 1).toString().padStart(2, '0')}
                </span>
              </motion.button>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProgressBarNavigation