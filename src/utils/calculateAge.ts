export function calculateAge(birthdate: Date = new Date("2002-06-05")): number {
  const currentDate = new Date();
  const birthYear = birthdate.getFullYear();
  const currentYear = currentDate.getFullYear();

  let age = currentYear - birthYear;

  // Check if birthday has occurred this year
  const birthdateThisYear = new Date(currentDate);
  birthdateThisYear.setFullYear(birthYear);

  if (birthdateThisYear > currentDate) {
    age--;
  }

  return age;
}
