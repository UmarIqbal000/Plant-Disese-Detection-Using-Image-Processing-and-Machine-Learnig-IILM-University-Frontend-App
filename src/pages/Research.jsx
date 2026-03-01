import { motion } from 'framer-motion';

export default function Research() {
  return (
    <div className="min-h-screen pt-16 py-20 px-4 bg-gradient-to-b from-green-50/50 to-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Research
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our research work on plant disease detection using machine learning and image processing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-12 shadow-lg shadow-gray-100 text-center"
        >
          <div className="text-6xl mb-6">📄</div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Research Paper Coming Soon
          </h3>
          <p className="text-gray-600">
            We are currently working on our research paper. It will be uploaded here shortly.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
