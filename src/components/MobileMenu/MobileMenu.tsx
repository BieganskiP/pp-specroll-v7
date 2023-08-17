import styles from "./MobileMenu.module.css";
import Nav from "../Nav/Nav";

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  const activeClass = isOpen ? styles.active : "";

  return (
    <div className={`${activeClass} ${styles.menu} bg-white`}>
      <Nav direction="col" />
    </div>
  );
};

export default MobileMenu;
