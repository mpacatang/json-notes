const search = document.getElementById('machine-search');
const matchList = document.getElementById('match-list');
let tableQuery = 'json url';

//Search JSON and Filter
const searchMachines = async searchText => {
    const res = await fetch(tableQuery);
    const machines = await res.json();

    let data = machines.data
    //console.log(data)


    //Get match
    let results = data.filter(machine => {
        const regex = new RegExp(`${searchText}`, 'gi');

            return machine.intYear.match(regex) || machine.strCategoryName.match(regex) || machine.strSterlingUnitNumber.match(regex) || machine.strLocation.match(regex) || machine.strModel.match(regex);
        
    });


    if(searchText.length === 0){
         results = data;
        // matchList.innerHTML = '';
    }
    console.log(results);

    outputHTML(results);

}
// Show Results
const outputHTML = results => {
    if(results.length > 0){
        const html = results
        .map(
            result => `
            <li class="card">
                <img src="/ProductImages/thumbnails/${result.strPictureFileName}" alt="">
                <div class="card-body">
                    <div class="card-cat">${result.strCategoryName}</div>
                    <h4 class="card-title">${result.strModel}</h4>
                    <p><strong>Unit #: ${result.strSterlingUnitNumber}</strong></p>
                    <p><strong>Year: ${result.intYear}</strong></p>
                    <p><strong>Make: ${result.strMake}</strong></p>
                    <p><strong>Capacity: ${result.strTonnage}</strong></p>
                    <p><strong>Location: ${result.strLocation}</strong></p>
                    
                    <a href='/viewUnit.php?id=${result.intEquipmentID}' class='card-link'>More Details</a>
                </div>
            </li>
        `
        ).join('');

        matchList.innerHTML = html;
    }
}

search.addEventListener('input', () => {
    searchMachines(search.value)
});
document.addEventListener("DOMContentLoaded", function() {
    searchMachines(search.value)
});
