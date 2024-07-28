// Create a style element for CSS
const style = document.createElement('style');
style.innerHTML = `
div {
    display : flex;
    justify-content : center;
    align-items : center;
    height: 100vh;
    margin: 0;
}
`;

// Append the style element to the head of the document
document.head.appendChild(style);

// Create the HTML content
const videoContainer = `
  <div>
    <iframe 
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/BJlh-Nu0c14" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>
  </div>
`;

// Set the body's innerHTML to the new content
document.body.innerHTML = videoContainer;
document.title = "Blocked";



