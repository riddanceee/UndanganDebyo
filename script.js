(function(){
  var $=function(i){return document.getElementById(i)};
  // Nama tamu dari link: ...#Nama-Tamu
  try{var g=decodeURIComponent(location.hash.slice(1)).replace(/[-_]/g,' ').trim();if(g)$('guest').textContent=g}catch(e){}

  $('open').onclick=function(){
    $('cover').classList.add('open');
    document.body.style.overflow='';
    setTimeout(function(){$('cover').style.display='none'},950);
  };
  document.body.style.overflow='hidden';

  // Hitung mundur
  var target=new Date('2026-12-19T08:00:00+07:00').getTime();
  function tick(){
    var t=Math.max(0,target-Date.now());
    $('d').textContent=Math.floor(t/864e5);
    $('h').textContent=Math.floor(t%864e5/36e5);
    $('m').textContent=Math.floor(t%36e5/6e4);
    $('s').textContent=Math.floor(t%6e4/1e3);
  }
  tick();setInterval(tick,1000);

  // Ucapan (disimpan di browser pengunjung)
  var wishes=[
    {n:'Keluarga Besar',a:'Hadir',m:'Selamat menempuh hidup baru, semoga sakinah, mawaddah, warahmah.'}
  ];
  try{var s=JSON.parse(localStorage.getItem('wishes-debyo-anggi')||'null');if(Array.isArray(s))wishes=s}catch(e){}
  function render(){
    var box=$('wishes');box.textContent='';
    wishes.forEach(function(w){
      var d=document.createElement('div');d.className='wish';
      var b=document.createElement('b');b.textContent=w.n;
      var sm=document.createElement('small');sm.textContent=w.a;
      var p=document.createElement('p');p.style.margin='6px 0 0';p.textContent=w.m;
      d.appendChild(b);d.appendChild(sm);d.appendChild(p);box.appendChild(d);
    });
  }
  render();
  $('rsvp').onsubmit=function(e){
    e.preventDefault();
    wishes.unshift({n:$('nm').value.trim(),a:$('at').value,m:$('ms').value.trim()});
    wishes=wishes.slice(0,30);
    try{localStorage.setItem('wishes-debyo-anggi',JSON.stringify(wishes))}catch(err){}
    render();this.reset();
  };
})();
