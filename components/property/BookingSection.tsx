import React, { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  // Simple total calculation placeholder
  const total = price * 7;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg sticky top-6">
      <h3 className="text-xl font-semibold">${price}/night</h3>
      <div className="mt-4">
        <label>Check-in</label>
        <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)}
          className="border p-2 w-full mt-2" />
      </div>
      <div className="mt-4">
        <label>Check-out</label>
        <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)}
          className="border p-2 w-full mt-2" />
      </div>

      <div className="mt-4">
        <p>Total payment: <strong>${total}</strong></p>
      </div>

      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md w-full">Reserve now</button>
    </div>
  );
};

export default BookingSection;

