import { Link } from "react-router-dom";
import { ListUsers } from "../components/ListUsers";

export default function HomePage() {
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h1 className="text-xl my-4">Users list</h1>
        <Link
          to={"/+"}
          className="py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
        >
          New user
        </Link>
      </div>
      <ListUsers />
    </div>
  );
}
