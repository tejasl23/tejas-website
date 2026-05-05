import React from 'react';

const Resume: React.FC = () => {
  return (
    <div className="container">
      <h1>Tejas Lokeshrao</h1>
      <p>Arlington, VA | <a href="mailto:tejaslkr23@gmail.com">tejaslkr23@gmail.com</a> | <a href="https://github.com/tlokeshrao">github.com/tlokeshrao</a></p>

      <section className="resume-section">
        <h2>Experience</h2>

        <div className="resume-item">
          <div className="resume-header">
            <h3>Deloitte</h3>
            <span>Aug 2024 – Present</span>
          </div>
          <p><em>Software Engineer with Applied AI</em></p>
          <ul>
            <li><strong>AI Infrastructure & Scalability:</strong> Developed and maintained a primary agentic AI platform adopted by &gt;75% of a public sector agency (14,000+ users); implemented custom MCP integration, Chain-of-Thought, extended thinking, and context management to optimize model reasoning.</li>
            <li><strong>Backend Systems:</strong> Led backend development on a medical reviews web application with deployed five workflow modules, increasing application efficiency by 40% and reducing review backlog by 33%.</li>
            <li><strong>Machine Learning R&D:</strong> Engineered user-tracking infrastructure for Deep Reinforcement Learning; implemented custom Gymnasium environments and trained GRPO models for behavior prediction.</li>
          </ul>
        </div>

        <div className="resume-item">
          <div className="resume-header">
            <h3>Deloitte</h3>
            <span>Jun 2023 – Aug 2023</span>
          </div>
          <p><em>Solutions Engineering Intern</em></p>
          <ul>
            <li><strong>Systems Integration:</strong> Delivered a comprehensive integration roadmap for independent government applications to ensure seamless cross-platform data flow.</li>
            <li><strong>Generative AI Research:</strong> Conducted R&D on Large Language Model applications in the Digital Thread; led learning sessions on model fine-tuning and evaluation.</li>
          </ul>
        </div>

        <div className="resume-item">
          <div className="resume-header">
            <h3>NCR</h3>
            <span>May 2022 – Aug 2022</span>
          </div>
          <p><em>Software Engineering Intern</em></p>
          <ul>
            <li><strong>Distributed Data Pipelines:</strong> Engineered a PoC migrating legacy Samza systems to Kafka Streams to process real-time POS device telemetry.</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>Projects</h2>
        <div className="resume-item">
          <div className="resume-header">
            <h3>Hateful Memes Detection</h3>
            <span>Aug 2023 – Dec 2023</span>
          </div>
          <p><em>Python, PyTorch, Transformers</em></p>
          <ul>
            <li>Engineered an ensemble model using intermediate fusion techniques (HateCLIPper architecture) for multimodal classification, achieving an AUROC of 0.865.</li>
          </ul>
        </div>
        <div className="resume-item">
          <div className="resume-header">
            <h3>BiDirectional Decoding Translator (BiDeT)</h3>
            <span>Jan 2023 – May 2023</span>
          </div>
          <p><em>Python, PyTorch, LSTM, NLP</em></p>
          <ul>
            <li>Architected a bidirectional decoder for sequence-to-sequence tasks, realizing a 21% reduction in test loss on the WMT-14 English-to-German dataset.</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        <div className="resume-item">
          <div className="resume-header">
            <h3>Georgia Institute of Technology</h3>
            <span>Aug 2023 – May 2024</span>
          </div>
          <p><em>Masters of Science in Computer Science: Machine Learning</em> (GPA: 3.75)</p>
        </div>
        <div className="resume-item">
          <div className="resume-header">
            <h3>Georgia Institute of Technology</h3>
            <span>Aug 2020 – May 2023</span>
          </div>
          <p><em>Bachelor of Science in Computer Science</em> (GPA: 4.0, Faculty Honors)</p>
        </div>
      </section>

      <section className="resume-section">
        <h2>Technical Skills</h2>
        <p><strong>Programming:</strong> Python, C, C++, Java, TypeScript, JavaScript, SQL, Scala, Kotlin</p>
        <p><strong>ML Infrastructure:</strong> LLM Orchestration (MCP, CoT), Reinforcement Learning (GRPO, DQN), PyTorch, TensorFlow, Gymnasium, NLP, Computer Vision</p>
        <p><strong>Systems & Data:</strong> Kafka Streams, Distributed Systems, ETL Pipelines, System Design, RESTful APIs, Microservices</p>
        <p><strong>Cloud & Tools:</strong> AWS (Bedrock, Lambda, EC2, S3), Git, Docker, CI/CD, Linux, Node.js, React</p>
        <p><strong>Security Clearance:</strong> Top Secret, Active as of March 2025</p>
      </section>
    </div>
  );
};

export default Resume;
