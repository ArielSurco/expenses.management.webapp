import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/dialog'
import { type ReactNode } from 'react'
import { NewExpenseForm } from './new-expense-form'

interface NewExpenseDialogProps {
  children: ReactNode
}

export function NewExpenseDialog({ children }: Readonly<NewExpenseDialogProps>) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        onInteractOutside={(e) => {
          e.preventDefault()
        }}
      >
        <DialogHeader>
          <DialogTitle>Create a new expense</DialogTitle>
        </DialogHeader>
        <NewExpenseForm />
      </DialogContent>
    </Dialog>
  )
}
