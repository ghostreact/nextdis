import NavbarSide from "../components/navbar";
import styles from "../styles/Home.module.css";

export default function RootLayout({ children }) {
  return (
    <main>
      <div className={styles.back}>
        <NavbarSide>
            {children}
        </NavbarSide>
      </div>
    </main>
  );
}
