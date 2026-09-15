/* ============================================================
   ReviewBridge — default question set
   Shared by index.html (onboarding/customize UI) and r.html
   (customer-facing review generator).

   Each single-select option carries:
     key       - internal id used in answers/config
     label     - shown as a button on the form
     sentiment - 1 (negative) to 5 (positive), used to pick the
                 tone of the opening line
     sentences - pool of phrasings randomly sampled so reviews
                 don't all read the same

   Multi-select ("chips") options only need label + sentences.
   ============================================================ */

const RATING_BANK = {
  5: [
    "I had an absolutely wonderful time at {BIZ} and can't wait to go back.",
    "{BIZ} completely won me over from start to finish.",
    "Honestly one of the best experiences I've had at a place like this in a while — {BIZ} nailed it.",
    "I walked into {BIZ} not expecting much and left genuinely impressed.",
    "Five stars, no question — {BIZ} exceeded every expectation I had.",
    "What a fantastic visit to {BIZ}, everything about it just worked.",
    "I've already told a few friends about {BIZ} because it was that good.",
    "{BIZ} is now firmly on my list of favorite spots.",
    "Everything about my visit to {BIZ} felt effortless and enjoyable.",
    "I can't say enough good things about my experience at {BIZ}."
  ],
  4: [
    "I had a really solid visit to {BIZ} and would happily return.",
    "{BIZ} delivered a genuinely good experience overall.",
    "My time at {BIZ} was great, with just a couple of minor things that could be even better.",
    "Overall I left {BIZ} feeling pretty happy with the visit.",
    "{BIZ} is a place I'd recommend without much hesitation.",
    "I enjoyed my visit to {BIZ} and would go back again.",
    "A strong experience at {BIZ} — nothing major to complain about.",
    "{BIZ} impressed me more than I expected.",
    "I came away from {BIZ} with a good impression.",
    "My visit to {BIZ} was a pleasant one, all things considered."
  ],
  3: [
    "My visit to {BIZ} was fine — some good moments, some so-so ones.",
    "{BIZ} was decent overall, nothing that really stood out either way.",
    "I had an average experience at {BIZ}, neither great nor bad.",
    "{BIZ} is okay — worth a visit if you're in the area.",
    "It was a middle-of-the-road experience at {BIZ} for me.",
    "Nothing about {BIZ} blew me away, but nothing turned me off either.",
    "My time at {BIZ} was reasonably enjoyable, just not memorable.",
    "{BIZ} gets the job done, even if it didn't wow me.",
    "I'd call my experience at {BIZ} a mixed bag.",
    "{BIZ} was fine for what it is."
  ],
  2: [
    "My visit to {BIZ} left something to be desired.",
    "I had a below-average experience at {BIZ}, unfortunately.",
    "{BIZ} didn't quite meet my expectations this time.",
    "There were a few too many issues during my visit to {BIZ}.",
    "I probably wouldn't rush back to {BIZ} after this visit.",
    "My experience at {BIZ} was disappointing overall.",
    "{BIZ} has some things to work on based on my visit.",
    "I left {BIZ} feeling a bit let down.",
    "Unfortunately my time at {BIZ} wasn't what I'd hoped for.",
    "{BIZ} fell short for me on this visit."
  ],
  1: [
    "I had a genuinely disappointing experience at {BIZ}.",
    "My visit to {BIZ} was pretty rough, unfortunately.",
    "I wouldn't recommend {BIZ} based on my experience.",
    "{BIZ} really missed the mark for me.",
    "I regret choosing {BIZ} for this visit.",
    "My time at {BIZ} was frustrating from start to finish.",
    "{BIZ} has a lot of room for improvement.",
    "I won't be returning to {BIZ} after this visit.",
    "This was one of my more disappointing visits at {BIZ}.",
    "{BIZ} did not deliver a good experience for me."
  ]
};

