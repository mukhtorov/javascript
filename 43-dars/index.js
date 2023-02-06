let date = new Date(2023, 1, 3);
console.log(date);
date = date.toUTCString();

// document.cookie = `name=webbrain; expire=${date}`;
document.cookie = `name=webbrain academy; `;
document.cookie = `title=webbrain; secure; samesite=lax `;

console.log(document.cookie);
