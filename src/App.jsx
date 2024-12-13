import { Outlet } from "react-router-dom";
import { Footer } from "./Component/Footer/footer";
import { HeaderMenu } from "./Component/Header/header";
import { Spin } from "antd";
import { useContext, useEffect } from "react";
import { AuthContext } from "./Component/context/auth.context";
import { getAccountAPI } from "./services/api/auth.api";

const App = () => {
  const { setUser, isAppLoading, setIsAppLoading } = useContext(AuthContext);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    try {
      const res = await getAccountAPI();
      if (res.data) {
        setUser(res.data);
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
      // Có thể thêm một cách để thông báo lỗi cho người dùng
    } finally {
      setIsAppLoading(false);
    }
  };

  return (
    <>
      {isAppLoading ? (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Spin />
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <HeaderMenu />
          <Outlet /> {/* Đây là nơi các component con sẽ được render */}
          <Footer />
        </div>
      )}
    </>
  );
};

export { App };
