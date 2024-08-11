"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import useAlert from "@/stores/alert";
import useLoading from "@/stores/loading";
import { readExcelData } from "@/utils/excel";
import { generateRandomDelay } from "@/utils/util";
import { usePathname } from "next/navigation";
import {useEffect, useRef} from 'react';
import { sendGAEvent } from '@next/third-parties/google'


export default function SugangSearchBar() {
  const pathname = usePathname();
  const { storedValue, setValue } = useLocalStorage(pathname.slice(1), []);
  const { setIsLoading } = useLoading();
  const courseCodeRef = useRef<HTMLInputElement>(null);
  const courseRoomIdRef = useRef<HTMLInputElement>(null);
  const { setMessage, reset } = useAlert();

    useEffect(() => {
        reset();
    }, []);

  const onSubmitInput = async () => {
    sendGAEvent({
      event: 'buttonClicked',
      value: 'click-guick-register-button',
    });
    const data = await readExcelData("/sugang-data-20240124.xlsx");
    const courseCode = courseCodeRef.current?.value;
    const courseRoomId = courseRoomIdRef.current?.value;
    const subject = data?.find(
      (subject) =>
        subject.교과목코드 === courseCode && subject.분반 === courseRoomId
    );
    if (subject) {
      setIsLoading(true);
      setTimeout(() => {
        setValue([...storedValue, subject]);
        setMessage("register", {
          message: `${subject.교과목명}(${subject.분반}분반)이 수강신청 완료되었습니다!`,
          subject: subject,
        });
        setIsLoading(false);
      }, generateRandomDelay());
    } else {
      alert("해당 과목이 존재하지 않습니다!");
      if (courseCodeRef.current && courseRoomIdRef.current) {
        courseCodeRef.current.value = "";
        courseRoomIdRef.current.value = "";
      }
    }
  };

  return (
    <form className="flex md:flex-col border w-full items-center">
      <div className="flex md:w-full">
        <label className="text-pnuText m-8 w-100 flex justify-center items-center text-nowrap md:justify-end">
          교과목번호
        </label>
        <div className="border p-4 flex justify-center md:w-full">
          <input
            ref={courseCodeRef}
            type="text"
            className="border focus:outline-none md:w-full"
          />
        </div>
      </div>
      <div className="flex md:w-full">
        <label className="text-pnuText m-8 w-100 flex justify-center items-center text-nowrap md:justify-end">
          분반
        </label>
        <div className="border p-4 flex justify-center md:w-full">
          <input
            ref={courseRoomIdRef}
            type="text"
            className="border focus:outline-none md:w-full"
          />
        </div>
      </div>
      <div className="flex justify-center md:w-full">
        <button
          className="bg-pnuWarn text-white text-sm m-6 px-8 py-4 rounded-md text-nowrap md:w-full md:py-8"
          onClick={onSubmitInput}
        >
          {pathname === "/register" ? "빠른 수강신청" : "빠른 담기"}
        </button>
      </div>
    </form>
  );
}
