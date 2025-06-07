'use strict';

const events = [
{
    name: "Music Festival",
    image: "https://picsum.photos/id/1015/250/150",
    date: "2025-06-15"
},
{
    name: "Art Exhibition",
    image: "https://picsum.photos/id/1025/250/150",
    date: "2025-07-01"
},
{
    name: "Tech Conference",
    image: "https://picsum.photos/id/1035/250/150",
    date: "2025-08-10"
},
{
    name: "City Marathon",
    image: "https://picsum.photos/id/1045/250/150",
    date: "2025-09-05"
    }
];

const gallery = document.getElementById('gallery');
events.forEach(events => {
    const container = document.createElement('div');
    container.className = 'image-container';
    const img = document.createElement('img');
    img.src = events.image;
    img.alt = events.name;

    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.innerHTML = `<h3>${events.name}</h3><p>${events.date}</p>`;
    container.appendChild(img);
    container.appendChild(overlay);
    gallery.appendChild(container);
});
