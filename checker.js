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