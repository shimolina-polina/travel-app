export function pluralizeVariants(count: number): string {
    if (count === 1) {
      return "По вашему запросу доступен 1 вариант";
    } else if (count >= 2 && count <= 4) {
      return `По вашему запросу доступно ${count} варианта`;
    } else if (count >= 5) {
      return `По вашему запросу доступно ${count} вариантов`;
    } else {
      return "";
    }
  }
  