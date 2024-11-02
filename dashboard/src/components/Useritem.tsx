'use client'

export default function Useritem(){
  return (
    <div className="flex items-center justify-between gap-2 border rounded-[8px] p-2">
      <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-[700] flex items-center justify-center">
        <p>YM</p>
      </div>
      <div>
        <p className="text-[16px] font-bold">Yahia Mati</p>
        <p className="text-[16px] text-neutral-500">yahyamati8@gmail.com</p>
      </div>
    </div>
  )
}
