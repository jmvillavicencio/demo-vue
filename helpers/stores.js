
export function createMatchElementArray(arr) {
  return arr.map((e) => {
    const skillsConcat = e.skills.reduce((acum, actual, i) => (i ? `${acum}_${actual}` :  actual), '');
    return {
      ...e,
      matchelement: `${e.company.toLowerCase()}_${e.position.toLowerCase()}_${skillsConcat.toLowerCase()}`,
    };
  });
}
