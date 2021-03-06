import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <div className={styles.container}>
      <Link href="/" locale={router.locale === "en" ? "ar" : "en"}>
        <button>{t("change-locale")}</button>
      </Link>
      <h1>{t("title")}</h1>
    </div>
  );
};
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
export default Home;
