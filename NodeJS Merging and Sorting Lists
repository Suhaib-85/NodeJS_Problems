const TYPE_PRIORITY = {
    boolean: 1,
    number: 2,
    string: 3,
};

function customCompare(a, b) {
    const typeA = typeof a;
    const typeB = typeof b;

    if (typeA !== typeB) {
        return TYPE_PRIORITY[typeA] - TYPE_PRIORITY[typeB];
    }

    switch (typeA) {
        case 'boolean':
            return (a === b) ? 0 : (a ? 1 : -1);
        case 'number':
            return a - b;
        case 'string':
            return a.localeCompare(b, undefined, { sensitivity: 'variant' });
        default:
            return;
    }
}

function mergeSort(array) {
    if (array.length <= 1) return array;

    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (customCompare(left[i], right[j]) <= 0) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return result.concat(left.slice(i), right.slice(j));
}

function validateLists(list, name) {
    if (!Array.isArray(list)) {
        throw new TypeError(`${name} must be an array.`);
    }

    list.forEach((item) => {
        if (typeof item !== 'boolean' && typeof item !== 'string' && typeof item !== 'number') {
            throw new TypeError(`Unsupported data type used in ${name}: ${typeof item}`);
        }
    });
}

function runTests(testCases) {
    testCases.forEach(([list1, list2], index) => {
        console.log(`\nTest Case #${index + 1}`);
        try {
            validateLists(list1, "List 1");
            validateLists(list2, "List 2");
            const result = mergeSort(list1.concat(list2));
            console.log('Sorted Merged List:', result);
        } catch (err) {
            console.error('Error:', err.message);
        }
    });
}

const testCases = [
    [
        [true, 3, 'apple', 'b'],
        [false, 1, 'a', 'applepie', 2],
    ],

    [
        [true, 'x'],
        [false, 'y', [1, 2]],
    ],

    [
        [true, () => { }, 'hello'],
        [false, 10],
    ],

    [
        [true, { key: 'value' }, 'char'],
        ['string', false],
    ],

    [
        [new Set([1, 2]), 'abc'],
        [false],
    ],

    [
        ['a', new Map(), 5],
        [true],
    ],

    [
        ['z', null],
        [true],
    ],

    [
        ['test'],
        [false, undefined],
    ]
];

runTests(testCases);
