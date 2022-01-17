import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="">
      <div className="h-[300px] flex items-center justify-between container max-w-4xl mx-auto">
        <div>
          <div className="text-4xl font-mono">NFT Space Game</div>
          <div className="mt-4">Venture into the space, play-to-earn</div>
        </div>
        <Image
          src="/sprites/battleship1.png"
          width={300}
          height={180}
          alt="Spaceship"
        ></Image>
      </div>
      <div className="bg-stone-900 bg-opacity-75 py-16">
        <div className="max-w-4xl container mx-auto">
          <div>
            <div className="text-2xl font-mono">Explore in the vast space</div>
            <div className="mt-4 font-light">Discover mineral or engage in intense fights</div>
          </div>
          <div className="mt-16">
            <div className="text-2xl font-mono">Build the best fleet</div>
            <div className="mt-4 font-light">4 best spaceships to discover the universe</div>
          </div>
        </div>
      </div>
      <div className="text-center text-stone-300 my-16">
        <div>This game is a part of Moralis X Avalanche Hackathon</div>
        <Image
          src="/logo/powered-by-moralis.svg"
          width={240}
          height={60}
          alt="Moralis"
        />
      </div>
    </div>
  );
};

export default Home;
