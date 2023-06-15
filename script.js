
window.addEventListener('load', function() {

    const liElements = document.getElementsByTagName('li');
  
    for (let i = 0; i < liElements.length; i++) {
      const anchorElement = liElements[i].querySelector('a');
  
      if (anchorElement) {
        const href = anchorElement.getAttribute('href');
  
        if (href && href.startsWith('/submissions/')) {
          const newHref = `https://www.icodethis.com${href}`;
          anchorElement.setAttribute('href', newHref);
        }
      }
    }
  });
  