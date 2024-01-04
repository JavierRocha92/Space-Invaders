const functions = {
    /**
     * Funtion to set new value to json sotoraged in localstorage
     * 
     * @param {string} name 
     * @param {string} score 
     */
    storageScore: (name, score) => {
        let scores
        if (localStorage.getItem('scores')) {
            scores = JSON.parse(localStorage.getItem('scores'))
        }
        else {
            scores = { 'Name': 'Score' }
        }
        scores[name] = score
        scores = functions.sortScore(scores)
        localStorage.setItem('scores', JSON.stringify(scores))
    }
    ,
    /**
     * Funtion to create an e HTMl elemnt and set values depending if parameter given
     * 
     * @param {string} tag 
     * @param {array} classes 
     * @param {string} content 
     * @param {string} url 
     * @param {string} href 
     * @param {string} value 
     * @param {string} label 
     * @param {string} id 
     * @returns 
     */
    createElement: (tag, classes = false, content = false, url = false, href = false, value = false, label = false, id = false) => {
        const element = document.createElement(tag)
        if (classes) {
            classes.forEach(clas => {
                element.classList.add(clas)
            });
        }
        if (content) element.textContent = content
        if (url) element.src = url
        if (id) element.id = id
        if (value) element.value = value
        if (label) element.label = label
        if (href) element.href = href

        return element
    },
    /**
     * Function to convert a json object into and array and sort values by its value and covert into json again
     * 
     * @param {JSON} json 
     * @returns 
     */
    sortScore: (json) => {
        let arrayScores = Object.entries(json);
        arrayScores.sort((a, b) => b[1] - a[1]);

        let sortJson = {};
        for (let i = 0; i < arrayScores.length; i++) {
            let key = arrayScores[i][0];
            let value = arrayScores[i][1];
            sortJson[key] = value;
        }
        return sortJson
    }
    ,
    /**
     * Function to create a table and as many tr element as many elements json has
     * 
     * @param {HTMLDivElement} element 
     * @returns 
     */
    showScore: (element) => {
        console.log('entron en la funcion')
        console.log(element)
        const json = JSON.parse(localStorage.getItem('scores'))
        console.log(json)
        const fragment = document.createDocumentFragment()
        let count = 0
        const table = functions.createElement('TABLE', ['score__table', 'w-100', 'text-light', 'border'])
        for (let key in json) {
            const tr = functions.createElement('TR', ['score__tr'])
            const tdName = functions.createElement('TD', ['score__td', 'text-center'], key)
            const tdScore = functions.createElement('TD', ['score__td', 'text-center'], json[key])
            tr.appendChild(tdName)
            tr.appendChild(tdScore)
            table.appendChild(tr)
            count++
            if (count == 5)
                break
        }
        element.appendChild(table)
        return element
    }


}


export default functions