
const root=document.documentElement;
const mode=localStorage.getItem('theme');
if(mode==='dark'){root.style.setProperty('--ivory','#111');root.style.setProperty('--charcoal','#f5f3ef');}
