// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { removeFromCart, updateCartItem } from "../../store/cartActions";

// const Cart = () => {
//   const cart = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   return (
//     <div className="container mx-auto p-8">
//       <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
//         Your Shopping Cart
//       </h2>
//       {cart.length === 0 ? (
//         <p className="text-center text-gray-500 text-lg">Your cart is empty</p>
//       ) : (
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {cart.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
//             >
//               {/* إضافة الصورة وتنسيقها بشكل دائري */}
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
//               />
//               <h3 className="text-xl font-semibold mb-2 text-gray-900 text-center">
//                 {item.name}
//               </h3>
//               <p className="text-gray-600 text-center">Price: ${item.price}</p>
//               <div className="mt-4 flex items-center justify-center">
//                 <label className="text-gray-700 mr-2">Quantity:</label>
//                 <input
//                   type="number"
//                   className="border border-gray-300 rounded p-2 w-20 text-center"
//                   value={item.quantity}
//                   onChange={(e) =>
//                     dispatch(updateCartItem(item.id, Number(e.target.value)))
//                   }
//                 />
//               </div>
//               <button
//                 onClick={() => dispatch(removeFromCart(item.id))}
//                 className="mt-4 bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600 transition duration-300 w-full"
//               >
//                 Remove from Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateCartItem } from "../../store/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items); // استخدام الـ selector لجلب بيانات العربة
  const dispatch = useDispatch();

  const handleQuantityChange = (item, quantity) => {
    if (quantity < 1) return; // تأكد من عدم السماح بالقيم السالبة أو الصفر
    dispatch(updateCartItem({ id: item.id, quantity }));
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Your Shopping Cart
      </h2>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              {/* إضافة الصورة وتنسيقها بشكل دائري */}
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 text-center">
                {item.name}
              </h3>
              <p className="text-gray-600 text-center">Price: ${item.price}</p>
              <div className="mt-4 flex items-center justify-center">
                <label className="text-gray-700 mr-2">Quantity:</label>
                <input
                  type="number"
                  className="border border-gray-300 rounded p-2 w-20 text-center"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item, Number(e.target.value))
                  }
                />
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="mt-4 bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600 transition duration-300 w-full"
              >
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
