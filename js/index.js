setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation =30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
    let x = document.querySelector(".hour");
    let y = document.querySelector(".minute");
    let z = document.querySelector(".second");
x.style.transform = `rotate(${hrotation}deg)`;
y.style.transform = `rotate(${mrotation}deg)`;
z.style.transform = `rotate(${srotation}deg)`;
    
}, 1000);