export interface ProjectDetails {
  title: string;
  description: string;
  tags: string[];
  challenges: string;
  solution: string;
  sourceUrl?: string;
  demoUrl?: string;
  image?: string;
}

export const projectData: Record<string, ProjectDetails> = {
  boardly: {
    title: "Boardly",
    description:
      "A production-grade real-time collaborative Kanban board with multi-board support, drag-and-drop task management, role-based access control (Admin, Editor, Viewer), and in-app notifications. Built solo end-to-end.",
    tags: ["Next.js", "TypeScript", "Firebase", "Zustand", "Tailwind CSS"],
    challenges:
      "Synchronising task state across concurrent users in real time while maintaining a responsive, optimistic UI and enforcing role-based access rules without race conditions.",
    solution:
      "Implemented a dual real-time architecture using Firestore listeners for task synchronisation and Firebase Realtime Database for live presence indicators and typing status, with optimistic UI updates and Zustand for distributed state management.",
    sourceUrl: "https://github.com/Ritoban-Goswami/boardly",
    demoUrl: "https://boardlyv1.vercel.app/",
    image: "/boardly-preview.png",
  },
  quantize: {
    title: "quantize-colors",
    description:
      "An open-source npm library implementing three core algorithms — color quantization, dominant color extraction, and luminance-based palette generation — enabling dynamic theming and image compression for Node.js applications.",
    tags: ["JavaScript", "Node.js", "Canvas API", "Open Source"],
    challenges:
      "Designing a flexible, zero-dependency API surface that is accurate for color quantization, efficient in Node.js environments, and works correctly across varying image formats and sizes.",
    solution:
      "Implemented three distinct algorithms — median cut quantization, dominant color extraction, and luminance-based palette generation — exposed through a unified, tree-shakeable API with full TypeScript types.",
    sourceUrl: "https://github.com/Ritoban-Goswami/quantize-colors",
    demoUrl: "https://www.npmjs.com/package/quantize-colors",
    image: "/quantize-preview.png",
  },
  wordle: {
    title: "Word(le) Finder",
    description:
      "A web tool that helps Wordle players find word suggestions based on their guessed letters and feedback (green, yellow, grey). Includes meaning lookup for each suggestion and intentional wrong suggestions to preserve the game's challenge.",
    tags: [
      "Next.js",
      "Shadcn UI",
      "Tailwind CSS",
      "Dictionary API",
      "Datamuse API",
    ],
    challenges:
      "Accurately filtering word suggestions from the Datamuse API based on complex positional constraints (correct position, wrong position, absent) while keeping the UI intuitive for non-technical Wordle players.",
    solution:
      "Mapped green/yellow/grey feedback to Datamuse API query parameters for constrained word matching, then cross-referenced results with the Dictionary API to enrich suggestions with definitions in a single seamless flow.",
    sourceUrl: "https://github.com/Ritoban-Goswami/word.le-finder",
    demoUrl: "https://word-le-finder.vercel.app/",
    image: "/wordle-preview.gif",
  },
  pawshots: {
    title: "PawShots",
    description:
      "A sophisticated pet image gallery with bulk selection & ZIP download, real-time debounced search, advanced sorting, infinite scroll, and AI-powered color analysis using quantize-colors to group pets into 13 visual categories. Includes a favorites system, recent search history, and Web Share API integration.",
    tags: [
      "React 19",
      "TypeScript",
      "Styled Components",
      "React Router",
      "Vite",
      "Context API",
    ],
    challenges:
      "Coordinating multiple async concerns — data fetching, per-image color analysis, selection state across routes, and infinite scroll pagination — without blocking the UI or causing stale state between navigations.",
    solution:
      "Built a custom usePetData hook with explicit loading/error/empty states and a separate colorAnalysisLoading flag, used Context API for global selection and favorites, and cached color signatures in localStorage to avoid redundant quantize-colors processing on re-renders.",
    demoUrl: "https://pawshots.netlify.app",
    image: "/pawshots-preview.png",
  },
};
