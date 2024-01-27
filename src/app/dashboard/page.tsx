"use client";

import Image from "next/image";
import Link from "next/link"
import axios from "axios";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";

const Dashboard = () => {
    const router = useRouter()
    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout successful')
            router.push('/login')
        } catch (error:any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }
    //<Image className='w-20 h-20 pb-2' src="https://cdn4.iconfinder.com/data/icons/testicular-testicles-testes-cancer/283/testicular-testicle-cancer-010-512.png" alt="" />
    //<Image className='w-20 h-20 pb-2' src="https://cdn3.iconfinder.com/data/icons/logistics-delivery-1-1/128/33-1024.png" alt="" width="20" height="20"/>
    //<Image className='w-20 h-20 pb-2' src="https://cdn4.iconfinder.com/data/icons/testicular-testicles-testes-cancer/283/testicular-testicle-cancer-010-512.png" alt=""  width="20" height="20"/>
    //<Image className='w-20 h-20 pb-2' src="https://webstockreview.net/images/blood-clipart-blood-sample-12.png" width="20" height="20" alt=""/>

    /*let cardDetailes = [
        {
            heading : "Weight",
            image : "https://cdn4.iconfinder.com/data/icons/testicular-testicles-testes-cancer/283/testicular-testicle-cancer-010-512.png",
            parag : "55 kg",
        },
        {
            heading : "Weight",
            image : "https://cdn3.iconfinder.com/data/icons/logistics-delivery-1-1/128/33-1024.png",
            parag : "55 kg",
        },
        {
            heading : "Weight",
            image : "https://cdn4.iconfinder.com/data/icons/testicular-testicles-testes-cancer/283/testicular-testicle-cancer-010-512.png",
            parag : "55 kg",
        },
        {
            heading : "Weight",
            image : "https://webstockreview.net/images/blood-clipart-blood-sample-12.png",
            parag : "55 kg",
        },]*/  



    return (
    <div> 
    <div className='bg-gray-500 h-full'>
      <div className="min-h-full">
        <nav className="bg-gray-800"/>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                    
                <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
            
                    <Link href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Profile</Link>
                    <Link href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Sleep</Link>
                    <Link href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Walk</Link>
                    <Link href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Heart rate</Link>
                    <Link href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Reports</Link>
                </div>
            </div>
        </div>
        <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">
            <button onClick={logout} type="button" className="relative rounded-full bg-gray-800 p-2 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 ">      
              Logout
            </button>
          </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    <div className='bg-gray-800 h-screen  p-5 text-slate-50 flex flex-col '>
        <h1>Profile:</h1>
        <h2>Swamy ranga reddy</h2>
        <div className='flex flex-row '>
            <div className='flex flex-col bg-gray-500 w-64 text-black text-center items-center p-10 rounded-lg m-10 '>
                <h2>weight</h2>
                
                <p>54 kg</p>
            </div>
            
            <div className='flex flex-col bg-gray-500 w-64 text-black text-center items-center p-10 rounded-lg m-10 '>
                <h2>height</h2>
                
                <p>167.64 cm</p>
            </div>
            <div className='flex flex-col  bg-gray-500 w-64 text-black text-center items-center p-10 rounded-lg m-10'>
                <h2>Blood</h2>
                
                <p>B+</p>
            </div>
            <div className='flex flex-col bg-gray-500 w-64 text-black text-center items-center p-10 rounded-lg m-10'>
                <h2>Weight</h2>
                
                <p>55 kg</p>
            </div> 
        </div >
        <div className='bg-gray-500'>
            <h1>dashboad</h1>
        </div>
  </div>
  </div>
  )}

export default Dashboard
