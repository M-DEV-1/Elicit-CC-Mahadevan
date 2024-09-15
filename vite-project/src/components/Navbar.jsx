import ElicitLogo from '../assets/elicit-logo.png';

export default function Navbar(){
  return(
      <div className='bg-black text-white sticky top-0 h-20 flex p-4 justify-center shadow-sm shadow-neutral-700 shadow-'>
        <div className='flex justify-between items-center'>
          <img src={ElicitLogo} alt="Elicit Logo" className='h-12'/>
          <p className='text-xl font-sans font-semibold'>Elicit 2024</p>
        </div>
      </div>
  )
}