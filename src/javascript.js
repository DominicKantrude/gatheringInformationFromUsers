const createColorListBox = () => {
    fetch("http://localhost:3000/colors")
        .then(colors => colors.json())
        .then(parsedColors => {
            let counter = 0;
            let html = `
            <select id="lego__color">
            `
            parsedColors.forEach(color => {
                html += `<option value="${counter}">${color.color}</option>`
                counter++
            })
            html += `</select>`
            document.querySelector("#colorListContainer").innerHTML = html;
        })
}

createColorListBox();

// Some starter code
document.querySelector(".lego__save").addEventListener("click", event => {
    const creator = document.querySelector("#lego__creator").value;
    const legoColor = document.querySelector("#lego__color").options[document.querySelector("#lego__color").value].text;
    const legoShape = document.querySelector("#lego__shape").value;
    const legoCreation = document.querySelector("#lego__creation").value;

    // Once you have collected all the values, build your data structure
    const legoToSave = {
        creator: creator,
        color: legoColor,
        shape: legoShape,
        creation: legoCreation
    }

    fetch("http://localhost:3000/posts", { // Replace "url" with your API's URL
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(legoToSave)
    })
})
