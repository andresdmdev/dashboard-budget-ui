export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div className="px-7 pt-10 ml-72 mr-7 flex flex-col gap-6 w-full text-slate-100 bg-slate-900">
      {children}
    </div>
  );
}