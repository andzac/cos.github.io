document.addEventListener('DOMContentLoaded', () => {
    // The container where portfolio tiles will be inserted.
    const portfolioContainer = document.getElementById('portfolio-grid-container');

    // The portfolioData variable is already available from the inline script in index.html.
    // There's no need to fetch it.

    if (portfolioData && portfolioContainer) {
        // Loop through each project defined in portfolioData.
        portfolioData.forEach(project => {
            // 1. Create the URL with parameters for the detail page.
            const params = new URLSearchParams();
            params.append('id', project.id);
            const detailUrl = `detail.html?${params.toString()}`;

            // 2. Create the HTML for the portfolio tile.
            const tileHTML = `
                <a class="portfolio-tile" href="${detailUrl}">
                    <h1>${project.company}</h1>
                    <h2>${project.role}</h2>
                </a>
            `;

            // 3. Append the new tile's HTML to the container.
            portfolioContainer.innerHTML += tileHTML;
        });
    } else {
        console.error('Portfolio data or container not found!');
    }
});