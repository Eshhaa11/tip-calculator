import { useState } from "react";
import "./Tip.css"

function Tip ()  {
    const [purchase, setPurchase] = useState("")
    const tip = purchase >= 1000 ? Math.floor(purhcase / 1000) * 50 : 0; 
    return (
        <div>
            <h1>Tip Calculator</h1>
        </div>
    )
}

export default Tip;