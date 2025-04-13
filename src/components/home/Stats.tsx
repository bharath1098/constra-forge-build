
import { useEffect, useRef, useState } from "react";
import { Building, Users, Award, Bookmark } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
}

const StatItem = ({ icon, value, label, suffix = "+" }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    const counterIncrement = value / totalFrames;

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const currentCount = Math.ceil(counterIncrement * frame);

      if (currentCount > value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(currentCount);
      }

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [value, isVisible]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="mb-4 text-construction-gold bg-amber-100 p-4 rounded-full">
        {icon}
      </div>
      <div className="text-4xl font-bold text-construction-navy mb-2">
        {count}
        <span className="text-construction-gold">{suffix}</span>
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-construction-navy mb-4">
            Our <span className="text-construction-gold">Achievements</span> in Numbers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            For over five decades, we've built a reputation for excellence in the construction industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 animate-on-scroll">
          <StatItem 
            icon={<Building size={32} />} 
            value={500} 
            label="Projects Completed" 
          />
          <StatItem 
            icon={<Users size={32} />} 
            value={250} 
            label="Expert Employees" 
          />
          <StatItem 
            icon={<Award size={32} />} 
            value={50} 
            label="Years of Experience" 
          />
          <StatItem 
            icon={<Bookmark size={32} />} 
            value={75} 
            label="Industry Awards" 
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
