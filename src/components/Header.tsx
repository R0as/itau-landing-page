import  Image  from "next/image"

import { ItemMenu } from './ItemMenu'
import { Search } from './Search'

import Logo from '@/assets/logo.svg'
import IconUser from "@/assets/icon-user.svg"
import { AiOutlineMenu } from "react-icons/ai";


export function Header(){
    return (
        <header className=" flex w-full h-20 bg-primary-orange">
            <div className="flex items-center justify-between w-full pl-8 mx-auto">
                <div className='flex flex-1 items-center justify-between'>
                    <div className=" w-[80%] max-xl:w-[60%] flex items-center gap-14">
                    <AiOutlineMenu className="lg:hidden"/>
                        <Image
                        src={Logo}
                        alt="logo"/>
                        <ul className='flex items-center gap-12'>
                            <li>
                                <ItemMenu name='Para você'/>
                            </li>
                            <li>
                                <ItemMenu name='Para empresas'/>
                            </li>
                            <li>
                                <ItemMenu name='Serviços'/>
                            </li>
                            <li>
                                <ItemMenu name='Ajuda'/>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Search/>
                    </div>
                </div>
                <button className="flex w-[20%] 2xl:w-[15%] items-center gap-4 bg-primary-blue h-20 pl-10">
                    <Image 
                    src={IconUser} 
                    alt="IconUser"/>
                    <span className="text-white font-bold">Acessar conta</span>
                </button>
            </div>
        </header>
    )
}