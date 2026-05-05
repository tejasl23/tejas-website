import React from 'react';

const Now: React.FC = () => {
  return (
    <div className="container">
      <h1>What I'm doing now</h1>
      <p>Updated: March 2025</p>

      <section className="resume-section">
        <ul>
          <li><strong>Work:</strong> Currently working at Deloitte as a Software Engineer in Applied AI, focusing on agentic platforms and model reasoning optimization.</li>
          <li><strong>Learning:</strong> Diving deeper into Deep Reinforcement Learning and Group Relative Policy Optimization (GRPO).</li>
          <li><strong>Life:</strong> Living in Arlington, VA and enjoying the local food scene.</li>
        </ul>
      </section>

      <h3>Currently reading</h3>
      <p><em>"Designing Data-Intensive Applications"</em> by Martin Kleppmann - to further my understanding of distributed systems.</p>
    </div>
  );
};

export default Now;
