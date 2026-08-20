import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { trackMetaEvent } from '../utils/metaPixel';

export default function WhatsAppButton() {
  const handleClick = () => {
    trackMetaEvent('Contact', { method: 'WhatsApp Floating Button' });
  };

  return (
    <motion.a
      href="https://wa.me/918956907343"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all flex items-center justify-center group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-medium group-hover:ml-3 group-hover:mr-2">
        Chat with us
      </span>
    </motion.a>
  );
}
