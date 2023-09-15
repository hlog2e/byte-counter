"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  const [includeBlank, setIncludeBlank] = useState(0);
  const [excludeBlank, setExcludeBlank] = useState(0);
  const [byte, setByte] = useState(0);

  const getByte = function (s: string) {
    let b = 0;
    let i = 0;
    let c = 0;
    for (b = i = 0; (c = s.charCodeAt(i++)); b += c >> 11 ? 3 : c >> 7 ? 2 : 1);
    return b;
  };

  useEffect(() => {
    setIncludeBlank(text.length);
    const excludeBlankString = text.replace(/\s/g, "");
    setExcludeBlank(excludeBlankString.length);
    setByte(getByte(text));
  }, [text]);

  return (
    <div className="flex flex-col p-6 lg:p-24 h-screen">
      <div className="flex justify-between items-center md:flex-row flex-col">
        <div className="py-6 md:py-0">
          <p className="font-bold text-5xl">K-글자 수 계산기</p>
          <p className="font-light text-slate-500 mt-1">
            자소서 쓰다가 맘에 드는 글자 수 계산기가 없어 직접 만들었습니다!
          </p>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center px-4">
            <p className="font-semibold">공백 포함</p>
            <p className="text-blue-400 font-semibold text-2xl">
              {includeBlank}자
            </p>
          </div>
          <div className="flex flex-col items-center px-4">
            <p className="font-semibold">공백 제외</p>
            <p className="text-blue-400 font-semibold text-2xl">
              {excludeBlank}자
            </p>
          </div>
          <div className="flex flex-col items-center px-4">
            <p className="font-semibold">Byte (UTF-8)</p>
            <p className="text-blue-400 font-semibold text-2xl">{byte}byte</p>
          </div>
        </div>
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="여기에 텍스트를 입력하세요!"
        className="mt-6 w-full h-full border-none resize-none outline-none bg-slate-100 rounded-xl p-4"
      />
      <div className=" flex justify-end items-center">
        <div className="flex flex-col items-end mt-3">
          <p className=" font-semibold text-slate-400">
            Develped By HongRok K.
          </p>
          <Link href="https://github.com/hlog2e" className="mt-1">
            <Image
              src="/github-mark.svg"
              alt="github mark"
              width={28}
              height={28}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
