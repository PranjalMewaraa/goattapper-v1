

import pic from "../../assets/Images/pic.png"
import ico from "../../assets/Images/ico.png"

import boost from "../../assets/Images/boost.png"
import PulseButton from "../../components/v1/TapperMultiTap"
import FABMenu from "../../components/v1/Fab"
const Home = () => {

  return (
    <div className='w-full h-screen font-[ageo] flex flex-col p-4 gap-2'>
       <div id="profile_header" className="w-full mt-2 h-24 flex justify-between items-center ">
            <ProfileBox/>
            <ProfitBox/>
       </div>
       <ProgressIndicator/>
       <PulseButton/>
       <BottomSection/>
      
    </div>
  )
}


const ProfileBox = ()=>{
    return(
        <div className="h-full flex gap-4 items-center">
            <div className="h-16 bg-[#283140] rounded-xl"> 
                <img src={pic} alt="" className=" aspect-square h-full p-1 rounded-full"/>      
            </div>
            <h1 className="text-white text-lg font-semibold">Pranjal (CEO)</h1>
        </div>
    )
}
const ProfitBox = ()=>{
    return(
        <div className=" flex flex-col pl-2 py-2 pr-4 items-center rounded-full bg-[#283140]">
            <p className="text-white text-sm">Profit per hour</p>
            <p className="flex text-white items-center text-base gap-2">
                <span>
                    <img src={ico} className="w-8 h-8" alt="goat_coin" />
                </span>
                +10
            </p>
        </div>
    )
}

const ProgressIndicator = ()=>{
    return(
    <div className="w-full h-24 mt-2 flex flex-col gap-1">
        <div className="flex w-full justify-between text-white">
            <p>Rookie Trader</p>
            <p>Level 1/15</p>
        </div>
        <div className="w-full h-4 bg-slate-700 p-[2px] rounded-full">
            <div className="w-6 h-full bg-yellow-500 rounded-full"></div>
        </div>
        <div className="flex w-full justify-between text-white text-sm">
            <p className="flex gap-2 items-center">Profit per Hour <span><img src={ico} alt="coin" className="h-6 w-6" /></span> +10</p>
            <p>Coins to Level Up - 75K</p>
        </div>
    </div>
    )
}

const BottomSection=()=>{
    return (
    <div className="absolute bottom-24 w-full h-20 flex justify-left items-center">
        <div className="flex text-white items-center gap-2 text-xl"><span><img src={boost} alt="" /></span>Boost</div>
        <FABMenu/>
    </div>
    )
}
export default Home