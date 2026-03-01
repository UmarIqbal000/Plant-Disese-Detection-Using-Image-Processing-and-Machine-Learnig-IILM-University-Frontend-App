import { useState } from 'react';
import { motion } from 'framer-motion';
import UploadBox from '../components/UploadBox';
import { predictDisease } from '../services/api';

function Particles() {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    size: Math.random() * 20 + 10,
  }));

  return (
    <div className="particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            animationDelay: `${p.delay}s`,
            width: p.size,
            height: p.size,
          }}
        />
      ))}
    </div>
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
      <Particles />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 py-16 sm:py-24 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-forest-800 mb-4"
          >
            AI Powered Plant{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              Disease Detection
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Upload a plant leaf image and get instant AI-powered disease prediction
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-6 mb-12"
          >
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-3xl"
            >
              🌿
            </motion.span>
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="text-3xl"
            >
              🔬
            </motion.span>
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="text-3xl"
            >
              🤖
            </motion.span>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm"
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
                className="block mx-auto mt-6 px-6 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
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
        </motion.div>
      </motion.div>
    </div>
  );
}
