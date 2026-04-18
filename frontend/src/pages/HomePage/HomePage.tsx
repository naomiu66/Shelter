import { MainLayout } from "../../layouts/MainLayout/MainLayout"
import styles from "./HomePage.module.scss"

export const HomePage = () => {
    return <MainLayout>
        <div className={styles.card}>
            <h2>
                Hello world!
            </h2>
        </div>
    </MainLayout>
}