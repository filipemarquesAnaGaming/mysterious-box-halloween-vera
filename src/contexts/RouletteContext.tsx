"use client";

import {
    createContext,
    ReactNode,
    useState,
} from "react";

import anime from 'animejs';

const rouletteWheelNumbers = [
    0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5,
    24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26,
];

let currentBallRotation = 0;
let currentWheelRotation = 0;
let currentWheelIndex = 0;

interface RouletteContextProps {
    startRotation: (speed: number, color: string) => void;
    attempts: number;
    spinning: boolean;
    win: boolean;
}

export const RouletteContext = createContext({} as RouletteContextProps);

export const RouletteProvider = ({ children }: { children: ReactNode }) => {

    const [attempts, setAttempts] = useState<number>(3);
    const [spinning, setSpinning] = useState<boolean>(false);
    const [win, setWin] = useState<boolean>(false);

    const getRouletteWheelNumber = (index: number): number =>
        rouletteWheelNumbers[index >= 0 ? index % 37 : 37 - Math.abs(index % 37)];

    const getRouletteWheelColor = (index: number): string => {
        const i = index >= 0 ? index % 37 : 37 - Math.abs(index % 37);
        return i === 0 ? 'green' : i % 2 === 0 ? 'black' : 'blue';
    };

    const startRotation = (speed: number, color: string) => {
        if (spinning) return;

        setAttempts(attempts - 1);
        setSpinning(true);

        const bezier = [0.165, 0.84, 0.44, 1.005];
        let newWheelIndex;
        let result;
        let resultColor;

        if (attempts == 1) {
            newWheelIndex = currentWheelIndex - speed;
            result = getRouletteWheelNumber(newWheelIndex);
            resultColor = getRouletteWheelColor(newWheelIndex);

            if (resultColor !== color) {
                return startRotation(Math.floor(Math.random() * (400 - 100 + 1)) + 100, color);
            }
        } else {
            newWheelIndex = currentWheelIndex - speed;
            result = getRouletteWheelNumber(newWheelIndex);
            resultColor = getRouletteWheelColor(newWheelIndex);
        }

        (() => {
            const newRotation = currentWheelRotation + (360 / 37) * speed;

            anime({
                targets: [".layer-2", ".layer-4"],
                rotate: function () {
                    return newRotation;
                },
                duration: function () {
                    return 5000;
                },
                loop: 1,
                easing: `cubicBezier(${bezier.join(",")})`,
                complete: (...args) => {
                    currentWheelRotation = newRotation;
                    currentWheelIndex = newWheelIndex;
                    if (color === resultColor) {
                        setWin(true);
                        return;
                    }
                }
            });
        })();

        (() => {
            const newRotaion = -4 * 360 + currentBallRotation;
            anime({
                targets: ".ball-container",
                translateY: [
                    { value: 0, duration: 2000 },
                    { value: 20, duration: 1000 },
                    { value: 25, duration: 900 },
                    { value: 50, duration: 1000 }
                ],
                rotate: [{ value: newRotaion, duration: 3000 }],
                duration: function () {
                    return 3000;
                },
                loop: 1,
                easing: `cubicBezier(${bezier.join(",")})`,
                complete: () => {
                    currentBallRotation = newRotaion;
                    setSpinning(false);
                }
            });
        })();
    };

    if (typeof window !== "undefined") {
        (window as any).startRotation = startRotation;
    }

    return (
        <RouletteContext.Provider
            value={{
                startRotation,
                attempts,
                spinning,
                win
            }}
        >
            {children}
        </RouletteContext.Provider>
    );
};