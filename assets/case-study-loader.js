document.addEventListener('DOMContentLoaded', async () => {
    // Get the container where we will display the content.
    const contentContainer = document.getElementById('markdown-content');

    // Get the filename from the URL query string (e.g., ?file=case-study-innovatech.md).
    const params = new URLSearchParams(window.location.search);
    const markdownFile = params.get('file');
    console.log(markdownFile)
    if (!markdownFile) {
        contentContainer.innerHTML = '<h2>Error: No case study file specified.</h2>';
        return;
    }

    try {
        // Fetch the content of the specified .md file.
        const response = await fetch(markdownFile);
        if (!response.ok) {
            throw new Error(`File not found: ${markdownFile}`);
        }
        const markdownText = await response.text();

        // Use Showdown to convert Markdown to HTML.
        const converter = new showdown.Converter();
        const html = converter.makeHtml(markdownText);

        // Update the page title from the first H1 tag found.
        const titleMatch = html.match(/<h1[^>]*>(.*?)<\/h1>/);
        if (titleMatch && titleMatch[1]) {
            document.title = titleMatch[1];
        }

        // Inject the resulting HTML into our container.
        contentContainer.innerHTML = html;

    } catch (error) {
        console.error('Error loading case study:', error);
        contentContainer.innerHTML = `<h2>Sorry, the case study could not be loaded.</h2><p>${error.message}</p>`;
    }
});