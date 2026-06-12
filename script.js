
const DATA={
 groom:'RESTU PRIHANTO',
 bride:'FIKA ISMIATUL AFYANI',
 akadTanggal:'26 JULI 2026 08:00 WIB',
 akadLokasi:'Mesjid',
 resepsiTanggal:'26 JULI 2026 11:00 WIB',
 resepsiLokasi:'Jln KH Zruqi RT 03 RW 03 Karang Tengah Benda Sirampong Brebes',
 maps:'https://www.google.com/maps/search/Jln+KH+Zruqi+RT+03+RW+03+Karang+Tengah+Benda+Sirampong+Brebes/@-6.8701401,108.8989807,9115m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI2MDYwOS4wIKXMDSoASAFQAw%3D%3D',
 countdown:'2026-07-26T08:00:00'
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
