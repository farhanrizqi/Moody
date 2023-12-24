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

          {/* detail section start */}
          <div className="flex flex-col gap-2 w-full h-screen bg-green-200 py-5">
            {/* sub section 1 start */}
            <div className="flex flex-1 bg-gray-200">
              <div className="flex-1 bg-red-200 px-2">
                <div className="flex flex-col h-full w-full justify-center gap-2">
                  <h1>Embrace Comfort: Wrap Yourself with Comfort:</h1>
                  <h3>
                    Elevate your style with our 24s and 30s cotton combed
                    fashion. Ensuring a cozy and soft experience.
                  </h3>
                </div>
              </div>
              <div className="flex flex-1 bg-yellow-200 justify-center items-center">
                <h1>Picture here</h1>
              </div>
            </div>
            {/* sub section 1 end */}

            {/* sub section 2 start */}
            <div className="flex flex-1 bg-gray-200">
              <div className="flex flex-1 justify-center items-center bg-red-200">
                <h1>Picture here</h1>
              </div>
              <div className="flex-1 bg-yellow-200 px-2">
                <div className="flex flex-col h-full w-full justify-center gap-2 items-end">
                  <h1 className="text-end">
                    Where Comfort Meets Style in Every Stitch.
                  </h1>
                  <h3 className="text-end">
                    Each piece is carefully made with chain and overdeck
                    stitching for style and strength in every seam. Your
                    wardrobe, crafted for lasting comfort and timeless charm.
                  </h3>
                </div>
              </div>
            </div>
            {/* sub section 2 end */}

            {/* sub section 3 start */}
            <div className="flex flex-1  bg-gray-200">
              <div className="flex-1 bg-red-200 px-2">
                <div className="flex flex-col h-full w-full justify-center gap-2">
                  <h1>DTF Magic in Every Print.</h1>
                  <h3>
                    Embrace stunning colors and unbeatable comfort with our DTF
                    prints. This technique not only ensures vivid designs but
                    also offers a soft, breathable feel, making each piece
                    uniquely stylish and incredibly cozy.
                  </h3>
                </div>
              </div>
              <div className="flex flex-1 bg-yellow-200 justify-center items-center">
                <h1>Picture here</h1>
              </div>
            </div>
          </div>
          {/* sub section 3 end */}
        </div>
        {/* detail section end */}

        {/* Mobile end */}
      </main>
      <Footer />
    </>
  );
}
