import type { Question } from '../types';

export const questions: Question[] = [
  // --- VIBE QUESTIONS ---
  {
    id: 1,
    text: "It's December 1st. What is the first thing you do?",
    category: 'Vibe',
    options: [
      { text: "Blast 'Feliz Navidad' and decorate everywhere.", personalityId: 'choir-captain' },
      { text: "Check my bank account and sigh.", personalityId: 'peaceful-observer' },
      { text: "Send a 'Happy New Month' broadcast to 500 people.", personalityId: 'whatsapp-evangelist' },
      { text: "Start planning the menu for Christmas day.", personalityId: 'jollof-inspector' }
    ]
  },
  {
    id: 2,
    text: "Your tailor just called. Your Christmas cloth will not be ready.",
    category: 'Vibe',
    options: [
      { text: "Go to their shop and create a scene.", personalityId: 'cheerful-giver' },
      { text: "It's fine, I have old clothes to wear.", personalityId: 'peaceful-observer' },
      { text: "Post it on your status: 'Tailors will disgrace you'.", personalityId: 'whatsapp-evangelist' },
      { text: "God forbid! I bind that spirit!", personalityId: 'prayer-warrior' }
    ]
  },
  {
    id: 3,
    text: "NEPA takes light on Christmas morning. Reaction?",
    category: 'Vibe',
    options: [
      { text: "On the gen immediately. Fuel is not an issue.", personalityId: 'cheerful-giver' },
      { text: "Complain about how 'this country is finished'.", personalityId: 'ijgb' },
      { text: "Go to church, there is light there.", personalityId: 'choir-captain' },
      { text: "Use the darkness to sleep more.", personalityId: 'peaceful-observer' }
    ]
  },
  {
    id: 4,
    text: "Aunty Nkechi asks why you are not yet married.",
    category: 'Vibe',
    options: [
      { text: "Smile and carry a plate of chin-chin away.", personalityId: 'quiet-guest' },
      { text: "Ask her where her own husband is.", personalityId: 'ijgb' },
      { text: "Tell her you are waiting on the Lord.", personalityId: 'prayer-warrior' },
      { text: "Change the topic to how good the food is.", personalityId: 'jollof-inspector' }
    ]
  },
  {
    id: 5,
    text: "The DJ plays 'Zazoo Zeh' at the family party.",
    category: 'Vibe',
    options: [
      { text: "Start dancing aggressively.", personalityId: 'cheerful-giver' },
      { text: "Request for 'Silent Night' instead.", personalityId: 'choir-captain' },
      { text: "Video everyone and post on your status.", personalityId: 'whatsapp-evangelist' },
      { text: "Sit in the corner and judge them.", personalityId: 'peaceful-observer' }
    ]
  },
  {
    id: 6,
    text: "You hear a knockout (banger) sound outside.",
    category: 'Vibe',
    options: [
      { text: "Dive to the floor! Safety first.", personalityId: 'ijgb' },
      { text: "Ignore it, I'm used to it.", personalityId: 'peaceful-observer' },
      { text: "Go outside and throw my own.", personalityId: 'cheerful-giver' },
      { text: "Start praying against gunshots.", personalityId: 'prayer-warrior' }
    ]
  },
  {
    id: 7,
    text: "What is your contribution to the Christmas decorations?",
    category: 'Vibe',
    options: [
      { text: "I bought the tree and all the lights.", personalityId: 'cheerful-giver' },
      { text: "I supervised the hanging of lights.", personalityId: 'peaceful-observer' },
      { text: "I criticized the colour combination.", personalityId: 'ijgb' },
      { text: "I'm just here to take pictures with it.", personalityId: 'quiet-guest' }
    ]
  },
  {
    id: 8,
    text: "Harmattan is blowing seriously.",
    category: 'Vibe',
    options: [
      { text: "Moisturize and enjoy the cool weather.", personalityId: 'peaceful-observer' },
      { text: "Complain about my lips cracking.", personalityId: 'ijgb' },
      { text: "Wear my thickest cardigan everywhere.", personalityId: 'quiet-guest' },
      { text: "It's a sign of the end times.", personalityId: 'prayer-warrior' }
    ]
  },
  {
    id: 9,
    text: "You are invited to 5 parties on the same day.",
    category: 'Vibe',
    options: [
      { text: "Attend all of them. Team no sleep!", personalityId: 'cheerful-giver' },
      { text: "Pick one with the best food.", personalityId: 'jollof-inspector' },
      { text: "Stay home and sleep.", personalityId: 'peaceful-observer' },
      { text: "Forward the invites to my groups.", personalityId: 'whatsapp-evangelist' }
    ]
  },
  {
    id: 10,
    text: "Someone gives you a hamper with only tissue and cabin biscuits.",
    category: 'Vibe',
    options: [
      { text: "Accept it with thanks. A gift is a gift.", personalityId: 'prayer-warrior' },
      { text: "Hiss and check the expiry dates.", personalityId: 'jollof-inspector' },
      { text: "Regift it to someone I don't like.", personalityId: 'cheerful-giver' },
      { text: "Post a picture: 'See what my haters sent'.", personalityId: 'whatsapp-evangelist' }
    ]
  },

  // --- WALLET QUESTIONS ---
  {
    id: 11,
    text: "A random cousin asks for 'Christmas something'.",
    category: 'Wallet',
    options: [
      { text: "Send 2k and tell them to manage it.", personalityId: 'cheerful-giver' },
      { text: "Send a long prayer message instead.", personalityId: 'prayer-warrior' },
      { text: "Ignore the message.", personalityId: 'quiet-guest' },
      { text: "Tell them things are hard in the abroad too.", personalityId: 'ijgb' }
    ]
  },
  {
    id: 12,
    text: "How much is your budget for Christmas?",
    category: 'Wallet',
    options: [
      { text: "Budget? We spend until the card declines.", personalityId: 'cheerful-giver' },
      { text: "I have calculated every kobo.", personalityId: 'peaceful-observer' },
      { text: "Whatever the church needs.", personalityId: 'choir-captain' },
      { text: "Food is the only budget.", personalityId: 'jollof-inspector' }
    ]
  },
  {
    id: 13,
    text: "You see fresh chicken selling for 15k.",
    category: 'Wallet',
    options: [
      { text: "Buy 5. Christmas must be soft.", personalityId: 'cheerful-giver' },
      { text: "Price it down to 5k or walk away.", personalityId: 'kitchen-hero' },
      { text: "Call my supplier in the village.", personalityId: 'peaceful-observer' },
      { text: "Convert it to dollars and shake head.", personalityId: 'ijgb' }
    ]
  },
  {
    id: 14,
    text: "The price of transport to the village has tripled.",
    category: 'Wallet',
    options: [
      { text: "Pay it. I must see my people.", personalityId: 'cheerful-giver' },
      { text: "Cancel the trip. Zoom call will do.", personalityId: 'ijgb' },
      { text: "Look for a free ride with Uncle Ben.", personalityId: 'quiet-guest' },
      { text: "Pray for divine intervention.", personalityId: 'prayer-warrior' }
    ]
  },
  {
    id: 15,
    text: "You need new shoes for church.",
    category: 'Wallet',
    options: [
      { text: "Order from ASOS/Zara.", personalityId: 'ijgb' },
      { text: "Buy from the market, wash and iron.", personalityId: 'kitchen-hero' },
      { text: "Use the one I bought in 2019.", personalityId: 'peaceful-observer' },
      { text: "Borrow from my sibling.", personalityId: 'quiet-guest' }
    ]
  },
  {
    id: 16,
    text: "Giving offering in church on Christmas day.",
    category: 'Wallet',
    options: [
      { text: "Dance to the front with a fat envelope.", personalityId: 'cheerful-giver' },
      { text: "Drop what I have quietly.", personalityId: 'quiet-guest' },
      { text: "I'm in the choir, my voice is my offering.", personalityId: 'choir-captain' },
      { text: "Transfer knowing God sees the heart.", personalityId: 'whatsapp-evangelist' }
    ]
  },
  {
    id: 17,
    text: "Blocking out January dry days.",
    category: 'Wallet',
    options: [
      { text: "I have saved specifically for January.", personalityId: 'peaceful-observer' },
      { text: "God will provide.", personalityId: 'prayer-warrior' },
      { text: "I will eat leftover Christmas rice.", personalityId: 'kitchen-hero' },
      { text: "I'll travel back before January 5th.", personalityId: 'ijgb' }
    ]
  },
  {
    id: 18,
    text: "Buying fireworks/bangers.",
    category: 'Wallet',
    options: [
      { text: "Buy the one that sounds like bomb.", personalityId: 'cheerful-giver' },
      { text: "Waste of money.", personalityId: 'peaceful-observer' },
      { text: "I prefer sparklers.", personalityId: 'quiet-guest' },
      { text: "Buy for all the kids in the street.", personalityId: 'whatsapp-evangelist' }
    ]
  },
  {
    id: 19,
    text: "Aso-ebi for the family reunion.",
    category: 'Wallet',
    options: [
      { text: "Pay immediately, sew style immediately.", personalityId: 'cheerful-giver' },
      { text: "Complain about the material quality.", personalityId: 'ijgb' },
      { text: "Say I'm not around.", personalityId: 'quiet-guest' },
      { text: "Collect material and promise to pay later.", personalityId: 'peaceful-observer' }
    ]
  },
  {
    id: 20,
    text: "Data for the holiday period.",
    category: 'Wallet',
    options: [
      { text: "Unlimited plan. I need to stream.", personalityId: 'ijgb' },
      { text: "Manage 10GB carefully.", personalityId: 'peaceful-observer' },
      { text: "Look for free WiFi everywhere.", personalityId: 'quiet-guest' },
      { text: "Buy data to forward broadcasts.", personalityId: 'whatsapp-evangelist' }
    ]
  },

  // --- CHOW (FOOD) QUESTIONS ---
  {
    id: 21,
    text: "Jollof Rice or Fried Rice?",
    category: 'Chow',
    options: [
      { text: "Both. With plantain and salad.", personalityId: 'jollof-inspector' },
      { text: "Fried rice, it's more special.", personalityId: 'cheerful-giver' },
      { text: "Jollof, the classic.", personalityId: 'kitchen-hero' },
      { text: "Fasting on Christmas morning.", personalityId: 'prayer-warrior' }
    ]
  },
  {
    id: 22,
    text: "There is only one piece of meat left in the pot.",
    category: 'Chow',
    options: [
      { text: "Eat it. Survival of the fittest.", personalityId: 'jollof-inspector' },
      { text: "Leave it for the visitors.", personalityId: 'kitchen-hero' },
      { text: "Split it with my sibling.", personalityId: 'peaceful-observer' },
      { text: "Use it to cook stew for everyone.", personalityId: 'cheerful-giver' }
    ]
  },
  {
    id: 23,
    text: "Who washes the plates after the Christmas feast?",
    category: 'Chow',
    options: [
      { text: "Me. As usual.", personalityId: 'kitchen-hero' },
      { text: "I have disappeared to 'charge my phone'.", personalityId: 'quiet-guest' },
      { text: "We use disposable plates.", personalityId: 'ijgb' },
      { text: "The children/younger ones.", personalityId: 'cheerful-giver' }
    ]
  },
  {
    id: 24,
    text: "Chin-chin or Puff-puff?",
    category: 'Chow',
    options: [
      { text: "Chin-chin is easier to store.", personalityId: 'kitchen-hero' },
      { text: "Puff-puff, hot and sweet.", personalityId: 'jollof-inspector' },
      { text: "Neither, too much sugar.", personalityId: 'ijgb' },
      { text: "Serve both to guests.", personalityId: 'cheerful-giver' }
    ]
  },
  {
    id: 25,
    text: "Chicken or Turkey?",
    category: 'Chow',
    options: [
      { text: "Turkey. Go big or go home.", personalityId: 'cheerful-giver' },
      { text: "Chicken is softer.", personalityId: 'peaceful-observer' },
      { text: "Whatever is available, I eat.", personalityId: 'quiet-guest' },
      { text: "Fish. Keeps me light for choir.", personalityId: 'choir-captain' }
    ]
  },
  {
    id: 26,
    text: "The food is not ready and guests have arrived.",
    category: 'Chow',
    options: [
      { text: "Panic and start shouting in the kitchen.", personalityId: 'kitchen-hero' },
      { text: "Serve them drinks and Malt.", personalityId: 'cheerful-giver' },
      { text: "Tell them to pray while waiting.", personalityId: 'prayer-warrior' },
      { text: "Go and buy take-out.", personalityId: 'ijgb' }
    ]
  },
  {
    id: 27,
    text: "You find a sewing kit in the Danish Cookies container.",
    category: 'Chow',
    options: [
      { text: "My disappointment is immeasurable.", personalityId: 'jollof-inspector' },
      { text: "I knew it. It's standard.", personalityId: 'peaceful-observer' },
      { text: "Post it: 'Why do mothers do this?'", personalityId: 'whatsapp-evangelist' },
      { text: "Use the needle to mend my cloth.", personalityId: 'kitchen-hero' }
    ]
  },
  {
    id: 28,
    text: "Salad: Cream or No Cream?",
    category: 'Chow',
    options: [
      { text: "Cream! Flood it!", personalityId: 'jollof-inspector' },
      { text: "No cream, I'm watching my weight.", personalityId: 'ijgb' },
      { text: "A little bit/Moderate.", personalityId: 'peaceful-observer' },
      { text: "I don't eat salad, give me swallow.", personalityId: 'cheerful-giver' }
    ]
  },
  {
    id: 29,
    text: "Drink of choice?",
    category: 'Chow',
    options: [
      { text: "Malt. Classic.", personalityId: 'kitchen-hero' },
      { text: "Champagne/Wine.", personalityId: 'cheerful-giver' },
      { text: "Zobo.", personalityId: 'peaceful-observer' },
      { text: "Water. Good for the voice.", personalityId: 'choir-captain' }
    ]
  },
  {
    id: 30,
    text: "Taking food home in takeaway packs.",
    category: 'Chow',
    options: [
      { text: "I brought my own cooler sef.", personalityId: 'jollof-inspector' },
      { text: "It's tacky, I don't do that.", personalityId: 'ijgb' },
      { text: "Pack for me and my siblings.", personalityId: 'cheerful-giver' },
      { text: "No, I'm full.", personalityId: 'prayer-warrior' }
    ]
  },
  {
    id: 31,
    text: "Best time to eat Christmas rice?",
    category: 'Chow',
    options: [
      { text: "Breakfast, Lunch, and Dinner.", personalityId: 'jollof-inspector' },
      { text: "After church service.", personalityId: 'choir-captain' },
      { text: "When guests leave.", personalityId: 'kitchen-hero' },
      { text: "Anytime hunger comes.", personalityId: 'peaceful-observer' }
    ]
  }
];
