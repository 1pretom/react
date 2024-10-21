import * as S from "./styles";
import { Scroll, Timer } from "phosphor-react";
import babaLogo from "../../assets/baba-logo.svg";
import { NavLink } from "react-router-dom";
export function Header() {
  return (
    <S.HeaderContainer>
      <span>
        <img src={babaLogo} alt="" sizes="20" />
      </span>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </S.HeaderContainer>
  );
}
