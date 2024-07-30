console.log('client.js is sourced!');

function getCcalculations()
 {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2');
    const operation = document.getElementById('operation').value;
    console.log('in getCalculations');
     )

    axios.get('/calculations').then((response) =>{
        console.log('success it worked!', response);
        let calculationsFromServer = calculation.data;
        renderToDom(calculationsFromServer)
    }).catch((error) => {
        console.log(error);
        alert('something went wrong.');
    });
}

    
    function renderToDom(calculations) {
        let contentDiv = document.querySelector('#resultsToDate');
        contentDiv.innerHTML += `<p>"`;
    }

    let buttons = document.querySelectorAll("button");
    buttons.forEach ((btn) => {
        btn.addEventListener('click',() => {
            let operator = btn.innerText;
            calculate(operator) {
                let results;
                let output = document.querySelector("#output");
                if (operator =="+"){
                    result = num1(output.innerText) + 1;
                } else if{ operat
re
                }
            };
        });

    };
    

