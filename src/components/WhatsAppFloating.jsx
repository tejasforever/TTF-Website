import React from 'react';
import { MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export function WhatsAppFloating() {
  return (
    <a
      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20TheTechForever,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float-btn"
      title="Chat directly with TheTechForever on WhatsApp"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare size={28} />
    </a>
  );
}
