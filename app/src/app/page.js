import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Logo in top left */}
      <div className="absolute top-8 left-8">
        <Image
          src="/outmadelogo.png"
          alt="Outmade Ltd Logo "
          width={80}
          height={40}
          priority
          className="object-contain"
        />
      </div>

      {/* Centered content */}
      <div className="flex flex-col items-center justify-center min-h-screen pb-16">
        <h1 className="text-6xl font-bold mb-8">Outmade Ltd</h1>
        <div className="text-xl">
          <p>Contact: <a 
            href="mailto:info@outmade.io" 
            className="text-white hover:text-gray-300 transition-colors"
          >
            info@outmade.io
          </a></p>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 bg-black py-4">
        <div className="text-center text-sm text-gray-400">
          <p className="mb-1">Outmade Ltd</p>
          <p>
            Contact: <a 
              href="mailto:info@outmade.io" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              info@outmade.io
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
