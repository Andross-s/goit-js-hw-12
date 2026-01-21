import{a as P,S as E,i as a}from"./assets/vendor-CNqCr-V-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const I="54139037-7f576b0c871bb9407eaf16e34",R="https://pixabay.com/api/";async function h(s,o){const i={key:I,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};try{return(await P.get(R,{params:i})).data}catch(t){throw new Error(`Failed to fetch images: ${t.message}`)}}const $=new E(".gallery a",{captionsData:"alt",captionDelay:250}),p=document.querySelector(".gallery"),y=document.querySelector(".loader-container"),u=document.querySelector(".load-more-button");function b(s){const o=s.map(({webformatURL:i,largeImageURL:t,tags:e,likes:r,views:l,comments:S,downloads:q})=>`
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
      `).join("");p.insertAdjacentHTML("beforeend",o),$.refresh()}function B(){p.innerHTML=""}function L(){y.classList.add("visible")}function d(){y.style.display="none"}function v(){u&&u.classList.add("visible")}function c(){u&&u.classList.remove("visible")}const m=document.querySelector(".form"),M=document.querySelector(".load-more-button");let n=1,f="",g=0;const w=15;m.addEventListener("submit",async s=>{s.preventDefault();const o=m.querySelector('input[name="search-text"]'),i=o.value.trim();if(o.value="",!i){a.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}n=1,f=i,c(),B(),L();try{const t=await h(f,n);if(g=t.totalHits,d(),!t.hits||t.hits.length===0){a.info({title:"info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(t.hits),n*w>=g?(c(),a.info({title:"info",message:"We are sorry, but you have reached the end of search results.",position:"topRight"})):v()}catch(t){d(),a.error({title:"Error",message:t.message||"Failed to fetch images. Please try again.",position:"topRight"})}});M.addEventListener("click",async()=>{n+=1,c(),L();try{const s=await h(f,n);if(d(),!s.hits||s.hits.length===0){c(),a.info({title:"info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}b(s.hits);const o=document.querySelector(".gallery-item");if(o){const t=o.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}n*w>=g?(c(),a.info({title:"info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):v()}catch(s){d(),a.error({title:"Error",message:s.message||"Failed to fetch images. Please try again.",position:"topRight"})}});
//# sourceMappingURL=index.js.map
