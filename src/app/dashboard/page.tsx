"use client";

import 'bootstrap/dist/css/bootstrap.css'
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
    
    
    


    let cardDetailes = [
        {
            heading : "Height",
            image : "https://cdn4.iconfinder.com/data/icons/testicular-testicles-testes-cancer/283/testicular-testicle-cancer-010-512.png",
            parag : "126 cm",
        },
        {
            heading : "Weight",
            image : "https://cdn3.iconfinder.com/data/icons/logistics-delivery-1-1/128/33-1024.png",
            parag : "55 kg",
        },
        {
            heading : "BP",
            image : "https://png.pngtree.com/png-vector/20220629/ourmid/pngtree-blood-pressure-png-image_5546388.png",
            parag : "84 bpm",
        },
        {
            heading : "Blood",
            image : "https://webstockreview.net/images/blood-clipart-blood-sample-12.png",
            parag : "B+",
        },
        {
            heading : "walk",
            image : "https://png.pngtree.com/png-vector/20220331/ourmid/pngtree-man-doing-walking-exercise-png-image_4517622.png",
            parag : "2513 steps",
        },
        {
            heading : "caleris",
            image : "https://cdn-icons-png.flaticon.com/512/4812/4812905.png",
            parag : "1674 cals",
        },
        {
            heading : "sleep",
            image : "https://cdn1.vectorstock.com/i/1000x1000/81/10/sleep-icon-vector-748110.jpg",
            parag : "6hr 15min",
        }, {
            heading : "Yoga",
            image : "https://cdn-icons-png.flaticon.com/512/6381/6381912.png",
            parag : "25 min",
        },
    ]  


        const Cards = cardDetailes.map((card) =>{
            return(
                <div className='flex flex-col bg-teal-500 w-64 h-fit text-black text-center items-center p-20 rounded-lg m-2 italic mr-6'>
                    <h2 className=" font-sans font-bold">{card.heading}</h2>
                    <img className='w-20 h-20 pb-2' src={card.image}/>
                    <p className=" font-sans font-bold">{card.parag}</p>
                </div> 
            )
        }) 

       


    
    return (
    <div>
        <div className='bg-teal-500 p-4' >
            <nav className="drop-shadow-lg " />
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex flex-row items-center" >
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex space-x-4">
                    
                        <Link href="#" className="bg-white text-black rounded-md px-3 py-2 text-sm font-medium no-underline" aria-current="page">Profile</Link>
                       
                    </div>
                </div>
                <div>
                    <button className="bg-gray-900 text-white  p-2 rounded-md ">Log Out</button>
                </div>
            </div>
        
        </div>
        <div className='bg-teal-100 p-12 max-h-fit'>
            <h1 className='italic mb-5'>Hi, <span className='font-bold'>Name</span> </h1>
            <h1>Actives</h1>
            <hr className='min-h-1'/>
            <div className='grid grid-cols-4 gap-2'> 
                {Cards}
            </div>
        </div>
  </div>
    
  )
}

export default Dashboard
