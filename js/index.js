/* Powered by CusMeDroid */
function addItemsPostList(e,t,a,n){var s=document.getElementById("cpage"),d=document.createElement("div"),c=document.createElement("img"),i=document.createElement("div"),l=document.createElement("h1"),r=document.createElement("a"),m=document.createElement("span"),p=document.createElement("p"),u=document.createElement("p"),o=document.createElement("a"),h=document.createElement("span");d.setAttribute("class","cards-main"),c.setAttribute("class","cards-img"),i.setAttribute("class","cards-page"),l.setAttribute("class","card-title"),m.setAttribute("class","red"),r.setAttribute("href","view.html?titles="+n),p.setAttribute("class","cards-desc"),u.setAttribute("class","cards-tag"),o.setAttribute("href","recent.html?tags="+a),h.setAttribute("class","red"),c.src="./images/post/"+t,m.innerHTML="$ ",r.innerHTML=n,p.innerHTML=e,h.innerHTML="# ",o.innerHTML=a,s.appendChild(d),d.appendChild(c),d.appendChild(i),i.appendChild(l),l.appendChild(m),l.appendChild(r),i.appendChild(p),i.appendChild(u),u.appendChild(h),u.appendChild(o)}function FetchAllPostData(){firebase.database().ref("MeLenium/Post/").once("value",(function(e){e.forEach((function(e){addItemsPostList(e.val().description,e.val().image,e.val().tag,e.val().title)}))}))}FetchAllPostData();
