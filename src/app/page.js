"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import model from "../../public/img/model.png";
import ColorPalette from "./components/ColorPalette";
import "./globals.css";

export default function Home() {
  const cloudImage =
    "https://res.cloudinary.com/ddrecezrk/image/upload/v1700114412/Moody%27s/assets/gknjmxfdn1mm9osnmrr7.png";
  const [isModalMaterial, setModalMaterial] = useState(false);
  const [isModalStitch, setModalStitch] = useState(false);
  const [isModalTech, setModalTech] = useState(false);
  const modalRef = useRef(null);

  const toggleModalMaterial = () => {
    setModalMaterial(!isModalMaterial);
  };
  const toggleModalStitch = () => {
    setModalStitch(!isModalStitch);
  };
  const toggleModalTech = () => {
    setModalTech(!isModalTech);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setModalMaterial(false);
      setModalStitch(false);
      setModalTech(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-between mt-20 md:mb-40">
        {/* dev start */}
        <div className="hidden w-full h-screen ">
          <div className="w-screen h-full bg-third">Left</div>
          <div className="w-screen h-full bg-red-500">Right</div>
          <div></div>
        </div>
        {/* dev end */}
        {/* Mobile start */}
        <div className="w-full h-full flex-col items-center justify-center bg-third md:h-full">
          <div className="flex-1 flex justify-center  ">
            <Image
              src={model} // Ganti dengan path gambar sesuai struktur proyek Anda
              alt="Model"
              width={300} // Tentukan lebar gambar
              height={100} // Tentukan tinggi gambar
            />
          </div>

          <div className="flex-1 ">
            <h1 className="text-white text-center text-9xl uppercase ">
              Lift UP
            </h1>
            <h1 className="text-white text-center text-7xl tracking-wide">
              Your Mood
            </h1>
          </div>
        </div>

        {/* detail section start */}
        <section className="flex flex-col gap-20 w-full h-auto py-28 md:py-44 px-6 md:px-20 lg:px-28">
          {/* sub section 1 start */}
          <div className="flex gap-2">
            <div className="w-3/4 px-2">
              <div className="flex flex-col h-full w-full justify-center gap-2">
                <h1 className="text-white md:text-2xl">
                  Embrace Comfort: Wrap Yourself with Comfort:
                </h1>
                <h3 className="text-white md:text-2xl">
                  Elevate your style with our 24s and 30s cotton combed fashion.
                  Ensuring a cozy and soft experience.
                </h3>
              </div>
            </div>
            <div className="flex flex-1 justify-end items-center md:pe-5">
              <div className="w-auto h-auto rounded-full border-4 border-primary p-5 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="white"
                    d="M165.446 34.793c-23.17.023-45.634 12.97-54.612 36.323l-83.67 326.167c-12.673 94.537 81.04 88.742 137.957 65.396c81.422-33.396 181.723-29.213 263.244-8.26l6.45-17.218c-7.38-2.638-15.334-5.988-22.252-8.039c.473-4.364.955-8.72 1.437-13.074l23.038 4.118l3.234-18.1c-8.074-1.441-16.147-2.885-24.221-4.328a4816.63 4816.63 0 0 1 1.87-16.189l22.134 3.278l2.693-18.186c-7.548-1.12-15.098-2.238-22.647-3.355c.456-3.765.91-7.53 1.375-11.29c7.615 1.092 15.231 2.183 22.847 3.273l2.607-18.2l-23.164-3.316c.46-3.593 1.29-9.988 1.76-13.577l22.781 2.55l2.045-17.57a56812.69 56812.69 0 0 1-22.402-2.508c.783-5.767 1.917-11.182 2.728-16.943c7.67 1.12 15.341 2.244 23.012 3.368l2.31-17.139c-7.683-1.127-15.366-2.25-23.05-3.374c.792-5.415 1.252-10.129 2.071-15.542c7.074 1.264 14.149 2.528 21.223 3.79l3.232-18.1l-21.654-3.866c.736-4.676 1.473-9.35 2.23-14.026c6.978 1.673 13.955 3.347 20.932 5.022L465.276 208c-7.401-1.778-14.803-3.554-22.204-5.33a2809.25 2809.25 0 0 1 2.132-12.477c6.98 1.583 13.961 3.165 20.942 4.746l4.064-17.93c-7.271-1.65-14.543-3.298-21.815-4.946c.769-4.267 1.55-8.535 2.342-12.805l20.742 5.151l4.431-17.843l-21.751-5.405c.741-3.847 1.494-7.696 2.254-11.548l20.28 5.014l4.413-17.849l-21.057-5.207a2444.47 2444.47 0 0 1 2.571-12.374c8.386 2.41 13.13 2.364 21.41 4.99L486 88.456c-83.808-26.776-179.25-33.22-244.192-6.453c-24.337 114.036-37.305 221.4-68.032 338.64c-3.407 13-14.47 21.89-27.342 28.064c-27 11.608-64.033 13.778-84.63-4.91c-10.971-10.34-16.174-27.036-12.467-47.579c2.303-12.762 10.883-21.986 20.834-26.378c19.749-7.074 43.492-4.25 58.893 7.95c12.463 9.302 12.318 38.283-3.882 31.82c-9.639-6.17-1.964-11.851-8.615-17.378c-11.6-7.428-26.42-10.872-38.972-5.57c-5.564 2.455-8.887 5.737-10.166 12.822c-2.94 16.29.685 24.996 6.985 30.933c18.333 13.49 45.279 10.495 64.068 1.712c10.045-4.82 16.277-11.436 17.511-16.147c30.538-116.518 43.443-224.123 68.293-339.964c-11.796-28.344-35.67-41.247-58.84-41.225"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* sub section 1 end */}

          {/* sub section 2 start */}
          <div className="flex">
            <div className="flex flex-1 justify-start items-center md:ps-5">
              <div className="w-auto h-auto p-5 rounded-full border-4 border-primary ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="white"
                    d="M56.813 18.438c-.47-.005-.938.014-1.407.03c-.625.023-1.252.066-1.875.126c-7.468.72-14.682 4.148-22.31 11.125c-9.985 9.128-12.863 17.66-11.407 27.718c1.455 10.056 8.353 22.236 21.125 34.906c2.895 2.872 6.126 5.737 9.593 8.625c1.27 1.055 2.565 2.13 3.907 3.186a200.62 200.62 0 0 0 3.438 2.656c.232.175.454.358.688.532C74.71 119.38 95.558 131.28 120.25 142.22c159.723 161.31 288.815 297.553 374.594 352.124c-51.11-85.624-187.432-214.62-350-375.531c-10.23-23.802-21.115-43.71-32.094-59.282c35.46-10.19 82.517-2.294 125.75 40.94c40.243 40.242 52.642 90.776 41.375 128.343c4.89 4.914 9.883 9.913 14.688 14.75c19.07-46.1 4.573-108.895-42.844-156.313c-35.694-35.693-75.48-50.324-111.032-50.22c-1.147.005-2.3.03-3.438.064c-21.844.65-41.957 6.898-58.344 17.187a102.302 102.302 0 0 0-8.312 5.814c1.33 3.094 2.758 5.884 4.406 8.218c1.92 2.72 4.004 4.936 6.906 6.688c2.202-1.717 4.498-3.375 6.938-4.906a88.727 88.727 0 0 1 3.25-1.97c8.196 10.088 15.465 24.624 25.47 47.25c-23.907-10.568-38.822-18.04-49.033-27c.024-.03.04-.063.064-.093c-.433-.33-.867-.655-1.28-1c-.013-.008-.022-.02-.033-.03c-11.215-10.375-16.532-22.934-22.31-44.5c5.988 1.605 11.256 3.19 16 4.844a137.13 137.13 0 0 1 26.81-15.875c-9.5-7.738-18.552-11.93-26.686-12.97c-1.443-.185-2.87-.3-4.282-.313zM493.28 64.374c-77.985 0-125.587 28.886-146.124 69.406c-20.536 40.52-13.994 90.39 9.688 131.407c11.385 19.72 17.807 40.687 19.187 61.22a4329.64 4329.64 0 0 1 18.47 19.187c2.31-29.955-5.072-61.35-21.47-89.75c-21.13-36.602-26.155-80.112-9.186-113.594c16.97-33.481 55.94-59.188 129.437-59.188V64.376zM37.907 114.938c-2.894 23.925 6.18 50.21 29.532 73.562l13.218-13.188c-15.97-15.97-23.188-31.833-24.437-46.593c-6.646-4.51-12.754-9.102-18.314-13.782zM124.062 277c-24.466-.028-45.04 4.92-61.343 13.656c-24.842 13.31-39.363 35.865-40.75 60.47c-2.78 49.207 44.38 102.65 140.405 118.28c101.63 16.544 170.303-9.184 205.406-54.062c1.01-1.29 1.988-2.59 2.94-3.906c-4.552-4.232-9.148-8.52-13.783-12.875c-1.233 1.79-2.52 3.55-3.875 5.28c-29.97 38.315-90.355 62.97-187.687 47.126c-90.394-14.715-126.796-62.527-124.75-98.783c1.023-18.127 10.982-34.37 30.938-45.062c19.955-10.692 50.267-15.364 90.5-7.47c34.077 6.69 62.938 3.47 85.437-6.936c-4.72-4.65-9.49-9.33-14.28-14.064c-17.545 6.452-39.89 8.088-67.564 2.656c-14.895-2.923-28.778-4.297-41.594-4.312z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex px-2">
              <div className="flex flex-col h-full w-full justify-center gap-2 items-end ps-14">
                <h1 className="text-end text-white md:text-2xl">
                  Where Comfort Meets Style in Every Stitch.
                </h1>
                <h3 className="text-end text-white md:text-2xl">
                  Each piece is carefully made with chain and overdeck stitching
                  for style and strength in every seam. Your wardrobe, crafted
                  for lasting comfort and timeless charm.
                </h3>
              </div>
            </div>
          </div>
          {/* sub section 2 end */}

          {/* sub section 3 start */}
          <div className="flex">
            <div className="flex w-3/4 px-2">
              <div className="flex flex-col h-full w-full justify-center gap-2">
                <h1 className="text-white md:text-2xl">
                  DTF Magic in Every Print.
                </h1>
                <h3 className="text-white md:text-2xl">
                  Embrace stunning colors and unbeatable comfort with our DTF
                  prints. This technique not only ensures vivid designs but also
                  offers a soft, breathable feel, making each piece uniquely
                  stylish and incredibly cozy.
                </h3>
              </div>
            </div>
            <div className="flex flex-1 justify-end items-center md:pe-5">
              <div className="w-auto h-auto rounded-full border-4 border-primary p-5 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="white"
                    d="M6.813 2.406L5.405 3.812L7.5 5.906L8.906 4.5zm18.375 0L23.093 4.5L24.5 5.906l2.094-2.093zM16 3.03c-.33.004-.664.023-1 .064c-.01 0-.02-.002-.03 0c-4.056.465-7.284 3.742-7.845 7.78c-.448 3.25.892 6.197 3.125 8.095a5.238 5.238 0 0 1 1.75 3.03v6h2.28c.348.597.983 1 1.72 1s1.372-.403 1.72-1H20v-4h.094v-1.188c0-1.466.762-2.944 2-4.093C23.75 17.06 25 14.705 25 12c0-4.94-4.066-9.016-9-8.97m0 2c3.865-.054 7 3.11 7 6.97c0 2.094-.97 3.938-2.313 5.28l.032.032A7.792 7.792 0 0 0 18.279 22h-4.374c-.22-1.714-.955-3.373-2.344-4.563c-1.767-1.5-2.82-3.76-2.468-6.312c.437-3.15 2.993-5.683 6.125-6.03a6.91 6.91 0 0 1 .78-.064zM2 12v2h3v-2zm25 0v2h3v-2zM7.5 20.094l-2.094 2.093l1.407 1.407L8.905 21.5zm17 0L23.094 21.5l2.093 2.094l1.407-1.407zM14 24h4v2h-4z"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* sub section 3 end */}
        </section>
        {/* detail section end */}
        {/* why choose us section start */}
        <section className="flex flex-col w-full h-auto gap-20 p-5 md:px-20">
          <div className="flex flex-col w-full h-full justify-center items-center gap-5 lg:px-28">
            <h1 className="text-white md:text-3xl">
              We Design Everything to Your Mood
            </h1>
            <div className="w-1/3 h-1.5 rounded bg-primary" />
            <h1 className="text-center text-white md:text-2xl">
              Discover Unmatched Style and Quality at Your Fingertips. Elevate
              your wardrobe with our meticulously crafted clothing, where
              fashion effortlessly intertwines with comfort. Our commitment to
              superior craftsmanship, keen attention to detail, and a sincere
              dedication to customer satisfaction uniquely distinguish us.
              Explore the difference for yourself – opt for a blend of style,
              comfort, and quality that speaks volumes.
            </h1>
          </div>
          <div className="w-full h-full flex flex-wrap justify-center">
            <div className="w-1/2 sm:w-1/3 lg:w-1/4 p-4">
              <div
                className="flex flex-col w-full h-32 mb-4 justify-center items-center gap-3"
                onClick={toggleModalMaterial}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 512 512"
                  className="cursor-pointer"
                >
                  <path
                    fill="white"
                    d="M165.446 34.793c-23.17.023-45.634 12.97-54.612 36.323l-83.67 326.167c-12.673 94.537 81.04 88.742 137.957 65.396c81.422-33.396 181.723-29.213 263.244-8.26l6.45-17.218c-7.38-2.638-15.334-5.988-22.252-8.039c.473-4.364.955-8.72 1.437-13.074l23.038 4.118l3.234-18.1c-8.074-1.441-16.147-2.885-24.221-4.328a4816.63 4816.63 0 0 1 1.87-16.189l22.134 3.278l2.693-18.186c-7.548-1.12-15.098-2.238-22.647-3.355c.456-3.765.91-7.53 1.375-11.29c7.615 1.092 15.231 2.183 22.847 3.273l2.607-18.2l-23.164-3.316c.46-3.593 1.29-9.988 1.76-13.577l22.781 2.55l2.045-17.57a56812.69 56812.69 0 0 1-22.402-2.508c.783-5.767 1.917-11.182 2.728-16.943c7.67 1.12 15.341 2.244 23.012 3.368l2.31-17.139c-7.683-1.127-15.366-2.25-23.05-3.374c.792-5.415 1.252-10.129 2.071-15.542c7.074 1.264 14.149 2.528 21.223 3.79l3.232-18.1l-21.654-3.866c.736-4.676 1.473-9.35 2.23-14.026c6.978 1.673 13.955 3.347 20.932 5.022L465.276 208c-7.401-1.778-14.803-3.554-22.204-5.33a2809.25 2809.25 0 0 1 2.132-12.477c6.98 1.583 13.961 3.165 20.942 4.746l4.064-17.93c-7.271-1.65-14.543-3.298-21.815-4.946c.769-4.267 1.55-8.535 2.342-12.805l20.742 5.151l4.431-17.843l-21.751-5.405c.741-3.847 1.494-7.696 2.254-11.548l20.28 5.014l4.413-17.849l-21.057-5.207a2444.47 2444.47 0 0 1 2.571-12.374c8.386 2.41 13.13 2.364 21.41 4.99L486 88.456c-83.808-26.776-179.25-33.22-244.192-6.453c-24.337 114.036-37.305 221.4-68.032 338.64c-3.407 13-14.47 21.89-27.342 28.064c-27 11.608-64.033 13.778-84.63-4.91c-10.971-10.34-16.174-27.036-12.467-47.579c2.303-12.762 10.883-21.986 20.834-26.378c19.749-7.074 43.492-4.25 58.893 7.95c12.463 9.302 12.318 38.283-3.882 31.82c-9.639-6.17-1.964-11.851-8.615-17.378c-11.6-7.428-26.42-10.872-38.972-5.57c-5.564 2.455-8.887 5.737-10.166 12.822c-2.94 16.29.685 24.996 6.985 30.933c18.333 13.49 45.279 10.495 64.068 1.712c10.045-4.82 16.277-11.436 17.511-16.147c30.538-116.518 43.443-224.123 68.293-339.964c-11.796-28.344-35.67-41.247-58.84-41.225"
                  />
                </svg>

                <div className="w-1/2 h-1.5 rounded bg-primary" />

                <h3 className="text-2xl text-white">Material</h3>

                {isModalMaterial && (
                  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div
                      ref={modalRef}
                      className="bg-white p-8 rounded-xl shadow-md w-1/3 border-4 border-primary relative"
                    >
                      <div
                        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-25"
                        style={{
                          backgroundImage: `url('${cloudImage}')`,
                        }}
                      />
                      {/* Konten modal di sini */}
                      <p>
                        Our clothing is made from the finest
                        materials—specifically, we use Cotton Combed 24s and
                        30s. This choice ensures a soft and breathable feel,
                        promising comfort that lasts. Elevate your everyday
                        style with our commitment to premium materials and
                        craftsmanship. Thank you for choosing us for your
                        wardrobe essentials.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="w-1/2 sm:w-1/3 lg:w-1/4 p-4">
              <div
                className="flex flex-col w-full h-32 mb-4 justify-center items-center gap-3"
                onClick={toggleModalStitch}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="white"
                    d="M56.813 18.438c-.47-.005-.938.014-1.407.03c-.625.023-1.252.066-1.875.126c-7.468.72-14.682 4.148-22.31 11.125c-9.985 9.128-12.863 17.66-11.407 27.718c1.455 10.056 8.353 22.236 21.125 34.906c2.895 2.872 6.126 5.737 9.593 8.625c1.27 1.055 2.565 2.13 3.907 3.186a200.62 200.62 0 0 0 3.438 2.656c.232.175.454.358.688.532C74.71 119.38 95.558 131.28 120.25 142.22c159.723 161.31 288.815 297.553 374.594 352.124c-51.11-85.624-187.432-214.62-350-375.531c-10.23-23.802-21.115-43.71-32.094-59.282c35.46-10.19 82.517-2.294 125.75 40.94c40.243 40.242 52.642 90.776 41.375 128.343c4.89 4.914 9.883 9.913 14.688 14.75c19.07-46.1 4.573-108.895-42.844-156.313c-35.694-35.693-75.48-50.324-111.032-50.22c-1.147.005-2.3.03-3.438.064c-21.844.65-41.957 6.898-58.344 17.187a102.302 102.302 0 0 0-8.312 5.814c1.33 3.094 2.758 5.884 4.406 8.218c1.92 2.72 4.004 4.936 6.906 6.688c2.202-1.717 4.498-3.375 6.938-4.906a88.727 88.727 0 0 1 3.25-1.97c8.196 10.088 15.465 24.624 25.47 47.25c-23.907-10.568-38.822-18.04-49.033-27c.024-.03.04-.063.064-.093c-.433-.33-.867-.655-1.28-1c-.013-.008-.022-.02-.033-.03c-11.215-10.375-16.532-22.934-22.31-44.5c5.988 1.605 11.256 3.19 16 4.844a137.13 137.13 0 0 1 26.81-15.875c-9.5-7.738-18.552-11.93-26.686-12.97c-1.443-.185-2.87-.3-4.282-.313zM493.28 64.374c-77.985 0-125.587 28.886-146.124 69.406c-20.536 40.52-13.994 90.39 9.688 131.407c11.385 19.72 17.807 40.687 19.187 61.22a4329.64 4329.64 0 0 1 18.47 19.187c2.31-29.955-5.072-61.35-21.47-89.75c-21.13-36.602-26.155-80.112-9.186-113.594c16.97-33.481 55.94-59.188 129.437-59.188V64.376zM37.907 114.938c-2.894 23.925 6.18 50.21 29.532 73.562l13.218-13.188c-15.97-15.97-23.188-31.833-24.437-46.593c-6.646-4.51-12.754-9.102-18.314-13.782zM124.062 277c-24.466-.028-45.04 4.92-61.343 13.656c-24.842 13.31-39.363 35.865-40.75 60.47c-2.78 49.207 44.38 102.65 140.405 118.28c101.63 16.544 170.303-9.184 205.406-54.062c1.01-1.29 1.988-2.59 2.94-3.906c-4.552-4.232-9.148-8.52-13.783-12.875c-1.233 1.79-2.52 3.55-3.875 5.28c-29.97 38.315-90.355 62.97-187.687 47.126c-90.394-14.715-126.796-62.527-124.75-98.783c1.023-18.127 10.982-34.37 30.938-45.062c19.955-10.692 50.267-15.364 90.5-7.47c34.077 6.69 62.938 3.47 85.437-6.936c-4.72-4.65-9.49-9.33-14.28-14.064c-17.545 6.452-39.89 8.088-67.564 2.656c-14.895-2.923-28.778-4.297-41.594-4.312z"
                  />
                </svg>
                <div className="w-1/2 h-1.5 rounded bg-primary" />
                <h3 className="text-2xl text-white">Stitches</h3>
                {isModalStitch && (
                  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div
                      ref={modalRef}
                      className="bg-white p-8 rounded-xl shadow-md w-1/3 border-4 border-primary relative"
                    >
                      <div
                        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-25"
                        style={{
                          backgroundImage: `url('${cloudImage}')`,
                        }}
                      />
                      {/* Konten modal di sini */}
                      <p>
                        Each piece is meticulously crafted with precision,
                        featuring both chain stitching and overdeck stitching.
                        This not only enhances the durability of our products
                        but also adds a touch of quality to your wardrobe.
                        Experience the excellence in every stitch with us.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="w-1/2 sm:w-1/3 lg:w-1/4 p-4">
              <div
                className="flex flex-col w-full h-32 mb-4 justify-center items-center gap-3"
                onClick={toggleModalTech}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="white"
                    d="M6.813 2.406L5.405 3.812L7.5 5.906L8.906 4.5zm18.375 0L23.093 4.5L24.5 5.906l2.094-2.093zM16 3.03c-.33.004-.664.023-1 .064c-.01 0-.02-.002-.03 0c-4.056.465-7.284 3.742-7.845 7.78c-.448 3.25.892 6.197 3.125 8.095a5.238 5.238 0 0 1 1.75 3.03v6h2.28c.348.597.983 1 1.72 1s1.372-.403 1.72-1H20v-4h.094v-1.188c0-1.466.762-2.944 2-4.093C23.75 17.06 25 14.705 25 12c0-4.94-4.066-9.016-9-8.97m0 2c3.865-.054 7 3.11 7 6.97c0 2.094-.97 3.938-2.313 5.28l.032.032A7.792 7.792 0 0 0 18.279 22h-4.374c-.22-1.714-.955-3.373-2.344-4.563c-1.767-1.5-2.82-3.76-2.468-6.312c.437-3.15 2.993-5.683 6.125-6.03a6.91 6.91 0 0 1 .78-.064zM2 12v2h3v-2zm25 0v2h3v-2zM7.5 20.094l-2.094 2.093l1.407 1.407L8.905 21.5zm17 0L23.094 21.5l2.093 2.094l1.407-1.407zM14 24h4v2h-4z"
                  />
                </svg>
                <div className="w-1/2 h-1.5 rounded bg-primary" />
                <h3 className="text-2xl text-white">Design</h3>
                {isModalTech && (
                  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div
                      ref={modalRef}
                      className="bg-white p-8 rounded-xl shadow-md w-1/3 border-4 border-primary relative"
                    >
                      <div
                        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-25"
                        style={{
                          backgroundImage: `url('${cloudImage}')`,
                        }}
                      />
                      {/* Konten modal di sini */}
                      <p>
                        At the heart of our designs is the cutting-edge DTF
                        (Direct-to-Fabric) printing technique, ensuring vibrant
                        and long-lasting impressions on each garment. Paired
                        with our fresh and dynamic designs, your style is not
                        just a statement but a work of art. Elevate your
                        wardrobe with us, where innovation meets fashion.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        {/* why choose us section end */}

        {/* color palette section start */}
        <section className="flex flex-col w-full h-auto md:px-20">
          <div className="flex p-10 gap-10">
            <div className="w-1/3 h-auto">
              <ColorPalette />
            </div>
            <div className="w-full h-auto flex justify-center items-center ">
              <h1 className="text-center text-white text-2xl">
                Craft Your Mood, Wear Your Vibe.
              </h1>
            </div>
          </div>
          {/* <ColorPalette /> */}
        </section>
        {/* color palette section end */}
        {/* Mobile end */}
      </main>
      <Footer />
    </>
  );
}
