import MainNavigation from "@/components/layout/mainNav";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
}
