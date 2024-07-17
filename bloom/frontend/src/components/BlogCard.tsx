import { Link } from "react-router-dom";

interface blogCardProps {
  title: string;
  content: string;
  author: string;
  date: string;
  description: string;
  id: string;
}

const BlogCard = ({
  title,
  content,
  author,
  date,
  description,
  id,
}: blogCardProps) => {
  return (
    <>
      <Link
        to={`/blog/${id}`}
        className="bg-white w-full h-[25%] shadow-sm shadow-slate-400 rounded-3xl p-3 cursor-pointer"
      >
        <div className="flex items-center gap-1">
          <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 p-2">
            <span className="font-medium text-gray-600 dark:text-gray-300 text-[12px]">
              {author.split("")[0]}
            </span>
          </div>
          <span className="font-extralight text-sm text-gray-400 tracking-tight">
            {author + " . " + date}
          </span>
        </div>
        <h2 className="font-bold text-xl mt-1">
          {title.length > 10 ? title.slice(0, 100) + "..." : title}
        </h2>
        <p className="font-light text-gray-800 text-sm">
          {description.length > 100
            ? description.slice(0, 200) + "..."
            : description}
        </p>
        <span>{`${Math.ceil(content.length / 60)} minutes read.`}</span>
      </Link>
    </>
  );
};

export default BlogCard;
