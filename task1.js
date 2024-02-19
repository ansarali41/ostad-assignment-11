function permuteString(str) {
    const result = [];

    // Helper function to generate permutations recursively
    function permuteHelper(current, remaining) {
        if (remaining.length === 0) {
            result.push(current);
        } else {
            for (let i = 0; i < remaining.length; i++) {
                const nextCurrent = current + remaining[i];
                const nextRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
                permuteHelper(nextCurrent, nextRemaining);
            }
        }
    }

    permuteHelper('', str);
    return result;
}

// Test cases
console.log(permuteString('abc'));
console.log(permuteString('xy'));

// ** The time complexity: O(n!)
// ** The space complexity: O(n!)
