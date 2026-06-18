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
