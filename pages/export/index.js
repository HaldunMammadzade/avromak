import React from "react";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import i18nConfig from "../../i18n.json";

const { locales } = i18nConfig;

const Export = () => {
  const { t, lang } = useTranslation("common");

  return (
    <>
      <Head>
        <title>İxrac</title>
      </Head>

      <div className="container-fluid">
        <section className="production animated fadeInRightBig">
          <h2 className="border-b pb-4">
            Avromak şirketi yarandigi gunden keyfiyyetli mehsul ve mehsullarin
            vaxtinda unvana chatdirilma prinsipleri esasinda hem yerli hem de
            xarici bazarda genish nufuz qazanmishdir.
          </h2>
          <img className="w-100 pt-4" src="/static/export1.jpg" alt="" />
        </section>

        <section className="export overflow-hidden mt-5">
          <div className="row border-t border-b ">
            <div className="col-md-5 col-12 border-r border-b py-4">
              <h2>Export haqqında</h2>
            </div>

            <div className="col-md-7 col-12 py-4 border-b">
              <p>
                Avromak MMC Azərbaycan`ın qabaqcıl makaron,un və ət məhsulları
                istehsalı və ixracı eləyən şirkətlərindən biridir. Avromak
                yarandığı gündən keyfiyyət, məhsul və vaxtında çatdırılma
                prinsipləri sayəsində həm yərli həm də xarici miqyasda nüfuzunu
                qazanmışdır. Şirkətimiz istehsal etdiyi məhsulun 90%-ni öz
                brendləri olan Favelli, Kələbək və Makara ilə ixrac bazarlarında
                satır. Güclü, gənc və dinamik ixracat komandası dünyanın bir çox
                sərgi və tədbirlərində iştirak edərək Avromak markalarının
                məqsəd və hədəflərinə uyğun olaraq fəaliyyətini davam etdirir.
              </p>

              <p>
                Avromak-ın ixrac etdiyi ölkələr arasında İordaniya, İran, İraq,
                BƏƏ, Suriya, Nigeriya, Liviya, İndoneziya, Malayziya, Tayland,
                Koreya və Gürcüstan var. Şirkət gələcəkdə ixrac şəbəkəsini
                təkmilləşdirmək üçün işlərini davam etdirir. Avromak,
                müştəriləri qarşısında götürdüyü öhdəlikləri hər zaman tam və
                vaxtında yerinə yetirəcəyini öhdəsinə götürür.
              </p>
            </div>

            <div className="col-md-5 col-12 border-r py-4">
              <img className="w-100" src="/static/export2.jpg" alt="" />
            </div>

            <div className="col-md-7 col-12 py-4 px-5">
              <h2>Export form</h2>

              <div className="form mt-4">
                <form className="row justify-content-between" >
                    <input className="col-md-5 col-12 mt-4"  type="tel" name="tel" value="" placeholder="Ad"/>
                    <input className="col-md-5 col-12 mt-4"  type="text" name="" value="" placeholder="Soyad"/>
                    <input className="col-md-5 col-12 mt-4"  type="mail" name="" value="" placeholder="Email "/>
                    <input className="col-md-5 col-12 mt-4"  type="text" name="" value="" placeholder="Ölkə"/>
                    <input className="col-md-5 col-12 mt-4"  type="text" name="" value="" placeholder="Brand"/>
                    <input className="col-md-5 col-12 mt-4" type="text" name="" value="" placeholder="Qablaşdırma"/>
                    <textarea className="col-md-6 col-12 mt-4" placeholder="Mesajınız"></textarea>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Export;
