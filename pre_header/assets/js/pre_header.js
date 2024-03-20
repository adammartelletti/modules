
    document.addEventListener("DOMContentLoaded", function() {
      function shouldKeepCase(word) {

        return word.replace(/[^A-Z]/g, "").length > 1;
      }
    
      function isStartOfNewSegment(word, index, words) {
        if (index === 0) return tr
        const prevWord = words[index - 1];
        return prevWord.endsWith('-') || /\d/.test(prevWord.slice(-1)) || prevWord.endsWith(':');
      }
  
    
      function processHeaderText(text) {
        let words = text.split(' ');
        return words.map((word, index, words) => {
  
          if (shouldKeepCase(word)) {
            return word;
          }
  
          if (word === "i" || word === "I") {
            return "I";
          }
  
          if (isStartOfNewSegment(word, index, words)) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
          }
  
          return word.toLowerCase();
        }).join(' ');
      }
  function transformTextNodes(node) {
    if (node.nodeType === Node.TEXT_NODE
      node.nodeValue = processHeaderText(node.nodeValue.trim());
    } else if (node.nodeType === Node.ELEMENT_NODE
      node.childNodes.forEach(transformTextNode
    }
  }
  document.querySelectorAll('h1, h2, h3, h4').forEach(header => {
    transformTextNodes(header);
  });
});