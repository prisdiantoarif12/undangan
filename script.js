
const DATA={
 groom:'Nama Mempelai Pria',
 bride:'Nama Mempelai Wanita',
 akadTanggal:'20 Desember 2026 08:00 WIB',
 akadLokasi:'Masjid Contoh',
 resepsiTanggal:'20 Desember 2026 11:00 WIB',
 resepsiLokasi:'Gedung Contoh',
 maps:'https://maps.google.com',
 countdown:'2026-12-20T08:00:00'
};

document.getElementById('couple').innerText=`${DATA.groom} & ${DATA.bride}`;
document.getElementById('groom').innerText=DATA.groom;
document.getElementById('bride').innerText=DATA.bride;
document.getElementById('akad').innerText=`${DATA.akadTanggal} - ${DATA.akadLokasi}`;
document.getElementById('resepsi').innerText=`${DATA.resepsiTanggal} - ${DATA.resepsiLokasi}`;
document.getElementById('maps').href=DATA.maps;

function openInvite(){
 document.querySelector('.hero').style.height='40vh';
 document.getElementById('content').classList.remove('hidden');
}

setInterval(()=>{
 const target=new Date(DATA.countdown);
 const now=new Date();
 const d=Math.max(0,target-now);
 const days=Math.floor(d/1000/60/60/24);
 document.getElementById('countdown').innerText=days+' hari lagi';
},1000);
