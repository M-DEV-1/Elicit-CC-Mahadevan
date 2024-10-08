import ElicitLogo from '../assets/elicit-logo.png';

export default function Navbar() {
  return (
    <div className='bg-black text-white fixed top-0 left-0 right-0 h-20 flex p-4 justify-center shadow-[0_4px_6px_-1px_rgba(239,68,68,0.5),0_2px_4px_-2px_rgba(239,68,68,0.5)] z-50'>
      <div className='flex justify-between items-center w-full max-w-screen-xl mx-auto'>
        <img src={ElicitLogo} alt="Elicit Logo" className='h-12' />
        <p className='text-xl font-sans font-semibold'>Elicit 2024</p>
      </div>
    </div>
  )
}
