
//     document.addEventListener("DOMContentLoaded", function() {
//       // Function to check if a word should keep its case
//       // Keeps its case if it has more than one uppercase letter, regardless of its position
//       function shouldKeepCase(word) {
//         // Check for more than one uppercase letter in the word
//         return word.replace(/[^A-Z]/g, "").length > 1;
//       }
    
//       // Determine if the current word is the start of a new segment (after a dash, number, etc.)
//       function isStartOfNewSegment(word, index, words) {
//         if (index === 0) return true; // First word in the text
//         const prevWord = words[index - 1];
//         return prevWord.endsWith('-') || /\d/.test(prevWord.slice(-1)) || prevWord.endsWith(':');
//       }
  
    
//       // Function to process the header text
//       function processHeaderText(text) {
//         let words = text.split(' ');
//         return words.map((word, index, words) => {
//           // If the word has more than one uppercase letter, keep its case
//           if (shouldKeepCase(word)) {
//             return word;
//           }
//           // Explicitly capitalize "I" if it stands alone
//           if (word === "i" || word === "I") {
//             return "I";
//           }
//           // Capitalize the first letter of the first word and any word after a dash or number
//           if (isStartOfNewSegment(word, index, words)) {
//             return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//           }
//           // Lowercase all other words
//           return word.toLowerCase();
//         }).join(' ');
//       }
    
// // A new function to recursively transform text nodes, preserving elements
//   function transformTextNodes(node) {
//     if (node.nodeType === Node.TEXT_NODE) { // Text node
//       node.nodeValue = processHeaderText(node.nodeValue.trim());
//     } else if (node.nodeType === Node.ELEMENT_NODE) { // Element node
//       node.childNodes.forEach(transformTextNodes); // Recurse into children
//     }
//   }
//   document.querySelectorAll('h1, h2, h3, h4').forEach(header => {
//     transformTextNodes(header);
//   });
// });