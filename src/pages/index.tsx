import Head from "next/head";
import Image from "next/image";
import { Inter, Italiana } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <h1>Hello World</h1>
      <SayHello name={"Sarah"} age={25} />
      <DayFrom currentDate={new Date()} />
    </>
  );
};

export default Home;
type TProps = {
  name: string;
  age: number;
};

const SayHello: React.FC<TProps> = ({ name, age }: TProps) => {
  return (
    <h1>
      Hello {name} is {age} year olds
    </h1>
  );
};

const DayFrom = ({ currentDate }: { currentDate: Date }) => {
  currentDate.setDate(currentDate.getDate() - 6);
  console.log(currentDate);
  const yourDate = currentDate.toDateString();
  console.log(yourDate);
  // let next6Day = addingDay.toDateString();
  return <h2>{yourDate} is the 6 day until the today</h2>;
};

// const person: TProps = {
//   name: "papa",
//   age: 25,
// };
// const person2: Partial<TProps> = {
//   name: "mama",
// };
