"use client";

import styles from "./page.module.css";

import MenuComponent from "./componets/menu";
import ContentComponent from "./componets/content";
import { useState } from "react";

export default function Home() {

  const [activePage, setActivePage] = useState('home');

  return (
    <div className={styles.page}>
      <MenuComponent
        onClickMenu={setActivePage}
      />
      <ContentComponent
        activePage={activePage}
      />
    </div>
  );
}
