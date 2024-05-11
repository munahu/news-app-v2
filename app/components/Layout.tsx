import Nav from "./Nav";

interface Props {
  children: JSX.Element;
  heading: string;
}

export default function Layout({ children, heading }: Props) {
  return (
    <div className="flex flex-col max-w-screen-md px-8">
      <Nav heading={heading} />
      <main>{children}</main>
    </div>
  );
}
