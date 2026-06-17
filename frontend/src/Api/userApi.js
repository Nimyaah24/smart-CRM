


// backend API base URL store cheyyunnu
const baseURL = "https://smart-crm-pcys.onrender.com/api/user";

// new user register cheyyan register API function create cheyyunnu
export const registerUser = async (data) => {

  // user registration data backend-il send cheyyunnu
  const res = await fetch(`${baseURL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  // response JSON aayi return cheyyunnu
  return res.json();
};

// user login cheyyan login API function create cheyyunnu
export const loginUser = async (data) => {

  // login credentials backend-il verify cheyyan send cheyyunnu
  const res = await fetch(`${baseURL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  // response JSON aayi return cheyyunnu
  return res.json();
};