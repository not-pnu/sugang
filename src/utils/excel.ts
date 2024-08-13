import { ExcelSubjectType, SubjectType } from "@/types/subject";
import axios from "axios";
import {read, utils} from "xlsx";
import {URL_DATA} from '@/constants/url';

const DEFAULT_URL = URL_DATA.DEFAULT_URL

async function fetchExcelFile(url: string) {
  console.log(DEFAULT_URL);
  try {
    const response = await axios.get(
      "/sugang/sugang-data-20240124.xlsx",
      {
        responseType: "arraybuffer",
      }
    );

    const data = new Uint8Array(response.data);
    const workbook = read(data, { type: "array" });

    return workbook;
  } catch (error) {
    console.error("Error fetching the excel file:", error);
    return null;
  }
}

export async function readExcelData(
  url: string
): Promise<SubjectType[] | undefined> {
  const workbook = await fetchExcelFile(url);
  if (!workbook) return;

  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];

  const data = utils.sheet_to_json(worksheet) as ExcelSubjectType[];
  return transformData(data.slice(1));
}

const headerMapping: { [key: string]: string } = {
  __EMPTY: "대학명",
  __EMPTY_2: "개설학과",
  __EMPTY_3: "학년",
  __EMPTY_4: "교과목코드",
  __EMPTY_5: "분반",
  __EMPTY_6: "교과목명",
  __EMPTY_7: "교과구분",
  __EMPTY_8: "학점",
  __EMPTY_9: "이론",
  __EMPTY_10: "실습",
  __EMPTY_11: "담당교수",
  __EMPTY_12: "제한인원",
  __EMPTY_13: "시간표",
  __EMPTY_14: "교양영역명",
  __EMPTY_15: "원어강의",
  __EMPTY_16: "팀티칭",
  __EMPTY_17: "원격수업",
  __EMPTY_18: "비고",
} as const;

export function transformData(data: any[]): any[] {
  return data.map((row) => {
    const transformedRow: { [key: string]: any } = {};
    Object.entries(row).forEach(([key, value]) => {
      // __rowNum__과 같은 필요없는 키는 변환에서 제외
      if (key.startsWith("__") && key !== "__rowNum__") {
        const newKey = headerMapping[key];
        transformedRow[newKey] = value;
      } else if (!key.startsWith("__")) {
        // 이미 정의된 키는 그대로 사용
        transformedRow[key] = value;
      }
    });
    return transformedRow;
  });
}
