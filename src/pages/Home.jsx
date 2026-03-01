import { useState } from 'react';
import { motion } from 'framer-motion';
import UploadBox from '../components/UploadBox';
import { predictDisease } from '../services/api';

function FloatingPlant() {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="relative w-80 h-80"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full blur-3xl" />
      <div className="relative flex items-center justify-center w-full h-full">
        <img
          src="/Minor Project Logo-Photoroom.png"
          alt="Plant"
          className="w-72 h-72 object-contain"
        />
      </div>
    </motion.div>
  );
}

function TrustBadge({ icon, text }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full shadow-sm"
    >
      <span className="text-lg">{icon}</span>
      <span className="text-sm font-medium text-gray-700">{text}</span>
    </motion.div>
  );
}

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleImageSelect = (file) => {
    setSelectedImage(file);
    setPrediction(null);
    setError(null);
  };

  const handlePredict = async () => {
    if (!selectedImage) {
      setError('Please upload an image first');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await predictDisease(selectedImage);
      if (result.success) {
        let predictionText = '';
        if (Array.isArray(result.data)) {
          predictionText = result.data[0] || result.data[1] || 'Unknown';
        } else if (typeof result.data === 'string') {
          predictionText = result.data;
        }
        setPrediction(predictionText);
      } else {
        setError(result.error || 'Failed to get prediction. Please try again.');
      }
    } catch (err) {
      setError('An error occurred while processing your request. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    setSelectedImage(null);
    setPrediction(null);
    setError(null);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-green-50/50 to-white">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-400/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-600/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6"
              >
                <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-green-700">AI-Powered Plant Health</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Smart Plant Disease{' '}
                <span className="text-green-600">Detection</span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Upload a photo of your plant leaf and get instant AI-powered analysis to identify diseases and get treatment recommendations.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('upload-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-green-600 text-white font-semibold rounded-xl shadow-lg shadow-green-600/25 hover:shadow-xl hover:shadow-green-600/30 hover:bg-green-700 transition-all duration-300"
                >
                  Upload Image
                </motion.button>
              </div>

              <div className="flex flex-wrap gap-3">
                <TrustBadge icon="⚡" text="Instant Results" />
                <TrustBadge icon="🎯" text="High Accuracy" />
                <TrustBadge icon="🆓" text="Free to Use" />
              </div>
            </motion.div>

            {/* Right - 3D Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <FloatingPlant />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section id="upload-section" className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Analyze Your Plant
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Upload a clear photo of your plant leaf and our AI will analyze it for common diseases.
            </p>
          </motion.div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm"
            >
              {error}
            </motion.div>
          )}

          {prediction ? (
            <div className="max-w-2xl mx-auto">
              <UploadBox
                selectedImage={selectedImage}
                onImageSelect={handleImageSelect}
                onPredict={handlePredict}
                isLoading={isLoading}
                prediction={prediction}
              />
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={handleRetry}
                className="block mx-auto mt-6 px-6 py-2 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors"
              >
                Try Another Image
              </motion.button>
            </div>
          ) : (
            <UploadBox
              selectedImage={selectedImage}
              onImageSelect={handleImageSelect}
              onPredict={handlePredict}
              isLoading={isLoading}
              prediction={prediction}
            />
          )}
        </div>
      </section>
    </div>
  );
}
