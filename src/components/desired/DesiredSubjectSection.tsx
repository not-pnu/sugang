import useLocalStorage from "@/hooks/useLocalStorage";
import useAlert from "@/stores/alert";
import useLoading from "@/stores/loading";
import { SubjectType, subjectPropValues } from "@/types/subject";
import { getDesiredSubjects, isDuplicate } from "@/utils/subject";
import { cls, generateRandomDelay } from "@/utils/util";
import { useEffect, useState } from "react";
import { TCell, THead } from "../Table";

export default function DesiredSubjectSection({
  visible,
}: {
  visible: boolean;
}) {
  const [desiredValue, setDesiredValue] = useState<SubjectType[]>([]);
  const { storedValue: registerValue, setValue: setRegisterValue } =
    useLocalStorage("register", []);
  const { setIsLoading } = useLoading();
  const { type, setMessage } = useAlert();

  const onRegisterSubject = (subject: SubjectType) => {
    if (isDuplicate(subject, registerValue)) {
      setMessage("duplicate", {
        subject: undefined,
        message: "동일한 교과목을 이미 수강신청된 상태입니다.",
      });
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setRegisterValue([...registerValue, subject]);
    }, generateRandomDelay());
  };

  useEffect(() => {
    const temp = getDesiredSubjects();
    if (temp) {
      setDesiredValue(temp);
    }
  }, []);

  return (
    <section
      className={cls(
        "flex flex-col gap-y-4 relative duration-300 ease-in-out origin-top",
        visible ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
      )}
    >
      <div className="border-2 border-black w-[calc(100%)] h-38 absolute top-0 z-20" />
      <div className="max-h-500 overflow-auto">
        <table className="w-full">
          <thead className="bg-slate-200 w-full sticky top-0">
            <tr className="">
              <th className="border border-slate-300 text-sm px-16 tracking-wider">
                NO
              </th>
              <th className="border border-slate-300 text-sm px-16 tracking-wider">
                신청
              </th>
              {subjectPropValues.map((prop, index) => (
                <THead key={index} value={prop} />
              ))}
            </tr>
          </thead>
          <tbody className="overflow-y-auto">
            <tr />
            {desiredValue ? (
              desiredValue.map((subject, vindex) => (
                <tr key={vindex}>
                  <TCell value={vindex.toString()} />
                  <td className="border border-slate-300 max-w-200 text-xs py-0 text-center mx-auto px-2">
                    <button
                      className={cls(
                        "border bg-white text-sm m-6 px-8 py-4 rounded-md text-nowrap",
                        isDuplicate(subject, registerValue)
                          ? "border-pnuBgGray text-pnuBgGray cursor-not-allowed"
                          : "border-green-600 text-green-600"
                      )}
                      disabled={isDuplicate(subject, registerValue)}
                      onClick={() => onRegisterSubject(subject)}
                    >
                      {isDuplicate(subject, registerValue) ? "-" : "신청하기"}
                    </button>
                  </td>
                  {subjectPropValues.map((prop, index) => (
                    <TCell
                      key={index}
                      value={subject[prop as keyof SubjectType]}
                    />
                  ))}
                </tr>
              ))
            ) : (
              <tr className="h-40 text-center">
                <td colSpan={11} className="border border-slate-300">
                  조회된 데이터가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
