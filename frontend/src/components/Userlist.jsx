import React from "react";

const Userlist = () => {
  const users = [
    {
      id: 1,
      fullName: "John Doe",
      username: "john_doe",
      avatar: "https://avatar.iran.liara.run/public/boy",
    },
    {
      id: 2,
      fullName: "Jane Doe",
      username: "jane_doe",
      avatar: "https://avatar.iran.liara.run/public/boy",
    },
    {
      id: 3,
      fullName: "Jane Doe",
      username: "jane_doe",
      avatar: "https://avatar.iran.liara.run/public/boy",
    },
    {
      id: 4,
      fullName: "Jane Doe",
      username: "jane_doe",
      avatar: "https://avatar.iran.liara.run/public/boy",
    },
    {
      id: 5,
      fullName: "Jane Doe",
      username: "jane_doe",
      avatar: "https://avatar.iran.liara.run/public/boy",
    },
    {
      id: 6,
      fullName: "Jane Doe",
      username: "jane_doe",
      avatar: "https://avatar.iran.liara.run/public/boy",
    },
    {
      id: 7,
      fullName: "Jane Doe",
      username: "jane_doe",
      avatar: "https://avatar.iran.liara.run/public/boy",
    },
    {
      id: 8,
      fullName: "Jane Doe",
      username: "jane_doe",
      avatar: "https://avatar.iran.liara.run/public/boy",
    },
    {
      id: 9,
      fullName: "Jane Doe",
      username: "jane_doe",
      avatar: "https://avatar.iran.liara.run/public/boy",
    },
    {
      id: 10,
      fullName: "Jane Doe",
      username: "jane_doe",
      avatar: "https://avatar.iran.liara.run/public/boy",
    },
  ];

  return (
    <div className="p-4">
      <div className="">
        {users.map((user) => (
          <div className="">
            <div className="flex items-center space-x-2 p-2">
              <img
                src={user.avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-grow">
                <h3 className="font-semibold text-white">{user.fullName}</h3>
                <p className="text-gray-500 text-sm">@{user.username}</p>
              </div>

              <button className="ml-auto px-2 py-1 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600">
                Follow
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Userlist;
