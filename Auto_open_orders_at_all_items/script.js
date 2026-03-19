// ==UserScript==
// @name         Auto opens orders at the all items tab
// @namespace    
// @version      1.2
// @description  Auto opens orders at the all items tab, relies on the keyboard shortcut extension.
// @author       1xBee
// @match        https://cm.chasunamallny.com/Orders/Edit/*
// @match        https://cm.chasunamallny.com/orders/edit/*
// @updateURL    https://raw.githubusercontent.com/1xBee/Userscripts/refs/heads/main/Auto_open_orders_at_all_items/update.js
// @downloadURL  https://raw.githubusercontent.com/1xBee/Userscripts/refs/heads/main/Auto_open_orders_at_all_items/script.js
// @grant        none
// @run-at       document-end
// ==/UserScript==

'use strict';

if (window.location.search) {
    console.log('Search params found, exit.');
} else {
    function dispatchKeys() {
        const btn = document.querySelector('div.mb-3 > button.btn.btn-dark:nth-of-type(1)');
        if (!btn) return false;

        document.dispatchEvent(new KeyboardEvent('keydown', {
            key: 'Control',
            code: 'ControlLeft',
            ctrlKey: true,
            bubbles: true
        }));

        document.dispatchEvent(new KeyboardEvent('keydown', {
            key: 'a',
            code: 'KeyA',
            keyCode: 65,
            ctrlKey: false,
            bubbles: true
        }));

        return true;
    }

    const interval = setInterval(() => {
        if (dispatchKeys()) clearInterval(interval);
    }, 10);

    setTimeout(() => clearInterval(interval), 15000);
}