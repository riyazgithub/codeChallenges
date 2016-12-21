/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var printsubs = function (string, low, high) {
    var ret = '';
    for( var i =low; i<=high; i++) {
        ret += string[i];
    }
    return ret
}
var longestPalindrome = function (string) {
    var n = string.length;
    var arr = new Array();
    for(var i=0;i<n;i++) {
        arr[i] = new Array();
        for(var j=0;j<n;j++) {
            arr[i][j] = 0;
        }
    }
var maxlength = 1;
for(var i =0 ;i< n ;i++) {
    arr[i][i] = 1;
}
var start = 0;
for(var i =0 ; i< n-1 ; i++) {
    if(string[i] === string[i+1]) {
        arr[i][i+1] = 1;
        start = i;
        maxlength = 2;
    }
}

for(var k =3; k<=n ; k++) 
{
    for(var i =0; i< n-k+1; i++)
    {
        var j = i + k -1;
        if ( (arr[i+1][j-1] === 1) && (string[i] === string[j])) 
        {
            arr[i][j] = 1;
            if( k > maxlength) {
                start = i;
                maxlength = k;
            }
            console.log('i ',i,' j ',j,' k ',k);
            console.log(arr);            
        }
    }
}
    console.log(arr);
    console.log('Max length ', maxlength, start );
    console.log('Longest Substing ',printsubs(string, start, start+maxlength-1));
};

var input = ' a racecara';

console.log('Longest Palindrome ', longestPalindrome(input));