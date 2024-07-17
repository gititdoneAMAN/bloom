import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();

  function handleClick() {
    alert("Logging Out");
    localStorage.removeItem("token");
    navigate("/signin");
  }

  return (
    <div className="h-screen w-full flex items-center justify-center p-4">
      <div className="relative">
        <div className="absolute top-4 right-0 bg-[#131842] rounded-3xl py-2 px-4">
          <button onClick={handleClick} className="text-white font-semibold">
            Logout
          </button>
        </div>
        <h1 className="text-xl font-medium">Hello! Aman</h1>
        <p className="text-3xl font-semibold">Dashboard</p>
        <div className="lg:w-[800px] lg:h-[400px] w-[400px] h-[400px] bg-white rounded-3xl mt-2 grid md:grid-cols-2 md:grid-rows-2">
          <div className="flex items-center justify-center gap-2 border-r border-b cursor-pointer">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
            </span>
            <p className="text-xl md:text-2xl">Total Posts Created: 24</p>
          </div>
          <div className="flex items-center justify-center gap-2 border-l border-b cursor-pointer">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
            </span>
            <p className="text-xl md:text-2xl">Total Posts Read: 24</p>
          </div>
          <div className="flex items-center justify-center gap-2 border-r border-t cursor-pointer">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
            <p className="text-xl md:text-2xl">Total Time Spent: 24 hrs</p>
          </div>
          <div className="flex items-center justify-center gap-2 border-l border-t cursor-pointer">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </span>
            <p className="text-xl md:text-2xl">Total Posts Views: 24</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
