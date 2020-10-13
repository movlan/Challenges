# Name

Migratory Birds

## Instructions

You have been asked to help study the population of birds migrating across the continent. Each type of bird you are interested in will be identified by an integer value. Each time a particular kind of bird is spotted, its id number will be added to your array of sightings. You would like to be able to find out which type of bird is most common given a list of sightings. Your task is to print the type number of that bird and if two or more types of birds are equally common, choose the type with the smallest ID number.

For example, assume your bird sightings are of types `arr = [1,1,2,2,3]`. There are two each of types `1` and `2`, and one sighting of type `3`. Pick the lower of the two types seen twice: type `1`.

### Function Description

Complete the migratoryBirds function in the editor below. It should return the lowest type number of the most frequently sighted bird.

migratoryBirds has the following parameter(s):

- arr: an array of integers representing types of birds sighted

## Example

Input: `[1, 4, 4, 4, 5, 3]`

Output: `4`

Input: `[1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]`

Output: `3`
