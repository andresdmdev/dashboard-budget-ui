"use client"

import { Button, Dialog, DialogPanel } from "@tremor/react"

export default function DialogPanelOperationRow({
  closeDialogFunction,
  isDialogOpen,
  operationData
} : {
  closeDialogFunction: () => void,
  isDialogOpen: boolean,
  operationData: any
}){

  return (
    <Dialog open={isDialogOpen} onClose={() => closeDialogFunction()} static={true}>
      <DialogPanel>
        <h3 className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">Account Created Successfully</h3>
        <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          Your account has been created successfully. You can now login to your
          account. For more information, please contact us.
        </p>
        <p>{operationData?.workspace ?? "No workspace"}</p>
        <p>{operationData?.owner ?? "No workspace"}</p>
        <p>{operationData?.status ?? "No workspace"}</p>
        <p>{operationData?.costs ?? "No workspace"}</p>
        <h3 className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">Account Created Successfully</h3>
        <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          Your account has been created successfully. You can now login to your
          account. For more information, please contact us.
        </p>
        <p>{operationData?.workspace ?? "No workspace"}</p>
        <p>{operationData?.owner ?? "No workspace"}</p>
        <p>{operationData?.status ?? "No workspace"}</p>
        <p>{operationData?.costs ?? "No workspace"}</p>
        <h3 className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">Account Created Successfully</h3>
        <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          Your account has been created successfully. You can now login to your
          account. For more information, please contact us.
        </p>
        <p>{operationData?.workspace ?? "No workspace"}</p>
        <p>{operationData?.owner ?? "No workspace"}</p>
        <p>{operationData?.status ?? "No workspace"}</p>
        <p>{operationData?.costs ?? "No workspace"}</p>
        <h3 className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">Account Created Successfully</h3>
        <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          Your account has been created successfully. You can now login to your
          account. For more information, please contact us.
        </p>
        <p>{operationData?.workspace ?? "No workspace"}</p>
        <p>{operationData?.owner ?? "No workspace"}</p>
        <p>{operationData?.status ?? "No workspace"}</p>
        <p>{operationData?.costs ?? "No workspace"}</p>
        
        <div className='flex items-center justify-end gap-3'>
          <Button className="mt-8 w-[100px]" onClick={() => closeDialogFunction()}>
            Edit!
          </Button>
          <Button className="mt-8 w-[100px]" color='red'>
            Delete!
          </Button>
        </div>
      </DialogPanel>
    </Dialog>
  )
}