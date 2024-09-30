import type { Metadata } from "next";
import "./globals.css";
import styles from "./page.module.css";
import WaveBackground from "@/components/Background/Background";
import Header from "@/components/Header";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "NDH",
  description: "남동현 메인페이지",
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <WaveBackground />
      <body>
        <WaveBackground />
        <main className={styles.main}>
          <section className={styles.sectionLeft}>
            <h1 className={styles.nameFirst}>Nam DongHyeon</h1>
            <p>다양한 경험에 접근하는 것이 목표입니다.</p>
            <Header />
          </section>
          <section className={styles.sectionRight}>
            <ClientLayout>{children}</ClientLayout>
          </section>
        </main>
      </body>
    </html>
  );
}

export default Layout;
