export function pluralizeStars(count: number): string {
    if (count === 1) {
      return "звезда";
    } else if (count >= 2 && count <= 4) {
      return "звезды";
    } else if (count === 5) {
      return "звезд";
    } else {
      return "";
    }
  }
  