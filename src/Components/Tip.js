import { useState } from "react";
import "./Tip.css";

function Tip() {
  const [purchase, setPurchase] = useState("");
  const tip = purchase >= 1000 ? Math.floor(purchase / 1000) * 50 : 0;
  const total = Number(purchase) + tip;

  return (
    <div className="tip-cont">
      <h1>Tip Calculator</h1>
      <input
        type="number"
        placeholder="Enter the amount in Ksh"
        value={purchase}
        onChange={(e) => setPurchase(e.target.value)}
      />
      <p>Tip: KES {tip}</p>
      <p>Total: KES {isNaN(total) ? 0 : total}</p>
    </div>
  );
}

export default Tip;
