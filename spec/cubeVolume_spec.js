import { calculateCubeVolume } from './cubeVolume.js';

// Set the edge length of the cube in meters
let edgeLengthInMeters = 5;  // Length of one edge in meters
let volume = calculateCubeVolume(edgeLengthInMeters);

console.log("The volume of the cube is: " + volume + " cubic meters.");