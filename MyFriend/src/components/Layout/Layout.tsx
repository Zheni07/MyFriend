import { ReactNode } from "react";
import { Link } from "react-router-dom";
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header>
        <nav>
          <div className="logo-container">
            <img src="https://res.cloudinary.com/dzrp3c1cv/image/upload/v1740601496/g2g03wloxkvdiacox5uv.png" alt="My friend" width="85" height="80" />
          </div>
          <div className="nav-buttons">
            <Link to={"/"}>Начало</Link>
            {<Link to={"/games"} id="games-button">Игри</Link>} 
          </div>
        </nav>
      </header>
      <div className="clouds">
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
        <div className="cloud cloud3"></div>
      </div>
      <main style={{minHeight: "100vh", width: "100%", margin: "0 auto"}} className="d-flex justify-content-evenly align-items-center flex-wrap">
        {children}
      </main>
    </>
  );
};

export default Layout;
