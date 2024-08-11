import useFilterCondition from "@/stores/zustand";
import { SubjectType, subjectPropValues } from "@/types/subject";
import { Fragment } from "react";
import { cls, generateRandomDelay } from "@/utils/util";
import { usePathname } from "next/navigation";
import useLocalStorage from "@/hooks/useLocalStorage";
import useLoading from "@/stores/loading";
import useAlert from "@/stores/alert";
import { TCell, THead } from "../Table";
import { sendGAEvent } from '@next/third-parties/google'

export function SubjectSearchResult() {
  const pathname = usePathname();
  const { storedValue, setValue } = useLocalStorage(pathname.slice(1), []);
  const { subjectValues } = useFilterCondition();
  const { setIsLoading } = useLoading();
  const { setMessage } = useAlert();

  const onSaveSubject = (subject: SubjectType) => {
    sendGAEvent({
      event: 'buttonClicked',
      value: pathname === "/register" ? 'register-subject' : 'register-desired-subject',
    });
    setIsLoading(true);
    setTimeout(() => {
      setValue([...storedValue, subject]);
      setIsLoading(false);
      setMessage("register", {
        message: `${subject.교과목명}(${subject.분반}분반)이 ${
          pathname === "/register" ? "수강신청" : "희망과목담기"
        } 완료되었습니다!`,
        subject: subject,
      });
    }, generateRandomDelay());
  };

  return (
    <article className="relative">
      <div className="border-2 border-black w-[calc(100%-16px)] h-38 absolute top-0 z-20" />
      <div className="max-h-400 overflow-auto border-2 border-black">
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
            {subjectValues ? (
              subjectValues.slice(1, 30).map((subject, vindex) => (
                <Fragment key={vindex}>
                  <tr>
                    <TCell key={vindex} value={vindex.toString()} />
                    <td className="border border-slate-300 max-w-200 text-xs py-0 text-center mx-auto px-2">
                      <button
                        className="border-green-600 border text-green-600 bg-white text-sm m-6 px-8 py-4 rounded-md text-nowrap"
                        onClick={() => onSaveSubject(subject)}
                      >
                        {pathname === "/register" ? "신청하기" : "담기"}
                      </button>
                    </td>
                    {subjectPropValues.map((prop, index) => (
                      <TCell
                        key={index}
                        value={subject[prop as keyof SubjectType]}
                      />
                    ))}
                  </tr>
                </Fragment>
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
    </article>
  );
}
