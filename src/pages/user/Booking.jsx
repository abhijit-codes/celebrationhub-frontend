import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Stepper from "../../components/booking/Stepper";
import OrderSummary from "../../components/booking/OrderSummary";
import PriceDetails from "../../components/booking/PriceDetails";
import AddressModal from "../../components/booking/AddressModal";
import DeliveryAddress from "../../components/booking/DeliveryAddress";
import PaymentModal from "../../components/booking/PaymentModal";

import { setAddresses } from "../../features/address/addressSlice";
import { addresses as dummyAddresses } from "../../data/addresses";

// ✅ APIs
import { createBooking } from "../../api/BookingApi";
import { createOrder as createPaymentOrder } from "../../api/paymentApi";

export default function Booking() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { date, time } = location.state || {};

  const [step, setStep] = useState("cart");
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const vendors = useSelector((state) => state.vendors.list);
  const selectedAddress = useSelector((state) => state.address.selected);
  const user = useSelector((state) => state.auth.user);

  const vendor = vendors.find((v) => v.id === parseInt(id));

  useEffect(() => {
    dispatch(setAddresses(dummyAddresses));
  }, [dispatch]);

  if (!vendor) return <p className="text-white p-4">Vendor not found</p>;

  // 🔥 STEP CONTROL
  const handleStepChange = () => {
    if (step === "cart") {
      if (!date || !time) {
        alert("Please select date and time first");
        return;
      }
      setStep("address");
    } 
    else if (step === "address") {
      if (!selectedAddress) {
        alert("Please select address");
        return;
      }
      setStep("payment");
    }
  };

  // ✅ COD BOOKING
  const handleCOD = async () => {
    if (!user) {
      alert("User not found ❌");
      return;
    }

    try {
      setLoading(true);

      const bookingData = {
        userId: user?.email || "guest",
        vendorId: vendor.id,
        date,
        time,
        address: selectedAddress,
      };

      await createBooking(bookingData);

      setShowPaymentModal(false);

      alert("Booking Confirmed ✅");

      navigate("/booking-success", {
        state: { date, time },
      });

    } catch (err) {
      console.error(err);
      alert("Booking Failed ❌");
    } finally {
      setLoading(false);
    }
  };

  // ✅ ONLINE PAYMENT (RAZORPAY)
  const handleOnlinePayment = async () => {
    try {
      const res = await createPaymentOrder(vendor.price);
      const order = res.data;

      const options = {
        key: "rzp_test_SYIdo8L52qVJus", // 🔑 your test key
        amount: order.amount,
        currency: "INR",
        name: "Celebration Hub",
        description: "Booking Payment",
        order_id: order.id,

        handler: async function () {
          const bookingData = {
            userId: user?.email || "guest",
            vendorId: vendor.id,
            date,
            time,
            address: selectedAddress,
          };

          await createBooking(bookingData);

          setShowPaymentModal(false);

          alert("Payment Successful 🎉");

          navigate("/booking-success", {
            state: { date, time },
          });
        },

        // ❌ if user closes payment
        modal: {
          ondismiss: function () {
            alert("Payment Cancelled ❌");
          },
        },

        theme: {
          color: "#7c3aed",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (err) {
      console.error(err);
      alert("Payment Failed ❌");
    }
  };

  return (
    <div className="p-4">

      <Stepper step={step} />

      <div className="grid md:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="md:col-span-2 space-y-4">

          {step === "cart" && (
            <OrderSummary vendor={vendor} />
          )}

          {step === "address" && (
            <DeliveryAddress
              openModal={() => setShowAddressModal(true)}
            />
          )}

          {step === "payment" && (
            <div className="bg-white p-4 rounded-xl shadow">

              <h2 className="font-semibold mb-2">
                Confirm Booking
              </h2>

              <p><b>Date:</b> {date}</p>
              <p><b>Time:</b> {time}</p>

              <button
                onClick={() => setShowPaymentModal(true)}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded"
              >
                Continue to Pay
              </button>

            </div>
          )}

        </div>

        {/* RIGHT */}
        <div>
          <PriceDetails
            vendor={vendor}
            step={step}
            setStep={handleStepChange}
            date={date}
            time={time}
          />
        </div>

      </div>

      {/* ADDRESS MODAL */}
      {showAddressModal && (
        <AddressModal
          close={() => setShowAddressModal(false)}
        />
      )}

      {/* PAYMENT MODAL */}
      {showPaymentModal && (
        <PaymentModal
          close={() => setShowPaymentModal(false)}
          onCOD={handleCOD}
          onOnline={handleOnlinePayment}
          loading={loading}
        />
      )}

    </div>
  );
}