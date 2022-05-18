import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import moment from "moment";

function Menuside() {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);
  const [images, setImages] = useState([]);
  useEffect(() => {
    getItems();
  }, []);

  const getImages = async () => {
    const names = items.content.map((item) => {
      return item.name.split(" ")[1];
    });
    if (!names) return;
    let imagesFromLocalStorage = JSON.parse(localStorage.getItem("images"));
    if (imagesFromLocalStorage) {
      setImages(imagesFromLocalStorage);
      console.log(images);
      setLoader(false);
    } else {
      for (let i = 0; i < names.length; i++) {
        const api = await fetch(
          `https://bing-image-search1.p.rapidapi.com/images/search?q=${names[i]}`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com",
              "X-RapidAPI-Key":
                "4d3efa6d60mshe9647b4fc7ea6dbp1bf6dajsn7de302358e22",
            },
          }
        );
        const data = await api.json();
        let imageArray = [];
        imageArray.push({
          key: items.content[i].createdAt,
          url: data.value[0].thumbnailUrl,
        });
        console.log(imageArray);
        setImages(imageArray);
      }
      localStorage.setItem("images", JSON.stringify(images));
      setLoader(false);
    }
  };
  const getItems = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    const api = await fetch(
      "http://196.223.240.154:8099/supapp/api/menu-items?page=0&size=30",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    const data = await api.json();
    console.log(data);
    setItems(data);

    getImages();
  };
  const date = moment().format("dddd, MMMM Do YYYY");
  return (
    <div className="ml-72 w-10/12 flex flex-col items-center">
      <Navbar />
      <div className="rounded-xl w-10/12 bg-white flex flex-col items-center p-8 box-border h-auto">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start">
            <span className="text-3xl font-bold">Menu</span>
            <span className="text-xl text-gray-500">On {date}</span>
          </div>
          <div className="buttons ml-48">
            <button
              className="p-3 rounded-md border-4 m-3 menu-btn w-32"
              onMouseOver={(e) => {
                e.target.classList.add("focused-btn");
              }}
              onMouseLeave={(e) => {
                e.target.classList.remove("focused-btn");
              }}
            >
              Drinks
            </button>
            <button
              className="p-3 rounded-md border-4 m-3 menu-btn w-32"
              onMouseOver={(e) => {
                e.target.classList.add("focused-btn");
              }}
              onMouseLeave={(e) => {
                e.target.classList.remove("focused-btn");
              }}
            >
              Starter
            </button>
            <button
              className="p-3 rounded-md border-4 m-3 menu-btn w-32"
              onMouseOver={(e) => {
                e.target.classList.add("focused-btn");
              }}
              onMouseLeave={(e) => {
                e.target.classList.remove("focused-btn");
              }}
            >
              Appetizer
            </button>
            <button
              className="p-3 rounded-md border-4 m-3 menu-btn w-32"
              onMouseOver={(e) => {
                e.target.classList.add("focused-btn");
              }}
              onMouseLeave={(e) => {
                e.target.classList.remove("focused-btn");
              }}
            >
              Desert
            </button>
            <button
              className="p-3 rounded-md border-4 m-3 menu-btn w-32"
              onMouseOver={(e) => {
                e.target.classList.add("focused-btn");
              }}
              onMouseLeave={(e) => {
                e.target.classList.remove("focused-btn");
              }}
            >
              Main
            </button>
          </div>
        </div>
        {!loader ? (
          <>
            {items.content &&
              items.content.map((item) => {
                let i = 0;
                return (
                  <div
                    key={item.createdAt}
                    className="w-10/12 h-48 m-3 rounded-xl bg-gray-200 flex flex-col justify-center"
                  >
                    <img src={images[i].url} className="w-24 h-24" alt="" />
                    <span>{item.description}</span>
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                  </div>
                );
              })}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Menuside;
