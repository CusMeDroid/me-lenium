/* Powered by CusMeDroid */
var tags=new URLSearchParams(window.location.search).get("tags");function addItemsPostList(t,e,a,n,s){var i=document.getElementById("cpage"),d=document.createElement("div"),l=document.createElement("img"),r=document.createElement("div"),c=document.createElement("h1"),m=document.createElement("a"),o=document.createElement("span"),p=document.createElement("p"),u=document.createElement("p"),h=document.createElement("a"),b=document.createElement("span"),A=document.createElement("p");d.setAttribute("class","cards-main"),l.setAttribute("class","cards-img"),l.setAttribute("title",n),l.setAttribute("alt",n),r.setAttribute("class","cards-page"),c.setAttribute("class","card-title"),o.setAttribute("class","red"),m.setAttribute("href","view.html?titles="+n),m.setAttribute("title",n),m.setAttribute("alt",n),p.setAttribute("class","cards-desc"),u.setAttribute("class","cards-tag"),h.setAttribute("href","recent.html?tags="+a),h.setAttribute("title",a),h.setAttribute("alt",a),b.setAttribute("class","red"),A.setAttribute("style","font-size:8px;padding:4px 0px;"),l.src="./images/post/"+e,o.innerHTML="$ ",m.innerHTML=n,p.innerHTML=t,b.innerHTML="# ",h.innerHTML=a,A.innerHTML=s,tags==a&&(i.appendChild(d),d.appendChild(l),d.appendChild(r),r.appendChild(c),c.appendChild(o),c.appendChild(m),r.appendChild(p),r.appendChild(u),u.appendChild(b),u.appendChild(h),r.appendChild(A))}function FetchAllPostData(){firebase.database().ref("MeLenium/Post/").once("value",(function(t){t.forEach((function(t){addItemsPostList(t.val().description,t.val().image,t.val().tag,t.val().title,t.val().date)}))}))}console.log(tags),""==tags&&(window.location.href="./index.html"),FetchAllPostData();
