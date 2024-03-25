import { LuHome } from "react-icons/lu";
import { AllAssets } from "./components/AllAssets";
import { AccountCard } from "./components/AccountCard";
import { RentCard } from "./components/RentCard";
import { SidebarToggleButton } from "./components/SidebarToggleButton";

const Page = () => {
  return (
    <div>
      <div className="border-b border-stone-800/60 sticky top-0 bg-black/30 z-[100]">
        <div className="flex items-center backdrop-blur-md">
          <div className="flex h-full items-center px-4">
            <SidebarToggleButton />
          </div>
          <div className="flex gap-2 items-center h-[59px] px-4">
            <LuHome className="text-lg opacity-50" />
            <span>Assets overview</span>
          </div>
        </div>
      </div>
      <div className="py-6 px-4 flex flex-col gap-6">
        <div class="text-[36px]">
          <span className="text-xl">
            <span className="opacity-50 text-[36px]">Hi, </span>
            <span class="text-[36px]">Enes</span>
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="col-span-1">
            <AccountCard />
          </div>
          <div className="col-span-1">
            <RentCard />
          </div>
        </div>
        <AllAssets />
      </div>
    </div>
  );
};

export default Page;
