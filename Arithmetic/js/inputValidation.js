
function integerPicker()
{

    var menuChoice = 0;
    var integerOne = parseInt(prompt("Please input the first number please"));
    var integerTwo = parseInt(prompt("Please input the second number please"));

    while(menuChoice < 1 || menuChoice > 5)
    {

        menuChoice = prompt("Input one of these options for your answer: 1. Sum  2. Difference 3. Product 4. Integer quotient 5. remainder");

        if(menuChoice == 1)
        {
            var integerSum = integerOne + integerTwo;
            document.write("The sum of "+integerOne+" and " + integerTwo + " equals " + integerSum)
        }

        else if(menuChoice == 2)
        {
            var differenceCalc = 0;

            if(integerOne > integerTwo)
            {
                differenceCalc = integerOne - integerTwo;
                document.write("The difference between "+integerOne + " and " + integerTwo + " is " + differenceCalc);
            }

            else if(integerTwo > integerOne)
            {
                differenceCalc = integerTwo - integerOne;
                document.write("The difference between "+integerTwo + " and " + integerOne + " is " + differenceCalc);
            }

            else if(integerOne == integerTwo)
            {
                differenceCalc = 0;
                document.write("The difference between "+integerTwo + " and " + integerOne + " is " + differenceCalc);
                
            }

        }

        else if(menuChoice == 3)
        {
            productCalc = integerOne * integerTwo;
            document.write("The product of " + integerOne + " and " + integerTwo + " is " + productCalc);
        }

        else if(menuChoice == 4)
        {
            intQuotientCalc = integerOne / integerTwo;
            document.write("The Integer Quotient of " + integerOne + " and " + integerTwo + " is " + intQuotientCalc);
        }

        else if(menuChoice == 5)
        {
            remainderCalc = integerOne % integerTwo;
            document.write("The Remainder of " + integerOne + " and " + integerTwo + " is " + remainderCalc);

        }
    }
    



}



integerPicker();