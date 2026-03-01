import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function UploadBox({ onImageSelect, selectedImage, onPredict, isLoading, prediction }) {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      validateAndSetImage(files[0]);
    }
  };

  const handleFileSelect = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      validateAndSetImage(files[0]);
    }
  };

  const validateAndSetImage = (file) => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setError('Please upload a valid image file (JPEG, PNG, or WebP)');
      return;
    }
    setError('');
    onImageSelect(file);
  };

  const handlePredict = () => {
    if (!selectedImage) {
      setError('Please upload an image first');
      return;
    }
    onPredict();
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className={`
          relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300
          ${isDragging
            ? 'border-primary-500 bg-primary-50 scale-[1.02]'
            : 'border-primary-300 bg-white/50 hover:border-primary-400 hover:bg-white/70'
          }
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        whileHover={{ scale: 1.01 }}
      >
        {selectedImage ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative"
          >
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Selected plant"
              className="max-h-64 mx-auto rounded-xl shadow-lg object-contain"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                onImageSelect(null);
                if (fileInputRef.current) fileInputRef.current.value = '';
              }}
              className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md"
            >
              ×
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            animate={{ scale: isDragging ? 1.1 : 1 }}
            className="py-8"
          >
            <div className="text-6xl mb-4">🌱</div>
            <p className="text-forest-700 text-lg font-medium mb-2">
              Drag and drop your plant image here
            </p>
            <p className="text-gray-500 text-sm mb-4">
              or click to browse files
            </p>
            <p className="text-gray-400 text-xs">
              Supported formats: JPEG, PNG, WebP
            </p>
          </motion.div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/jpg,image/png,image/webp"
          onChange={handleFileSelect}
          className="hidden"
          id="file-upload"
        />

        {!selectedImage && (
          <motion.label
            htmlFor="file-upload"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-4 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg cursor-pointer shadow-md hover:bg-primary-700 transition-colors"
          >
            Browse Files
          </motion.label>
        )}
      </motion.div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 flex justify-center"
        >
          <motion.button
            onClick={handlePredict}
            disabled={isLoading}
            whileHover={!isLoading ? { scale: 1.05 } : {}}
            whileTap={!isLoading ? { scale: 0.95 } : {}}
            className={`
              px-8 py-4 text-lg font-bold rounded-xl shadow-lg transition-all
              ${isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white'
              }
            `}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="inline-block text-xl"
                >
                  🌿
                </motion.span>
                Analyzing...
              </span>
            ) : (
              '🔍 Predict Disease'
            )}
          </motion.button>
        </motion.div>
      )}

      {prediction && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', damping: 15 }}
          className="mt-8 p-6 bg-white rounded-2xl shadow-xl border border-primary-100"
        >
          <h3 className="text-xl font-bold text-forest-800 mb-2 text-center">
            Prediction Result
          </h3>
          <p className="text-center text-2xl font-semibold text-primary-700">
            {prediction}
          </p>
        </motion.div>
      )}
    </div>
  );
}
