import React, { useState } from "react";
import { MenuOutlined, ShoppingCartOutlined, UserOutlined, PhoneOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { Link } from "react-router-dom";

const AppHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const categories = [
    "Все категории",
    "Запчасти для ТО",
    "Автомасла",
    "Оригинальные запчасти",
    "Неоригинальные запчасти",
    "Лампочки",
    "Аккумуляторы",
  ];

  return (
    <header className="bg-gray-100">
      {/* Top Section */}
      <div className="border-b border-gray-200 py-2 text-sm text-gray-500 flex justify-between items-center px-4 lg:px-10">
        <div className="flex items-center gap-2">
          <PhoneOutlined className="text-lg" />
          <span>г. Нижний Новгород, Нижегородская обл.</span>
        </div>
        <div>
          <PhoneOutlined className="text-lg" /> +7 (347) 229-46-45
        </div>
      </div>

      {/* Main Section */}
      <div className="py-4 flex flex-col lg:flex-row items-center justify-evenly gap-4 px-4 lg:px-10">
        {/* Logo */}
        <div className="flex items-center justify-between md:justify-normal w-full md:w-auto gap-2">
          <MenuOutlined
            className="text-2xl cursor-pointer lg:hidden"
            onClick={() => setDrawerOpen(true)}
          />
          <h1 className="text-2xl font-bold text-purple-600">Oner.ru</h1>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-lg w-full">
          <div className="flex border border-gray-300 rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Введите номер запчасти или VIN"
              className="flex-1 px-4 py-2 focus:outline-none"
            />
            <button className="bg-purple-600 text-white px-4 py-2">Искать</button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <Link to={"login"} className="flex items-center gap-2 text-gray-600">
            <UserOutlined />
            Вход / Регистрация
          </Link>
          <Link to={"/shop"} className="flex items-center gap-2 text-orange-500">
            <ShoppingCartOutlined />
            Корзина <span className="text-xs bg-orange-500 text-white rounded-full px-2 py-1 ml-1">5</span>
          </Link>
        </div>
      </div>

      {/* Categories */}
      <div className="hidden lg:flex justify-center items-center gap-4 px-4 lg:px-10 py-2">
        {categories.map((category, idx) => (
          <button
            key={idx}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-purple-600 hover:text-white"
          >
            {category}
          </button>
        ))}
      </div>

      <Drawer
        title="Меню"
        placement="left"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
      >
        <div className="flex flex-col gap-2">
          {categories.map((category, idx) => (
            <button
              key={idx}
              className="px-4 py-2 border-b text-left hover:bg-gray-100"
            >
              {category}
            </button>
          ))}
        </div>
      </Drawer>
    </header>
  );
};

export default AppHeader;
