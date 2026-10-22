(function(){
  var $=function(s){return document.querySelector(s)};

  // Nama tamu dari tautan: ...#Budi-Santoso
  var raw=decodeURIComponent((location.hash||"").slice(1)).replace(/[-_~.]+/g," ").trim();
  if(raw){ $("#guest").textContent=raw; }

  // Buka undangan
  $("#open").addEventListener("click",function(){
    $("#cover").classList.add("gone");
    document.body.classList.remove("locked");
    document.body.classList.add("opened");
    window.scrollTo(0,0);
  });

  // Hitung mundur (WIB, UTC+7)
  var target=new Date("2026-12-12T08:00:00+07:00").getTime();
  function pad(n){return String(n).padStart(2,"0")}
  function tick(){
    var t=Math.max(0,target-Date.now());
    $("#d").textContent=pad(Math.floor(t/864e5));
    $("#h").textContent=pad(Math.floor(t%864e5/36e5));
    $("#m").textContent=pad(Math.floor(t%36e5/6e4));
    $("#s").textContent=pad(Math.floor(t%6e4/1e3));
  }
  tick(); setInterval(tick,1000);
})();