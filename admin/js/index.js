/* Powered by CusMeDroid */
var inTitle,inImage,inDesc,inTag,mUniq,inIpAd,mEmail,mPass,myDate,months=["January","February","March","April","May","June","July","August","September","October","November","December"],d=new Date,month=months[d.getMonth()];function readFom(){inTitle=document.getElementById("title").value,inImage=document.getElementById("image").value,inDesc=document.getElementById("description").value,inTag=document.getElementById("tag").value,inIpAd=document.getElementById("myipaddr").value,mUniq=Math.floor(1e9*Math.random()),myDate=month+" "+d.getDate()+", "+d.getFullYear(),console.log(inTitle,inImage,inDesc,inTag,mUniq,myDate)}$.getJSON("https://api.ipify.org?format=json",(function(e){console.log(e.ip),$("#myipaddr").html(e.ip)})),document.getElementById("mPost").onclick=function(){readFom(),inTitle<1||inImage<1||inDesc<1||inTag<1||mUniq<1?alert("Do not be empty!"):(firebase.database().ref("MeLenium/Post/"+mUniq).set({title:inTitle,image:inImage,description:inDesc,tag:inTag,ipaddress:inIpAd,date:myDate}),alert("Success post data..!"),document.getElementById("title").value="",document.getElementById("image").value="",document.getElementById("description").value="",document.getElementById("tag").value="",document.getElementById("myipaddr").value="")};
