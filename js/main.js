var iceCream = ['Strawberry', 'Cookies and Cream', 'Vanilla',
    'Mint Chip'];

var president44 = {
    firstName: 'Barack',
    lastName: 'Obama',
    termLength: '8 years',
    party: 'Democrat',
    yearsOfPresidency: '2009 - 2016'
};

var president43 = {
    firstName: 'George W.',
    lastName: 'Bush',
    termLength: '8 years',
    party: 'Republican',
    yearsOfPresidency: '2001 - 2009'
};

var president42 = {
    firstName: 'Bill',
    lastName: 'Clinton',
    termLength: '8 years',
    party: 'Democrat',
    yearsOfPresidency: '1993 - 2001'
};

var president41 = {
    firstName: 'George H. W.',
    lastName: 'Bush',
    termLength: '4 years',
    party: 'Republican',
    yearsOfPresidency: '1989 - 1993'
};

var president40 = {
    firstName: 'Ronald',
    lastName: 'Reagan',
    termLength: '8 years',
    party: 'Republican',
    yearsOfPresidency: '1981 - 1989'
};

var presidents = [president44, president43, president42, president41, president40];

console.log(presidents[2].firstName, presidents[2].lastName);

function howdy() {
    return 'Christina Hendricks says hello!';
}

console.log(howdy());

var numba = function (string) {
    if (string.length < 7) {
        console.log('What a short little word!');
    } else if (string.length > 7) {
        console.log('I’m sorry, but that’s too many to count.');
    } else {
        console.log('What a perfect choice!');
    }
};

console.log(numba('7'));

console.log(numba('seventy'));

console.log(numba('university'));
