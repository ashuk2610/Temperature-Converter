// creating function

const Ctemp = () => {

    const numTemp = document.getElementById('temp').value;
 

    const tempSelected = document.getElementById('temp_diff');

    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
   



        // creating function for converting temperature 🌡


    const celTofah = (cel) => {
        let fahrenheit = Math.round((cel * 9) / 5 + 32);

        return fahrenheit;

    }




    const fahTocel = (fah) => {
        let celcius = Math.round((fah -32) * 5 /9);
        return celcius;
       
    }


    // storing result on resultContainer section 

    let result;

    if (valueTemp == 'cel') {
        result = celTofah(numTemp);
        document.getElementById('resultContainer').innerHTML = `${result} °Fahrenheit `
    }

    else {
        result = fahTocel(numTemp);
        document.getElementById('resultContainer').innerHTML = `${result} °Celcius `
    }
}


// end 