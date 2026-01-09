import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import timelineData from '../../constants/timelineData';
gsap.registerPlugin(ScrollTrigger);

const CoffeeTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!containerRef.current) return;
    const sections = containerRef.current.querySelectorAll('.timeline-section');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    sections.forEach((section: Element, _index: any) => {
      gsap.fromTo(
        section as Element,
        { autoAlpha: 0, y: 50 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section as Element,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} style={{ maxWidth: 600, margin: '0 auto', padding: '2rem' }}>
      <h1>☕ The Coffee Bean Journey: From Soil to Sip</h1>
      {timelineData.map(({ time, title, stage, description }, idx) => (
        <section key={idx} className="timeline-section" style={{ marginBottom: '3rem', opacity: 0 }}>
          <h2>🌱 {time} – {title}</h2>
          <h3>Stage: {stage}</h3>
          <p>{description}</p>
          <hr />
        </section>
      ))}
      <button style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', cursor: 'pointer' }} onClick={() => alert('Explore Our Beans clicked!')}>Explore Our Beans</button>
    </div>
  );
};

export default CoffeeTimeline;