import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/dialog'
import { type ReactNode } from 'react'
import { NewIncomeForm } from './new-income-form'

interface NewIncomeDialogProps {
  children: ReactNode
}

export function NewIncomeDialog({ children }: Readonly<NewIncomeDialogProps>) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        onInteractOutside={(e) => {
          e.preventDefault()
        }}
      >
        <DialogHeader>
          <DialogTitle>Create a new income</DialogTitle>
        </DialogHeader>
        <NewIncomeForm />
      </DialogContent>
    </Dialog>
  )
}
