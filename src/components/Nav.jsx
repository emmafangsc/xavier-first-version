import {FaCaretDown} from "react-icons/fa";
import images from "../constants/images";
import {useRef, useEffect, useState} from "react";
import { NavLink } from 'react-router-dom';
import React from 'react';
import {  useTranslation } from 'react-i18next';

const Nav = () => {
    const [languageMenuDesktop, setLanguageMenuDesktop] = useState(false);
    const [languageMenuMobile, setLanguageMenuMobile] = useState(false);
    const refDesktop = useRef();
    const refMobile = useRef();

    const { t, i18n } = useTranslation();

    const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

    const handleLanguageChange = (selectedLanguage) => {
        i18n.changeLanguage(selectedLanguage);
        setLanguage(selectedLanguage);
        localStorage.setItem('language', selectedLanguage);
    };

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
        setLanguage(savedLanguage);
        }
    }, []);
  
    useEffect(() => {
        const handleClickOutside = (event, ref, menu) => {
          if (!ref?.current?.contains(event.target)) {
            menu(false);
          } 
        };
        document.addEventListener("mouseup", (event) => handleClickOutside(event, refDesktop, setLanguageMenuDesktop));
        document.addEventListener("mouseup", (event) => handleClickOutside(event, refMobile, setLanguageMenuMobile));
      }, [refDesktop, refMobile]);

    function showLanguageMenuDesktop(){
        setLanguageMenuDesktop(!languageMenuDesktop);
    }
    function showLanguageMenuMobile(){
        setLanguageMenuMobile(!languageMenuMobile);
    }

    const [hamburgerMenu, setHamburgerMenu] = useState(false);
    function showHamburgerMenu(){
        setHamburgerMenu(!hamburgerMenu);
    }

    const [isX, setIsX] = useState(false);
    const buttonRef = useRef(null);
    function toggleButton(){
        setIsX(!isX);
        const button = buttonRef.current;
        button.classList.toggle('open');
    }
    const [subMenu1, setSubMenu1] = useState(false);
    function showSubMenu1(){
        setSubMenu1(!subMenu1);
    }
    const [subMenu2, setSubMenu2] = useState(false);
    function showSubMenu2(){
        setSubMenu2(!subMenu2);
    }
     function closeSubmenu(){
        setSubMenu1(false);
        setSubMenu2(false);
     }
    
    return (
        <div className="Wrapper">
            <nav className='nav hidden sm:flex justify-between px-[1rem] h-[6rem] lg:pt-12 lg:pb-8 md:px-[4rem] xl:px-[6rem] relative mt-[-5px] md:mt-[-10px]'>
                <div className="logo flex items-center text-[18px] md:text-[32px] xl:text-[36px] text-black font-bold cursor-pointer ">
                    <a href="/home">Emma's Kitchen</a>
                </div>
                <div className="menu hidden lg:flex justify-center items-center">
                    <ul className="flex flex-nowrap font-OrkneyRegular text-[16px] xl:text-[18px]">
                        <li className="cursor-pointer px-[1rem] py-[2rem] font-black hover:text-white"><NavLink to="/home">{t('language.home')}</NavLink></li>
                        <div className="subMenu group relative flex justify-center">
                            <li className="cursor-pointer px-[1rem] py-[2rem] hover:text-white"><NavLink to="/cooking-class">{ t('language.cookingClass') }</NavLink></li>
                        </div>
                        <div className="subMenu group relative flex justify-center font-OrkneyRegular">
                            <li className="cursor-pointer px-[1rem] py-[2rem] hover:text-white"><NavLink to="/private-dining">{t('language.privateDining')}</NavLink></li>
                        </div>
                        <li className="cursor-pointer px-[1rem] py-[2rem] hover:text-white"><NavLink to="/recipes">{t('language.recipes')}</NavLink></li>
                        <li className="cursor-pointer px-[1rem] py-[2rem] hover:text-white"><NavLink to="/about-me">{t('language.aboutMe') }</NavLink></li>
                    </ul>
                </div>
                <div className="right flex items-center font-OrkneyRegular">
                    <div ref={refDesktop} className="flex flex-col justify-center relative">
                        <div className="languageButton flex gap-[1px] justify-center items-center text-[14px] w-[3rem] py-1 bg-yellow text-black hover:bg-black hover:text-yellow cursor-pointer shadow-md rounded" onClick={showLanguageMenuDesktop}>
                        {language === 'en' ? t('languagebutton.english') : t('languagebutton.chinese')}
                            <FaCaretDown />
                        </div>
                        {languageMenuDesktop && (
                            <div className="languageMenu flex-col absolute bg-black p-[1rem] top-[2rem] right-0 rounded-[10px] shadow-lg w-[6rem]" >
                                <ul className="text-[12px] text-yellow text-center">
                                    <li className="pb-2 cursor-pointer hover:text-white"  onClick={() => handleLanguageChange('en')}>{t('language.english')}</li>
                                    <li className="pb-2 cursor-pointer hover:text-white" onClick={() => handleLanguageChange('zh')}>{t('language.chinese')}</li>                                        
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="hamburgerButton flex flex-col lg:hidden self-center pl-[1rem]" ref={buttonRef} onClick={()=>{toggleButton(); showHamburgerMenu(); closeSubmenu()}} >
                        <span  className="bg-black h-[3px] w-[25px] mb-[5px] relative ease-in-out duration-300"></span>
                        <span  className="bg-black h-[3px] w-[25px] mb-[5px] relative ease-in-out duration-300"></span>
                        <span  className="bg-black h-[3px] w-[25px] relative ease-in-out duration-300"></span>
                    </div>
                </div>
            </nav>
            <nav className='nav-mobile flex sm:hidden justify-between px-[1rem] py-[1rem] relative '>
                <div className="flex items-center font-OrkneyRegular">
                    <div className="hamburgerButton flex flex-col self-center cursor-pointer" ref={buttonRef} onClick={()=>{toggleButton(); showHamburgerMenu(); closeSubmenu()}} >
                        <span  className="bg-black h-[3px] w-[25px] mb-[5px] relative ease-in-out duration-300"></span>
                        <span  className="bg-black h-[3px] w-[25px] mb-[5px] relative ease-in-out duration-300"></span>
                        <span  className="bg-black h-[3px] w-[25px] relative ease-in-out duration-300"></span>
                    </div>
                    <div className="login flex pl-[1rem] cursor-pointer">
                        <img src={images.signIn} alt="signIn" className="w-[30px]"/>
                    </div>
                </div>
                <div className="logo flex items-center text-[24px] text-black font-bold cursor-pointer">
                    Emma's Kitchen
                </div>
                <div ref={refMobile} className="flex flex-col justify-center relative" >
                        <div className="languageButton flex gap-[1px] justify-center items-center text-[14px] w-[3rem] py-1 bg-yellow text-black hover:bg-black hover:text-yellow cursor-pointer shadow-md rounded" onClick={showLanguageMenuMobile}>
                        {language === 'en' ? t('languagebutton.english') : t('languagebutton.chinese')}
                            <FaCaretDown />
                        </div>
                        {languageMenuMobile && (
                            <div className="languageMenu flex-col absolute bg-black p-[0.5rem] top-[3rem] right-0 rounded-[10px] w-[5rem]" >
                                <ul className="text-[12px] text-yellow text-center">
                                    <li className="pb-2 cursor-pointer hover:text-white" onClick={() => handleLanguageChange('en')}>{t('language.english')}</li>
                                    <li className="pb-2 cursor-pointer hover:text-white" onClick={() => handleLanguageChange('zh')}>{t('language.chinese')}</li>
                                </ul>
                            </div>
                        )}
                    </div>
            </nav>
            
            <div className={`overlayMenu bg-black font-OrkneyRegular flex lg:hidden h-full w-auto px-[2rem] transition-opacity duration-500 ease-in-out ${hamburgerMenu ? "show" : "hide"}`}>
                <ul className="text-[18px] w-full text-yellow">
                    <div className="flex justify-between items-center py-6 border-b border-yellow border-opacity-50 hover:text-white cursor-pointer">
                        <li><NavLink to="/home">{ t('language.home') }</NavLink></li>
                    </div>
                    <div className="flex justify-between items-center py-6 border-b border-yellow border-opacity-50 hover:text-white cursor-pointer" onClick={showSubMenu1}>
                        <li><NavLink to="/cooking-class">{ t('language.cookingClass') }</NavLink></li>
                    </div>
                    <div className="flex justify-between items-center py-6 border-b border-yellow border-opacity-50 hover:text-white cursor-pointer" onClick={showSubMenu2}>
                        <li><NavLink to="/private-dining">{ t('language.privateDining') }</NavLink></li>
                    </div>
                    <div className="flex justify-between items-center py-6 border-b border-yellow border-opacity-50 hover:text-white cursor-pointer">
                        <li><NavLink to="/recipes">{ t('language.recipes') }</NavLink></li>
                    </div>
                    <div className="flex justify-between items-center py-6 hover:text-white cursor-pointer">
                        <li><NavLink to="/about-me">{ t('language.aboutMe') }</NavLink></li>
                    </div>
                </ul>
            </div>
            
        </div>
        
    )
}
export default Nav;
