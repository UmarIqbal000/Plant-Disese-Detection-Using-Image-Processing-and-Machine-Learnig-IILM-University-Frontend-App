import { motion } from 'framer-motion';

export default function TeamCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-primary-100"
    >
      <motion.div
        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)' }}
        className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-300 to-primary-500 flex items-center justify-center text-4xl shadow-md"
      >
        {member.avatar ? (
          <img src={member.avatar} alt={member.name} className="w-full h-full rounded-full object-cover" />
        ) : (
          <span>{member.icon}</span>
        )}
      </motion.div>

      <h3 className="text-xl font-bold text-forest-800 text-center mb-1">
        {member.name}
      </h3>
      <p className="text-primary-600 font-medium text-center text-sm mb-3">
        {member.role}
      </p>
      <p className="text-gray-600 text-center text-sm mb-4">
        {member.description}
      </p>

      <div className="flex justify-center gap-3">
        {member.linkedin && (
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md hover:bg-blue-700 transition-colors"
          >
            in
          </motion.a>
        )}
        {member.github && (
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md hover:bg-gray-900 transition-colors"
          >
            GH
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}
