import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import model from "../../public/img/model.png";
import "./globals.css";

export default function Home() {
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

        {/* Mobile end */}
      </main>
      <Footer />
    </>
  );
}
