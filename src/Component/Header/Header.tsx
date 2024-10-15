import React from "react"
import { Switch } from "@mui/material";
import { Moon,Sun } from "lucide-react";

const Header: React.FC = ()=> {
    return(
        <>
            <div className='flex justify-around'>
                <div>
                    <h1 className="text-blue-600 font-semibold text-2xl">Générateur OTP</h1>
                </div>

                <div className="flex items-center">
                    <div><Sun size={15}/></div>
                    <Switch/>
                    <div><Moon size={15}/></div>
                </div>
            </div>
            
        </>
    )
}

export default Header;