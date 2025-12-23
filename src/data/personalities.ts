import type { Personality } from '../types';

export const personalities: Personality[] = [
  {
    id: 'cheerful-giver',
    name: 'The Cheerful Giver',
    alias: 'Oga Santa',
    description: 'You are the reason hampers are scarce in the market. Your love language is credit alerts and "sending something small".',
    imageIcon: 'Gift',
    traits: ['Generous Spender', 'Hamper Distributor', 'Soft Life Ambassador']
  },
  {
    id: 'peaceful-observer',
    name: 'The Peaceful Observer',
    alias: 'Village Chiller',
    description: 'You escaped the city stress for village breeze. You love harmattan, fresh palm wine, and zero network coverage.',
    imageIcon: 'Sun',
    traits: ['Hates Stress', 'Nature Lover', 'Low Battery Life']
  },
  {
    id: 'choir-captain',
    name: 'The Choir Captain',
    alias: 'Hallelujah Vibe',
    description: 'Carol service is your Met Gala. You know the alto, tenor, and soprano parts of every hymn. Energy levels: 100%.',
    imageIcon: 'Music',
    traits: ['High Energy', 'Carol Expert', 'Front Row Sitter']
  },
  {
    id: 'jollof-inspector',
    name: 'The Jollof Inspector',
    alias: 'Minister of Stomach Infrastructure',
    description: 'You are here for the food, period. You know exactly which cooler has the fried meat and which aunty cooks the best rice.',
    imageIcon: 'Utensils',
    traits: ['Foodie', 'Tupperware Expert', 'Queue Jumper']
  },
  {
    id: 'ijgb',
    name: 'The IJGB',
    alias: 'Dollar Spender',
    description: 'You just got back. You complain about the heat, the traffic, and NEPA, but you secretly missed the chaos. "In the abroad..." is your catchphrase.',
    imageIcon: 'Plane',
    traits: ['Accent Heavy', 'Complains A Lot', 'Secretly Happy']
  },
  {
    id: 'prayer-warrior',
    name: 'The Prayer Warrior',
    alias: 'Spiritual Ginger',
    description: 'While others are shouting "Happy New Year", you are binding the spirit of poverty for the next 365 days. Crossover service is clear.',
    imageIcon: 'Sparkles', // Changed from HandsPraying to Sparkles
    traits: ['Spiritually Alert', 'Kabashing Expert', 'Midnight Crier']
  },
  {
    id: 'whatsapp-evangelist',
    name: 'The WhatsApp Evangelist',
    alias: 'BC Chief',
    description: 'You have sent "Merry Christmas" to 500 people and 50 groups. You are the reason our phones are hanging.',
    imageIcon: 'MessageCircle',
    traits: ['Broadcast King/Queen', 'Emoji User', 'Chain Message Sender']
  },
  {
    id: 'kitchen-hero',
    name: 'The Kitchen Hero',
    alias: 'Chef Chi',
    description: 'The real MVP. You cooked the rice, fried the chicken, and washed the plates. Without you, Christmas is just hunger.',
    imageIcon: 'ChefHat',
    traits: ['Multitasker', 'Feeds the Nation', 'Tired but Smiling']
  },
  {
    id: 'quiet-guest',
    name: 'The Quiet Guest',
    alias: 'Ghost Mode',
    description: 'You came, you saw, you ate, you vanished. No one saw you wash plate, but they saw empty plates where you sat.',
    imageIcon: 'Ghost',
    traits: ['Stealth Eater', 'Disappearing Act', 'No Trace Left']
  }
];
