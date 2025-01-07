import { Suspense, type ReactNode } from 'react'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/dialog'

import { NewExpenseForm } from './new-expense-form'

interface NewExpenseDialogProps {
  children: ReactNode
}

export function NewExpenseDialog({ children }: Readonly<NewExpenseDialogProps>) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new expense</DialogTitle>
        </DialogHeader>
        <Suspense fallback={<div>Loading...</div>}>
          <NewExpenseForm />
        </Suspense>
      </DialogContent>
    </Dialog>
  )
}
