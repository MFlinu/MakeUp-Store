
import CartSticky from "@/components/CartSticky";

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Hello World</h1>
        <CartSticky count={22} price={22}/>
      </main>
    </>
  );
}
