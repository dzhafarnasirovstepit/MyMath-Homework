console.clear();

function myMath(operation, ...nums) {

    if (new.target) {
        throw new Error('Invalid operation');
    }

    const isMethodAlreadyExist = operation in Math;

    if (isMethodAlreadyExist) {
        return Math[operation];
    }

    switch (operation) {


        case 'sum':

            let sum = 0;

            for (let i = 0; i < nums.length; ++i) {
                sum += nums[i];
            }

            return sum;

        case 'multiply':
            let multiply = 1;

            for (let i = 0; i < nums.length; ++i) {
                multiply *= nums[i];
            }

            return multiply;

        case 'division':

            if (nums.length === 0) {
                console.log("ERROR! Numbers are not specified.");
                return;
            }

            let division = 1;

            for (let i = 1; i < nums.length; ++i) {

                if (nums[i] === 0) {
                    console.log("ERROR! Do not divide using zero.");
                    return;
                }

                division /= nums[i];

            }

            return division;

        case 'subtract':

            if (nums.length === 0) {
                console.log("ERROR! Numbers are not specified.");
                return;
            }

            let subtract = 0;

            for (let i = 1; i < nums.length; ++i) {
                subtract -= nums[i];
            }

            return subtract;

    }

}


const sum = myMath('sum', 1, 2, 3, 4, 5, 6);
const multiply = myMath('multiply', 1, 2, 3, 4, 5, 6);
const division = myMath('division', 1, 2, 3, 4, 5, 6);
const subtract = myMath('subtract', 1, 2, 3, 4, 5, 6);

const abc = myMath('abc', 2, 4); 

const pi = myMath('PI');
const e = myMath('E');

console.log(pi);