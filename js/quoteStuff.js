const quotes = [
  { quote: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt" 
  },

  { quote: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein"
  },

  { quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker"
  },

  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },

  { quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },

  { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar"
  },

  { quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },

  { quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },

  { quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky"
  },

  { quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },

  { quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },

  { quote: "The harder you work for something, the greater you'll feel when you achieve it.",
    author: "Unknown"
  },

  { quote: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  },

  { quote: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller"
  },

  { quote: "Act as if what you do makes a difference. It does.",
    author: "William James"
  }
];



document.getElementById("btn-quote").addEventListener("click", function(){
 

    let quoteLength = Math.random() * quotes.length;
    let quoteLengthFloor = Math.floor(quoteLength);
    let quoteOutput = quotes[quoteLengthFloor].quote;
    let nameOutput = quotes[quoteLengthFloor].author;


    let quoteParagrahElement = document.getElementById("quote-paragrah");
    quoteParagrahElement.innerText = quoteOutput;

    let authorNameElement = document.getElementById("author-name");
    authorNameElement.innerText = nameOutput;
    
})