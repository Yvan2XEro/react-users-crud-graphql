import { User } from "@/types";
import { FormattedDate } from "react-intl";
import { Link } from "react-router-dom";
import useUserItem from "./useUserItem";

type IProps = {
  user: User;
};
export default function UserItem({ user }: IProps) {
  const { deletUser } = useUserItem(user);
  return (
    <tr className="odd:bg-white even:bg-gray-100 dark:odd:bg-slate-900 dark:even:bg-slate-800">
      <td>{user.id}</td>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>{user.email}</td>
      <td>
        <FormattedDate value={new Date(user.birth_date)} />
      </td>
      <td>{user.gender}</td>
      <td>
        <Link
          to={`/${user.id}`}
          className="py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 m-1 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
        >
          Edit
        </Link>
      </td>
      <td>
        <button
          onClick={deletUser}
          className="py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 m-1 font-semibold text-red-500 hover:text-white hover:bg-red-500 hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
