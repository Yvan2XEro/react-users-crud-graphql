import { Link, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { UserForm } from "@/components/UserForm";

export default function EditPage() {
  const { id } = useParams();
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <Link
          to={"/"}
          className="inline-flex justify-center items-center  font-semibold text-blue-500 transition-all text-sm"
        >
          <IoIosArrowBack />
          <span>Back</span>
        </Link>
        <h1 className="text-xl my-4 flex-auto text-center">
          {id === "+" ? "New user" : "Edit user"}
        </h1>
      </div>
      <UserForm id={id === "+" ? undefined : id} />
    </div>
  );
}
