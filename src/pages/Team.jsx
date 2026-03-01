import { motion } from 'framer-motion';
import TeamCard from '../components/TeamCard';

const teamMembers = [
  {
    name: 'Umar Iqbal',
    role: 'Team Lead & ML Engineer',
    description: 'Led the development of the ML model and integrated it with the frontend interface.',
    icon: '👨‍💻',
  },
  {
    name: 'Team Member 2',
    role: 'Frontend Developer',
    description: 'Built the responsive user interface with modern animations.',
    icon: '👨‍🎨',
  },
  {
    name: 'Team Member 3',
    role: 'Data Scientist',
    description: 'Processed and prepared the dataset for model training.',
    icon: '👩‍🔬',
  },
  {
    name: 'Team Member 4',
    role: 'Researcher',
    description: 'Conducted research on plant disease classification techniques.',
    icon: '📚',
  },
];

export default function Team() {
  return (
    <div className="min-h-screen pt-16 py-20 px-4 bg-gradient-to-b from-green-50/50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our talented team of researchers and developers worked together to build this AI-powered plant disease detection system.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
