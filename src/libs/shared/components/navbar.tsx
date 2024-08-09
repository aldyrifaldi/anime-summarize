import { ModeToggle } from './ui/mode-toggle';

export default function Navbar() {
  return (
    <nav className="flex p-5">
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-5">
          <div className="text-2xl font-bold">Chatbot</div>
          <div className="flex gap-5">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
              Home
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
              About
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
              Contact
            </a>
          </div>
        </div>
        <div className="flex gap-5">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
