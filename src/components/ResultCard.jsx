import { motion } from 'framer-motion';

export default function ResultCard({ prediction, confidence, onRetry }) {
  const isHealthy = prediction?.toLowerCase().includes('healthy') || prediction?.toLowerCase().includes('normal');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', damping: 15 }}
      className={`w-full max-w-md mx-auto p-6 rounded-2xl shadow-xl border-2 ${
        isHealthy
          ? 'bg-gradient-to-br from-green-50 to-green-100 border-green-300'
          : 'bg-gradient-to-br from-red-50 to-red-100 border-red-300'
      }`}
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="text-6xl mb-4"
        >
          {isHealthy ? '✅' : '⚠️'}
        </motion.div>

        <h3 className="text-xl font-bold text-forest-800 mb-2">
          Prediction Result
        </h3>

        <p className={`text-2xl font-bold mb-4 ${
          isHealthy ? 'text-green-700' : 'text-red-700'
        }`}>
          {prediction}
        </p>

        {confidence && (
          <div className="mb-4">
            <div className="text-sm text-gray-600 mb-1">Confidence</div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${confidence}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className={`h-3 rounded-full ${
                  isHealthy ? 'bg-green-500' : 'bg-red-500'
                }`}
              />
            </div>
            <p className="text-sm text-gray-600 mt-1">{confidence}%</p>
          </div>
        )}

        {onRetry && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRetry}
            className="px-6 py-2 bg-primary-600 text-white font-semibold rounded-lg shadow-md hover:bg-primary-700 transition-colors"
          >
            Try Another Image
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
