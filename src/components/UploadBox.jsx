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
            className="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className={`
          relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300
          ${isDragging
            ? 'border-green-500 bg-green-50 scale-[1.02]'
            : selectedImage
              ? 'border-green-200 bg-white'
              : 'border-gray-200 bg-gray-50 hover:border-green-300 hover:bg-green-50/30'
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
              className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md hover:bg-red-600 transition-colors"
            >
              ×
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            animate={{ scale: isDragging ? 1.1 : 1 }}
            className="py-8"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl mb-4"
            >
              🌿
            </motion.div>
            <p className="text-gray-700 text-lg font-medium mb-2">
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
            className="inline-block mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl cursor-pointer shadow-lg shadow-green-600/25 hover:bg-green-700 hover:shadow-xl transition-all duration-300"
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
                : 'bg-green-600 hover:bg-green-700 text-white shadow-green-600/25 hover:shadow-green-600/40'
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
              '🔍 Analyze Plant'
            )}
          </motion.button>
        </motion.div>
      )}

      {prediction && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', damping: 15 }}
          className="mt-8 p-6 bg-white rounded-2xl shadow-xl shadow-gray-100 border border-gray-100"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
            Prediction Result
          </h3>
          <p className="text-center text-2xl font-semibold text-green-600">
            {prediction}
          </p>
        </motion.div>
      )}
    </div>
  );
}
