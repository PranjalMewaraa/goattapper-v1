import logo from '../../assets/Images/coins.png';
import second from '../../assets/Images/ico.png';

const Earn: React.FC = () => {
  return (
    <div className='w-full p-4 flex items-end h-full'>
      <div id='earn' className='w-full h-4/5 flex flex-col text-white gap-2 translate-y-8'>
        <h1 className='w-full text-center font-[ageobold] text-4xl'>Earn More Coins!</h1>
        <p className='w-full text-center'>Complete exciting tasks and earn coins</p>
        <div className='w-full flex flex-col gap-2 p-4'>
          <CardElem name="Invite a Friend" />
          <CardElem name="Subscribe GoatTapper YT" />
        </div>
        <p className='w-full text-center text-lg font-[ageo]'>Daily Tasks</p>
        <div className='w-full flex flex-col gap-2 p-4'>
          <CardElem name="Daily Rewards" />
          <CardElem name="Daily Rewards" />
          <CardElem name="Daily Rewards" />
          <CardElem name="Daily Rewards" />
        </div>
      </div>
    </div>
  );
};

interface CardElemProps {
  name: string;
}

const CardElem: React.FC<CardElemProps> = (props) => {
  return (
    <div className='flex justify-between p-4 w-full items-center bg-[#283140] h-20 rounded-lg'>
      <img src={logo} alt="Coin Icon" />
      <p className='font-medium font-[ageo] text-lg'>{props.name}</p>
      <p className='flex flex-col items-center gap-1'>
        <span><img src={second} className='h-5' alt="Reward Icon" /></span>
        + 10
      </p>
    </div>
  );
};

export default Earn;
