export function pluralizeGuest(count: number): string {
    if (count === 1) {
      return "гостя";
    } else if (count >= 2) {
      return "гостей";
    } else {
      return "";
    }
  }
  