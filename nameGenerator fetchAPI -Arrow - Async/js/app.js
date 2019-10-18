document.querySelector('#generate-names').addEventListener('submit', loadNames);


//Execute the function to query the API
function loadNames(e){
    e.preventDefault();

    //Read the value from the form and create the variables
    const origin = document.getElementById('country').value ;
    const genre = document.getElementById('genre').value ;
    const amount = document.getElementById('quantity').value ;

    //Build the URL
    let url = 'https://uinames.com/api/?';
    //Read the origin and append to the origin
    if(origin !== ''){
        url += `region=${origin}&`;
    }

     //Read the genre and append to the origin
     if(genre !== ''){
        url += `gender=${genre}&`;
    }

    //Read the amount  and append to the origin
    if(amount !== ''){
        url += `amount=${amount}&`;
    }
    
    //Fetch API
        getNames(url)

            .then (names => {
                let namesResponse = names.names;

                let html = '<h2>Generated Names</h2>';
                html += '<ul class ="list">';
                namesResponse.forEach(name =>{
                    html += `
                    <li>${name.name}</li>
                    `

                });
                html += '</ul>';

                document.querySelector ('#result').innerHTML = html;
            })
            .catch(error => console.log(error) )
            
}

//Async function

async function getNames(url){
    
    const response = await fetch (url);
    const names = await response.json () ;

    return{
        names
    }

}