import { Filter } from "@/types/filter";
import { ExcelSubjectType } from "@/types/subject";

export function filterData(
  data: ExcelSubjectType[] | undefined,
  filter: Filter
) {
  if (!data) {
    return undefined;
  }

  const { univ, subjectClass, nativeLanguageClass } = filter;
  let filteredData: ExcelSubjectType[] = data.filter((subject) => {
    if (!subject[ExcelSubjectType.univName as any].includes(univ)) {
      return false;
    } else if (subject[ExcelSubjectType.subjectClass as any] !== subjectClass) {
      return false;
    } else if (
      nativeLanguageClass === "N" &&
      subject[ExcelSubjectType.nativeLanguageClass as any] === "Y"
    ) {
      return false;
    } else {
      if (
        subjectClass === "교양선택" &&
        !subject[ExcelSubjectType.liveralArtsClass as any].includes(
          filter.liveralArtsClass.toString()
        )
      ) {
        return false;
      }
    }
    return true;
  });
  return filteredData;
}