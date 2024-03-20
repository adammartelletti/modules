document.addEventListener("DOMContentLoaded", function() {
  // Function to check if a word has more than one uppercase letter, indicating it should keep its case
  function shouldKeepCase(word) {
    return word.replace(/[^A-Z]/g, "").length > 1;
  }

  // Function to process each word in the header, applying capitalization rules
  function processWord(word, index, words) {
    // Capitalize the first word of the header, or any word following a dash
    if (index === 0 || words[index - 1].endsWith('-')) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    // Capitalize "I" if it stands alone, regardless of its position
    if (word.toLowerCase() === 'i') {
      return word.toUpperCase();
    }

    // If the word should keep its case (has more than one uppercase letter), return it as is
    if (shouldKeepCase(word)) {
      return word;
    }

    // Lowercase all other words
    return word.toLowerCase();
  }

  // Function to process the header text
  function processHeaderText(text) {
    // Split the text into words and process each word according to the rules
    return text.split(' ').map(processWord).join(' ');
  }

  // Apply the text processing to all h1, h2, h3 elements
  document.querySelectorAll('h1, h2, h3').forEach(header => {
    header.textContent = processHeaderText(header.textContent.trim());
  });
});