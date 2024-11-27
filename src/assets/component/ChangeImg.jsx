import { useState } from "react";

const data = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./glassesImage/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./glassesImage/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./glassesImage/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./glassesImage/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./glassesImage/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./glassesImage/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./glassesImage/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./glassesImage/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

const ChangeImg = () => {
  const [item, setItem] = useState({
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  });

  const changeGlasses = (item) => {
    setItem(item);
  };

  const renderGlasses = data.map((item) => {
    return (
      <div
        onClick={() => {
          changeGlasses(item);
        }}
        className="border border-gray-500 p-4"
      >
        <img className="w-[84px]" key={item.id} src={item.url} alt="glasses" />
      </div>
    );
  });

  return (
    <div className="bg__img w-full h-[100dvh] object-cover grid place-items-center">
      <div className="w-[70%] h-[80%] mx-auto my-auto">
        <div className="relative w-full flex justify-center items-center ">
          {/* Hình ảnh model */}
          <img
            src="/glassesImage/model.jpg"
            alt="Model"
            className=" w-[300px] h-auto"
          />

          {/* Hình ảnh kính */}
          <img
            src={item.url}
            alt="Glasses"
            className="absolute top-[35%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[130px]"
          />

          <div className="w-[300px] p-2 absolute h-28 bottom-0 bg-orange-400/35">
            <h2 className="text-blue-500 text-2xl font-semibold">
              {item.name}
            </h2>
            <p className="text-white break-words text-sm">{item.desc}</p>
          </div>
        </div>

        <div className=" border border-gray-500 bg-white p-4 flex flex-wrap gap-8 mt-10">
          {renderGlasses}
        </div>
      </div>
    </div>
  );
};

export default ChangeImg;
