import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeFromWishList,clearAllFromWishList } from "../reducx/wishListSlice";

function Favourite() {
  const wishList = useSelector((state) => state.wishList);
  let dispatsh = useDispatch();
  //   const count = wishList.length;

  return (
    <section className="min-h-[25vh]">
      <div className="container mx-auto">
        <div className="p-5 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {wishList.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 border border-gray-400"
            >
              <img
                src={item.url_svg_alt}
                alt={item.english_name}
                className="w-full h-48 object-contain"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold text-purple-600 mb-2">
                  {item.english_name}
                </h3>
                <p className="text-gray-600 text-md leading-relaxed">
                  {item.pose_description.slice(0, 30)}...
                </p>

                <div className="py-3.5 flex justify-between items-center">
                  <NavLink
                    to={`/class/${item.id}`}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition"
                  >
                    Join Class
                  </NavLink>

                  <button
                    onClick={() => dispatsh(removeFromWishList(item.id))}
                    className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition flex items-center gap-2"
                  >
                    <FaHeart className="text-white" />
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center my-5">
          <button onClick={()=>{dispatsh(clearAllFromWishList())}} className="bg-red-500 text-white px-3 py-2 rounded-lg">
            Remove All
          </button>
        </div>
      </div>
    </section>
  );
}

export default Favourite;
