/* Powered by CusMeDroid */
function tHeme(){var e,t,n,l;""==e&&""==t&&""==n&&""==l||firebase.database().ref("MeLenium/Theme").on("value",(function(o){e=o.val().bground,t=o.val().bcolor,n=o.val().displayon,l=o.val().displayoff,console.log(e),console.log(t),console.log(n),console.log(l),"#C2C2C2"==e&&(document.getElementById("light").style.display="none",document.getElementById("dark").style.display="block"),"#222222"==e&&(document.getElementById("light").style.display="block",document.getElementById("dark").style.display="none"),document.body.style.background=e,document.getElementById("footer").style.color=t,document.getElementById("cpage").style.color=t}))}function mThemeLight(){var e="Theme",t="#C2C2C2",n="black",l="none",o="block";console.log(e),console.log(t),console.log(n),console.log(l),console.log(o),firebase.database().ref("MeLenium/"+e).update({bground:t,bcolor:n,displayon:o,displayoff:l})}function mThemeDark(){var e="Theme",t="#222222",n="white",l="block",o="none";console.log(e),console.log(t),console.log(n),console.log(l),console.log(o),firebase.database().ref("MeLenium/"+e).update({bground:t,bcolor:n,displayon:l,displayoff:o})}tHeme(),document.getElementById("light").onclick=function(){mThemeLight(),document.getElementById("light").style.display="none",document.getElementById("dark").style.display="block"},document.getElementById("dark").onclick=function(){mThemeDark(),document.getElementById("light").style.display="block",document.getElementById("dark").style.display="none"};var stdNo=0;function addItemsPostList(e,t,n,l){var o=document.getElementById("cpage"),a=document.createElement("div"),d=document.createElement("img"),c=document.createElement("div"),s=document.createElement("h1"),i=document.createElement("a"),m=document.createElement("span"),r=document.createElement("p"),u=document.createElement("p"),g=document.createElement("a"),p=document.createElement("span");a.setAttribute("class","cards-main"),d.setAttribute("class","cards-img"),c.setAttribute("class","cards-page"),s.setAttribute("class","card-title"),m.setAttribute("class","red"),i.setAttribute("href","view.html?titles="+l),r.setAttribute("class","cards-desc"),u.setAttribute("class","cards-tag"),g.setAttribute("href",""),p.setAttribute("class","red"),d.src="./images/post/"+t,m.innerHTML="$ ",i.innerHTML=l,r.innerHTML=e,p.innerHTML="# ",g.innerHTML=n,o.appendChild(a),a.appendChild(d),a.appendChild(c),c.appendChild(s),s.appendChild(m),s.appendChild(i),c.appendChild(r),c.appendChild(u),u.appendChild(p),u.appendChild(g)}function FetchAllPostData(){firebase.database().ref("MeLenium/Post/").once("value",(function(e){e.forEach((function(e){addItemsPostList(e.val().description,e.val().image,e.val().tag,e.val().title)}))}))}FetchAllPostData();
