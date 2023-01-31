import { useContext, useState } from "react";
import { Container, Hamburger, Logo, Menu, MenuItem, OverLay } from "./styles";
import { HiBars2 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Switch } from "@nextui-org/react";
import { ThemeContext } from "../../context/themeContext";

const Index = () => {
  const { mode, setMode } = useContext(ThemeContext);

  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  return (
    <Container>
      <Logo to="/">
        Z<span>ito.</span>
      </Logo>

      <Hamburger onClick={() => setToggle(!toggle)}>
        {toggle ? <IoCloseOutline /> : <HiBars2 />}
      </Hamburger>

      <OverLay open={toggle} onClick={() => setToggle(!toggle)} />
      <Menu open={toggle}>
        <MenuItem
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/"
          onClick={() => setToggle(!toggle)}
        >
          Home
        </MenuItem>
        <MenuItem
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/login"
          onClick={() => setToggle(!toggle)}
        >
          Sign In
        </MenuItem>
        <button
          onClick={() => {
            navigate("register");
            setToggle(!toggle);
          }}
        >
          Sign Up
        </button>

        <Switch
          checked={true}
          size="lg"
          onChange={() => setMode(mode === "light" ? "dark" : "light")}
        />
      </Menu>
    </Container>
  );
};

export default Index;
