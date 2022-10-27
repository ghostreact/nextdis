import FormInput from "../components/FormInput";
import styles from "../styles/Home.module.css";
import RootLayout from "./layout";

export default function Home({ children }) {
  return (
    <RootLayout>
      <div className={styles.back}>
        <FormInput /> {children}
      </div>
    </RootLayout>
  );
}
