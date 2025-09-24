// Function to create list items
const createListItems = (dataArray, listElement) => {
    dataArray.forEach(itemText => {
        const li = document.createElement("li");
        li.textContent = itemText;
        listElement.appendChild(li);
    });
};
document.addEventListener('DOMContentLoaded', () => {

    // Get the query string from the current URL
    const queryString = window.location.search;
    if (portfolioData) {
        // Create a URLSearchParams object from the query string
        const params = new URLSearchParams(queryString);
        const id = params.get('id');

        const project = portfolioData.find(project => project.id === id);
        document.getElementById('company').textContent = `${project.company}`

        const tasks = project.description[0].tasks;
        const job_req = project.description[0]["job requirements"];

        // Get the HTML elements where you want to insert the lists
        const tasksList = document.getElementById("tasks");
        const requirementsList = document.getElementById("job_requirements");

        document.getElementById("case-study-link").href = `${project.casestudy}`;



        // Call the function for both tasks and requirements
        createListItems(tasks, tasksList);
        createListItems(job_req, requirementsList);




    } else {
        console.error('Portfolio data or container not found!');
    }


});