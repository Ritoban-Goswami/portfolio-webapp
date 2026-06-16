export interface ProjectDetails {
  title: string;
  description: string;
  tags: string[];
  challenges: string;
  solution: string;
  sourceUrl?: string;
  demoUrl?: string;
}

export const projectData: Record<string, ProjectDetails> = {
  boardly: {
    title: "Boardly",
    description:
      "A collaborative whiteboarding tool built with React and WebSockets. Enables real-time drawing, note-taking, and remote team collaboration with sub-50ms latency sync.",
    tags: ["React", "Node.js", "Socket.io", "Canvas API"],
    challenges:
      "Synchronizing drawing state across multiple clients with minimal latency while handling network jitter and maintaining a unified event log for undo/redo functionality.",
    solution:
      "Implemented a custom operational transformation (OT) algorithm over WebSockets, decoupling local optimistic updates from server reconciliation.",
    sourceUrl: "https://github.com/Ritoban-Goswami/boardly",
    demoUrl: "https://boardlyv1.vercel.app/",
  },
  quantize: {
    title: "quantize-colors",
    description:
      "An open-source library for extracting dominant colors from images using K-Means clustering. Highly optimized for browser environments with Web Workers.",
    tags: ["TypeScript", "Algorithms", "Web Workers", "Open Source"],
    challenges:
      "Performing complex matrix operations and clustering algorithms on large image data sets without blocking the main UI thread in the browser.",
    solution:
      "Offloaded heavy computations to Web Workers and utilized TypedArrays for efficient memory access and transfer between the main thread and workers.",
    sourceUrl: "https://github.com/Ritoban-Goswami/quantize-colors",
    demoUrl: "https://www.npmjs.com/package/quantize-colors",
  },
};
