import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <div>{t("main.message")}</div>;<div>git hub test</div>
      <div>Jandi Connect Test</div>
    </>
  );
}

export default App;
