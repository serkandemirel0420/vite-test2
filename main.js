function printAll(nums, permutations , answers ) {
  if (typeof permutations === 'undefined') { permutations = []; }
  if (typeof answers === 'undefined') { answers = []; }


  if (nums.length === 0) {
    answers.push([...permutations]);
  }
  //loop
  for (let [key, value] of nums.entries()) {
    permutations.push(value);
    let choices = nums.filter((e) => e !== value);
    printAll(choices, permutations, answers);
    permutations.pop();
  }

  return answers;
}


    printAll([1, 2])


