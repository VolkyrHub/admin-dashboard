import "./navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" className="logoimg" />
        <span>VolkyrHub</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://avatars.githubusercontent.com/u/86340539?s=400&u=bf32fde601ddc418384694fd74f1e9e5ae2bfa3a&v=4"
            alt=""
          />
          <span>Volkyr</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};
