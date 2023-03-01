import { useState } from "react";
//import ListProducts from "./ListProducts";

const Sidebar= () => {
  const [open, setOpen] = useState(true);
  const Menus = [
   
    { title: "You Product", src: "You Product" },
    { title: "Mail", src: "Mail", gap: true },
    { title: "Favorite ", src: "Favorite" },
    { title: "Sold", src: "Sold" },
    { title: "Stadistics", src: "Stadistics" },
    { title: "Wallet", src: "Wallet", gap: true },
    { title: "Settings", src: "Settings" },
  ];

  return (
    <div className="flex flex-col ">
      <div
        className={` ${
          open ? "w-60" : "w-20 "
        } bg-primary-100 h-screen p-3  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 bg-primary-100
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo-navbar.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          
        </div>
        <ul className="p-2">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-1 cursor-pointer hover:bg-white text-black-300 text-xl items-center gap-x-4
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-primary-100"
              } `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
};
export default Sidebar;