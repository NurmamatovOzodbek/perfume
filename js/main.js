//body
document.body.style.cssText = `
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: rgba(242, 234, 226, 1);
`
//katta div
let wrapper = document.createElement("div")
document.body.append(wrapper)
wrapper.style.cssText = `
  width: 600px;
  height: 450px;
  background: white;
  border-radius:10px;
  display:flex;
`

//img qoshish
let img = document.createElement("img")
wrapper.append(img)
img.setAttribute("src", "../img/atir.png")
img.style.cssText = `
  width: 50%;
`

// ikkinchi div yani informatiyalar
let inner = document.createElement("div")
wrapper.append(inner)
inner.style.cssText = `
  width: 300px;
  height: 450px;
  display: flex;
  flex-direction: column;
  // background:yellow;
  padding: 32px;
`

let span = document.createElement("span")
span.innerText = "PERFUME"
inner.append(span)
span.style.cssText = `
  font-size: 12px;
  font-family: Montserrat;
  font-weight: 500;
  letter-spacing: 5px;
  color:#6C7289;
`

//mahlusot nomi
let h1 = document.createElement("h1")
h1.innerText = "Gabrielle Essence Eau De Parfum"
inner.append(h1)
h1.style.cssText = `
  font-size: 32px;
  font-family: Fraunces;
  font-weight: 700;
  line-height: 32px;
  color: #1C232B;
  margin:20px 0;
`

//mahsulot haqida
let p = document.createElement("p")
p.innerText = "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
inner.append(p)
p.style.cssText = `
  font-size: 14px;
  font-family:  Montserrat;
  font-weight: 500;
  line-height: 23px;
  color: #6C7289;
  margin:4px 0;
`

// narxlari
let cost = document.createElement("div")
inner.append(cost)
cost.style.cssText = `
  width: 195px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px 0;
  // background: green;
`

//chegirmadan keyingi narx
let newCost = document.createElement("strong")
newCost.innerText = "$149.99"
cost.append(newCost)
newCost.style.cssText = `
  font-size: 32px;
  font-family: Fraunces;
  font-weight: 700;
  line-height: 32px;
  color: #3D8168;
`

//chegirmadan oldingi narx
let oldCost = document.createElement("strong")
oldCost.innerText = "$169.99"
cost.append(oldCost)
oldCost.style.cssText = `
  font-size: 13px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 23px;
  text-decoration: line-through;
  color: #6C7289;
`

let btn = document.createElement("button")
btn.innerHTML = `<img src = '../img/basket.svg'> Add to Cart`
inner.append(btn)
btn.style.cssText = `
  padding: 15px 0;
  border-radius: 8px;
  background: #3D8168;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 12px;
  margin-top:5px;
  border:0;
  cursor: pointer;


  font-size: 14px;
  font-family: Montserrat;
  font-weight: 700;
  color: white;
`