// import React from "react";
// import { useDispatch } from "react-redux";
// import Swal from "sweetalert2"; // Import SweetAlert library
// import { addToCart } from "../../store/cartActions";
// import products from "../data/products.json"; // Import products with images
// import { useNavigate } from "react-router-dom";

// const ProductListing = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Function to handle adding product to cart
//   const handleAddToCart = (product) => {
//     dispatch(addToCart(product));

//     // Display SweetAlert after adding product
//     Swal.fire({
//       title: "Success!",
//       text: "Product added to your cart successfully.",
//       icon: "success",
//       confirmButtonText: "OK",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         navigate("/cart"); // Navigate to the cart page
//       }
//     });
//   };

//   return (
//     <div className="container mx-auto p-8">
//       <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
//         Products
//       </h2>
//       <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
//           >
//             <img
//               src={product.image} // Fetch image from data
//               alt={product.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-2xl font-semibold text-gray-900 mb-2">
//                 {product.name}
//               </h3>
//               <p className="text-gray-700 mb-4">Price: ${product.price}</p>
//               <button
//                 onClick={() => handleAddToCart(product)} // Call the function
//                 className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full text-center hover:bg-blue-700 transition duration-300"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductListing;
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { addToCart } from "../../store/cartSlice"; // استيراد الـ action من الـ slice
import products from "../data/products.json"; // استيراد المنتجات

const ProductListing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // لاستخدام التنقل بين الصفحات

  // وظيفة للتعامل مع إضافة المنتج للعربة
  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // استدعاء الـ action لإضافة المنتج

    // إظهار SweetAlert والتنقل عند التأكيد
    Swal.fire({
      title: "Success!",
      text: "Product added to your cart successfully.",
      icon: "success",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/cart"); // التنقل إلى صفحة العربة
      }
    });
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Products
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-700 mb-4">Price: ${product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full text-center hover:bg-blue-700 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
