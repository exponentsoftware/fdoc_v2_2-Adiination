function createNumberObjects(numbers) {
    const objects = [];
  
    for (const number of numbers) {
      const object = {
        number,
        isEven: number % 2 === 0, //checking if the number is odd or even
        double: number * 2, 
      };
  
      objects.push(object); //pushing all the object to objects array
    }
  
    return objects;
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const objects = createNumberObjects(numbers);
  console.log(objects);