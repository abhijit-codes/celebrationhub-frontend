import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAddress } from "../../features/address/addressSlice";

export default function AddAddressModal({ close }) {
  const dispatch = useDispatch();

  const [form, setForm] = useState({});

  const handleSubmit = () => {
    dispatch(addAddress({ ...form, id: Date.now() }));
    close();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

      <div className="bg-white p-6 rounded-xl w-[400px]">

        <h2 className="font-semibold mb-4">Add Address</h2>

        <input placeholder="Name" onChange={e => setForm({...form,name:e.target.value})} className="border p-2 w-full mb-2"/>
        <input placeholder="Phone" onChange={e => setForm({...form,phone:e.target.value})} className="border p-2 w-full mb-2"/>
        <input placeholder="Address" onChange={e => setForm({...form,addressLine1:e.target.value})} className="border p-2 w-full mb-2"/>
        <input placeholder="City" onChange={e => setForm({...form,city:e.target.value})} className="border p-2 w-full mb-2"/>
        <input placeholder="State" onChange={e => setForm({...form,state:e.target.value})} className="border p-2 w-full mb-2"/>
        <input placeholder="Pincode" onChange={e => setForm({...form,pincode:e.target.value})} className="border p-2 w-full mb-2"/>

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Save Address
        </button>

      </div>
    </div>
  );
}