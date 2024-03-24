function generateLoremIpsum(paragraphs, wordsPerParagraph) {
  const loremIpsumWords = [
    "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur",
    "adipiscing", "elit", "sed", "do", "eiusmod", "tempor",
    "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua"
  ];

  let loremIpsumText = "";
  for (let p = 0; p < paragraphs; p++) {
    for (let w = 0; w < wordsPerParagraph; w++) {
      const randomIndex = Math.floor(Math.random() * loremIpsumWords.length);
      loremIpsumText += loremIpsumWords[randomIndex] + " ";
    }
    loremIpsumText += "\n"; // Add two new lines between paragraphs
  }

  return loremIpsumText.trim();
}

export const items = [
  {
    name: "Prada",
    category: "חומרה",
    description:generateLoremIpsum(3, 4)
  },
  {
    name: "Gucci",
    category: "חומרה",
    description:generateLoremIpsum(3, 4)
  },
  {
    name: "Guess",
    category: "חומרה",
    description:generateLoremIpsum(3, 4)
  },
  {
    name: "Rolex",
    category: "Watches",
    description:generateLoremIpsum(3, 4)
  },
  {
    name: "Timex",
    category: "Watches",
    description:generateLoremIpsum(3, 4)
  },
  {
    name: "Nike",
    category: "Sports",
    description:generateLoremIpsum(3, 4)
  },
  {
    name: "Adidas",
    category: "Sports",
    description:generateLoremIpsum(3, 4)
  },
  {
    name: "Fila",
    category: "Sports",
    description:generateLoremIpsum(3, 4)
  },
  {
    name: "Ray Ban",
    category: "Sunglasses",
    description:generateLoremIpsum(3, 4)
  },
  {
    name: "Aldo",
    category: "Sunglasses",
    description:generateLoremIpsum(3, 4)
  },
  {
    name: "Polaroid",
    category: "Sunglasses",
    description:generateLoremIpsum(3, 4)
  }
];
