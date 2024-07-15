import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();


import CustomSelect from 'vanilla-js-dropdown';

// import Vue from 'vue/dist/vue.js';
// import $ from 'jquery';

import Header from '../blocks/modules/header/header.js';
import Modals from '../blocks/modules/modals/modals.js';
import Search from '../blocks/modules/search/search.js';
import Calendar from '../blocks/components/calendar/calendar.js';
import { Slider } from './modules/classes.js';



document.addEventListener('DOMContentLoaded', () => {
    globalFunctions.transferItems();
    globalFunctions.addTabsChangeHandler({
        openerDataSelector: 'tab-id',
        tabDataSelector: 'tab-body'
    });
    globalFunctions.addTabsSelectChangeHandler({
        openerDataSelector: '.tabs__select',
        tabDataSelector: 'tab-body'
    });

    globalFunctions.addReadAllHandler();

    // document.querySelectorAll('select').forEach(select => {
    //     new NiceSelect(select, {searchable: false});
    // })

    window.addEventListener('resize', () => {
        console.log('resize');
        globalFunctions.transferItems();
    });
    window.app = {
        header: new Header({
            headerClass: '.header',
            openerClass: '.header__burger_opener--js',
            burgerClass: '.header__burger_body--js',
            openedClass: 'isOpened'
        }),
        modals: new Modals({
            modalsSelector: "data-modal",
            modalsOpenerSelector: "data-modal-id",
            openedClass: "isOpened"
        }),
        search: new Search({
            openerClass: '.header__search--opener',
            closerClass: '.search_modal--closer',
            searchClass: '.search_modal--js',
            logoClass: '.header__logo--js'
        }),
        sidebarCalendar: new Calendar({
            selector: '.calendar--global',
            settings: {
                selectOtherMonths: false,
                showOtherMonths: false,
                multipleDates: true
            }
        }),
        eventsCalendar: new Calendar({
            selector: '.calendar--events',
            settings: {
                moveToOtherMonthsOnSelect: true,
                selectOtherMonths: false,
                showOtherMonths: false,
                multipleDates: true
            }
        }),
        interviews: new Slider({
            selector: '.interviews__slider--js',
            options: {
                gap: 20,
                perView: 4,
                peek: {
                    before: 0,
                    after: 137
                },
                bound: true,
                breakpoints: {
                    1366: {
                        perView: 3,
                        peek: {
                            before: 0,
                            after: 0
                        },
                    },
                    1024: {
                        perView: 2,
                        peek: {
                            before: 0,
                            after: 0
                        },
                    },
                    768: {
                        perView: 1,
                        peek: {
                            before: 0,
                            after: 0
                        },
                    }
                }
            }
        }),
        videos: new Slider({
            selector: '.video__glide--js',
            options: {
                gap: 0,
                perView: 1
            }
        }),
        events: document.querySelectorAll(".events__slider--js").forEach(slider => {
            new Slider({
                selector: slider,
                options: {
                    gap: 20,
                    perView: 3,
                    bound: true,
                    breakpoints: {
                        1366: {
                            perView: 2
                        },
                        768: {
                            perView: 1
                        }
                    }
                }
            })
        }),
        photosGallery: new Slider({
            selector: '.slider_gallery--js',
            options: {
                gap: 0,
                perView: 1
            }
        }),
        specprojectsSlider: new Slider({
            selector: '.specprojects_mobile_slider',
            options: {
                gap: 0,
                perView: 1
            }
        }),
        titledNewsSliders: document.querySelectorAll(".titled_news--slider").forEach(slider => {
            new Slider({
                selector: slider,
                options: {
                    gap: 20,
                    perView: 3,
                    bound: true,
                    breakpoints: {
                        1024: {
                            perView: 2
                        },
                        768: {
                            perView: 1
                        }
                    }
                }
            })
        }),
        selects: document.querySelectorAll(".general__select--js").forEach(select => {
            new CustomSelect({
                elem: select,
            });
        })
    };

    document.querySelectorAll('.js-Dropdown-title--custom').forEach(title => {
        title.addEventListener('click', (event) => {
            console.log(event.target.parentElement, event);
            event.target.parentElement.querySelector('.js-Dropdown-list--custom').classList.toggle('is-open');
        })
    })
    

    if (document.querySelector('.tophead_banner_image__opener--js')) {
        document.querySelectorAll('.tophead_banner_image__opener--js').forEach(banner => {
            banner.addEventListener('click', (event) => {
                event.currentTarget.closest('.tophead_banner_image__in').classList.toggle('isOpened');
            })
        })
    }

    if (document.querySelector('.archive_detail__content_items_all--js')) {
        document.querySelector('.archive_detail__content_items_all--js').addEventListener('click', (event) => {
            console.log(event.currentTarget);
            event.currentTarget.closest('.archive_detail__content').classList.toggle('isOpened');
        })
    }


    if (window.app.photosGallery.slider) {
        window.app.photosGallery.slider.on('move.after', function() {
            if (!document.querySelector('.slider_gallery--js')) return;
            setTimeout(() => {
                let height = document.querySelector('.slider_gallery--js .glide__track').offsetHeight;

                console.log(height);
                document.querySelector('.slider_gallery__thumbs').style.height = `${height}px`;
            }, 0)
        })
    }
});