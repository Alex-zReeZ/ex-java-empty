import {errors} from "@playwright/test";
import {getDefaultResultOrder} from "dns";
import {setMaxIdleHTTPParsers} from "http";

/**
 * @param {number} diameter
 * @return {number} sphere volume
 */

export function computeSphereVolume(diameter) {
    if (isNaN(diameter)) {
        throw "fdsgsd";
    } else if (diameter < 0) {
        throw "fdsgsd";
    } else if (diameter === String) {
        throw "fdsgsd";
    }

    var r = diameter / 2;
    return (4 / 3) * Math.PI * Math.pow(r, 3);
}



/**
 * @param {number} n
 * @return {number} number rounded to one decimal
 */
export function roundNumberToOneDecimals(n) {
    if (isNaN(n) || n === String) {
        throw new Error();
    }

    let res = Math.round(n * 10) / 10
    return res;

}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} average with full precision
 */
export function computeAverage(grades) {
    if (!Array.isArray(grades) || grades.some(isNaN)) {
        throw "Wrong input";
    } else {
        for (let number of grades) {
            if (typeof number !== "number" || isNaN(number)) {
                throw "Wrong input";
            }
        }
    }


    let sum = 0;
    for (let n = 0; n < grades.length; n++) {
        sum += grades[n];
    }

    return sum / grades.length;
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} rounded average to 1 decimal
 */
export function roundedAverage(grades) {
    if (!Array.isArray(grades) || grades.some(isNaN)) {
        throw "Wrong input";
    } else {
        for (let number of grades) {
            if (typeof number !== "number" || isNaN(number)) {
                throw "Wrong input";
            }
        }
    }

    let sum = 0;
    for (let n = 0; n < grades.length; n++) {
        sum += grades[n];
    }
    sum = sum / grades.length;

    return  Math.round(sum * 10) / 10

}


