import Image from "next/image";

const Home = () => {
  return (
    <>
      <h1>Hello World</h1>
      <SayHello name={"Sarah"} />
    </>
  );
};

export default Home;

const SayHello = ({ name }: { name: string }) => {
  return <h1>Hello ${name}</h1>;
};
