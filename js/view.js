/* Powered by CusMeDroid */
var titles=new URLSearchParams(window.location.search).get("titles");function itemComment(e,t,n,i,a){var r=document.getElementById("comment"),d=document.createElement("div"),l=document.createElement("p"),s=document.createElement("span"),m=document.createElement("b"),o=document.createElement("p"),p=document.createElement("p"),c=document.createElement("p");l.setAttribute("style","font-size: 12px;"),d.setAttribute("style","padding:8px;border: 1px solid green;margin-bottom:6px;"),s.setAttribute("class","red"),m.setAttribute("style","color:green;"),o.setAttribute("style","font-size: 14px;"),p.setAttribute("style","font-size: 8px;color:gray;"),c.setAttribute("style","font-size: 16px;"),s.innerHTML="$ ",m.innerHTML=n,o.innerHTML=t,p.innerHTML=e,c.innerHTML=i,titles==a&&(r.appendChild(d),d.appendChild(l),l.appendChild(s),l.appendChild(m),d.appendChild(o),d.appendChild(p),d.appendChild(c))}function fetchAllComment(){firebase.database().ref("MeLenium/Comment/").once("value",(function(e){e.forEach((function(e){itemComment(e.val().date,e.val().email,e.val().name,e.val().subject,e.val().title)}))}))}function addItemsPostList(e,t,n,i,a){var r=document.getElementById("cpage"),d=document.createElement("div"),l=document.createElement("img"),s=document.createElement("div"),m=document.createElement("h1"),o=document.createElement("p"),p=document.createElement("a"),c=document.createElement("span"),u=document.createElement("p"),h=document.createElement("p"),b=document.createElement("a"),g=document.createElement("span"),A=document.createElement("p"),E=document.createElement("p"),f=document.createElement("p"),x=document.createElement("span"),y=document.createElement("span"),C=document.createElement("p"),v=document.createElement("a"),w=document.createElement("i"),M=document.createElement("a"),L=document.createElement("i"),I=document.createElement("a"),T=document.createElement("i");d.setAttribute("class","cards-main"),l.setAttribute("class","cards-img-view"),l.setAttribute("title",i),l.setAttribute("alt",i),s.setAttribute("class","cards-page-view"),m.setAttribute("class","card-title"),o.setAttribute("style","font-size:8px;padding:4px 0px;"),c.setAttribute("class","red"),p.setAttribute("href",""),p.setAttribute("title",i),p.setAttribute("alt",i),u.setAttribute("class","cards-desc"),h.setAttribute("class","cards-tag"),b.setAttribute("href","recent.html?tags="+n),b.setAttribute("title",n),b.setAttribute("alt",n),g.setAttribute("class","red"),A.setAttribute("style","font-size:8px;padding:4px 0px;"),E.setAttribute("style","padding: 8px 0px;"),x.setAttribute("class","red"),f.setAttribute("style","font-size:12px;padding-bottom:8px;"),C.setAttribute("style","width: auto;height: auto;"),v.setAttribute("href","https://www.facebook.com/sharer/sharer.php?u=https://cusmedroid.github.io/me-lenium/view.html?titles="+encodeURIComponent(i.trim())),v.setAttribute("title","Facebook"),v.setAttribute("alt","Facebook"),v.setAttribute("target","_blank"),v.setAttribute("style","width: 32px;height: 32px;margin-right: 6px;"),w.setAttribute("style","width: 32px;height: 32px;padding: 8px;text-align: center;border: 1px solid green;border-radius: 25%;color: green;"),w.setAttribute("class","fa fa-facebook"),M.setAttribute("href","https://twitter.com/share?url=https://cusmedroid.github.io/me-lenium/view.html?titles="+encodeURIComponent(i.trim())),M.setAttribute("title","Twitter"),M.setAttribute("alt","Twitter"),M.setAttribute("target","_blank"),M.setAttribute("style","width: 32px;height: 32px;margin-right: 6px;"),L.setAttribute("style","width: 32px;height: 32px;padding: 8px;text-align: center;border: 1px solid green;border-radius: 25%;color: green;"),L.setAttribute("class","fa fa-twitter"),I.setAttribute("href","whatsapp://send?text=https://cusmedroid.github.io/me-lenium/view.html?titles="+encodeURIComponent(i.trim())),I.setAttribute("title","WhatsApp"),I.setAttribute("alt","WhatsApp"),I.setAttribute("target","_blank"),I.setAttribute("data-action","share/whatsapp/share"),I.setAttribute("style","width: 32px;height: 32px;margin-right: 6px;"),T.setAttribute("style","width: 32px;height: 32px;padding: 8px;text-align: center;border: 1px solid green;border-radius: 25%;color: green;"),T.setAttribute("class","fa fa-phone"),l.src="./images/post/"+t,c.innerHTML="$ ",p.innerHTML=i,o.innerHTML="Home > Post > <span class='red'>"+i+"</span>",u.innerHTML=e,g.innerHTML="# ",b.innerHTML=n,A.innerHTML=a,x.innerHTML="$ ",y.innerHTML="Share",titles==i&&(r.appendChild(d),d.appendChild(l),d.appendChild(s),s.appendChild(o),s.appendChild(A),s.appendChild(m),m.appendChild(c),m.appendChild(p),s.appendChild(u),s.appendChild(h),h.appendChild(g),h.appendChild(b),s.appendChild(E),E.appendChild(f),f.appendChild(x),f.appendChild(y),E.appendChild(C),C.appendChild(v),v.appendChild(w),C.appendChild(M),M.appendChild(L),C.appendChild(I),I.appendChild(T))}function FetchAllPostData(){firebase.database().ref("MeLenium/Post/").once("value",(function(e){e.forEach((function(e){addItemsPostList(e.val().description,e.val().image,e.val().tag,e.val().title,e.val().date)}))}))}console.log(titles),""==titles&&(window.location.href="./index.html"),document.getElementById("stitle").innerHTML=titles,$.getJSON("https://api.ipify.org?format=json",(function(e){console.log(e.ip),$("#myipaddr").html(e.ip)})),document.getElementById("mSend").onclick=function(){var e=document.getElementById("name").value,t=document.getElementById("email").value,n=document.getElementById("stitle").value,i=document.getElementById("myipaddr").value,a=document.getElementById("subject").value;const r=new Date;var d=["January","February","March","April","May","June","July","August","September","October","November","December"][r.getMonth()]+" "+r.getDate()+", "+r.getFullYear(),l=Math.floor(1e9*Math.random());e<1||t<1||n<1||i<1||a<1?alert("Don't be empty!"):(firebase.database().ref("MeLenium/Comment/"+l).set({name:e,title:n,ipaddress:i,email:t,subject:a,date:d}),alert("Success add comment."),document.getElementById("name").value="",document.getElementById("email").value="",document.getElementById("stitle").value="",document.getElementById("myipaddr").value="",document.getElementById("subject").value="")},fetchAllComment(),FetchAllPostData();
