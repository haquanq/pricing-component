const slider = document.querySelector("#val_range")
const slider_btn = document.querySelector("#slider_btn")
const toggle = document.querySelector("#toggle_btn")

const data = {
    pviews: ["10k", "50k", "100k", "500k", "1m"],
    priceMon: [8, 12, 16, 24, 36],
    discount: 25,
    round: (target) => {
        return (Math.round(target * 100) / 100).toFixed(2);
    },
    Update: (x) => {
        const a = document.querySelector("#data_price")
        const b = document.querySelector("#pageviews")
        const c = document.querySelector("#billingModel") 
        b.textContent = `${data.pviews[x]} pageviews`
        let priceYear = data.round(12 * (data.priceMon[x] - (data.priceMon[x] * data.discount / 100)))
        if (toggle.checked == false) {
            a.textContent = `$${data.round(data.priceMon[x])}`;
            c.textContent = `/ month`;
        } else {
            a.textContent = `$${priceYear}`
            c.textContent = `/ year`;
        } 
    }
}

document.body.onchange = () => {
  
}

watchData = () => {
    if (slider.value < 20 && slider.value >= 0) {data.Update(0)}
    if (slider.value < 40 && slider.value >= 20) {data.Update(1)}
    if (slider.value < 60 && slider.value >= 40) {data.Update(2)}
    if (slider.value < 80 && slider.value >= 60) {data.Update(3)}
    if (slider.value <= 100 && slider.value >= 80) {data.Update(4)}
}

watchData()

slider.oninput = () => {watchData()}
toggle.onchange = () => {watchData()}

slider.style.background = `linear-gradient(90deg, #a5f3eb ${slider.value}%, #eaeefb ${slider.value}%)`;
slider.addEventListener("change", () => {
    slider.style.background = `linear-gradient(90deg, #a5f3eb ${slider.value}%, #eaeefb ${slider.value}%)`;
    slider_btn.style.left = `${slider.value}%`;
    slider_btn.style.transform = `translateX(-${slider.value}%)`;
})
