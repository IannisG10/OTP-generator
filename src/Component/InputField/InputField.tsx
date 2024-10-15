import React from "react";
import { Select,
        SelectContent,
        SelectGroup,
        SelectItem,
        SelectLabel } 
    from "@radix-ui/react-select";   
    
const InputField: React.FC = () => {
    return(
        <>
            <div>
                <label>Adresse e-mail</label>
                <input type="text" />
            </div>
        </>
    );
}

export default InputField