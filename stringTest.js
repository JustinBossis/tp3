function repeatTests(){
    console.log(repeat("foo", 3));
    console.log(repeat("fer", 7));
    console.log(repeat("35d", 5));
}

function truncateTests(){
    console.log(truncate("unchanged text", 20));
    console.log(truncate("unchanged text", 14));
    console.log(truncate("truncated text", 13));
}

function isPalindromeTests(){
    console.log(isPalindrome("bonjour")); // => false
    console.log(isPalindrome("toto")); // => false
    console.log(isPalindrome("kayak")); // => true
    console.log(isPalindrome("ressasser")); // => true
}

function swapCaseTests(){
    console.log(swapCase("HELLO")); // => hello
    console.log(swapCase("bye")); // => BYE
    console.log(swapCase("GooD NighT")); // => gOOd nIGHt
}