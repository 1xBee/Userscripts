// ==UserScript==
// @name         Auto sort deliverires on date scheduled desc
// @version      1.0
// @description  Clicks the sort header twice on Deliveries page load
// @author       1xBee
// @match        https://cm.chasunamallny.com/Deliveries
// @match        https://cm.chasunamallny.com/Deliveries?*
// @updateURL    https://raw.githubusercontent.com/1xBee/Userscripts/refs/heads/main/Auto_sort_deliveries/update.js
// @downloadURL  https://raw.githubusercontent.com/1xBee/Userscripts/refs/heads/main/Auto_sort_deliveries/script.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Exclude paths like /Deliveries/something
    if (window.location.pathname !== '/Deliveries') return;

    function clickTwice() {
        const el = document.querySelectorAll(
            '.rt-th.rt-resizable-header.-cursor-pointer'
        )[3];

        if (!el) return false;

        el.click();
        setTimeout(() => el.click(), 0);
        return true;
    }

    // Poll until the element exists
    const interval = setInterval(() => {
        if (clickTwice()) clearInterval(interval);
    }, 10);

    // Give up after 15 seconds
    setTimeout(() => clearInterval(interval), 15000);

})();
