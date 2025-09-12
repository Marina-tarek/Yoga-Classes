import { NavLink } from "react-router-dom";

function CardCategory({ CategoryData }) {
// console.log(CategoryData);

  return (
    <div className="text-center bg-white shadow-md border border-gray-400 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition">
      <div>
        <h3 className="text-xl font-semibold text-purple-600 mb-3">
          {CategoryData.category_name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {CategoryData.category_description.slice(0,20)}...
        </p>
      </div>
<div className="text-center">
          <button className="mt-6 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition self-start">
        <NavLink to={`/category/${CategoryData.id}`}>View Classes</NavLink>
      </button>
</div>
    </div>

  );
}

export default CardCategory;
