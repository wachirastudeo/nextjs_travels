import { useActionState, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"
import { actonFunction } from "@/utils/types"

const initialState = {
  message: ''
}

const FormContainer = ({ action, children }: { action: actonFunction, children: React.ReactNode }) => {
  const [state, formAction] = useActionState(action, initialState)
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({ description: state.message })
    }
  }, [state])

  console.log('hello', state)
  return (
    <form action={formAction} className="flex flex-col gap-4">
      {children}
    </form>
  )
}
export default FormContainer