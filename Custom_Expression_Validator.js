function isValidMathExpression(expr) {

    console.log(`You entered: \'${expr}\'\n`);
    if (typeof expr !== 'string' || expr.trim() === '') {
        console.log("error: Expression cannot be empty.\n");
        return false;
    }

    const cleanedExpr = expr.replace(/\s/g, '');

    const allowedChars = '0123456789+-*/()';
    for (const char of cleanedExpr) {
        if (!allowedChars.includes(char)) {
            console.log("error: Invalid character '${char}' found.\n");
            return false;
        }
    }

    if (/[+\-*/]{2,}/.test(cleanedExpr)) {
        console.log("error: Consecutive operators are not allowed.\n");
        return false;
    }

    if (/^[+\-*/]/.test(cleanedExpr)) {
        console.log("error: Unary operators are not allowed at the beginning.\n");
        return false;
    }

    if (/[+\-*/]$/.test(cleanedExpr)) {
        console.log("error: Expression cannot end with an operator.\n");
        return false;
    }

    if (/\(\s*\)/.test(expr)) {
        console.log("error: Empty parentheses are not allowed.\n");
        return false;
    }

    let parenCount = 0;
    for (const char of cleanedExpr) {
        if (char === '(') {
            parenCount++;
        } else if (char === ')') {
            parenCount--;
        }
        if (parenCount < 0) {
            console.log("error: Unbalanced parentheses (closing before opening).\n");
            return false;
        }
    }
    if (parenCount > 0) {
        console.log("error: Unbalanced parentheses (opening without closing).\n");
        return false;
    }

    if (/[0-9]\(/.test(cleanedExpr) || /\)[0-9]/.test(cleanedExpr)) {
        console.log("error: Numbers must be separated from parentheses by an operator.\n");
        return false;
    }

    console.log("Expression is Valid.\n")
    return true;
}

console.log('\n--- Running Tests ---\n');

isValidMathExpression("1+2");
isValidMathExpression("10 * (2 + 3) / 5");
isValidMathExpression("3-2+1");
isValidMathExpression("((2+3))");
isValidMathExpression("10");

console.log('\n--- Invalid Tests ---\n');

isValidMathExpression("+2");
isValidMathExpression("-2");
isValidMathExpression("2++2");
isValidMathExpression("2+-2");
isValidMathExpression("((2+3)");
isValidMathExpression("(2+3))");
isValidMathExpression("()");
isValidMathExpression("(())");
isValidMathExpression("2+");
isValidMathExpression("/2");
isValidMathExpression("2^3");
isValidMathExpression("3(4+5)");
isValidMathExpression("(4+5)3");
isValidMathExpression("(4+)5");
isValidMathExpression("4+5)");
isValidMathExpression("((4+5)");
isValidMathExpression("4..5 + 2");
isValidMathExpression("abc");
isValidMathExpression("");
isValidMathExpression(" ");
