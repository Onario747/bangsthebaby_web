const NavBar = () => {
  return (
    <header className="max-container padding-x flexCenter pt-4">
      <nav className="flex flex-col items-center">
        <span className="font-robotoCondensed text-[4rem] font-bold">
          B.T.B
        </span>
        <div className="flex gap-4 font-montserrat tracking-wider border border-[#5B5C62] rounded-full p-3">
          <a href="/">Featured</a>
          <a href="/">Releases</a>
          <a href="/">Catalogue</a>
          <a href="/">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
