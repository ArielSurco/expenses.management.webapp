import { type ReactNode } from 'react'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/dialog'

import { NewIncomeForm } from './new-income-form'

interface NewIncomeDialogProps {
  children: ReactNode
}

export function NewIncomeDialog({ children }: Readonly<NewIncomeDialogProps>) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new income</DialogTitle>
        </DialogHeader>
        <NewIncomeForm />
      </DialogContent>
    </Dialog>
  )
}
