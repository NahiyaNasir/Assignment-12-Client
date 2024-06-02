import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProbider";

const MyProfile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const displayName = form.get("displayName");
    const photoURL = form.get("photoURL");
    updateUser(displayName, photoURL).then(() => {
      console.log(user);
    });
  };
  return (
    <div className="  mt-7  grid-cols-2 ">
      <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-900 text-gray-100">
        <img
          src={user?.photoURL}
          alt=""
          className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center divide-y divide-gray-700">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">
              {user?.displayName}
            </h2>
            <h2 className="text-xl font-semibold sm:text-2xl">{user?.email}</h2>
          </div>
          {/* form */}
        </div>
      </div>

      <div>
        <form onSubmit={handleUpdate} className=" bg-teal-300 mt-7 w-1/2">
          <div className="form-control p-2">
            <label className="">Name: </label>
            <input
              name="displayName"
              type="text"
              placeholder="Name"
              className="form-control p-3"
              defaultValue={user?.displayName}
            />
          </div>
          <div className="form-control p-2">
            <label>Photo URL: </label>
            <input name="photoURL" type="text" placeholder="Photo" className="form-control p-3" defaultValue={user?.photoURL} />
          </div>

          <div className=" form-control p-2">
            <label>Email: </label>
            <input
              readOnly
              name="email"
              className="form-control p-3"
              type="text"
              value={user?.email}
            />
          </div>
          <button className="btn my-6 ml-4" type="submit">
            {" "}
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
