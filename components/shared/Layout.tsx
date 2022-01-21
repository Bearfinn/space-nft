import Button from "components/base/Button";
import { useInitialize } from "hooks/useInitialize";
import { FunctionComponent } from "react";

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const { isUserInitialized, initializeUser } = useInitialize();

  return (
    <div>
      <div>
        {!isUserInitialized && (
          <div className="bg-teal-300 py-4 flex justify-center items-center gap-2 text-black">
            <div>Your account is not initialized yet.</div>
            <Button
              className="bg-stone-900 px-4 py-1 text-white rounded"
              onClick={() => initializeUser()}
            >
              Initialize Mission
            </Button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Layout;
