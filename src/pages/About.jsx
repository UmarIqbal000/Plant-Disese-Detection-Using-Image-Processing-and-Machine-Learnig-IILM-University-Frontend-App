import { motion } from 'framer-motion';

const stats = [
  { value: '54,000+', label: 'Images Trained' },
  { value: '38', label: 'Disease Classes' },
  { value: '97.74%', label: 'Accuracy' },
  { value: '2.6M', label: 'Parameters' },
];

const datasetFeatures = [
  'Random rotations',
  'Zoom transformations',
  'Width and height shifts',
  'Horizontal flipping',
  'MobileNetV2 normalization',
];

const architectureFeatures = [
  'Pretrained MobileNetV2 (ImageNet weights)',
  'Global Average Pooling layer',
  'Batch Normalization',
  'Dense layer (256 units, ReLU activation)',
  'Dropout (0.5) for regularization',
  'Final Softmax layer for 38-class classification',
];

const whyMatters = [
  'Deep Learning',
  'Computer Vision',
  'Transfer Learning',
  'Agricultural Technology',
  'Full-Stack AI Deployment',
];

export default function About() {
  return (
    <div className="min-h-screen pt-16 pb-20 bg-gradient-to-b from-green-50/30 to-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-green-700">About PlantCare AI</span>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Plant Disease Detection using{' '}
            <span className="text-green-600">AI & Deep Learning</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            An AI-powered plant disease detection system developed to assist in the early identification of plant health conditions using deep learning.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg shadow-green-100 border border-green-100"
            >
              <div className="text-3xl font-bold text-green-600 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-gray-100 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl">🏥</span>
              About PlantCare AI
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                PlantCare AI is an AI-powered plant disease detection system developed to assist in the early identification of plant health conditions using deep learning. The system leverages advanced computer vision techniques to analyze leaf images and accurately classify plant diseases across multiple crop categories.
              </p>
              <p>
                This project was developed as part of an academic initiative under the guidance of the School of Computer Science and Engineering, <strong>IILM University, Greater Noida</strong>. It combines machine learning research, transfer learning techniques, and full-stack deployment to create a practical, real-world solution for agricultural diagnostics.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Objective */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 md:p-10 shadow-xl shadow-green-200 text-white">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-xl">🎯</span>
              Our Objective
            </h2>
            <p className="text-green-50 leading-relaxed text-lg">
              The primary goal of PlantCare AI is to enable rapid and reliable detection of plant diseases using image-based analysis. Early identification of plant diseases plays a crucial role in minimizing crop loss, improving yield quality, and supporting sustainable agriculture practices.
            </p>
            <p className="text-green-50 leading-relaxed text-lg mt-4">
              By leveraging AI, we aim to make plant health assessment faster, scalable, and accessible.
            </p>
          </div>
        </motion.section>

        {/* Dataset & Data Processing */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-gray-100 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-xl">📊</span>
              Dataset & Data Processing
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The model was trained using the <strong>PlantVillage dataset</strong>, which contains over 54,000 labeled leaf images across 38 distinct plant disease categories.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 rounded-2xl p-5">
                <h3 className="font-semibold text-gray-900 mb-4">Dataset Details</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">▹</span> 43,456 training images
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">▹</span> 10,849 validation images
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">▹</span> 38 plant disease classes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">▹</span> Color image dataset
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">▹</span> Standardized: 224x224 pixels
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-2xl p-5">
                <h3 className="font-semibold text-gray-900 mb-4">Data Augmentation</h3>
                <ul className="space-y-2 text-gray-700">
                  {datasetFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-blue-600">▹</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Model Architecture */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-gray-100 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-xl">🧠</span>
              Model Architecture
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The system uses <strong>Transfer Learning with MobileNetV2</strong> as the base model.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 rounded-2xl p-5">
                <h3 className="font-semibold text-gray-900 mb-4">Architecture Highlights</h3>
                <ul className="space-y-2 text-gray-700">
                  {architectureFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-purple-600">▹</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-5 text-white">
                <h3 className="font-semibold mb-4">Model Details</h3>
                <ul className="space-y-3 text-purple-100">
                  <li className="flex items-center gap-2">
                    <span>📌</span> Total parameters: ~2.6 million
                  </li>
                  <li className="flex items-center gap-2">
                    <span>📌</span> Trainable (Phase 1): ~340k
                  </li>
                  <li className="flex items-center gap-2">
                    <span>📌</span> Optimizer: Adam
                  </li>
                  <li className="flex items-center gap-2">
                    <span>📌</span> Loss: Categorical Crossentropy
                  </li>
                  <li className="flex items-center gap-2">
                    <span>📌</span> Metric: Accuracy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Training Strategy */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-gray-100 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-xl">⚙️</span>
              Training Strategy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The training process was conducted in two phases:
            </p>

            <div className="space-y-4">
              <div className="bg-orange-50 rounded-2xl p-5 border-l-4 border-orange-500">
                <h3 className="font-semibold text-gray-900 mb-2">Phase 1: Transfer Learning</h3>
                <p className="text-gray-700">
                  The base MobileNetV2 layers were frozen, and only the custom classification head was trained.
                </p>
              </div>
              <div className="bg-orange-50 rounded-2xl p-5 border-l-4 border-orange-500">
                <h3 className="font-semibold text-gray-900 mb-2">Phase 2: Fine-Tuning</h3>
                <p className="text-gray-700">
                  The top 30% of MobileNetV2 layers were unfrozen and trained with a lower learning rate (1e-5) to improve feature adaptation.
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
              <p className="text-gray-600 text-sm">
                <strong>Note:</strong> EarlyStopping and ModelCheckpoint callbacks were implemented to prevent overfitting and retain the best-performing model.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Model Performance */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 md:p-10 shadow-xl shadow-green-200 text-white">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-xl">📈</span>
              Model Performance
            </h2>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold mb-2">97.74%</div>
                <div className="text-green-100 text-lg">Validation Accuracy</div>
              </div>
            </div>
            <p className="text-green-50 leading-relaxed mt-6 text-center">
              The validation accuracy graph demonstrates a consistent improvement after fine-tuning, confirming enhanced generalization performance. This high accuracy indicates strong performance across diverse plant disease classes.
            </p>
          </div>
        </motion.section>

        {/* Model Deployment */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-gray-100 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center text-xl">🚀</span>
              Model Deployment
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The trained model was exported in multiple formats to ensure compatibility for deployment across various platforms:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['.keras format', '.h5 format', 'Model weights file'].map((format, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-cyan-50 text-cyan-700 font-semibold rounded-full shadow-sm"
                >
                  {format}
                </motion.span>
              ))}
            </div>
            <p className="text-gray-600 text-center mt-6">
              The current web interface integrates the trained model to provide instant disease predictions based on uploaded leaf images.
            </p>
          </div>
        </motion.section>

        {/* Why This Project Matters */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-gray-100 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center text-xl">💡</span>
              Why This Project Matters
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Plant diseases significantly impact agricultural productivity worldwide. Manual inspection can be time-consuming and requires domain expertise. By integrating deep learning and computer vision, PlantCare AI demonstrates how artificial intelligence can support agricultural diagnostics in a scalable and efficient manner.
            </p>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">This project reflects the intersection of:</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {whyMatters.map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-5 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-full shadow-md"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
