/** @format */

import React from "react";
import useAxios from "../hooks/getAxios";

export default function Hero() {
	const { data, loading, error } = useAxios("hero");

	return (

		<div className='bg-[url("https://raw.githubusercontent.com/nematov9844/backend-oner/refs/heads/main/imagies/hero.png")] w-full h-[400px] flex justify-start rounded-[20px] items-center bg-cover bg-center bg-no-repeat '>
			<div className='md:w-1/2 w-full  text-white flex justify-center flex-col px-10 z-20'>
				<h1  className=" leading-[40px] md:leading-[55px] md:text-4xl text-lg text-start font-bold ">Оригинальные автомасла cо скидкой <span className="bg-[#FB5C2A] rounded-md  px-3 py-1">15%</span>  </h1>
				<p className="text-lg font-normal text-start">Акция действует с 1 по 30 июня 2021</p>
			</div>
        </div>
	);
}
