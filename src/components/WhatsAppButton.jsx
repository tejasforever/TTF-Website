import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '919403123579';
  const defaultMessage = encodeURIComponent('Hello TheTechForever! I would like to consult with your engineering team regarding a digital project.');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-floating"
      aria-label="Direct WhatsApp Consultation with TTF"
    >
      <MessageSquare size={18} />
      <span>Consult on WhatsApp</span>
    </a>
  );
}
