
import math, { matrix, multiply } from 'mathjs'
export const createGraph = (selectedSignals, signalPortsData) => {
    let ports = [];

    // Get the number of ports used  by selectedSignals only
    Object.keys(signalPortsData).map(signal => {
        if (selectedSignals.includes(signal)) {
            signalPortsData[signal].forEach(port => {
                if (!ports.includes(port)) {
                    ports = [...ports, port];
                }
            });
        };
        return null;
    });

    let matrix = [];

    selectedSignals.forEach(signal => {
        let eachSigPorts = []
        ports.forEach(eachPort => {
            eachSigPorts = ports.map(port => {
                if (signalPortsData[signal].includes(port)) {
                    return 1;
                } else {
                    return 0;
                }
            });
        });
        matrix.push(eachSigPorts);
    });


    console.log(matrix)
    return matrix;
};

export class CFG {

    constructor(matrix) {
        this.matrix = matrix;
        this.numberOfSignals = matrix.length;
        this.numberOfPorts = matrix[0].length;
        this.store = {};
    };

    bpm(u, matchR, seen) {
        for (let v in [...Array(this.numberOfPorts).keys()]) {
            console.log(`1st check: matchR: ${matchR}, matchR[v]: ${matchR[v]}, u: ${u},  v: ${v}, seen: ${seen}`)

            if (this.matrix[u][v] && seen[v] === false) {
                seen[v] = true;


                if (matchR[v] === -1 || this.bpm(matchR[v], matchR, seen)) {
                    matchR[v] = u
                    // console.log(`2nd check: matchR: ${matchR}, matchR[v]: ${matchR[v]}, u: ${u},  v: ${v}, seen: ${seen}`)
                    console.log('******************************************');
                    this.store[u] = v;
                    return true;
                }
            }
        }
        return false;
    }

    maxBPM() {
        console.log('called maxBPM');
        const matchR = new Array(this.numberOfSignals).fill(-1);

        for (let i in [...Array(this.numberOfSignals).keys()]) {
            let seen =  new Array(this.numberOfPorts).fill(false);
            this.bpm(i, matchR, seen);
        }
        console.log(this.store)
        return this.store;
    }
}