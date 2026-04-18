import type { IMainLayoutProps } from "../../types/layouts/IMainLayoutProps";
import styles from "./MainLayout.module.scss";

export const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>Header</header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
};
