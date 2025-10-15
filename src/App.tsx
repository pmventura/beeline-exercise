import React, { useEffect, useState } from 'react';
import Button from './components/Button';
import UserTable from './components/UserTable';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const USERS_API = 'https://jsonplaceholder.typicode.com/users';

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [warning, setWarning] = useState('');

  // Fetch users on mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setWarning('');
    try {
      const res = await fetch(USERS_API);
      const data = await res.json();
      setUsers(data);
    } catch {
      setWarning('Failed to fetch users.');
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = (id: number) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const handleClear = () => {
    setUsers([]);
    setWarning('');
  };

  const handleRefetch = () => {
    if (users.length > 0) {
      setWarning('Clear all users before refetching.');
      return;
    }
    fetchUsers();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border border-gray-200">
        <h1 className="text-4xl font-extrabold mb-2 text-gray-900 tracking-tight">
          User List
        </h1>
        <div className="flex gap-4 mb-6 w-full justify-center">
          <Button
            text="Fetch Users"
            color="bg-blue-600"
            onClick={handleRefetch}
          />
          <Button text="Clear Users" color="bg-red-500" onClick={handleClear} />
        </div>
        <div className="mb-4 text-gray-700 w-full text-right">
          <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
            Users: {users.length}
          </span>
        </div>
        {warning && (
          <div className="mb-4 w-full text-yellow-800 bg-yellow-100 px-4 py-2 rounded-lg border border-yellow-200 text-center">
            {warning}
          </div>
        )}
        {loading ? (
          <div className="text-lg text-gray-500 py-8 flex items-center justify-center gap-3">
            <svg
              className="animate-spin h-6 w-6 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
            Loading users...
          </div>
        ) : users.length === 0 ? (
          <div className="flex flex-col items-center py-12 text-gray-400">
            <svg
              className="h-12 w-12 mb-2 text-blue-100"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3A2.25 2.25 0 008.25 5.25V9m10.5 0v10.125c0 1.243-1.007 2.25-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25V9m13.5 0H4.5"
              />
            </svg>
            <span className="text-lg">No users to display.</span>
          </div>
        ) : (
          <UserTable users={users} onRemove={handleRemove} />
        )}
      </div>
    </div>
  );
};

export default App;
