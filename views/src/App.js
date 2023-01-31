import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import router from "./routes";
import "@fontsource/fira-code";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, reset } from "./features/auth/AuthSlice";
import useAxiosPrivate from "./hook/useAxiosPrivate";

function App() {
   const { token, isError } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
   const axiosPrivate = useAxiosPrivate();


 useEffect(() => {
   if (token) {
     dispatch(loadUser(axiosPrivate));
    
     dispatch(reset());
   }
 }, [dispatch, token, axiosPrivate]);

  return (
    <div className="App">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
