interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { name: "Work", id: "home" },
  { name: "About", id: "resume" },
  { name: "Publications", id: "publications" },
  { name: "Contact", id: "conferences" }
];

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className="flex gap-8">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={`text-[15px] font-medium transition-all duration-200 ${
            currentPage === item.id
              ? "text-black"
              : "text-gray-400 hover:text-black"
          }`}
        >
          {item.name}
        </button>
      ))}
    </nav>
  );
}
