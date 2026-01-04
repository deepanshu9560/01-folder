import LeftSection from "./LeftSection"
import RightSection from "./RightSection"

const Section1 = (props) => {  
  return (
    <>
      <div className="flex items-center justify-between py-6 bg-white w-full">
        <button className="bg-zinc-950 text-xl uppercase text-white rounded-full py-[10px] px-[20px]">Target Audience</button>
        <button className="text-xl uppercase tracking-wide">digital Banking Platform</button>
      </div>
      <div className="bottomSec mt-20 flex justify-between gap-20">
        <LeftSection />
        <RightSection user={props.user} />
      </div>
    </>
  )
}

export default Section1
