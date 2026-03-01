import { motion } from 'framer-motion';

export default function TeamCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-100 hover:shadow-xl transition-all duration-300"
    >
      <motion.div
        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(22, 163, 74, 0.3)' }}
        className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-300 to-green-500 flex items-center justify-center text-4xl shadow-md"
      >
        <span>{member.icon}</span>
      </motion.div>

      <h3 className="text-xl font-bold text-gray-900 text-center mb-1">
        {member.name}
      </h3>
      <p className="text-green-600 font-medium text-center text-sm mb-3">
        {member.role}
      </p>
      <p className="text-gray-600 text-center text-sm">
        {member.description}
      </p>
    </motion.div>
  );
}
