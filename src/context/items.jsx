import React, { createContext, useReducer } from "react";

// Boshlang'ich holat
const initialState = {
    data: JSON.parse(localStorage.getItem("data")) || [], // LocalStorage'dan boshlang'ich ma'lumot
};

// Reducer funksiyasi
const reducer = (state, action) => {
    switch (action.type) {
        case "add":
            const existingItem = state.data.find((item) => item.id === action.value.id);

            let updatedData;
            if (existingItem) {
                updatedData = state.data.map((item) =>
                    item.id === action.value.id ? { ...item, count: item.count + 1 } : item
                );
            } else {
                updatedData = [...state.data, { ...action.value, count: 1, isLike: false }];
            }

            localStorage.setItem("data", JSON.stringify(updatedData)); // LocalStorage'da yangilash
            return { ...state, data: updatedData };

        case "remove":
            const filteredData = state.data.filter((item) => item.id !== action.payload);
            localStorage.setItem("data", JSON.stringify(filteredData)); // LocalStorage'da yangilash
            return { ...state, data: filteredData };

        case "toggleLike":
            const updatedData2 = state.data.map((item) =>
                item.id === action.payload ? { ...item, isLike: !item.isLike } : item
            );
            localStorage.setItem("data", JSON.stringify(updatedData2));
            return { ...state, data: updatedData2 };
            case "decrement":
                const decrementedData = state.data
                    .map((item) =>
                        item.id === action.payload
                            ? { ...item, count: item.count - 1 }
                            : item
                    )
                    .filter((item) => item.count > 0); // Agar count 0 bo‘lsa, mahsulotni o‘chiradi.
            
                localStorage.setItem("data", JSON.stringify(decrementedData));
                return { ...state, data: decrementedData };
            
        default:
            return state;
    }
};

// Context yaratish
export const ItemsContext = createContext();

// Context Provider
export const ItemsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    console.log("Hozirgi holat:", state.data);

    return (
        <ItemsContext.Provider value={{ state, dispatch }}>
            {children}
        </ItemsContext.Provider>
    );
};
