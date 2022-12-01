
// Declaring function with name parameter
function likes(name)
{
    // Start program with null likes
    let likes = ['james','victor','clinton','sani','paul','george','fred'];

    // Add name to array 
    likes.unshift(name);

    // IF lenght of name Array is < 1
    if (likes.length < 1)
    {
        // print 'no one like this'
        console.log(`No one likes this.`);
    }
    // ELSE IF length on name array < 2
    else if (likes.length < 2)
    {
        // print 'name like this'
        console.log(`${likes[0]} like this.`)
    }
    // ELSE IF length of name array < 3
    else if (likes.length < 3)
    {
        // print 'name and next1 like this'
        console.log(`${likes[0]} and ${likes[1]} likes this.`);
    }
    // ELSE IF length of name array < 4
    else if (likes.length < 4)
    {
        // print 'name, next1 and next2 like this'
        console.log(`${likes[0]}, ${likes[1]}, and ${likes[2]} likes this.`);
    }
    // ELSE 
    else
    {
        // Print name, next1, and (array length - 2)
        console.log(`${likes[0]}, ${likes[1]}, and ${likes.length - 2} others likes this.`);
    }
}

likes('fans');
likes('junior');





const fans = ['james','victor','clinton','sani','paul','george','fred'];

function clicks (){
    //  create container
    let feedback;
    //  loop through arr
    // while counter < arr.length
    let counter = 0;
    while (counter < fans.length)
    {
        // container = call function
        feedback = likes(fans)
        console.log(feedback)
        
        // increment counter
        counter++;
    }
    // console.log(feedback)
}

// clicks();