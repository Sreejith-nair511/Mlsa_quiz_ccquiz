export interface Question {
  id: number
  text: string
  options: {
    id: string
    text: string
  }[]
  correctOptionId: string
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Why is content creation a major skill in 2025?",
    options: [
      { id: "A", text: "It replaces college degrees" },
      { id: "B", text: "It boosts memory power" },
      { id: "C", text: "It impacts hiring, branding & collaborations" },
      { id: "D", text: "It's just a trend" },
    ],
    correctOptionId: "C",
  },
  {
    id: 2,
    text: "Which of these is not a core platform for short-form content?",
    options: [
      { id: "A", text: "Instagram" },
      { id: "B", text: "YouTube Shorts" },
      { id: "C", text: "Canva" },
      { id: "D", text: "TikTok" },
    ],
    correctOptionId: "C",
  },
  {
    id: 3,
    text: "What emotional reaction increases engagement fastest?",
    options: [
      { id: "A", text: "Fear" },
      { id: "B", text: "Humor" },
      { id: "C", text: "Anger" },
      { id: "D", text: "Silence" },
    ],
    correctOptionId: "B",
  },
  {
    id: 4,
    text: "A niche means:",
    options: [
      { id: "A", text: "Posting whatever's trending" },
      { id: "B", text: "A focused topic with consistent value" },
      { id: "C", text: "A place to store drafts" },
      { id: "D", text: "Any viral content" },
    ],
    correctOptionId: "B",
  },
  {
    id: 5,
    text: "Niche content is powerful because it:",
    options: [
      { id: "A", text: "Reduces post time" },
      { id: "B", text: "Limits followers" },
      { id: "C", text: "Builds trust with the right audience" },
      { id: "D", text: "Stops growth" },
    ],
    correctOptionId: "C",
  },
  {
    id: 6,
    text: "Why do creators use ✨content buckets✨?",
    options: [
      { id: "A", text: "To collect ideas from others" },
      { id: "B", text: "To batch-edit videos" },
      { id: "C", text: "To schedule camera time" },
      { id: "D", text: "To organize content types for planning" },
    ],
    correctOptionId: "D",
  },
  {
    id: 7,
    text: "A hook in content helps with:",
    options: [
      { id: "A", text: "Background music" },
      { id: "B", text: "Keeping attention" },
      { id: "C", text: "Hashtag growth" },
      { id: "D", text: "Export quality" },
    ],
    correctOptionId: "B",
  },
  {
    id: 8,
    text: "Pick the best example of a CTA 👇",
    options: [
      { id: "A", text: '"Maybe save this?"' },
      { id: "B", text: '"Have a nice scroll!"' },
      { id: "C", text: '"Share this with someone who needs it."' },
      { id: "D", text: '"Just post it again."' },
    ],
    correctOptionId: "C",
  },
  {
    id: 9,
    text: "Which platform fits professional storytelling best?",
    options: [
      { id: "A", text: "TikTok" },
      { id: "B", text: "LinkedIn" },
      { id: "C", text: "Snapchat" },
      { id: "D", text: "Pinterest" },
    ],
    correctOptionId: "B",
  },
  {
    id: 10,
    text: "Posting the same format across all apps is bad because:",
    options: [
      { id: "A", text: "Platforms ban it" },
      { id: "B", text: "Viewers ignore it" },
      { id: "C", text: "Each platform needs tailored formats" },
      { id: "D", text: "It reduces memory" },
    ],
    correctOptionId: "C",
  },
  {
    id: 11,
    text: "What does the YouTube algorithm reward most?",
    options: [
      { id: "A", text: "Bright colors" },
      { id: "B", text: "Upload time" },
      { id: "C", text: "Comments only" },
      { id: "D", text: "High watch time" },
    ],
    correctOptionId: "D",
  },
  {
    id: 12,
    text: "What does it mean to repurpose content?",
    options: [
      { id: "A", text: "Rewrite for blogs" },
      { id: "B", text: "Turn one idea into multiple formats" },
      { id: "C", text: "Delete old posts" },
      { id: "D", text: "Just repost daily" },
    ],
    correctOptionId: "B",
  },
  {
    id: 13,
    text: "You made a blog—now what?",
    options: [
      { id: "A", text: "Post it once and done" },
      { id: "B", text: "Share it only on Facebook" },
      { id: "C", text: "Convert to carousels, shorts & reels" },
      { id: "D", text: "Email it to yourself" },
    ],
    correctOptionId: "C",
  },
  {
    id: 14,
    text: "Truth about monetizing with a small audience?",
    options: [
      { id: "A", text: "It's not possible" },
      { id: "B", text: "You must go viral" },
      { id: "C", text: "Only works with 100K+ followers" },
      { id: "D", text: "Value matters more than follower count" },
    ],
    correctOptionId: "D",
  },
  {
    id: 15,
    text: "Which tool helps with weekly content planning?",
    options: [
      { id: "A", text: "Lightroom" },
      { id: "B", text: "Figma" },
      { id: "C", text: "Trello / Notion" },
      { id: "D", text: "CapCut" },
    ],
    correctOptionId: "C",
  },
]
