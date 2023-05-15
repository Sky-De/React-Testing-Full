import { useContext } from "react";
import { ModeContext } from "../../context/themeContext";

const ModeIcon = () => {
const { state, dispatch } = useContext(ModeContext);
  const toggleMode = () => dispatch({ type : 'TOGGLE_MODE'});
  return (
    <div role="button" onClick={toggleMode} className="header__mode">
      <i role="img" className={`bx ${state.isDark ? 'bx-moon' : 'bx-sun'}`}></i>
    </div>
  )
}

export default ModeIcon