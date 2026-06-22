export const navLinks = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
] as const;

export const footerNavLinks = [
  ...navLinks,
  { label: "Contact", href: "#contact", id: "contact" },
] as const;

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/Ritoban-Goswami" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ritoban-goswami" },
  { label: "Email", href: "mailto:dev.ritoban.goswami@gmail.com" },
] as const;
