export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

type UserTableProps = {
  users: User[];
  onRemove: (id: number) => void;
};

const UserTable: React.FC<UserTableProps> = ({ users, onRemove }) => (
  <div className="overflow-x-auto w-full transition-shadow duration-300 hover:shadow-2xl rounded-xl">
    <table className="min-w-full bg-white rounded-xl border-separate border-spacing-0">
      <thead>
        <tr>
          <th className="px-4 py-3 bg-blue-50 text-left text-xs font-bold text-blue-700 uppercase tracking-wider rounded-tl-xl border-b border-gray-200">
            ID
          </th>
          <th className="px-4 py-3 bg-blue-50 text-left text-xs font-bold text-blue-700 uppercase tracking-wider border-b border-gray-200">
            Name
          </th>
          <th className="px-4 py-3 bg-blue-50 text-left text-xs font-bold text-blue-700 uppercase tracking-wider border-b border-gray-200">
            Username
          </th>
          <th className="px-4 py-3 bg-blue-50 text-left text-xs font-bold text-blue-700 uppercase tracking-wider border-b border-gray-200">
            Email
          </th>
          <th className="px-4 py-3 bg-blue-50 border-b border-gray-200 rounded-tr-xl"></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, idx) => (
          <tr
            key={user.id}
            className={`transition hover:bg-blue-50 fade-in ${
              idx === users.length - 1 ? '' : 'border-b border-gray-100'
            }`}
          >
            <td className="px-4 py-3 text-sm text-gray-900 font-medium">
              {user.id}
            </td>
            <td className="px-4 py-3 text-sm text-gray-800">{user.name}</td>
            <td className="px-4 py-3 text-sm text-gray-800">{user.username}</td>
            <td className="px-4 py-3 text-sm text-gray-800">{user.email}</td>
            <td className="px-4 py-3 text-right">
              <button
                onClick={() => onRemove(user.id)}
                className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded bg-red-500 hover:bg-red-600 text-white font-semibold shadow-sm transition focus:outline-none focus:ring-2 focus:ring-red-300"
                aria-label="Remove user"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default UserTable;
