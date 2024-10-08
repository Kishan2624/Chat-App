function getRandomEmoji() {
  const emojiList = [
    "😀",
    "😂",
    "😎",
    "😍",
    "😛",
    "🤔",
    "🥳",
    "🤩",
    "😱",
    "🤯",
    "😇",
    "😜",
    "👻",
    "👽",
    "🤖",
    "👾",
    "🎉",
    "💥",
    "❤️",
    "🧡",
    "💛",
    "💚",
    "💙",
    "💜",
    "🦄",
    "🌈",
    "🌟",
    "🔥",
    "🍕",
    "🍔",
    "🍩",
    "⚽",
    "🏀",
    "🎸",
    "🚗",
    "✈️",
    "🚀",
    "🛸",
    "🐱",
    "🐶",
  ];
  const randomIndex = Math.floor(Math.random() * emojiList.length);
  return emojiList[randomIndex];
}

export default getRandomEmoji;
