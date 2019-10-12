import { createGraph, CFG } from "./algorithm";

describe('Algorithm testing', () => {


    test('it should not throw errors', () => {

    });

    test('it shall return Ford-Fulkerson graph where capacity is 1 or 0 => mapping matrix', () => {
        const selectedSignals = ['s1', 's2', 's3', 's4'];
        const signalPortsData = {
            's1': ['p1', 'p2', 'p3'],
            's2': ['p2', 'p3'],
            's3': ['p3'],
            's4': ['p1', 'p4'],
            's5': ['p1', 'p12'],
            's6': ['p1', 'p5', 'p6', 'p7']
        };

        const resultMatrix = createGraph(selectedSignals, signalPortsData);
        const expectedMatrix = [[1, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 1, 0],
        [1, 0, 0, 1]
        ];

        expect(resultMatrix).toEqual(expectedMatrix);
    });

    test('it shall return the maximum matching number', () => {
        const inputMatrix = [[1, 1, 1, 0],
                            [0, 1, 1, 0],
                            [0, 0, 1, 0],
                            [1, 0, 0, 1]
                                        ];
        const g = new CFG(inputMatrix);
        expect(g.maxBPM()).toBe(4);
    });

});