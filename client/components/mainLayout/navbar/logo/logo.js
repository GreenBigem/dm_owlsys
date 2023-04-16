import Link from "next/link";

export default function Logo() {
  return (
    <>
      <div className="flex justify-evenly basis-1/12">
      {/* <div className="flex justify-center items-center w-6 h-6 bg-gray-600 test-xs text-black rounded-sm"> */}
        <Link href={'/'}>Logo</Link>
      </div>
    </>
  )
}
