var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequire7bc7;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequire7bc7=n);var r=n("iQIUW");const i={form:document.querySelector(".form"),firstDelay:document.querySelector('[name="delay"]'),delayStep:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),button:document.querySelector("button")};function l(e,t){return new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}i.form.addEventListener("submit",(function(e){e.preventDefault();const t=Number(i.firstDelay.value),o=Number(i.delayStep.value),n=Number(i.amount.value);if(t>0&&o>0&&n>0)for(let e=0;e<n;e+=1)l(e,t+o*e).then((({position:e,delay:t})=>{r.Notify.success(`✅ Fulfilled promise ${e+1} in ${t}ms`)})).catch((({position:e,delay:t})=>{r.Notify.failure(`❌ Rejected promise ${e+1} in ${t}ms`)}));else r.Notify.failure("No no no firstDelay, delayStep, amount must be > 0")}));
//# sourceMappingURL=03-promises.24c27454.js.map