const DEFAULT_QUESTIONS = [
  {
    id: "food", type: "single", question: "How was the food or drinks?",
    options: [
      { key: "outstanding", label: "Outstanding — exceeded expectations", sentiment: 5, sentences: [
        "The food and drinks were outstanding — every bite exceeded what I expected.",
        "What we ordered was fantastic, easily some of the best I've had recently.",
        "The menu items we tried were incredible, full of flavor and beautifully prepared.",
        "Everything we ordered was delicious, I'd order it all again in a heartbeat.",
        "The food was a real highlight — fresh, flavorful, and thoughtfully put together.",
        "I was genuinely impressed by the quality of the food and drinks.",
        "Every dish that came out was excellent, no notes.",
        "The food alone is worth the visit — truly outstanding.",
        "Whatever they're doing in the kitchen, it's working — everything was excellent.",
        "The drinks and food both went above and beyond what I expected."
      ]},
      { key: "good", label: "Really good — would order again", sentiment: 4, sentences: [
        "The food and drinks were really good, and I'd order them again.",
        "What we had was tasty and well made overall.",
        "The menu items we tried were solid, nothing to complain about.",
        "The food was good — flavorful and satisfying.",
        "We enjoyed what we ordered and would happily get it again.",
        "The drinks and food were both well done.",
        "Everything we tried tasted good and was prepared nicely.",
        "The food hit the spot — good quality throughout.",
        "I'd say the food was a strong point of the visit.",
        "What we ordered was consistently good."
      ]},
      { key: "decent", label: "Decent — a few things could improve", sentiment: 3, sentences: [
        "The food was decent, though a couple of things could use some polish.",
        "What we had was fine — some dishes better than others.",
        "The food was okay overall, with room for a bit of improvement.",
        "Nothing wrong with the food, just nothing that stood out either.",
        "The food and drinks were acceptable, if a little unremarkable.",
        "A few things we ordered were good, a few were just average.",
        "The food was decent enough, though not particularly memorable.",
        "It was an okay meal, could be more consistent.",
        "The food was fine, though a couple of dishes missed the mark slightly.",
        "Overall the food was passable, with some hits and some misses."
      ]},
      { key: "disappointing", label: "Disappointing — not what I hoped for", sentiment: 1, sentences: [
        "Unfortunately the food didn't live up to expectations.",
        "The food and drinks were disappointing overall.",
        "What we ordered wasn't quite what we hoped for.",
        "The food fell short for us this time.",
        "A few dishes we tried were underwhelming.",
        "The food quality wasn't where I'd hoped it would be.",
        "We were let down by the food on this visit.",
        "The food didn't match what I was expecting going in.",
        "Sadly the food and drinks weren't a highlight of the visit.",
        "The food left a bit to be desired."
      ]}
    ]
  },
  {
    id: "service", type: "single", question: "How was the service?",
    options: [
      { key: "warm", label: "Warm and attentive throughout", sentiment: 5, sentences: [
        "The staff were warm and attentive the entire time we were there.",
        "Service was excellent — the team clearly cared about our experience.",
        "Everyone who helped us was genuinely warm and attentive.",
        "The staff went out of their way to make sure we were taken care of.",
        "Service was top notch from the moment we walked in.",
        "The team was incredibly attentive without being overbearing.",
        "We felt well looked after by the staff throughout the visit.",
        "The service was thoughtful and consistently attentive.",
        "Staff checked in on us just the right amount — warm and present.",
        "The level of care from the staff really stood out."
      ]},
      { key: "friendly", label: "Friendly and helpful", sentiment: 4, sentences: [
        "The staff were friendly and helpful throughout our visit.",
        "Service was good — everyone we interacted with was pleasant.",
        "The team was friendly and made us feel welcome.",
        "Staff were helpful whenever we needed anything.",
        "Service was friendly and efficient.",
        "Everyone on staff came across as genuinely nice.",
        "The people working there were kind and accommodating.",
        "Staff were easy to flag down and quick to help.",
        "We had friendly interactions with the team the whole time.",
        "Service was pleasant, no complaints there."
      ]},
      { key: "fine", label: "Fine, nothing special", sentiment: 3, sentences: [
        "Service was fine, nothing particularly memorable either way.",
        "The staff did their job, nothing more, nothing less.",
        "Service was okay — got what we needed, no real interaction beyond that.",
        "Staff were polite but the service felt a bit routine.",
        "Service was adequate for what we needed.",
        "Nothing stood out about the service, good or bad.",
        "The team handled things fine, just without much warmth.",
        "Service was functional, if a bit impersonal.",
        "We were served fine, just nothing special about it.",
        "Service got the job done."
      ]},
      { key: "slow", label: "Slow or inattentive", sentiment: 1, sentences: [
        "Service was slow, and we had to wait longer than expected.",
        "The staff seemed a bit inattentive during our visit.",
        "We had trouble getting someone's attention when we needed something.",
        "Service was a weak point of the visit for us.",
        "It took a while to get seated and served.",
        "Staff seemed stretched thin and it showed in the service.",
        "We waited quite a bit longer than we should have.",
        "Service could have been faster and more attentive.",
        "The pace of service was frustratingly slow at times.",
        "We felt a bit overlooked by the staff during our visit."
      ]}
    ]
  },
  {
    id: "ambience", type: "single", question: "How would you describe the atmosphere?",
    options: [
      { key: "cosy", label: "Cosy and inviting", sentiment: 4, sentences: [
        "The atmosphere was cosy and inviting, perfect for settling in.",
        "It has a really warm, welcoming vibe.",
        "The space felt comfortable and relaxed, the kind of place you want to linger.",
        "The atmosphere was inviting from the moment we walked in.",
        "It's got a cosy feel that makes you want to stay a while.",
        "The vibe was warm and comfortable throughout.",
        "The space felt intimate and well put together.",
        "It has a homey, welcoming atmosphere.",
        "The setting was cosy without feeling cramped.",
        "The overall vibe was relaxed and comfortable."
      ]},
      { key: "lively", label: "Lively and buzzing", sentiment: 4, sentences: [
        "The atmosphere was lively and full of energy.",
        "There's a great buzz to the place, lots of energy.",
        "The vibe was upbeat and lively the whole time we were there.",
        "It had a fun, energetic atmosphere.",
        "The place was buzzing, which added to the experience.",
        "There's a nice energy in the space, felt lively without being chaotic.",
        "The atmosphere had a great, energetic feel to it.",
        "It felt vibrant and full of life.",
        "The lively atmosphere made the visit even more enjoyable.",
        "There was a really good energy throughout the space."
      ]},
      { key: "quiet", label: "Quiet and relaxed", sentiment: 4, sentences: [
        "The atmosphere was quiet and relaxed, great for conversation.",
        "It's a calm space, easy to unwind in.",
        "The vibe was peaceful and low-key.",
        "It had a nice, quiet atmosphere that I appreciated.",
        "The space felt calm and relaxing.",
        "It was quiet enough to actually hear each other talk.",
        "The atmosphere was mellow and unhurried.",
        "It felt like a peaceful spot to sit and relax.",
        "The quiet setting made for an easy, relaxed visit.",
        "It had a soothing, low-key atmosphere."
      ]},
      { key: "noisy", label: "A bit noisy or cramped", sentiment: 2, sentences: [
        "The atmosphere was a bit noisy and cramped for my liking.",
        "It felt a little crowded and loud during our visit.",
        "The noise level made it hard to have a conversation at times.",
        "The space felt a bit tight, especially when busy.",
        "It got pretty loud, which took away from the experience a little.",
        "The seating felt a bit cramped for the number of people there.",
        "It was noisier than I expected.",
        "The atmosphere could use a bit more breathing room.",
        "It felt a little chaotic during the busier moments.",
        "The noise and crowding were a minor downside."
      ]}
    ]
  },
  {
    id: "highlights", type: "multi", max: 2, question: "What stood out? Pick all that apply.",
    options: [
      { key: "Coffee", label: "Coffee", sentences: ["The coffee was a real standout.","I really enjoyed the coffee here.","The coffee alone is worth coming back for.","Their coffee was excellent.","I loved the coffee.","The coffee was some of the best I've had recently."]},
      { key: "Breakfast", label: "Breakfast", sentences: ["Breakfast was a highlight of the visit.","The breakfast menu was great.","I really enjoyed what I had for breakfast.","Breakfast here is definitely worth it.","The breakfast options were excellent.","I'd come back just for breakfast."]},
      { key: "Lunch", label: "Lunch", sentences: ["Lunch was really good.","The lunch menu didn't disappoint.","I enjoyed what I had for lunch.","Lunch was a highlight for me.","The lunch options were great.","I'd happily go back for lunch again."]},
      { key: "Pastries & bakes", label: "Pastries & bakes", sentences: ["The pastries were fantastic.","Their baked goods were a real treat.","I loved the pastries.","The bakes here are excellent.","The pastry selection was great.","I couldn't stop thinking about the pastries after."]},
      { key: "Vegetarian options", label: "Vegetarian options", sentences: ["The vegetarian options were great.","I appreciated the range of vegetarian choices.","There were plenty of good vegetarian options.","The vegetarian dishes were well thought out.","Vegetarian options here are solid.","I was glad to see so many vegetarian choices on the menu."]},
      { key: "Great value", label: "Great value", sentences: ["It's great value for what you get.","Prices felt very fair for the quality.","I thought it was reasonably priced.","Good value overall.","You definitely get your money's worth.","The pricing felt fair for what we got."]},
      { key: "Pet-friendly", label: "Pet-friendly", sentences: ["It's great that they're pet-friendly.","I appreciated being able to bring my dog along.","Being pet-friendly is a nice bonus.","It's a good spot if you're bringing a pet.","Loved that they welcome pets.","Nice to see a pet-friendly space done well."]},
      { key: "Outdoor seating", label: "Outdoor seating", sentences: ["The outdoor seating was a nice touch.","I enjoyed sitting outside.","The outdoor area was lovely.","Great outdoor seating option.","The patio/outdoor space was a nice bonus.","Sitting outside made the visit even better."]},
      { key: "Fast service", label: "Fast service", sentences: ["Service was quick, which I appreciated.","Things moved fast, no long waits.","I was in and out quickly, which was great.","Service was efficient.","Didn't have to wait long at all.","Quick service was a nice plus."]},
      { key: "Worth the wait", label: "Worth the wait", sentences: ["It was worth the wait.","Even with a bit of a wait, it was worth it.","Despite the line, it didn't disappoint.","Worth waiting around for.","The wait was justified.","It lived up to the hype after the wait."]}
    ]
  },
  {
    id: "recommend", type: "single", question: "Would you recommend this place to a friend?",
    options: [
      { key: "absolutely", label: "Absolutely — I already have", sentiment: 5, sentences: [
        "I'd absolutely recommend {BIZ} — I've already told friends about it.",
        "I've already recommended {BIZ} to people I know.",
        "Without a doubt, I'd send friends and family to {BIZ}.",
        "I'm already planning who to bring next time I visit {BIZ}.",
        "{BIZ} is definitely getting a recommendation from me.",
        "I'd tell anyone looking for a place like this to check out {BIZ}.",
        "No hesitation recommending {BIZ} to others.",
        "I've been raving about {BIZ} since my visit.",
        "This is one of those places I genuinely can't stop recommending.",
        "{BIZ} earned a spot on my go-to recommendations list."
      ]},
      { key: "yes", label: "Yes, for sure", sentiment: 4, sentences: [
        "I'd recommend {BIZ} to friends looking for a place like this.",
        "Yes, I'd definitely suggest giving {BIZ} a try.",
        "I'd happily point people toward {BIZ}.",
        "{BIZ} is worth checking out, in my opinion.",
        "I'd recommend {BIZ}, for sure.",
        "This is a place I'd suggest to others.",
        "I'll be recommending {BIZ} going forward.",
        "{BIZ} is a solid recommendation from me.",
        "I'd point friends toward {BIZ} without much hesitation.",
        "I think {BIZ} is worth a visit."
      ]},
      { key: "maybe", label: "Maybe, with a caveat or two", sentiment: 2, sentences: [
        "I'd recommend {BIZ} with a couple of caveats.",
        "It depends what you're looking for, but {BIZ} could be worth a try.",
        "I might recommend {BIZ}, though I'd mention a few things to expect.",
        "{BIZ} could work for some people, just not a full-hearted recommendation from me.",
        "I'd suggest {BIZ} with some reservations.",
        "It's a maybe from me — {BIZ} has its ups and downs.",
        "I'd recommend {BIZ} cautiously.",
        "Depending on what you value, {BIZ} might be a fit.",
        "I'd give {BIZ} a conditional recommendation.",
        "{BIZ} is worth trying, just go in with tempered expectations."
      ]},
      { key: "no", label: "Probably not", sentiment: 1, sentences: [
        "I probably wouldn't recommend {BIZ} based on my visit.",
        "I don't think I'd point friends toward {BIZ} right now.",
        "This wasn't a visit I'd recommend repeating.",
        "I'm not sure I'd suggest {BIZ} to others at this point.",
        "I'd hold off recommending {BIZ} for now.",
        "I probably wouldn't send people to {BIZ} after this experience.",
        "This isn't a place I'd put on my recommendation list.",
        "I'd think twice before recommending {BIZ}.",
        "Based on my visit, I can't really recommend {BIZ}.",
        "I'm hesitant to recommend {BIZ} right now."
      ]}
    ]
  }
];
