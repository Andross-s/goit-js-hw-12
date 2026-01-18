import{a as y,S as d,i as n}from"./assets/vendor-CNqCr-V-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g="54139037-7f576b0c871bb9407eaf16e34",h="https://pixabay.com/api/";async function b(a){const o={key:g,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await y.get(h,{params:o})).data}catch(i){throw new Error(`Failed to fetch images: ${i.message}`)}}const L=new d(".gallery a",{captionsData:"alt",captionDelay:250}),u=document.querySelector(".gallery"),f=document.querySelector(".loader-container");function S(a){const o=a.map(({webformatURL:i,largeImageURL:r,tags:e,likes:t,views:s,comments:m,downloads:p})=>`
      <li class="gallery-item">
        <a href="${r}" class="gallery-link">
          <img src="${i}" alt="${e}" loading="lazy" class="gallery-image"/>
        </a>
        <div class="gallery-info">
          <p class="info-item">
            <b>Likes</b>
            ${t}
          </p>
          <p class="info-item">
            <b>Views</b>
            ${s}
          </p>
          <p class="info-item">
            <b>Comments</b>
            ${m}
          </p>
          <p class="info-item">
            <b>Downloads</b>
            ${p}
          </p>
        </div>
          
      </li>
      `).join("");u.insertAdjacentHTML("beforeend",o),L.refresh()}function q(){u.innerHTML=""}function v(){f.style.display="flex"}function l(){f.style.display="none"}const c=document.querySelector(".form");c.addEventListener("submit",a=>{a.preventDefault();const o=c.querySelector('input[name="search-text"]'),i=o.value.trim();if(o.value="",!i){n.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}q(),v(),b(i).then(r=>{if(l(),!r.hits||r.hits.length===0){n.info({title:"info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}S(r.hits)}).catch(r=>{l(),n.error({title:"Error",message:r.message||"Failed to fetch images. Please try again.",position:"topRight"}),console.error(r)})});
//# sourceMappingURL=index.js.map
