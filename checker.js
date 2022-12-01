// Declaring the function 
// function Solution(first_str,secound_str)
// {
        // checking for match, starting from end of second string as reference
//     feedback = first_str.substring(-secound_str.length);

        // comparing results of extracted sub string
//     if (feedback == secound_str)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }

// Initializing function

// result = Solution('learnable', 'able');
// result2 = Solution('learnable', 'bled');

// console.log(result);
// console.log(result2);

// Declaring function
function solution(first_word, second_word)
{
    // extracting substring from first_word, from end of second_word as reference
    const result = first_word.substr(-second_word.length);

    // Tenary comparison between extracted word and second word
    (result == second_word) ? feedback = true : feedback = false;

    console.log(feedback);
}

// Calling function
solution('learnable', 'able');
solution('learnable', 'bled');