export function calculateAge(birthDate: string, referenceDate?: Date): number | null {
  const birth = new Date(birthDate);
  if (isNaN(birth.getTime())) return null;

  const ref = referenceDate ?? new Date();
  let age = ref.getFullYear() - birth.getFullYear();
  const monthDiff = ref.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && ref.getDate() < birth.getDate())) {
    age--;
  }

  return age < 0 ? null : age;
}
