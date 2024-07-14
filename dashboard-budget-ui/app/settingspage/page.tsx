import { Divider } from "@tremor/react";
import UserForm from "../ui/settingui/userform";

export default function Settings(){
  return (
    <main  className="px-7 pt-10 ml-72 flex flex-col gap-6 w-4/6 text-slate-100 bg-slate-900">
      <h1 className="text-2xl font-bold">Settings</h1>
      <Divider />
      <UserForm />
    </main>
  )
}