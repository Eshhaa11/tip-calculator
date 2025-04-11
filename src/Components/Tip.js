import { useState } from "react";
import "./Tip.css";

function Tip() {
  const [purchase, setPurchase] = useState("");
  const tip = purchase >= 1000 ? Math.floor(purchase / 1000) * 50 : 0;
  const total = Number(purchase) + tip;

  return (
    <div className="tip-cont">
      <h1>Tip Calculator 💸</h1>
      <input
        type="number"
        placeholder="Enter the amount"
        value={purchase}
        onChange={(e) => setPurchase(e.target.value)}
      />
      <p>Tip: {tip}</p>
      <p>Total:  {isNaN(total) ? 0 : total}</p>
    </div>
  );
}

export default Tip;
