import Card from "./Card";

const RightSection = (props) => {
 
  return (
    <>
      <div className="card-wrapper w-4/1 flex gap-10">
        {props.user.map(function (elem,idx) { 
         return <Card key={idx} number={idx} des={elem.des} btn={elem.btnText} color={elem.color} />;
        })}
      </div>
    </>
  );
};

export default RightSection;
