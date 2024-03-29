import Nav from "../components/Nav";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import CookingSection1 from "../containers/CookingSection1";
import CookingFeatures from "../containers/CookingFeatures";
import Testimonial from "../components/Testimonial";
import CookingSection2 from "../containers/CookingSection2";
import ScrollToTop from "../components/ScrollToTop";
import { useTranslation } from 'react-i18next';
function CookingClass() {
    const { t } = useTranslation();
    return (
        <div className="relative m-auto max-w-screen-2xl" id='nav' >
            <div className='header sticky top-0 z-20  bg-yellow'>
            <Nav />
            </div>
            <div>
                <Header title={t('language.cookingClass-header')}/>
            </div>
            <div className="mt-16">
                <CookingSection1 />
            </div>
            <div className="mt-16">
                <CookingFeatures />
            </div>
            <div className="mt-16">
                <CookingSection2 />
            </div>
            <div className="mt-16">
                <Testimonial />
            </div>
            <div className='newsletterWrapper relative z-10'>
            <Newsletter />
            </div>
            <div className='footerWrapper relative z-10 '>
                <Footer />
            </div>
            <BackToTopButton/>
            <ScrollToTop />
        </div>
    )
}

export default CookingClass;