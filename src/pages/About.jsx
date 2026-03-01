import { motion } from 'framer-motion';

const features = [
  {
    icon: '🤖',
    title: 'AI-Powered',
    description: 'Advanced machine learning model for accurate disease detection',
  },
  {
    icon: '⚡',
    title: 'Fast Results',
    description: 'Get instant predictions within seconds of uploading',
  },
  {
    icon: '🎯',
    title: 'High Accuracy',
    description: 'Trained on extensive datasets for reliable predictions',
  },
  {
    icon: '🌍',
    title: 'Easy to Use',
    description: 'Simple and intuitive interface for all users',
  },
];

const techStack = [
  { name: 'React', icon: '⚛️' },
  { name: 'Tailwind CSS', icon: '💨' },
  { name: 'Framer Motion', icon: '✨' },
  { name: 'Hugging Face', icon: '🤗' },
  { name: 'Python', icon: '🐍' },
  { name: 'Deep Learning', icon: '🧠' },
];

const futureScope = [
  'Show confidence scores for predictions',
  'Provide detailed disease descriptions',
  'Offer treatment recommendations',
  'Multi-language support',
  'Prediction history tracking',
  'Mobile application',
];

export default function About() {
  return (
    <div className="min-h-screen pt-16 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-forest-800 mb-4">
            About This Project
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            An AI-powered solution for detecting plant diseases using advanced image processing and machine learning techniques.
          </p>
        </motion.div>

        {/* Project Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-forest-700 mb-4 flex items-center gap-2">
            <span>📖</span> Project Introduction
          </h3>
          <div className="bg-white/60 rounded-2xl p-6 shadow-md">
            <p className="text-gray-700 leading-relaxed">
              This project aims to help farmers and agricultural experts quickly identify plant diseases through image analysis.
              By leveraging deep learning and computer vision techniques, our system can accurately classify various plant
              diseases from leaf images, enabling early detection and treatment.
            </p>
          </div>
        </motion.div>

        {/* Problem Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-forest-700 mb-4 flex items-center gap-2">
            <span>⚠️</span> Problem Statement
          </h3>
          <div className="bg-white/60 rounded-2xl p-6 shadow-md">
            <p className="text-gray-700 leading-relaxed">
              Plant diseases cause significant agricultural losses worldwide. Traditional disease identification methods
              require expert knowledge and are time-consuming. There is a need for an automated, accessible, and
              cost-effective solution that can help farmers identify plant diseases early and take appropriate action.
            </p>
          </div>
        </motion.div>

        {/* Solution Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-forest-700 mb-4 flex items-center gap-2">
            <span>💡</span> Solution Overview
          </h3>
          <div className="bg-white/60 rounded-2xl p-6 shadow-md">
            <p className="text-gray-700 leading-relaxed">
              We developed a deep learning model trained on thousands of plant leaf images to automatically detect
              and classify plant diseases. The frontend interface provides an easy-to-use platform where users can
              upload images and receive instant predictions about plant health.
            </p>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-forest-700 mb-6 flex items-center gap-2">
            <span>🌟</span> Key Features
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/60 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-2">{feature.icon}</div>
                <h4 className="font-bold text-forest-700 mb-1">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-forest-700 mb-6 flex items-center gap-2">
            <span>🛠️</span> Technology Stack
          </h3>
          <div className="bg-white/60 rounded-2xl p-6 shadow-md">
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-forest-700 font-medium cursor-default"
                >
                  <span>{tech.icon}</span> {tech.name}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Model Training Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-forest-700 mb-4 flex items-center gap-2">
            <span>🧠</span> Model Training Overview
          </h3>
          <div className="bg-white/60 rounded-2xl p-6 shadow-md">
            <p className="text-gray-700 leading-relaxed mb-4">
              The disease detection model was trained using a Convolutional Neural Network (CNN) architecture on a
              comprehensive dataset of plant leaf images. The model learns to identify visual patterns associated
              with various diseases and distinguishes between healthy and affected plants.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Dataset: Thousands of labeled plant leaf images</li>
              <li>Model: Deep Convolutional Neural Network</li>
              <li>Training: Transfer learning with pre-trained weights</li>
              <li>Accuracy: High accuracy on validation set</li>
            </ul>
          </div>
        </motion.div>

        {/* Future Scope */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-forest-700 mb-4 flex items-center gap-2">
            <span>🚀</span> Future Scope
          </h3>
          <div className="bg-white/60 rounded-2xl p-6 shadow-md">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {futureScope.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <span className="text-primary-500">▹</span> {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
