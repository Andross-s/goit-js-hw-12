import{a as P,S as E,i as a}from"./assets/vendor-CNqCr-V-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const I="54139037-7f576b0c871bb9407eaf16e34",R="https://pixabay.com/api/";async function p(s,o){const i={key:I,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};try{return(await P.get(R,{params:i})).data}catch(t){throw new Error(`Failed to fetch images: ${t.message}`)}}const $=new E(".gallery a",{captionsData:"alt",captionDelay:250}),y=document.querySelector(".gallery"),u=document.querySelector(".loader-container"),d=document.querySelector(".load-more-button");function b(s){const o=s.map(({webformatURL:i,largeImageURL:t,tags:e,likes:r,views:l,comments:S,downloads:q})=>`
      <li class="gallery-item">
        <a href="${t}" class="gallery-link">
          <img src="${i}" alt="${e}" loading="lazy" class="gallery-image"/>
        </a>
        <div class="gallery-info">
          <p class="info-item">
            <b>Likes</b>
            ${r}
          </p>
          <p class="info-item">
            <b>Views</b>
            ${l}
          </p>
          <p class="info-item">
            <b>Comments</b>
            ${S}
          </p>
          <p class="info-item">
            <b>Downloads</b>
            ${q}
          </p>
        </div>
          
      </li>
      `).join("");y.insertAdjacentHTML("beforeend",o),$.refresh()}function B(){y.innerHTML=""}function L(){u&&u.classList.add("visible")}function f(){u&&u.classList.remove("visible")}function v(){d&&d.classList.add("visible")}function c(){d&&d.classList.remove("visible")}const h=document.querySelector(".form"),M=document.querySelector(".load-more-button");let n=1,g="",m=0;const w=15;h.addEventListener("submit",async s=>{s.preventDefault();const o=h.querySelector('input[name="search-text"]'),i=o.value.trim();if(o.value="",!i){a.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}n=1,g=i,c(),B(),L();try{const t=await p(g,n);if(m=t.totalHits,f(),!t.hits||t.hits.length===0){a.info({title:"info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(t.hits),n*w>=m?(c(),a.info({title:"info",message:"We are sorry, but you have reached the end of search results.",position:"topRight"})):v()}catch(t){f(),a.error({title:"Error",message:t.message||"Failed to fetch images. Please try again.",position:"topRight"})}});M.addEventListener("click",async()=>{n+=1,c(),L();try{const s=await p(g,n);if(f(),!s.hits||s.hits.length===0){c(),a.info({title:"info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}b(s.hits);const o=document.querySelector(".gallery-item");if(o){const t=o.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}n*w>=m?(c(),a.info({title:"info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):v()}catch(s){f(),a.error({title:"Error",message:s.message||"Failed to fetch images. Please try again.",position:"topRight"})}});
//# sourceMappingURL=index.js.map
