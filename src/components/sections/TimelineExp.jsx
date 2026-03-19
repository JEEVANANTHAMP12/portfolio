import React from "react";
import { Timeline } from "../ui/timeline";
import { useTheme } from "../../context/ThemeContext";

export default function TimelineExp() {
  const { isDark } = useTheme();

  const getTimelineData = () => [
    {
      title: "2021 - 2022",
      content: (
        <div>
          <p className={`mb-4 text-sm font-semibold transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            Secondary Education (10th Grade)
          </p>
          <p className={`mb-8 text-xs font-normal md:text-sm transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Completed secondary education with excellent academic performance. Built strong foundation in core subjects including Mathematics, Science, and English. Discovered passion for technology and logical problem solving.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Mathematics", "Science", "Social Studies", "English"].map((skill, idx) => (
              <span key={idx} className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors duration-300 ${
                isDark
                  ? 'bg-white/5 text-gray-300 border-white/10'
                  : 'bg-black/5 text-gray-700 border-black/10'
              }`}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2022 - 2024",
      content: (
        <div>
          <p className={`mb-4 text-sm font-semibold transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            Higher Secondary Education (12th Grade)
          </p>
          <p className={`mb-8 text-xs font-normal md:text-sm transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Completed higher secondary education with PCM (Physics, Chemistry, Mathematics) stream. Excelled in computer science. Developed strong analytical thinking and problem-solving abilities.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Mathematics", "Physics", "Computer Science", "Chemistry"].map((skill, idx) => (
              <span key={idx} className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors duration-300 ${
                isDark
                  ? 'bg-white/5 text-gray-300 border-white/10'
                  : 'bg-black/5 text-gray-700 border-black/10'
              }`}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2024 - Present",
      content: (
        <div>
          <p className={`mb-2 text-sm font-semibold transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            Bachelor of Technology - AI & Data Science
          </p>
          <p className={`mb-2 text-xs transition-colors duration-300 ${
            isDark ? 'text-gray-500' : 'text-gray-700'
          }`}>
            M Kumarasamy College of Engineering
          </p>
          <p className={`mb-8 text-xs font-normal md:text-sm transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Pursuing B.Tech in Artificial Intelligence & Data Science. Engaging in cutting-edge research, academic projects, and competitive programming. Strong foundation in algorithms, data structures, and software engineering principles.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Data Structures", "Algorithms", "UI/UX", "Research"].map((skill, idx) => (
              <span key={idx} className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors duration-300 ${
                isDark
                  ? 'bg-white/5 text-gray-300 border-white/10'
                  : 'bg-black/5 text-gray-700 border-black/10'
              }`}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2024 - Present",
      content: (
        <div>
          <p className={`mb-2 text-sm font-semibold transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            Frontend Developer
          </p>
          <p className={`mb-2 text-xs transition-colors duration-300 ${
            isDark ? 'text-gray-500' : 'text-gray-700'
          }`}>
            Web Development & UI/UX Design
          </p>
          <p className={`mb-8 text-xs font-normal md:text-sm transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Crafting beautiful, responsive, and performant user interfaces with modern web technologies. Specializing in React, Next.js, and Tailwind CSS. Building intuitive experiences that bridge design and functionality.
          </p>
          <div className="flex flex-wrap gap-2">
            {["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript", "Figma"].map((skill, idx) => (
              <span key={idx} className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors duration-300 ${
                isDark
                  ? 'bg-white/5 text-gray-300 border-white/10'
                  : 'bg-black/5 text-gray-700 border-black/10'
              }`}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full">
      <Timeline data={getTimelineData()} />
    </div>
  );
}
