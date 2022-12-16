import axios from "axios";
import { toast } from "react-toastify";
// import dotenv from "dotenv";
// dotenv.config();

// const url=`https://rooton-crs.onrender.com/:${process.env.PORT}`
const url="http://localhost:5001"
// const registerUser = (userData, navigate) => {
//   axios
//     .post(url + "register", userData)
//     .then(() => {
//       toast("User registered");
//       navigate("/login");
//     })
//     .catch((err) => {
//       console.log(err);
//       toast.error(
//         `User registration failed (${String(err.response.data.message)})`
//       );
//     });
// };

// const loginUser = (loginData, setLoggedUser) => {
//   axios
//     .post(url + "login", loginData)
//     .then((res) => {
//       localStorage.setItem("user", JSON.stringify(res.data));
//       setLoggedUser(res.data);
//     })
//     .catch((err) => {
//       console.log(err);
//       toast.error(`User login failed (${String(err.response.data.message)})`);
//     });
// };


const profiledetail = (userData, navigate) => {
  axios
    .post({url},"/userRegister" ,userData)
    .then(() => {
      toast("User Profile");
      navigate('/userRegister')
    })
    .catch((err) => {
      console.log(err);
      toast.error(
        `profile failed (${String(err.response.data.message)})`
      );
    });
};

const collegedetail = (userData, navigate) => {
  axios
    .post({url},"/collegeRegister" ,userData)
    .then(() => {
      toast("College register successfully");
      navigate('/collegeRegister')
    })
    .catch((err) => {
      console.log(err);
      toast.error(
        `college profile failed (${String(err.response.data.message)})`
      );
    });
};


// const getAllUsers = (setUsers, token) => {
//   axios
//     .get(url, { headers: { authorization: "Bearer " + token } })
//     .then((res) => setUsers(res.data))
//     .catch((err) => {
//       console.log(err);
//       toast.error(
//         `Unable to fetch all users (${String(err.response.data.message)})`
//       );
//     });
// };

// const updateProfile = (userData, setUser, loggedUser) => {
//   axios
//     .put(url + "update-profile", userData, {
//       headers: { authorization: "Bearer " + loggedUser.token },
//     })
//     .then((res) => {
//       setUser(res.data);
//       toast.success("User Profile updated");
//     })
//     .catch((err) => {
//       const { id, name, username, email } = loggedUser;
//       setUser({ id, name, username, email });
//       console.log(err);
//       toast.error(
//         `Unable to update user profile (${String(err.response.data.message)})`
//       );
//     });
// };

// const updatePassword = (oldPassword, newPassword, token) => {
//   axios
//     .put(
//       url + "update-password",
//       { oldPassword, newPassword },
//       {
//         headers: { authorization: "Bearer " + token },
//       }
//     )
//     .then(() => toast.success("Password updated"))
//     .catch((err) => {
//       console.log(err);
//       toast.error(
//         `Unable to update password (${String(err.response.data.message)})`
//       );
//     });
// };

export {  profiledetail,collegedetail };
