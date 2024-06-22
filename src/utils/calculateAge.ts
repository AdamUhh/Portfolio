// Note: Months are zero-indexed (0 is January, 5 is June)
import { unstable_noStore as noStore } from 'next/cache';
function calculateAge(birthdate: Date = new Date(2002, 5, 5)): number {
    noStore()
    const currentDate = new Date();

    const birthYear = birthdate.getFullYear();
    const currentYear = currentDate.getFullYear();

    let age = currentYear - birthYear;

    const birthMonth = birthdate.getMonth();
    const currentMonth = currentDate.getMonth();

    if (
        currentMonth < birthMonth ||
        (currentMonth === birthMonth && currentDate.getDate() < birthdate.getDate())
    ) {
        age--;
    }

    return age;
}
export { calculateAge };
