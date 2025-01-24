import { calculateCubeVolume } from './cubeVolume.js';

// Set the edge length of the cube in meters
let edge = 5;  // Length of one edge in meters
let volume = calculateCubeVolume(edge);

console.log("The volume of the cube is: " + volume + " cubic meters.");