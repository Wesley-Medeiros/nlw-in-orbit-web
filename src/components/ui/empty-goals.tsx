import logo from '../../assets/logo-in-orbit.svg'
import letsStart from '../../assets/lets-start-illustration.svg'
import { Plus } from 'lucide-react'
import { Button } from './button'
import { DialogTrigger } from './dialog'

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in-orbit" />
      <img src={letsStart} alt="lets-starts" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        você ainda não tem nenhum meta, que tal cadastrar uma agora mesmo?
      </p>
      <DialogTrigger asChild>
        <Button variant="primary">
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  )
}
