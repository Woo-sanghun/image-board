import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return <div>{t("main.message")}</div>;
}

export default App;
