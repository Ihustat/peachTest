(()=>{var t={390:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>s});const s=i.p+"./images/map.85e98d1b9e68b17ee7dc857d90ea6a7b.png"},767:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>s});const s=i.p+"./images/arrow-down-black.92beed7b31793428c366ad4049c88a87.svg"},622:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>s});const s=i.p+"./images/arrow-down.34a1b6c0514b51932a3c313c6362c027.svg"},906:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>s});const s=i.p+"./images/compensation-1.390d2566e17dca3f28be9a93c1f96706.svg"},239:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>s});const s=i.p+"./images/compensation-2.eda0c3f833f502068c47bf4c589582f7.svg"},974:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>s});const s=i.p+"./images/compensation-3.773b1c7bd8cec7d396237ff166df92e1.svg"},976:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>s});const s=i.p+"./images/compensation-4.a96ae070a85f8f925bbbd1cea0ae9455.svg"},749:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>s});const s=i.p+"./images/compensation-5.bb8882fb07a703dd1a0d3b7f06460150.svg"},914:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>s});const s=i.p+"./images/logo.efa1a5bf49da6be10996008af42805e3.svg"},566:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>s});const s=i.p+"./images/motivation-1.ee19dd0ddbf84ced4b13fa9f7bebc30a.svg"},301:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>s});const s=i.p+"./images/motivation-2.3d4cfb1af5932f178c9ba49fbc3ff92d.svg"},547:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>s});const s=i.p+"./images/motivation-3.8c2f8fb68d5f17714354a20948010221.svg"},304:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>s});const s=i.p+"./images/triangle.d7ba1447acb70d79785ae5dc478b6b5f.png"},374:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>s});const s=i.p+"./images/arr-left.4bc133b6b86bc5351044027f6b8693b0.svg"},550:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>s});const s=i.p+"./images/arr-right.b6402d72a3829baaf462bc5c7336759e.svg"},381:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>s});const s=i.p+"./images/slide-1.a88b97b6998ddbca709d124b5b10e594.png"},794:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>s});const s=i.p+"./images/slide-2.0fee7f9bd3b40730cacabadda56a9618.png"},846:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>s});const s=i.p+"./images/slide-3.e4dfe8e6b20c1e7ec985e1340536c2db.png"},48:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>s});const s=i.p+"./images/slide-4.0b687a8c34f62896227c69ade57d8f32.png"},238:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>s});const s=i.p+"./images/slide-5.1bfb972798877716a26e85e1826b68fb.png"},483:function(){!function(){"use strict";function t(t){var e=!0,i=!1,s=null,a={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function c(t){return!!(t&&t!==document&&"HTML"!==t.nodeName&&"BODY"!==t.nodeName&&"classList"in t&&"contains"in t.classList)}function o(t){var e=t.type,i=t.tagName;return!("INPUT"!==i||!a[e]||t.readOnly)||"TEXTAREA"===i&&!t.readOnly||!!t.isContentEditable}function n(t){t.classList.contains("focus-visible")||(t.classList.add("focus-visible"),t.setAttribute("data-focus-visible-added",""))}function d(t){t.hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added"))}function l(i){i.metaKey||i.altKey||i.ctrlKey||(c(t.activeElement)&&n(t.activeElement),e=!0)}function r(t){e=!1}function _(t){c(t.target)&&(e||o(t.target))&&n(t.target)}function m(t){c(t.target)&&(t.target.classList.contains("focus-visible")||t.target.hasAttribute("data-focus-visible-added"))&&(i=!0,window.clearTimeout(s),s=window.setTimeout((function(){i=!1}),100),d(t.target))}function v(t){"hidden"===document.visibilityState&&(i&&(e=!0),u())}function u(){document.addEventListener("mousemove",g),document.addEventListener("mousedown",g),document.addEventListener("mouseup",g),document.addEventListener("pointermove",g),document.addEventListener("pointerdown",g),document.addEventListener("pointerup",g),document.addEventListener("touchmove",g),document.addEventListener("touchstart",g),document.addEventListener("touchend",g)}function b(){document.removeEventListener("mousemove",g),document.removeEventListener("mousedown",g),document.removeEventListener("mouseup",g),document.removeEventListener("pointermove",g),document.removeEventListener("pointerdown",g),document.removeEventListener("pointerup",g),document.removeEventListener("touchmove",g),document.removeEventListener("touchstart",g),document.removeEventListener("touchend",g)}function g(t){t.target.nodeName&&"html"===t.target.nodeName.toLowerCase()||(e=!1,b())}document.addEventListener("keydown",l,!0),document.addEventListener("mousedown",r,!0),document.addEventListener("pointerdown",r,!0),document.addEventListener("touchstart",r,!0),document.addEventListener("visibilitychange",v,!0),u(),t.addEventListener("focus",_,!0),t.addEventListener("blur",m,!0),t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host?t.host.setAttribute("data-js-focus-visible",""):t.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var e;window.applyFocusVisiblePolyfill=t;try{e=new CustomEvent("focus-visible-polyfill-ready")}catch(t){(e=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(e)}"undefined"!=typeof document&&t(document)}()},353:(t,e,i)=>{var s=i(370),a=i(914),c=i(767),o=i(304),n=i(390),d=i(622),l=i(906),r=i(239),_=i(974),m=i(976),v=i(749),u=i(566),b=i(301),g=i(547),p=i(374),f=i(550),h=i(381),y=i(794),k=i(846),w=i(48),E=i(238),L=s(a),S=s(c),A=s(o),x=s(n),C=s(d),T='<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"/> <meta name="viewport" content="width=device-width,initial-scale=1"/> <title>Peach Test</title> </head> <body> <header class="header"> <div class="container"> <div class="header__wrapper"> <a href="#" class="header__logo"> <img src="'+L+'" alt="logo" class="header__logo-img"/> </a> <nav class="nav"> <ul class="nav__items"> <li class="nav__item"> <a href="#" class="nav__link">Облачные решения</a> </li> <li class="nav__item"> <a href="#" class="nav__link">Кибербезопасность</a> </li> <li class="nav__item"> <a href="#" class="nav__link">Импортозамещение</a> </li> <li class="nav__item"> <a href="#" class="nav__link">Цифровая трансформация</a> </li> </ul> </nav> </div> </div> </header> <section class="section top"> <div class="container"> <h1 class="title top__title"> Поставщик услуг цифровой <span>трансформации</span> и кибербезопасности </h1> <a href="https://softline.ru/" target="_blank" class="button top__button">На сайт</a> </div> </section> <section class="section section_shadow container description"> <p class="description__text"> <span class="description__text_red">Softline</span> – ведущий поставщик IT-решений и сервисов.* Мы предлагаем комплексные IT-решения, облака, программное и аппаратное обеспечение, решения по цифровой трансформации и кибербезопасности, а также широкий спектр IT-услуг. </p> </section> <section class="section about"> <div class="container"> <div class="about__items"> <div class="about__item"> <div class="about__item-title">30 лет</div> <div class="about__item-descr">на IT-рынке</div> </div> <div class="about__item"> <div class="about__item-title">4600</div> <div class="about__item-descr">сотрудников в России</div> </div> <div class="about__item"> <div class="about__item-title">25</div> <div class="about__item-descr">городов России</div> </div> <div class="about__item"> <div class="about__item-title">2000</div> <div class="about__item-descr">разработчиков</div> </div> <div class="about__item"> <div class="about__item-title">3000 +</div> <div class="about__item-descr"> сотрудников ежегодно <br/>проходят оценку и обучение </div> </div> </div> </div> </section> <section class="section map"> <div class="container container_np"> <div class="map__top"> <div class="map__top-select"> Офисы Softline <img src="'+S+'" alt="arrow down" class="map__arrow-down"/> </div> <ul class="map__top-items"> <li class="map__top-item map__top-item_active" data-region="all"> Все </li> <li class="map__top-item" data-region="moskow">Москва</li> <li class="map__top-item" data-region="center">Центр</li> <li class="map__top-item" data-region="nw">Северо-Запад</li> <li class="map__top-item" data-region="south">Юг</li> <li class="map__top-item" data-region="volga">Волга</li> <li class="map__top-item" data-region="ural">Урал</li> <li class="map__top-item" data-region="syberia">Сибирь</li> <li class="map__top-item" data-region="east">Дальний восток</li> </ul> <div class="map__select-block"> <ul class="select-block__items"> <div class="select-block__item" data-region="moskow"> Москва <img class="select-block__item-triangle" src="'+A+'" alt="triangle"/> </div> </ul> <ul class="select-block__items"> <div class="select-block__item" data-region="center"> Центр <img class="select-block__item-triangle" src="'+A+'" alt="triangle"/> </div> <div class="select-block__item" data-city="voronezh" data-region="center"> Воронеж </div> <div class="select-block__item" data-city="yaros" data-region="center"> Ярославль </div> <div class="select-block__item" data-city="belgorod" data-region="center"> Белгород </div> </ul> <ul class="select-block__items"> <div class="select-block__item" data-region="nw"> Северо-Запад <img class="select-block__item-triangle" src="'+A+'" alt="triangle"/> </div> <div class="select-block__item" data-city="sp" data-region="nw"> Санкт-Петербург </div> <div class="select-block__item" data-city="kalinin" data-region="nw"> Калининград </div> </ul> <ul class="select-block__items"> <div class="select-block__item" data-region="south"> Юг <img class="select-block__item-triangle" src="'+A+'" alt="triangle"/> </div> <div class="select-block__item" data-city="rostov" data-region="south"> Ростов-на-Дону </div> <div class="select-block__item" data-city="krd" data-region="south"> Краснодар </div> <div class="select-block__item" data-city="volgograd" data-region="south"> Волгоград </div> </ul> <ul class="select-block__items"> <div class="select-block__item" data-region="volga"> Волга <img class="select-block__item-triangle" src="'+A+'" alt="triangle"/> </div> <div class="select-block__item" data-city="kazan" data-region="volga"> Казань </div> <div class="select-block__item" data-city="samara" data-region="volga"> Самара </div> <div class="select-block__item" data-city="ufa" data-region="volga"> Уфа </div> <div class="select-block__item" data-city="orenb" data-region="volga"> Оренбург </div> <div class="select-block__item" data-city="nn" data-region="volga"> Нижний Новгород </div> </ul> <ul class="select-block__items"> <div class="select-block__item" data-region="ural"> Урал <img class="select-block__item-triangle" src="'+A+'" alt="triangle"/> </div> <div class="select-block__item" data-city="ekb">Екатеринбург</div> <div class="select-block__item" data-city="chelyab" data-region="ural"> Челябинск </div> <div class="select-block__item" data-city="perm" data-region="ural"> Пермь </div> <div class="select-block__item" data-city="surgut" data-region="ural"> Сургут </div> <div class="select-block__item" data-city="tyumen" data-region="ural"> Тюмень </div> <div class="select-block__item" data-city="izhevsk" data-region="ural"> Ижевск </div> </ul> <ul class="select-block__items"> <div class="select-block__item" data-region="syberia"> Сибирь <img class="select-block__item-triangle" src="'+A+'" alt="triangle"/> </div> <div class="select-block__item" data-city="novosib" data-region="syberia"> Новосибирск </div> <div class="select-block__item" data-city="omsk" data-region="syberia"> Омск </div> <div class="select-block__item" data-city="tomsk" data-region="syberia"> Томск </div> <div class="select-block__item" data-city="krasnoya" data-region="syberia"> Красноярск </div> <div class="select-block__item" data-city="irkutsk" data-region="syberia"> Иркутск </div> </ul> <ul class="select-block__items"> <div class="select-block__item" data-region="east"> Дальний Восток <img class="select-block__item-triangle" src="'+A+'" alt="triangle"/> </div> <div class="select-block__item" data-city="habar" data-region="east"> Хабаровск </div> <div class="select-block__item" data-city="vladivostok" data-region="east"> Владивосток </div> </ul> </div> </div> <div class="map__img-wrapper"> <img src="'+x+'" alt="map" class="map__img"/> <div class="map__dot" data-region="moskow" data-city="moskow"> Москва </div> <div class="map__dot" data-region="center" data-city="yaros"> Ярославль </div> <div class="map__dot" data-region="center" data-city="voronezh"> Воронеж </div> <div class="map__dot" data-region="center" data-city="belgorod"> Белгород </div> <div class="map__dot" data-region="nw" data-city="sp"> Санкт-Петербург </div> <div class="map__dot" data-region="nw" data-city="kalinin"> Калининград </div> <div class="map__dot" data-region="south" data-city="rostov"> Ростов-на-Дону </div> <div class="map__dot" data-region="south" data-city="volgograd"> Волгоград </div> <div class="map__dot" data-region="south" data-city="krd"> Краснодар </div> <div class="map__dot" data-region="volga" data-city="nn"> Нижний Новгород </div> <div class="map__dot" data-region="volga" data-city="samara"> Самара </div> <div class="map__dot" data-region="volga" data-city="kazan"> Казань </div> <div class="map__dot" data-region="volga" data-city="orenburg"> Оренбург </div> <div class="map__dot" data-region="volga" data-city="ufa">Уфа</div> <div class="map__dot" data-region="ural" data-city="izhevsk"> Ижевск </div> <div class="map__dot" data-region="ural" data-city="ekb"> Екатеринбург </div> <div class="map__dot" data-region="ural" data-city="chelyab"> Челябинск </div> <div class="map__dot" data-region="ural" data-city="perm">Пермь</div> <div class="map__dot" data-region="ural" data-city="surgut"> Сургут </div> <div class="map__dot" data-region="ural" data-city="tyumen"> Тюмень </div> <div class="map__dot" data-region="syberia" data-city="novosib"> Новосибирск </div> <div class="map__dot" data-region="syberia" data-city="omsk"> Омск </div> <div class="map__dot map__dot_bot" data-region="syberia" data-city="tomsk"> Томск </div> <div class="map__dot" data-region="syberia" data-city="krasnoya"> Красноярск </div> <div class="map__dot" data-region="syberia" data-city="irkutsk"> Иркутск </div> <div class="map__dot map__dot_bot" data-region="east" data-city="habar"> Хабаровск </div> <div class="map__dot" data-region="east" data-city="vladivostok"> Владивосток </div> </div> </div> </section> <section class="section mission"> <div class="container"> <h2 class="title mission__title">Миссия Softline</h2> <div class="mission__text"> Мы помогаем организациям трансформироваться, работать эффективно и безопасно в условиях цифровой экономики. </div> </div> </section> <section class="container container_np directions"> <h3 class="title directions__title">Направления бизнеса</h3> <ul class="directions__items"> <li class="directions__item"> <div class="directions__item-box"> <img src="'+C+'" alt="arrow down" class="arrow-down"/> <div class="directions__item-title">Решения Softline</div> <div class="directions__item-descr"> ГК Softline предлагает клиентам собственную линейку оборудования (ПК, серверы, торговое оборудование и проч.), разработку программных продуктов, облачных решений, решений в области информационной безопасности. </div> </div> </li> <li class="directions__item"> <div class="directions__item-box"> <img src="'+C+'" alt="arrow down" class="arrow-down"/> <div class="directions__item-title">Кибербезопасность</div> <div class="directions__item-descr"> Softline обладает всеми необходимыми государственными лицензиями для организации проектов по информационной безопасности и аттестации. </div> </div> </li> <li class="directions__item"> <div class="directions__item-box"> <img src="'+C+'" alt="arrow down" class="arrow-down"/> <div class="directions__item-title">Импортозамещение</div> <div class="directions__item-descr"> ГК Softline обладает широчайшим портфелем решений и услуг для импортозамещения, включая ПО и оборудование собственного производства. </div> </div> </li> <li class="directions__item"> <div class="directions__item-box"> <img src="'+C+'" alt="arrow down" class="arrow-down"/> <div class="directions__item-title">Облачные решения</div> <div class="directions__item-descr"> Softline использует современные облачные решения как российских, так и международных вендоров для масштабирования бизнеса своих клиентов. Подписки, услуги, трансформация. </div> </div> </li> <li class="directions__item"> <div class="directions__item-box"> <img src="'+C+'" alt="arrow down" class="arrow-down"/> <div class="directions__item-title"> Цифровая трансформация и разработка ПО </div> <div class="directions__item-descr"> Softline использует современные технологи и новые возможности для увеличения производительности бизнеса заказчика. В штате ГК Softline - 2000+ разработчиков, которые трансформируют ПО под нужды конкретного предприятия. </div> </div> </li> <li class="directions__item"> <div class="directions__item-box"> <img src="'+C+'" alt="arrow down" class="arrow-down"/> <div class="directions__item-title"> Техническая поддержка Softline </div> <div class="directions__item-descr"> 200+ инженеров, 24 часа в сутки, 7 дней в неделю, 12 месяцев в году, сервисное партнерство с 30+ мировыми производителями. </div> </div> </li> </ul> </section> <section class="section section_shadow container bonuses"> <div class="bonuses__compensation"> <div class="title bonuses__compensation-title"> Компенсационный пакет </div> <ul class="bonuses__items"> <li class="bonuses__item"> <img src="'+s(l)+'" alt="compensation 1" class="bonuses__item-img"/> <div class="bonuses__item-descr">Дмс</div> </li> <li class="bonuses__item"> <img src="'+s(r)+'" alt="compensation 2" class="bonuses__item-img"/> <div class="bonuses__item-descr">Выходной в день рождения</div> </li> <li class="bonuses__item"> <img src="'+s(_)+'" alt="compensation 4" class="bonuses__item-img"/> <div class="bonuses__item-descr">Корпоративная мобильная связь</div> </li> <li class="bonuses__item"> <img src="'+s(m)+'" alt="compensation 4" class="bonuses__item-img"/> <div class="bonuses__item-descr">Корпоративные скидки на спорт</div> </li> <li class="bonuses__item"> <img src="'+s(v)+'" alt="compensation 5" class="bonuses__item-img"/> <div class="bonuses__item-descr">LTI</div> </li> </ul> </div> <hr class="bonuses__divider"/> <div class="motivation"> <div class="motivation__title">Программа дополнительной мотивации</div> <div class="motivation__subtitle">доплата 12% от суммы</div> <ul class="bonuses__items"> <li class="bonuses__item"> <img src="'+s(u)+'" alt="compensation 1" class="bonuses__item-img"/> <div class="bonuses__item-descr">Оргтехники</div> </li> <li class="bonuses__item"> <img src="'+s(b)+'" alt="compensation 2" class="bonuses__item-img"/> <div class="bonuses__item-descr">ДМС</div> </li> <li class="bonuses__item"> <img src="'+s(g)+'" alt="compensation 4" class="bonuses__item-img"/> <div class="bonuses__item-descr">Ипотеки</div> </li> </ul> </div> </section> <section class="slider"> <div class="container"> <div class="slider__top"> <div class="title slider__title">Корпоративная жизнь</div> <div class="slider__nav"> <img src="'+s(p)+'" alt="prev arr" class="slider__arr slider__prev"/> <img src="'+s(f)+'" alt="next arr" class="slider__arr slider__next"/> </div> </div> <div class="slider__main"> <div class="slider__wrapper"> <img src="'+s(h)+'" alt="slide 1" class="slider__img"/> <img src="'+s(y)+'" alt="slide 2" class="slider__img"/> <img src="'+s(k)+'" alt="slide 4" class="slider__img"/> <img src="'+s(w)+'" alt="slide 4" class="slider__img"/> <img src="'+s(E)+'" alt="slide 5" class="slider__img"/> </div> </div> <div class="slider__dots"></div> </div> </section> </body> </html> ';t.exports=T},370:t=>{"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t)}}},e={};function i(s){if(e[s])return e[s].exports;var a=e[s]={exports:{}};return t[s].call(a.exports,a,a.exports,i),a.exports}i.d=(t,e)=>{for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.p="",(()=>{"use strict";i(483),i(353);function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function e(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const s=function(){function i(t,s,a,c,o,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),e(this,"counter",0),e(this,"width",0),this.prevBtn=document.querySelector(t),this.nxtBtn=document.querySelector(s),this.slides=document.querySelectorAll(a),this.dotsContainer=document.querySelector(c),this.sliderWrapper=document.querySelector(o),this.sliderMain=document.querySelector(n)}var s,a,c;return s=i,(a=[{key:"countWrapperWidth",value:function(){var t=this;return this.width=parseInt(window.getComputedStyle(this.sliderMain).width),this.slides.forEach((function(e){e.style.maxWidth="".concat(t.width,"px")})),this.width*this.slides.length}},{key:"createDots",value:function(){var t=this;this.slides.forEach((function(e,i){var s=document.createElement("div");s.classList.add("slider__dot"),s.setAttribute("data-count",i),t.dots.push(s),t.dotsContainer.insertAdjacentElement("beforeend",s)})),this.dots[this.counter].classList.add("slider__dot_active")}},{key:"checkCounter",value:function(){this.counter<0&&(this.counter=this.slides.length-1),this.counter>this.slides.length-1&&(this.counter=0)}},{key:"changeSlide",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.counter+=e,this.checkCounter(),this.dots.forEach((function(e,i){e.classList.remove("slider__dot_active"),t.counter===i&&e.classList.add("slider__dot_active")})),this.sliderWrapper.style.transform="translateX(-".concat(this.width*this.counter,"px)")}},{key:"setInitial",value:function(){this.sliderWrapper.style.width="".concat(this.countWrapperWidth(),"px"),this.dots=[],this.dotsContainer.innerHTML="",this.sliderInterval&&clearInterval(this.sliderInterval),this.createDots(),this.changeSlide()}},{key:"initSlider",value:function(){var t=this;this.setInitial(),this.nxtBtn.addEventListener("click",(function(){t.changeSlide(1)})),this.prevBtn.addEventListener("click",(function(){t.changeSlide(-1)})),this.dotsContainer.addEventListener("click",(function(e){var i=e.target;i&&i.classList.contains("slider__dot")&&(t.counter=+i.getAttribute("data-count"),t.changeSlide())})),document.documentElement.clientWidth<591&&(this.sliderInterval=setInterval((function(){t.changeSlide(1)}),3e3))}}])&&t(s.prototype,a),c&&t(s,c),i}();function a(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}const c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.items=document.querySelectorAll(e)}var e,i,s;return e=t,(i=[{key:"init",value:function(){this.items.forEach((function(t){t.addEventListener("click",(function(){t.classList.toggle("directions__item_active")}))}))}}])&&a(e.prototype,i),s&&a(e,s),t}();function o(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,s=new Array(e);i<e;i++)s[i]=t[i];return s}function d(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}const l=function(){function t(e,i,s,a,c,o,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.trigger=document.querySelector(e),this.main=document.querySelector(i),this.regions=document.querySelectorAll(s),this.regionsContainer=document.querySelector(a),this.selectItems=document.querySelectorAll(c),this.selectContainer=document.querySelector(o),this.dots=document.querySelectorAll(n),this.allSelectRegions=Array.from(this.selectItems).filter((function(t){return!t.getAttribute("data-city")}))}var e,i,s;return e=t,(i=[{key:"showCities",value:function(t,e){this.dots.forEach((function(i){"all"===e?i.style.display="block":i.getAttribute(t)!==e?i.style.display="none":i.style.display="block"}))}},{key:"showDropdown",value:function(t){t.classList.toggle("select-block__item_dropdown"),o(t.parentNode.children).filter((function(e){return e!==t})).forEach((function(e){t.classList.contains("select-block__item_dropdown")?e.style.display="block":e.style.display="none"}))}},{key:"chooseSelector",value:function(t,e,i){var s=t.target,a=t.target.getAttribute("data-region");if(s&&s.classList.contains(e)){(document.documentElement.clientWidth>1100||i)&&this.main.classList.remove("map__top_active"),this.regions.forEach((function(t){t.classList.remove("map__top-item_active"),t.getAttribute("data-region")===a&&t.classList.add("map__top-item_active")})),this.allSelectRegions.forEach((function(t){t.classList.remove("select-block__item_active"),t.getAttribute("data-region")===a&&t.classList.add("select-block__item_active")}));var c=Array.from(this.selectItems).filter((function(t){return t.getAttribute("data-city")}));c.forEach((function(t){t.classList.remove("select-block__item_active")})),i&&c.forEach((function(e){e.getAttribute("data-city")===t.target.getAttribute("data-city")&&e.classList.add("select-block__item_active")})),this.showCities(i?"data-city":"data-region",i?t.target.getAttribute("data-city"):a)}}},{key:"init",value:function(){var t=this;this.trigger.addEventListener("click",(function(){t.main.classList.toggle("map__top_active"),t.main.classList.contains("map__top_active")?document.querySelector(".map").style.overflow="hidden":document.querySelector(".map").style.overflow=""})),this.regionsContainer.addEventListener("click",(function(e){t.chooseSelector(e,"map__top-item",!1)})),this.selectContainer.addEventListener("click",(function(e){var i=e.target.getAttribute("data-city");t.chooseSelector(e,"select-block__item",i)})),this.allSelectRegions.forEach((function(e){e.addEventListener("click",(function(){t.showDropdown(e)}))}))}}])&&d(e.prototype,i),s&&d(e,s),t}();document.addEventListener("DOMContentLoaded",(function(){var t=new s(".slider__prev",".slider__next",".slider__img",".slider__dots",".slider__wrapper",".slider__main");t.initSlider(),new c(".directions__item").init(),new l(".map__arrow-down",".map__top ",".map__top-item",".map__top-items",".select-block__item",".map__select-block",".map__dot").init(),window.addEventListener("resize",(function(){t.initSlider()}))}))})()})();