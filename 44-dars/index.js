// let city = "chilonzor #64";
// // https://rent-houze.netlify.app/properties?country=Uzbekistan&region=${city}&address=Toshkent&zip_code=100096

// let url = new URL(`https://rent-houze.netlify.app/properties`);

// let search = url.searchParams;

// search.set("addres", `console.log("hacked")`);
// // search.set("city", );

// // // console.log(decodeURIComponent(search.get("city")));
// // console.log(url);

// inp.oninput = (event) => {
//   div.innerHTML = event.target.value;
// };

let url = encodeURIComponent(`<script>alert("hacked");</script>`);

console.log(url);
