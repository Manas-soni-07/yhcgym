export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+91 95757 62143';

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi YHC, I am interested in joining Your Health Club. I would like to know more about memberships and the free trial.";

export function getWhatsAppUrl(customMessage?: string): string {
  const msg = encodeURIComponent(customMessage || DEFAULT_WHATSAPP_MESSAGE);
  const cleanNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanNumber}?text=${msg}`;
}
