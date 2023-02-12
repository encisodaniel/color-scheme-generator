
function render() {
    document.getElementById('root').innerHTML = `
        <div class=" colors grid-container">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="hex grid-container">
            <div>#252525</div>
            <div>#252525</div>
            <div>#252525</div>
            <div>#252525</div>
            <div>#252525</div>
        </div>
    `
    document.getElementById('color-selector').value = '#252525'
    document.getElementById('scheme').value = 'monochrome'
}

// data.colors[1].hex.value
const form = document.getElementById('form')
form.addEventListener('submit', function(e) {
    e.preventDefault()
    
    const color =  `"${document.getElementById('color-selector').value.slice(1, -1)}"`
    const scheme = document.getElementById('scheme').value
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${scheme}&count=5`)
    .then(response => response.json())
    .then(data => {
        let html = `
            <div class=" colors grid-container">
                <div style="background-color: ${data.colors[0].hex.value}"></div>
                <div style="background-color: ${data.colors[1].hex.value}"></div>
                <div style="background-color: ${data.colors[2].hex.value}"></div>
                <div style="background-color: ${data.colors[3].hex.value}"></div>
                <div style="background-color: ${data.colors[4].hex.value}"></div>
            </div>
            <div class="hex grid-container">
                <div>${data.colors[0].hex.value}</div>
                <div>${data.colors[1].hex.value}</div>
                <div>${data.colors[2].hex.value}</div>
                <div>${data.colors[3].hex.value}</div>
                <div>${data.colors[4].hex.value}</div>
            </div>
        `
        document.getElementById('root').innerHTML = html
        return 
        
    })
})


render()
