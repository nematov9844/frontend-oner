/** @format */

import React, { useState } from "react";
import { Layout, Menu } from "antd";
import AppHeader from "./components/header";
import Hero from "./components/hero";
import Catagory from "./components/catagory";
import Cards from "./components/cards";
import useAxios from "./hooks/getAxios";

const catogoryData = [
  {
    id:1,
    title: "Оригинальные запчасти",
    desc: "730 товаров",
  },
  {
    id:2,
    title: "Неоригинальные  запчасти",
    desc: "276 товаров",
  }
  ,
  {
    id:3,
    title: "Запчасти ВАЗ, ГАЗ, КАМАЗ",
    desc: "730 товаров"
  },
  {
    id:4,
    title: "Кузовные запчасти",
    desc: "730 товаров"
  },
  {
    id:5,
    title: "Запчасти для ТО",
    desc: "730 товаров"
  },
  {
    id:6,
    title: "Автостёкла",
    desc: "730 товаров"
  },
  {
    id:7,
    title: "Автомасла",
    desc: "730 товаров"

  },
  {
    id:8,
    title: "Автохимия",
    desc: "730 товаров"

  },
  {
    id:9,
    title: "Диски",
    desc: "730 товаров"
  },
  {
    id:10,
    title: "Аккумуляторы",
    desc: "730 товаров"
  },
  {
    id:11,
    title: "Автолампы",
    desc: "730 товаров"
  },
  {
    id:12,
    title: "Диски",
    desc: "730 товаров"
  }
]




const { Header, Content, Footer } = Layout;
const App = () => {
	const [currentPage, setCurrentPage] = useState("home");
const { data, loading, error } = useAxios("recomemded")
console.log(data);

	const renderContent = () => {
		switch (currentPage) {
			case "home":
				return <h1>Home Page Content</h1>;
			case "about":
				return <h1>About Page Content</h1>;
			case "contact":
				return <h1>Contact Page Content</h1>;
			default:
				return <h1>404 - Page Not Found</h1>;
		}
	};


	return (
		<Layout className='min-h-screen flex flex-col gap-4 w-[90] max-w-[1440px] mx-auto'>
			<AppHeader />
			<Content style={{ padding: "20px", background: "#fff" }}>
				<Hero />
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-2  lg:grid-cols-3 gap-4 ">
          {
            catogoryData.map(item => <Catagory key={item.id} title={item.title} desc={item.desc}/>)
          }
        </div>
        <div>
          <Cards data={data} title={"Автомасла"} desc={"Все автомасла"}/>
          <Cards data={data} title={"Автомасла"} desc={"Все автомасла"}/>
          <Cards data={data} title={"Автомасла"} desc={"Все автомасла"}/>
          <Cards data={data} title={"Автомасла"} desc={"Все автомасла"}/>
        </div>
			</Content>
			<Footer style={{ textAlign: "center" }}>
				Ant Design Layout Example ©2024 Created by ME NR_style
			</Footer>
		</Layout>
	);
};

export default App;
