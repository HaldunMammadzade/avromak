import React, { useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";
// import i18nConfig from "../../../i18n.json";
import { useRouter } from "next/router";
const Langs = () => {
  
  const { t, lang } = useTranslation("common");
  const [language, setLang] = useState("az");
  const router = useRouter();
  useEffect(() => {
    setLang(
      localStorage.getItem("language") ? localStorage.getItem("language") : "az"
    );
  }, [lang]);

  const changeLang = (lng) => {
    console.log(lng);
    localStorage.setItem("language", lng.toString());
    router.push(router.asPath, undefined, { locale: lng });
    setLang(lng);
  };
  
    return (
        <>
        <ul className="d-flex align-items-center lang-link mb-0">
            <li
              onClick={() => {
                changeLang("az");
              }}
              className={
                language == "az"
                  ? "color-black  px-2 cursor"
                  : " px-2 cursor"
              }
            >
              
              <input
                className="mr-2"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                // checked
                onClick={() => {
                    changeLang("az");
                  }}
              />
              <label className="form-check-label" for="flexRadioDefault2">
              AZ
              </label>
            </li>
            <li
              
              className={
                language == "en"
                  ? "color-black  px-2 cursor"
                  : " px-2 cursor"
              }
            >
              <input
                className="mr-2"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                onClick={() => {
                    changeLang("en");
                  }}
              />
              <label className="form-check-label" for="flexRadioDefault2">
              EN
              </label>
            </li>
            <li
              
              className={
                language == "ru" ? "color-black  px-2 cursor d-flex aling-items-center" : " px-2 cursor d-flex aling-items-center"
              }
            >
              <input
                className="mr-2"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                onClick={() => {
                    changeLang("ru");
                  }}
              />
              <label className="form-check-label" for="flexRadioDefault2">
              RU
              </label>
            </li>
          </ul>
        </>
    )
}

export default Langs