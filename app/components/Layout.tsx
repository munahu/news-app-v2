import Nav from "./Nav";

interface Props {
  children: JSX.Element;
  heading: string;
}

export default function Layout({ children, heading }: Props) {
  return (
    <div className="max-w-screen-2xl px-4 md:px-12">
      <Nav heading={heading} />
      <main className="mt-4">{children}</main>
    </div>
  );
}
