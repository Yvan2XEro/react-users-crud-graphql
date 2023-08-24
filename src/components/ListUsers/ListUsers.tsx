import { UserItem } from "../UserItem";
import useListUsers from "./useListUsers";

export default function ListUsers() {
  const { error, loading, users } = useListUsers();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  return (
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <thead>
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
          >
            ID
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
          >
            First Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
          >
            Last Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
          >
            Email
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
          >
            Birth Date
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
          >
            Gender
          </th>

          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
          >
            Edit
          </th>

          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
          >
            Delete
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
}
