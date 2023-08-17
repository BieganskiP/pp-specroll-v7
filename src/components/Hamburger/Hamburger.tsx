import styles from "./Hamburger.module.css";

interface HamburgerProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, setIsOpen }) => {
  
  const activeClass = isOpen ? styles.active : "";

  const handleClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div
      className={`${styles.menuButton} ${activeClass}`}
      onClick={handleClick}
    >
      <span className={`${styles.bar}`}></span>
      <span className={`${styles.bar}`}></span>
      <span className={`${styles.bar}`}></span>
    </div>
  );
};

export default Hamburger;
