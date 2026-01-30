import { Link } from "react-router";
import { FaBookmark, FaEye, FaShare, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    author,
    thumbnail_url,
    total_view,
    rating,
    details,
  } = news;

  const publishedDate = new Date(author?.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="card bg-base-100 shadow-md m-2">
      {/* Author Section */}
      <div className="flex items-center justify-between p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold text-sm">{author?.name}</p>
            <p className="text-xs text-gray-500">{publishedDate}</p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-500">
          <button className="btn btn-ghost btn-md"><FaBookmark /> </button>
          <button className="btn btn-ghost btn-md"><FaShare/> </button>
        </div>
      </div>

      {/* Thumbnail */}
      <figure>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-56 object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body">
        <h2 className="card-title text-lg">{title}</h2>

        <p className="text-sm text-gray-600">
          {details.slice(0, 180)}...
          <Link
            to={`/news/${id}`}
            className="text-primary font-semibold ml-1"
          >
            Read More
          </Link>
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4">
          {/* Rating */}
          <div className="flex items-center gap-1 text-orange-400">
            {[...Array(rating?.number)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="ml-1 text-gray-600 text-sm">
              {rating?.number}
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
