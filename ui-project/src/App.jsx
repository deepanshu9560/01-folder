import Section1 from "./components/section1/Section1";

const App = () => {
  let user = [
    {
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit provident aspernatur suscipit saepe. Reiciendis, rem?",
    btnText: "Satisfied",
    color: 'royalblue'
  },
   {
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit provident aspernatur suscipit saepe. Reiciendis, rem?",
    btnText: "Underserved",
    color: 'orange'
  },
    {
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit provident aspernatur suscipit saepe. Reiciendis, rem?",
    btnText: "Underbanked",
    color: 'seagreen'
  }
]
  return (
    <>
      <div className="conta px-20 w-full">
        <Section1 user={user} />
      </div>
    </>
  );
};

export default App;
