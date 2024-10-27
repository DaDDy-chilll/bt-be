import UserRouterView from "@/navigations/UserRouterView";
import mutations, { MutationType } from "@/networks/mutations";

export type GlobalProps = {
  mutations: MutationType;
};

const App = () => {
  const globalProps: GlobalProps = {
    mutations,
  };

  return (
    <>
      <UserRouterView globalProps={globalProps} />
    </>
  );
};

export default App;
