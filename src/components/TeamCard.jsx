import { motion } from 'framer-motion';

const avatarIcons = ['👨‍💻', '👨‍💼', '👩‍🔬', '👩‍💼', '👩‍🎨'];

export default function TeamCard({ member, index }) {
  const isLead = member.highlight;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className={`
        relative bg-white rounded-2xl p-6 transition-all duration-300
        ${isLead
          ? 'ring-2 ring-green-500 shadow-xl shadow-green-100'
          : 'shadow-lg shadow-gray-100 hover:shadow-xl hover:shadow-gray-200 hover:ring-1 hover:ring-green-200'
        }
      `}
    >
      {/* Highlight Badge */}
      {isLead && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 bg-green-600 text-white text-xs font-semibold rounded-full shadow-lg">
            Team Lead
          </span>
        </div>
      )}

      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`
            relative w-24 h-24 rounded-full flex items-center justify-center text-4xl
            ${isLead
              ? 'bg-gradient-to-br from-green-400 to-green-600 shadow-lg shadow-green-200'
              : 'bg-gradient-to-br from-gray-100 to-gray-200'
            }
          `}
        >
          <span>{avatarIcons[index % avatarIcons.length]}</span>
          {/* Gradient ring */}
          <div className={`absolute inset-0 rounded-full ${isLead ? 'ring-4 ring-green-300' : 'ring-4 ring-gray-200'}`} />
        </motion.div>
      </div>

      {/* Name */}
      <h3 className="text-xl font-bold text-gray-900 text-center mb-1">
        {member.name}
      </h3>

      {/* Role Badge */}
      <div className="flex justify-center mb-3">
        <span className={`
          px-3 py-1 rounded-full text-xs font-medium
          ${isLead
            ? 'bg-green-100 text-green-700'
            : 'bg-gray-100 text-gray-600'
          }
        `}>
          {member.role}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-center text-sm">
        {member.description}
      </p>

      {/* Social Links */}
      <div className="flex justify-center gap-3 pt-4 mt-4 border-t border-gray-100">
        <motion.a
          whileHover={{ scale: 1.1, y: -2 }}
          href="#"
          className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1, y: -2 }}
          href="#"
          className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-800 hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
}
