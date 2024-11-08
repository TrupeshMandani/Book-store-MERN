/**
 * The NewsCard component in React renders a card displaying news item details such as image, title,
 * and description with hover effects.
 * @returns The NewsCard component is being returned. It is a functional component that displays a news
 * card with an image, title, and description. The component takes an `item` prop as input, which
 * contains information about the news item to be displayed. The component structure includes a link
 * wrapping an image, the title displayed as a heading, and the description displayed as a paragraph.
 */
import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ item }) => {
  return (
    <div className="rounded-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-full gap-4">
        <div className="sm:h-full sm:flex-shrink-0 border rounded-md overflow-hidden">
          <Link to="/">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-all duration-200"
            />
          </Link>
        </div>
        <div className="flex-grow">
          <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
            {item.title}
          </h3>
          <p className="text-gray-600 mb-5">
            {item.description.length > 80
              ? `${item.description.slice(0, 80)}...`
              : item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
