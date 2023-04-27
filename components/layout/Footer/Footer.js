import React from "react";
import useTranslation from "next-translate/useTranslation";
import i18nConfig from "../../../i18n.json";

const { locales } = i18nConfig;
const Footer = () => {
  const { t, lang } = useTranslation("common");
  return (
    <div className="footer mt-5">
      {/* <div className="container-fluid pt-5 pb-3">
                <div className="row align-items-strech p-0 m-0">
                    <div className="col-lg-6 col-12 d-flex justify-content-between p-0">
                        <div>
                            <a href="/"><img src="/static/logo2.svg" alt="" /></a>
                        </div>
                        <div className="address">
                            <p className="cursor">{t('address1')}
                                <br />
                                {t('address2')},
                                <br />
                                {t('address3')}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 text-md-left d-flex p-0 mt-md-0 mt-4 justify-content-between">
                        <ul className="p-0 page-links">
                            <li><a href="/about-us">{t('about')}</a></li>
                            <li><a href="/products">{t('products')}</a></li>
                            <li><a href="/projects">{t('projects')}</a></li>
                            <li><a href="/sustainability">{t('sustain')}</a></li>
                            <li><a href="/contact">{t('contact')}</a></li>
                        </ul>

                        <ul className="p-0">
                            <li><a href="https://www.facebook.com/5aConstructionn?mibextid=LQQJ4d" target="_blank">FACEBOOK</a></li>
                            <li><a href="https://instagram.com/5a_construction?igshid=YmMyMTA2M2Y=" target="_blank">INSTAGRAM</a></li>
                            <li><a href="https://www.linkedin.com/company/5a-construction/" target="_blank">LINKEDIN</a></li>
                        </ul>
                    </div>
                </div>

                <div className="contact-footer">
                    <p className="m-0">+99455/703130011</p>
                    <p className="m-0">sales@5aconstruction.co</p>
                </div>

                <div className="d-sm-flex d-block justify-content-sm-between down pt-4">
                    <address className="text-uppercase">2022 5A Construction  |  Bütün hüquqlar qorunur</address>
                    <address>DESIGN AND DEVELOPED BY MARTIAN STUDIO</address>
                </div>
            </div> */}
      <div className="footer-img d-flex ">
        <div>
          <img src="/static/footer1.jpg" alt="" />
        </div>
        <div>
          <img src="/static/footer2.jpg" alt="" />
        </div>
        <div>
          <img src="/static/footer3.jpg" alt="" />
        </div>
        <div>
          <img src="/static/footer4.jpg" alt="" />
        </div>
        <div>
          <img src="/static/footer5.jpg" alt="" />
        </div>
        {/* <img src="/static/footer2.jpg" alt="" />
        <img src="/static/footer3.jpg" alt="" />
        <img src="/static/footer4.jpg" alt="" />
        <img src="/static/footer5.jpg" alt="" /> */}
      </div>
      <div className="container-fluid">
        <h1 className="my-3">AVROMAK</h1>
        <div className="d-flex justify-content-between " >
          <div className="d-flex">
            <a href="/about-us" className="mr-sm-4 mr-2">
              {t("about")}
            </a>
            <a href="/production" className="mr-sm-4 mr-2">
            İstehsalat
            </a>
            <a href="/about-us" className="mr-sm-4 mr-2">
            Retail
            </a>
            <a href="/about-us" className="mr-sm-4 mr-2">
            İxrac  
            </a>
            <a href="/contact">Əlaqə</a>
          </div>
          <div className="d-flex">
            <a href="/about-us" className="mr-sm-4 mr-2 d-flex">
              Instagram
              <img className="ml-1" src="/static/arrow-footer.png" alt="" />
            </a>
            <a href="/about-us" className="mr-sm-4 mr-2 d-flex">
              Facebook
              <img className="ml-1" src="/static/arrow-footer.png" alt="" />
            </a>
            <a href="/about-us" className="mr-sm-4 mr-2 d-flex">
              Twitter
              <img className="ml-1" src="/static/arrow-footer.png" alt="" />
            </a>
            <a href="/about-us" className="d-flex">
              Linkedin
              <img className="ml-1" src="/static/arrow-footer.png" alt="" />
            </a>
          </div>
        </div>

        <div className="d-flex justify-content-between info mt-sm-5 mt-3 pt-sm-4 pt-0 footer-border pb-4">
          <div className="d-flex align-items-center">
            <span className="mr-2">Ünvan:</span>
            <p className="m-0">Ziya Bünyadov pr. 13, <br/>
            Bakı, Azərbaycan AZ1108</p>
          </div>

          <div className="d-flex align-items-center">
            <span className="mr-2">İş vaxtı:</span>
            <p className="m-0">08.00 – 17:00/Be – Cm</p>
          </div>

          <div className="d-flex align-items-center">
            <span className="mr-2">Email: </span>
            <p className="m-0">office@avromak.az</p>
          </div>

          <div className="d-flex align-items-center">
            <span className="mr-2">Telefon: </span>
            <p className="m-0">(+994) 012 310 11 16</p>
          </div>
        </div>

        <div className="d-sm-flex d-block justify-content-between my-4 copy-writer">
          <p>2022 Avromak MMC  |  Bütün hüquqlar qorunur</p>
          <p>Design and development by Martian Studio</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
