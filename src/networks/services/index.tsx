import axios from "axios";
const baseURL = import.meta.env.VITE_BASEURL;

type ResetPasswordData = {
  old_pwd ?: string;
  new_pwd: string;
};

// import { useSelector } from "react-redux";
// import { selectToken } from "@/store/auth/getResetPasswordTokenSlice";
// const resetPasswordToken = useSelector(selectToken);

// const validateStatus: (status: number) => boolean = (status) => {
//   if (status === 401) {
//     localStorage.removeItem("isAdmin");
//     localStorage.removeItem("token");
//     localStorage.removeItem("loginUser");
//     location.href = "/login";
//   }
//   return status >= 200 && status < 300;
// }


const authInstance = axios.create({
  baseURL: baseURL,
  headers: {
    common: {
      "Content-Type": "application/json",
    }
  }
});

  
const userInstance = axios.create({
  baseURL: baseURL,
  headers: {
    common: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  },
  // validateStatus
});

const ResetPasswordInstance = axios.create({
  baseURL: baseURL,
  headers: {
    common: {
      "Content-Type": "application/json",
    }
  },
  // validateStatus
});


const mockoonInstance = axios.create({
  baseURL: baseURL,
  headers: {
    common: {
      "Content-Type": "application/json"
    }
  },
})




userInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});


const ApiService = {
  auth: {
    post: authInstance.post,
  },
  user: {
    post: userInstance.post,
    get: userInstance.get,
    delete: userInstance.delete,
  },
  mockoon: {
    get: mockoonInstance.get,
    post: mockoonInstance.post,
    put: mockoonInstance.put,
    delete: mockoonInstance.delete,
  },
  resetPassword:{
    post: (url:string, data:ResetPasswordData, token:string) => ResetPasswordInstance.post(url, data, { headers: { Authorization: `Bearer ${token}` } }),
  }
};

export default ApiService;
