import { Route, Routes } from "react-router-dom";
import RouteName from "./routes";





const UserRouterView = () => {

return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserLayout {...globalProps}/>}>
          <Route
            path={RouteName.USER.BLOG_PAGE}
            Component={() => <BlogPageScreen {...globalProps} />}
          /> 
        
      </Routes>
    </BrowserRouter>
  );
};

export default UserRouterView;
