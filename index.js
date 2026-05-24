import{a as v,S,i as a}from"./assets/vendor-DcHCnVjq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))f(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&f(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function f(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const R="https://pixabay.com/api/",q="43121129-d44587e207dc12fa46ae63de0";async function m(r,t){return(await v.get(R,{params:{key:q,q:r,page:t,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const h=document.querySelector(".gallery"),g=document.querySelector(".loader"),y=document.querySelector(".load-more"),B=new S(".gallery a",{captionsData:"alt",captionDelay:250});function L(r){const t=r.map(o=>`
      <li class="gallery-item">
        <a href="${o.largeImageURL}">
          <img
            class="gallery-image"
            src="${o.webformatURL}"
            alt="${o.tags}"
          />
        </a>

        <div class="info">
          <p><b>Likes</b> ${o.likes}</p>
          <p><b>Views</b> ${o.views}</p>
          <p><b>Comments</b> ${o.comments}</p>
          <p><b>Downloads</b> ${o.downloads}</p>
        </div>
      </li>
    `).join("");h.insertAdjacentHTML("beforeend",t),B.refresh()}function $(){h.innerHTML=""}function b(){g.classList.add("is-visible")}function u(){g.classList.remove("is-visible")}function w(){y.classList.remove("hidden")}function n(){y.classList.add("hidden")}const p=document.querySelector(".form"),M=document.querySelector(".load-more");let i=1,l="",d=0;n();u();p.addEventListener("submit",async r=>{if(r.preventDefault(),l=r.target.elements["search-text"].value.trim(),!l){a.error({message:"Please fill in the search field!",position:"topRight"});return}i=1,$(),n(),b();try{const t=await m(l,i);if(d=t.totalHits,t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(t.hits),d>15?w():(n(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(t){a.error({message:"Something went wrong!",position:"topRight"}),console.log(t)}finally{u(),p.reset()}});M.addEventListener("click",async()=>{i+=1,b(),n();try{const r=await m(l,i);L(r.hits),i*15>=d?(n(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):w();const o=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:o.height*2,behavior:"smooth"})}catch(r){a.error({message:"Something went wrong!",position:"topRight"}),console.log(r)}finally{u()}});
//# sourceMappingURL=index.js.map
