import { ModeToggle } from "@/provider/mode-toggler";


export const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">MyApp</div>
        <div>
          <a href="/" className="text-gray-300 hover:text-white px-3 py-2">Home</a>
          <a href="/user" className="text-gray-300 hover:text-white px-3 py-2">Users</a>
          <a href="/user" className="text-gray-300 hover:text-white px-3 py-2">Tasks</a>
        </div>
        <div className="">
          <ModeToggle/>
        </div>
      </div>
    </nav>
  );
}