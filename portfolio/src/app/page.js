import styles from "./page.module.css";

import MenuComponent from "./componets/menu";

export default function Home() {
  return (
    <div className={styles.page}>
      <MenuComponent/>
    </div>
  );
}
