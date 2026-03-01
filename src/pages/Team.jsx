import { motion } from 'framer-motion';
import TeamCard from '../components/TeamCard';

const mentor = {
  name: 'Ms. Bhavana Shrivastava',
  designation: 'Professor',
  department: 'School of Computer Science and Engineering',
  institution: 'IILM University, Greater Noida',
  role_label: 'Project Mentor',
  description: 'Guided and supervised the research and development of the AI-powered plant disease detection system, providing academic and technical mentorship.',
  isMentor: true,
};

const teamMembers = [
  {
    name: 'Umar Iqbal',
    role: 'Team Lead & ML Engineer',
    description: 'Led ML model development, backend architecture, AI integration, and deployment.',
    highlight: true,
  },
  {
    name: 'SaiKrishna Paila',
    role: 'ML & Full Stack Developer',
    description: 'Worked on model optimization, API integration, and frontend-backend systems.',
    highlight: false,
  },
  {
    name: 'Tanisha Sarkar',
    role: 'ML & Research',
    description: 'Focused on dataset evaluation, research validation, and experimental analysis.',
    highlight: false,
  },
  {
    name: 'Shivani',
    role: 'ML & Research',
    description: 'Conducted research on disease classification and model testing.',
    highlight: false,
  },
  {
    name: 'Ishismar Wadhwa',
    role: 'UI/UX Designer',
    description: 'Designed intuitive user interfaces and optimized overall user experience.',
    highlight: false,
  },
];

export default function Team() {
  return (
    <div className="min-h-screen pt-16">
      {/* Section Header */}
      <section className="relative py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/80 via-white to-white" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-green-300 to-transparent" />

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-4"
          >
            <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-green-700">Our Team</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900"
          >
            Our Mentor & Team
          </motion.h2>
        </div>
      </section>

      {/* Mentor Section */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Mentor Card */}
            <div className="relative bg-gradient-to-br from-white to-green-50/50 rounded-3xl p-8 md:p-10 shadow-xl shadow-green-100 border border-green-200">
              {/* Mentor Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="px-6 py-2 bg-green-600 text-white text-sm font-semibold rounded-full shadow-lg">
                  Project Mentor
                </span>
              </div>

              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg shadow-green-200">
                    <span className="text-5xl">👩‍🏫</span>
                  </div>
                  <div className="absolute inset-0 rounded-full ring-4 ring-green-300" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {mentor.name}
                </h3>
                <p className="text-green-600 font-semibold text-lg mb-1">
                  {mentor.designation}
                </p>
                <p className="text-gray-600 text-sm mb-1">
                  {mentor.department}
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  {mentor.institution}
                </p>
                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  {mentor.description}
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-green-100 rounded-full opacity-50" />
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-green-100 rounded-full opacity-50" />
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-green-300 to-transparent" />
        </div>
        <div className="relative flex justify-center">
          <div className="bg-white px-4">
            <span className="text-2xl">🌱</span>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8"
          >
            Development & Research Team
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="w-full sm:w-[calc(50%-12px)] max-w-sm">
                <TeamCard member={member} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-green-300 to-transparent" />
        </div>
        <div className="relative flex justify-center">
          <div className="bg-white px-4">
            <span className="text-2xl">🌱</span>
          </div>
        </div>
      </div>
    </div>
  );
}
