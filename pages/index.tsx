import Icon from "components/base/Icon";
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
        <div className="max-w-4xl container mx-auto space-y-32">
          <div className="text-4xl text-center mb-32">Game Features</div>
          <div>
            <Image
              src="/assets/planet.png"
              width={128}
              height={128}
              alt="Planet"
            />
            <div className="mt-4 text-2xl font-mono">
              Complete objectives to get minerals
            </div>
            <div className="mt-4 font-light">
              Explore through the vast space and completing objectives to look
              for precious minerals
            </div>
          </div>
          <div className="text-right">
            <Image
              src="/assets/oil-refinery.png"
              width={128}
              height={128}
              alt="Planet"
            />
            <div className="mt-4 text-2xl font-mono">
              Process minerals to create Crystals
            </div>
            <div className="mt-4 font-light">
              Minerals need to be processed in Refinery to become valuable
            </div>
          </div>
          <div className="">
            <Icon type="CRYSTAL" size={128} />
            <div className="mt-4 text-2xl font-mono">
              Create the strongest fleet ever, and discover more minerals
            </div>
            <div className="mt-4 font-light">
              4 best spaceships to discover the universe
            </div>
          </div>
          <div className="text-right">
          <Image
              src="/assets/transaction.png"
              width={128}
              height={128}
              alt="Planet"
            />
            <div className="text-2xl font-mono">
              Trade Spaceships on Marketplace
            </div>
            <div className="mt-4 font-light">
              Easily earn through spaceships trading or trading your resource
              tokens
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-4xl container mx-auto">
          <div className="text-4xl text-center mb-32">
            State-of-the-art Mechanisms
          </div>
          <div className="grid grid-cols-2 text-center">
            <div>
              <div className="text-2xl font-mono">Play-to-earn Mechanism</div>
              <div className="mt-4 font-light">
                Discover mineral or engage in intense fights
              </div>
            </div>
            <div>
              <div className="text-2xl font-mono">Cross Platform Gameplay</div>
              <div className="mt-4 font-light">
                Play with your ships on browser in 3D, powered by Unity
              </div>
            </div>
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
