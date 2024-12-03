import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import React, { useContext } from "react";
import { ItemsContext } from "../context/items";
import AppHeader from "../components/header";

export default function Korzinka() {
  const { state, dispatch } = useContext(ItemsContext);
  const data = state.data;

  // Like tugmasi uchun
  const toggleLike = (id) => {
    dispatch({
      type: "toggleLike",
      payload: id,
    });
  };

  // Mahsulot sonini oshirish
  const incrementCount = (id) => {
    dispatch({
      type: "add",
      value: { id }, // Shu mahsulotni aniqlash uchun
    });
  };

  // Mahsulot sonini kamaytirish
  const decrementCount = (id) => {
    dispatch({
      type: "decrement",
      payload: id, // Shu mahsulotni aniqlash uchun
    });
  };

  // Umumiy narxni hisoblash
  const totalPrice = data.reduce(
    (total, item) => total + item.price_current * item.count,
    0
  );

  return (
    <div className="flex flex-col gap-4 mt-5 justify-center">
    <AppHeader/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {data?.map((item) => (
          <div
            key={item.id}
            className="max-w-xs rounded-lg border border-gray-200 bg-white p-4 shadow-md"
          >
            <div className="relative">
              <div
                className="text-2xl absolute top-2 right-4 cursor-pointer"
                onClick={() => toggleLike(item.id)}
              >
                {item.isLike ? (
                  <HeartFilled style={{ color: "red" }} />
                ) : (
                  <HeartOutlined />
                )}
              </div>
              <img
                src={item.imagie}
                alt="Product Image"
                className="w-full h-48 rounded-lg"
              />
            </div>
            <div className="mt-4">
              <h2 className="mt-2 text-gray-800 text-lg font-semibold">
                {item.name}
              </h2>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xl font-bold">{item.price_current} ₽</span>
                <span className="text-sm text-gray-500 line-through">
                  {item.price_old} ₽
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decrementCount(item.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded"
                  >
                    -
                  </button>
                  <span className="text-lg">{item.count}</span>
                  <button
                    onClick={() => incrementCount(item.id)}
                    className="px-2 py-1 bg-green-500 text-white rounded"
                  >
                    +
                  </button>
                  <span className="font-bold text-green-500">{item.count * item.price_current} ₽</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-5 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-bold">Umumiy narx:</h2>
        <span className="text-2xl font-bold">{totalPrice} ₽</span>
      </div>
    </div>
  );
}
