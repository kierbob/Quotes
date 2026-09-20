// ============================================================
//  quotes.js — the only file you need to touch to change quotes
// ============================================================
//
//  Each quote looks like this:
//
//    {
//      title: "The Example",
//      paragraphs: [
//        "First paragraph...",
//        "Second paragraph..."
//      ],
//      author: "Bob",
    date: "20 September 2026"
//    },
//
//  - Quotes appear on the page in the order they appear here.
//  - Every paragraph is one string inside the paragraphs list.
//  - Don't include quotation marks around the text; the page
//    handles the styling.
//  - Remember the comma after each closing }.
//  - Straight apostrophes (don't) are automatically turned into
//    curly ones (don’t) when displayed, so type them however you like.
//
// ============================================================

const QUOTES = [

  {
    title: "The Past",
    paragraphs: [
      "The past hurts so much more than the future, yet the past is what you are.",
      "The future is frightening because it isn't you yet."
    ],
    author: "Bob",
    date: "19 September 2026"
  },

  {
    title: "Love Is Like Rain",
    paragraphs: [
      "Love is like rain. We welcome it when we are dry, resent it when it overwhelms us, and miss it when the sky is clear."
    ],
    author: "Bob",
    date: "19 September 2026"
  },

  {
    title: "The Sword",
    paragraphs: [
      "I once wanted a sword because I thought it would be cool to own one. When I finally had it, I took it apart, painted over it, and changed almost everything about it. Eventually, I realised I was no longer trying to make the sword better; I was trying to make myself want it again.",
      "Perhaps we do this with more than swords. Sometimes we change what we have, hoping it will become what we imagined wanting."
    ],
    author: "Bob",
    date: "19 September 2026"
  },

  {
    title: "Disappearing for Someone",
    paragraphs: [
      "I changed myself so many times to keep someone I loved happy. I changed my sleep, stayed in when I wanted to go out, and played games I didn't enjoy simply because they made her happy.",
      "For a while, I thought that was what love meant: becoming whatever someone needed you to be.",
      "But eventually, I realised that in trying to keep someone else happy, I had forgotten how to keep myself happy.",
      "Perhaps love should not require you to disappear just to keep someone else comfortable."
    ],
    author: "Bob",
    date: "19 September 2026"
  },

  {
    title: "The Years We Rushed",
    paragraphs: [
      "When I was young, I wished the years would pass faster. I wanted to grow up, believing there was something waiting for me beyond childhood.",
      "Now I look back and realise how simple those years were, and how much happiness I had without knowing it.",
      "It is strange how we spend our childhood wishing to become adults, only to spend adulthood wishing we had stayed children a little longer.",
      "Perhaps growing up is not just gaining new things, but finally understanding the value of what we once had."
    ],
    author: "Bob",
    date: "19 September 2026"
  },

  {
    title: "The Smile in the Memory",
    paragraphs: [
      "Sometimes, while we are living through a moment, we only see what is wrong with it. We remember what we wanted to do but couldn't, what went wrong, and everything that made us uncomfortable.",
      "Then years later, we look back and see something we couldn't see at the time: our own face, smiling.",
      "Perhaps that's the strange thing about memories. Sometimes we appreciate moments most when we are no longer living them, because distance allows us to see the happiness that was hidden beneath all the things we thought were wrong."
    ],
    author: "Bob",
    date: "19 September 2026"
  },

  {
    title: "What Is Happiness?",
    paragraphs: [
      "Happiness isn't simply a feeling. It is something more.",
      "We rarely stop to ask why we are happy. Is it because things went our way? Because we found something we enjoyed? Because, for a moment, the world felt exactly as we wanted it to?",
      "Perhaps happiness is not one feeling at all, but the brief moment when what we have and what we want become the same thing."
    ],
    author: "Bob",
    date: "19 September 2026"
  },

  {
    title: "The Fear of Change",
    paragraphs: [
      "We fear change because we fear uncertainty. We know what we have, even when what we have isn't making us happy, but we cannot know what the future will bring.",
      "So we tell ourselves that everything is fine.",
      "Perhaps change frightens us not because we know it will be worse, but because we don't know if it will be better."
    ],
    author: "Bob",
    date: "19 September 2026"
  },

  {
    title: "What We Push Away",
    paragraphs: [
      "Sometimes we push away the things we want most because we don't believe we are ready for them.",
      "We tell ourselves we aren't worthy, that we aren't giving enough, or that perhaps there is something better waiting for us. Sometimes we are simply afraid of what we don't understand.",
      "Uncertainty has a strange way of making us question even the things that make us happy.",
      "Perhaps the hardest part is that we don't always know what we are pushing away until it is gone. Sometimes only then do we realise that what we thought wasn't right for us was exactly what we needed."
    ],
    author: "Bob",
    date: "19 September 2026"
  },

  {
    title: "The Shape of Change",
    paragraphs: [
      "People change for countless reasons. Sometimes we choose to change because we want something different. Sometimes life changes around us and leaves us with no choice but to change with it.",
      "We change for love, for loss, for opportunity, for ourselves, and sometimes simply because time keeps moving.",
      "Perhaps change was never meant to be understood as good or bad. It is simply the shape life takes when we can no longer remain the person we once were."
    ],
    author: "Bob",
    date: "19 September 2026"
  },

  {
    title: "Closure",
    paragraphs: [
      "Closure is not something someone else can give you.",
      "They can explain why they left, tell you everything is okay, or give you every answer you asked for. But there will always be a part of healing that belongs only to you.",
      "Sometimes closure is simply giving yourself enough time to look back without anger, to accept what happened, and to let yourself heal.",
      "Because if we never give ourselves the time to heal, we don't leave the past behind. We carry it with us."
    ],
    author: "Bob",
    date: "19 September 2026"
  },

  {
    title: "Alone Among People",
    paragraphs: [
      "Being alone is not always a frightening thing. Sometimes solitude is peaceful. Sometimes we choose it, and sometimes we even enjoy it.",
      "But there is another kind of loneliness: being surrounded by people and still feeling alone.",
      "You can sit among friends and feel forgotten. You can stand among family and feel unheard. You can be surrounded by people who care about you and still wonder if anyone truly sees you.",
      "Perhaps loneliness was never about how many people surround you, but about whether you feel seen by any of them."
    ],
    author: "Bob",
    date: "20 September 2026"
  },

  {
    title: "The Right Time",
    paragraphs: [
      "We spend so much of our lives waiting for the right time.",
      "We wait until we are ready, until life feels right, until the opportunity feels close enough to reach. But sometimes the moment we are waiting for never comes.",
      "Perhaps there is no perfect time. Sometimes you simply have to take the opportunity in front of you and find out where it leads.",
      "And if it wasn't right, then it wasn't right. At least you moved."
    ],
    author: "Bob",
    date: "20 September 2026"
  },

  {
    title: "Holding On",
    paragraphs: [
      "Sometimes we hold onto things we already know we cannot have back.",
      "Perhaps it is hope that keeps us holding on. Hope that a person will return, that a moment will come again, or that something lost might somehow find its way back to us.",
      "But sometimes I think we hold onto the past because letting go feels like losing a part of ourselves with it.",
      "Perhaps that is why we struggle to let go of things that are already gone. We aren't always holding onto them because we believe they will return. Sometimes we are holding onto them because we are afraid of who we might be without them."
    ],
    author: "Bob",
    date: "20 September 2026"
  },

  {
    title: "The Freedom to Imagine",
    paragraphs: [
      "Sometimes I think we are happiest when we know the least.",
      "Before something happens, we can imagine it being anything. A journey can become an adventure, a meeting can become a memory, and tomorrow can become whatever we want it to be.",
      "Then reality arrives, and suddenly our expectations have something to compare themselves against.",
      "Perhaps ignorance isn't always bliss. Perhaps sometimes it is simply the freedom to imagine."
    ],
    author: "Bob",
    date: "20 September 2026"
  },

  {
    title: "To My Younger Self",
    paragraphs: [
      "If I could go back and tell my younger self one thing, I would tell him not to fear.",
      "There were so many things I was afraid of that I never needed to be. Fear made moments seem bigger than they really were, turning possibilities into threats before they had even happened.",
      "Then, once they were over, I would look back and wonder:",
      "Why was I so scared?",
      "Perhaps that is the strange thing about fear. Before we face it, it can feel enormous. After we overcome it, we sometimes wonder why it ever had so much power over us."
    ],
    author: "Bob",
    date: "20 September 2026"
  },

  {
    title: "Being Understood",
    paragraphs: [
      "I think people appreciate being understood more than being loved.",
      "Love is one side of the story, but understanding is a whole different book.",
      "You can love someone with your whole heart and still never understand how they see the world, how they think, or what it feels like to live a day as them.",
      "Perhaps love brings people together, but understanding is what allows them to truly meet."
    ],
    author: "Bob",
    date: "20 September 2026"
  },

  {
    title: "The Feeling They Left Behind",
    paragraphs: [
      "I don't think the people we remember are always memorable because of what they did or what they said.",
      "What stays with us is how they made us feel. The laughter, the smiles, the comfort of being around them. Those moments become part of how we remember who they were.",
      "Years later, we might forget the conversations, the places, and even the things we did together.",
      "But we remember how they made us feel.",
      "Perhaps that is what makes someone truly memorable: not what they did, but the feeling they left behind."
    ],
    author: "Bob",
    date: "20 September 2026"
  }

  // To add a new quote, copy one of the blocks above, paste it HERE
  // (at the bottom), and change the text. Don't forget the comma
  // after the previous }. It will show up at the top of the page.

];
